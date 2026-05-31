import mongoose from "mongoose";
import 'dotenv/config'

async function ConnectDB() {
    try {
            await mongoose.connect(process.env.DB_STRING)
            console.log("Database Connected");
    } catch(err) {
            console.log(err);

    }
  
}

export default ConnectDB