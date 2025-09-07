import mongoose from 'mongoose';

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL); // ✅ correct function
        console.log("DB Connected");
    } catch (error) {
        console.log("DB Error", error.message);
    }
};

export default connectdb;
