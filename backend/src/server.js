import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

import app from "./app.js";

app.listen(process.env.PORT, () => {
  // console.log("DB USER:", process.env.DB_USER);
  console.log(`Server running on port ${process.env.PORT}`);
});
