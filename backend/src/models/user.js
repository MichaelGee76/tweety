import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        pwHash: { type: String, required: true, trim: true },
        pwSalt: { type: String, required: true, trim: true },
        isEmailVerified: { type: Boolean, required: true },
        sixDigitCode: { type: String, required: true },
        userName: { type: String, required: true, trim: true },
        profilePicture: { type: String, default: "./data/images/default_profile_picture-removebg-preview.png" },
        followed: [{ userId: { type: mongoose.Types.ObjectId, required: true }, userName: { type: String, trim: true, required: true } }],
    },
    { collection: "users", timestamps: true }
);

export const User = mongoose.model("User", userSchema);
