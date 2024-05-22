import { User } from "../../models/user.js";

export const deleteUser = async (userId) => {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) throw new Error("Can not delete user");
    return deletedUser;
};
