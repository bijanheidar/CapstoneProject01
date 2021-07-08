const mongoose = require("mongoose");
// const uri = process.env.MONGODB_URI || "mongodb://localhost/myFirstDatabase";
const uri = process.env.MONGODB_URI
// const uri = process.env.MONGODB_URI || "mongodb+srv://Bijan:12345@cluster0.5iynb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const uri = "mongodb://localhost/myProjectDb2"

const connectDB = async () => {
    try {
        // mongodb connection string
        const con = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (err) {
        console.log("Connection error", err);
        // 1: true
        process.exit(1);
    }
}
module.exports = connectDB