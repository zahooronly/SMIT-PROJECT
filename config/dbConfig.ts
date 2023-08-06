import mongoose from "mongoose";

async function connected(){
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection=mongoose.connection;
        connection.on("connected",()=>{
            console.log("Connected to MongoDB Atlas Database Successfully");
        })
        connection.on("error",(error)=>{
            console.log("MongoDB Atlas Connection Failed");
            console.log("\nError: ",error);
            process.exit()
        })
    } catch (error) {
        console.log("Something went wrong");
        console.log("\nError: ",error);
    }
}
export {connected}