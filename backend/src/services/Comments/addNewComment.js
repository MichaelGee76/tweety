export const addNewComment = async (tweetId, commentInfo) => {
    const newComment = Comment.create({ ...commentInfo, tweetId: tweetId });
    if (!newComment) throw new Error("Could not post comment");
    return newComment;
};
