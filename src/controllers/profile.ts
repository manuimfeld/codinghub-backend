import { UserInfo } from '../types';

const profileController = {
  async editProfile(req: UserInfo, res: Response) {
    const { firstname, lastname, genre, age, country, cv_url, technologies } =
      req.body;
  },
};

export { profileController };
