import { Tweet } from "../../models/tweet.js";

export const deleteTweet = async (tweetId, userId) => {
    const deletedTweet = await Tweet.findById(tweetId);
    if (deletedTweet.userId !== userId) throw new Error("You are not allowed to delete tweet.");
    await Tweet.remove(tweetId);
    return deletedTweet;
};
