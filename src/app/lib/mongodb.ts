import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://marcussalopaso1:zedmain1525@cluster0.m8fd2iw.mongodb.net/Mingle')
        console.log("Connected to MongoDB")

    }catch (err) {
        console.log(err)
    }
}

export default connectDB