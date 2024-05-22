import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connect2DB } from "./src/models/index.js";

dotenv.config();

const PORT = process.env.PORT || 3011;

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// app.use("/api/v1/user");
// app.use("/api/v1/tweets");
// app.use("/api/v1/comments");

try {
    await connect2DB();
    app.listen(PORT, () => {
        console.log("Server listening at port: ", PORT);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}
