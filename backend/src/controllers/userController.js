import asyncHandler from "express-async-handler";
import { UserServices } from "./../services/index.js";

const getUserInfosCtrl = asyncHandler(async (req, res) => {
    const userId = req.authenticatedUserId;
    const result = await UserServices.showUserInfo(userId);
    res.status(200).json({ result });
});

const getAllUserInfosCtrl = asyncHandler(async (_, res) => {
    const result = await UserServices.showAllUserInfos();
    res.status(200).json({ result });
});

const postRegisterUserCtrl = asyncHandler(async (req, res) => {
    const newUserInfos = req.body;
    const result = await UserServices.registerUser(newUserInfos);
    res.status(200).json({ result });
});

const postLoginUserCtrl = asyncHandler(async (req, res) => {
    const newUserInfos = req.body;
    const result = await UserServices.loginUser(newUserInfos);
    res.status(200).json({ result });
});

const patchUserInfoCtrl = asyncHandler(async (req, res) => {
    const userId = req.authenticatedUserId;
    const updateInfo = req.body;
    const result = await UserServices.updateUserInfo(userId, updateInfo);
    res.status(200).json({ result });
});

const deleteUserInfoCtrl = asyncHandler(async (req, res) => {
    const userId = req.authenticatedUserId;
    const result = await UserServices.deleteUser(userId);
    res.status(200).json({ result });
});

const verifyEmailCtrl = asyncHandler(async (req, res) => {
    const userId = req.authenticatedUserId;
    const sixDigitCode = req.body.sixDigitCode;
    const result = await UserServices.verifyUserEmail(userId, sixDigitCode);
    res.status(200).json({ result });
});

// ! ###################! auslagern der res.status(200) + userId

export const userController = {
    getUserInfosCtrl,
    getAllUserInfosCtrl,
    postRegisterUserCtrl,
    postLoginUserCtrl,
    patchUserInfoCtrl,
    deleteUserInfoCtrl,
    verifyEmailCtrl,
};
