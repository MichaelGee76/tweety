import { deleteUser } from "./User/deleteUser.js";
import { loginUser } from "./User/loginUser.js";
import { registerUser } from "./User/registerUser.js";
import { showAllUserInfos } from "./User/showAllUserInfos.js";
import { showUserInfo } from "./User/showUserInfo.js";
import { updateUserInfo } from "./User/updateUserInfo.js";
import { verifyUserEmail } from "./User/verifyUserEmail.js";

export const UserServices = { loginUser, registerUser, showAllUserInfos, showUserInfo, updateUserInfo, verifyUserEmail, deleteUser };

export const TweetServices = {};
export const CommentServices = {};
