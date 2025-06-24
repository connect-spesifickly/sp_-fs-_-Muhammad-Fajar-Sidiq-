import prisma from "../prisma";
import {
  generateHashedPassword,
  verifyPassword,
} from "../utils/generate-password";
import { putUserAccessToken } from "../helpers/jwt";
import { ResponseError } from "../helpers/error";

class AuthService {
  async register(data: { email: string; password: string }) {
    const { email, password } = data;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ResponseError(400, "User with this email already exists");
    }

    const userPassword = await generateHashedPassword(password);
    const user = await prisma.user.create({
      data: {
        email,
        password: userPassword,
      },
    });

    return { id: user.id, email: user.email };
  }

  async login(data: { email: string; password: string }) {
    const { email, password } = data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new ResponseError(401, "Invalid email or password");
    }

    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      throw new ResponseError(401, "Invalid email or password");
    }

    const tokens = await putUserAccessToken(user, email);

    return {
      user: { id: user.id, email: user.email },
      ...tokens,
    };
  }
}

export default new AuthService();
