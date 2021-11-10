const mongoose = require('mongoose');
const connectDB = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true},(err) => {
            if (err) return console.log(`index:mongoose.connect: ${err}`);
            else {
                console.log('DB Connected Successfully');
            }
    })
}

module.exports = connectDB;