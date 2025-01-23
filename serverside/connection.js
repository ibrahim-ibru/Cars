import mongoose from "mongoose"

export async function Connection() {
    const db=mongoose.connect(process.env.DB_URL+process.env.DB_NAME)
    console.log("Database Connected Successfully");
    return db
}