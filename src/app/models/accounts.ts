import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema({
    Email: {
        type: String,
    },
    Fullname: {
        type: String,
    },
    Username: {
        type: String,
    },
    Pfp: {
        type:String
    },
    isBanned: {
        type: Boolean,
    },
    Password: {
        type: String,
    },
    isPrivate: {
        type: Boolean,
    },
    Uid: {
        type: String,
    },
});

const accounts = mongoose.models.accounts || mongoose.model("accounts", accountSchema);

export default accounts;
