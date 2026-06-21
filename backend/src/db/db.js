const mongoose = require("mongoose");

async function connectDb(){

    await mongoose.connect(process.env.Mongo_uri)

    console.log("connected to DB");
    
}

module.exports=connectDb