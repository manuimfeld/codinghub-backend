import { hash, compare } from "bcrypt";

//Encripto la contraseña plana y la retorno encriptada
const encrypt = async (passPlain: string) => {
  const passwordHash = await hash(passPlain, 8);
  return passwordHash;
};

//Verifico si la contraseña plana, es igual a la encriptada
const verified = async (passPlain: string, passHash: string) => {
  const isCorrect = await compare(passPlain, passHash);
  return isCorrect;
};

export { encrypt, verified };
