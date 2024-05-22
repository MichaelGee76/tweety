export const userView = (userInfos) => {
    return {
        _id: userInfos._id,
        firstName: userInfos.firstName,
        lastName: userInfos.lastName,
        email: userInfos.email,
        userName: userInfos.userName,
        profilePicture: userInfos.profilePicture,
        followed: userInfos.followed,
        bio: userInfos.bio,
    };
};
