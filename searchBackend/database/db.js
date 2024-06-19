const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.log(`Error while connecting database ${error}`)
    }
}

module.exports = ConnectDB;