const mongoose = require('mongoose'); // require to connect monogo db

const coonectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log('mongoDb connected to host '+con.connection.host);
    })
};


module.exports = coonectDatabase;