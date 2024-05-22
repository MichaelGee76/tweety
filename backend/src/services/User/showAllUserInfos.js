export const showAllUserInfos = async () => {
    const allUserInfos = await User.find({}).select("userName");
    if (!allUserInfos) throw new Error("Could not load user infos");

    return allUserInfos;
};
