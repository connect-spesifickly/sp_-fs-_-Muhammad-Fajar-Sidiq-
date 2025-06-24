import { sign } from 'jsonwebtoken';

import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from '../config';
import {
  UserToken,
} from '../interfaces/middleware.interface';
import { UserLogin } from '../interfaces/user.interface';
import { getUserByEmail } from './user.prisma';
import { ResponseError } from './error';

export const putUserAccessToken = async (user?: UserLogin, email?: string) => {
  //kalo nda` lewat login bisa lewat yang lain, untuk generate token, dari email misalnya
  const userData = user || (await getUserByEmail(email!));
  if (userData) {
    delete userData.password;
  }
  const dataBundleUser = { ...userData, role: 'USER' } as UserToken;
  if (!dataBundleUser) throw new ResponseError(401, 'unauthorize email');

  const accessToken = sign(dataBundleUser, JWT_ACCESS_SECRET, {
    expiresIn: '3h',
  });

  const refreshToken = sign(
    { email: dataBundleUser.email },
    JWT_REFRESH_SECRET,
    {
      expiresIn: '6h',
    },
  );

  return {
    accessToken,
    refreshToken,
  };
};
