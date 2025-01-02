import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('
        console.log("Connected to MongoDB")

    }catch (err) {
        console.log(err)
    }
}

export default connectDB
