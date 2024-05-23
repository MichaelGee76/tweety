import { Tweet } from "../../models/tweet.js";
import { Comment } from "./../../models/comment.js";

export const showOneTweet = async (tweetId) => {
    const tweet = await Tweet.findById(tweetId);

    const comments = await Comment.find({ tweetId: tweetId });
    if (comments.length !== 0) {
        const commentNumber = comments.length + 1;
    } else {
        const commentNumber = 0;
    }

    return { ...tweet.toObject(), comments: commentNumber };
};
