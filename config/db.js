import mongoose from "mongoose";
import colors from "colors";
const connectDB= async()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Ds-Mart Database ${conn.connection.host}`.bgMagenta.white)
        
    } catch (error) {
        console.log(`Error in MOngoDB ${error}`)
        
    }
}

export default connectDB;