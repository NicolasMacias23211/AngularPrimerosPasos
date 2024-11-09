const mongoose = require('mongoose');
require('dotenv').config({path:'variable.env'});

const ConectarDB = async()=>{

    try {
        await mongoose.connect(process.env.DB_Mongo, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            //useFindAndModify: false,
        });
        console.log('BD conectada');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = ConectarDB;