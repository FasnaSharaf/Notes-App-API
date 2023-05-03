//code to connect express application to mongodb
const mongoose = require('mongoose');
const uri = "mongodb://root:example123@mongo:27017/mydatabase";
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
