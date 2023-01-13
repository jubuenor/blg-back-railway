const mongoose = require("mongoose");

const host = "mongo:XeWedDKN8GwS1DJB8I8Z@containers-us-west-163.railway.app";
const port = "5918";
const db = "crud";

exports.mongoConnect =()=>{
    const mongoStringConnection = `mongodb://mongo:XeWedDKN8GwS1DJB8I8Z@containers-us-west-163.railway.app:5918`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error",console.error.bind(console,"Mongodb connection error"));
}

