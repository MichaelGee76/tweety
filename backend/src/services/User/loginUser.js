import { User } from "../../models/user.js";
import { createToken } from "../../utils/createToken.js";
import { hash } from "../../utils/hash.js";

export const loginUser = async (userInfos) => {
    const user = await User.findOne(userInfos.email);
    if (!user) throw new Error("Invalid login");

    const passwordHash = hash(`${password}${user.pwSalt}`);
    if (passwordHash !== user.passwordHash) throw new Error("Invalid login");

    const accessToken = createToken(user, "access");

    return { token: accessToken };
};
