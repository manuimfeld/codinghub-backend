import { Request, Response } from 'express';
import { User } from '../models/user';
import { encrypt, verified } from '../helpers/bcrypt.handle';
import { generateToken } from '../helpers/jwt.handle';
import { Profile } from '../models/profile';

const authController = {
  async register(req: Request, res: Response) {
    try {
      //Busco algún usuario que exista con el mismo username o email que llega en el req.body en MongoDB
      const existingUser = await User.findOne({
        $or: [{ username: req.body.username }, { email: req.body.email }],
      });

      if (existingUser) {
        //Si el nombre de usuario ya existe, devuelve un error
        if (existingUser.username === req.body.username) {
          return res
            .status(400)
            .json({ username: 'El nombre de usuario ya está registrado' });
        }
        //Si el correo electronico ya existe, devuelve un error
        else if (existingUser.email === req.body.email) {
          return res
            .status(400)
            .json({ email: 'El correo electrónico ya está registrado' });
        }

        //Si pasa los anteriores checks, se registra el usuario
      } else {
        const passHash = await encrypt(req.body.password);
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: passHash,
        });

        const savedUser = await newUser.save();

        const newProfile = new Profile({
          user: savedUser._id,
        });

        await newProfile.save();

        savedUser.profile = newProfile._id;
        await savedUser.save();

        return res
          .status(200)
          .json({ message: 'Usuario registrado correctamente' });
      }
    } catch (error) {
      console.log(error);
      //Si algo sale mal en la petición, devuelve un error
      return res.status(500).json({ error: 'Error de servidor' });
    }
  },

  async login(req: Request, res: Response) {
    try {
      // Buscar el usuario en la base de datos utilizando el nombre de usuario o correo electrónico proporcionado
      const user = await User.findOne({
        $or: [{ username: req.body.username }, { email: req.body.email }],
      });

      // Si no se encuentra un usuario, devolver un error de autenticación
      if (!user) {
        return res
          .status(401)
          .json({ error: 'Nombre de usuario o correo electrónico incorrecto' });
      }

      try {
        /// Verificar la contraseña del usuario
        const passCheck = await verified(req.body.password, user.password); // Comparo la contraseña plana, con la encriptada en la BD

        // Si las contraseñas no coinciden, devuelvo un error de autenticación
        if (passCheck === false) {
          return res.status(401).json({ error: 'Contraseña incorrecta' });
        }
      } catch (error) {
        console.error('Error al comparar las contraseñas:', error);
        return res.status(500).json({ error: 'Error de servidor' });
      }

      // Si las credenciales son válidas, iniciar sesión correctamente
      const token = await generateToken(user.username, user._id);
      const data = {
        token,
        user: user,
        message: 'Sesión iniciada correctamente',
      };
      res.json(data);
    } catch (error) {
      //Si algo sale mal en la petición, devuelve un error
      return res.status(500).json({ error: 'Error de servidor' });
    }
  },
};

export default authController;
