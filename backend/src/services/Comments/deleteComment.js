export const deleteComment = async (commentId, userId) => {
    const deletedComment = await Comment.findById(commentId);
    if (deletedComment.userId !== userId) throw new Error("You are not allowed to delete comment.");
    await Comment.remove(commentId);
    return deletedComment;
};
