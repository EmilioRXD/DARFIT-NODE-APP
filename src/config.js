import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://EmiliorXD:Silicon$325@cluster0.lx0s4kn.mongodb.net/?retryWrites=true&w=majority";