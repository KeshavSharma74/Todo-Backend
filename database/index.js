const mongoose=require("mongoose");
require("dotenv").config();

const databaseConnect= () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then( ()=> console.log("Database Connected Succesfully..!!!"))
    .catch( (error)=> console.log(error) );
}

module.exports = { databaseConnect };