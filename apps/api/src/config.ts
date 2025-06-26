import { CorsOptions } from "cors";
import { config } from "dotenv";
import { resolve } from "path";

export const NODE_ENV = process.env.NODE_ENV || "development";

const envFile = NODE_ENV === "development" ? ".env.local" : ".env";

config({ path: resolve(__dirname, `../${envFile}`) });
config({ path: resolve(__dirname, `../${envFile}.local`), override: true });

export const corsOptions: CorsOptions = {
  origin: ["https://sp-fs-muhammad-fajar-sidiq-web-gn9n.vercel.app", "http://localhost:3000"],
  credentials: true,
};

// Load all environment variables from .env file

export const PORT = process.env.PORT || 8000;
export const DATABASE_URL = process.env.DATABASE_URL || "";

// jwt config
export const JWT_ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET || "";
export const JWT_REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET || "";
