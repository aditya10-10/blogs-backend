const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async () => {

    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
}


module.exports = connectDB;
