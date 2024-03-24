const mongoose = require('mongoose');
const DB_URL = process.env.mongo_URL;

mongoose.connect(DB_URL).then(()=>{
    console.log(`Mongodb is connected successfully!`);
}).catch((err)=>{
    console.log(`Error while connecting with Mongo DB ${err}`);
})