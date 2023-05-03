//code to connect express application to mongodb
const mongoose = require('mongoose');
const uri = "mongodb://root:example@a7afc2fc90a1:27018/";
const connectDB = async () => {
    try {
        await mongoose.connect(uri , 
        {useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log("MongoDB Connected")
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    } 
}

module.exports = connectDB;
