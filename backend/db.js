const mongoose = require("mongoose");;

const mongodb = async () => {
    try {
        await mongoose.connect("mongodb+srv://saurabhsatre2001:JI84MbTxjnZ6VvdK@cluster0.9vjl5gk.mongodb.net/marketplace?retryWrites=true&w=majority&appName=Cluster");
        console.log('Connected!');
        
    } catch (error) { 
        console.log('error: ', error);
    }
};
module.exports = mongodb;
