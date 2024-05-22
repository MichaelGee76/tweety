import express from "express";
import { doJwtAuth } from "../middlewares/authentication.js";
import { commentController } from "./../controllers/commentController.js";

export const commentRoutes = express.Router();
// .get("/", doJwtAuth, commentController)
// .post("/", doJwtAuth, commentController)
// .patch("/", doJwtAuth, commentController)
// .delete("/", doJwtAuth, commentController);
