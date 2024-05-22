import express from "express";
import { tweetController } from "../controllers/tweetController.js";
import { doJwtAuth } from "../middlewares/authentication.js";

export const tweetRoutes = express.Router();
// .get("/", doJwtAuth, tweetController)
// .post("/", doJwtAuth, tweetController)
// .patch("/", doJwtAuth, tweetController)
// .delete("/", doJwtAuth, tweetController);
