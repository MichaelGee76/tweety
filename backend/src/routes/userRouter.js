import express from "express";
import { doJwtAuth } from "../middlewares/authentication.js";
import { userController } from "../controllers/userController.js";

export const userRoutes = express
    .Router()
    .get("/:userId", doJwtAuth, userController.getUserInfosCtrl)
    .get("/", doJwtAuth, userController.getAllUserInfosCtrl)
    .post("/register", userController.postRegisterUserCtrl)
    .post("/login", userController.postLoginUserCtrl)
    .post("/verifyemail", doJwtAuth, userController.verifyEmailCtrl)
    .patch("/", doJwtAuth, userController.patchUserInfoCtrl)
    .delete("/", doJwtAuth, userController.deleteUserInfoCtrl);
// .post("/refresh-token", validateRefreshTokenInCookieSession, userController)
