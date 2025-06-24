import prisma from "../prisma";
import {
  generateHashedPassword,
  verifyPassword,
} from "../utils/generate-password";
import { putUserAccessToken } from "../helpers/jwt";
import { ResponseError } from "../helpers/error";
import { verify } from "jsonwebtoken";
import { JWT_REFRESH_SECRET } from "../config";

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

  async refreshToken(refreshToken: string) {
    try {
      const decoded = verify(refreshToken, JWT_REFRESH_SECRET) as {
        email: string;
      };
      if (!decoded?.email) {
        throw new ResponseError(401, "Invalid refresh token");
      }
      // Find user by email
      const user = await prisma.user.findUnique({
        where: { email: decoded.email },
      });
      if (!user) {
        throw new ResponseError(401, "User not found");
      }
      // Generate new tokens
      const tokens = await putUserAccessToken(user, user.email);
      return tokens;
    } catch (error) {
      throw new ResponseError(401, "Invalid or expired refresh token");
    }
  }
}

export default new AuthService();
