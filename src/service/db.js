const mongoose = require("mongoose");

const MONGODB_URI_DEV = process.env.MONGODB_URI_DEV;

mongoose.set("strictQuery", false); 

module.exports = connectDb = async () => {
    mongoose.connect(MONGODB_URI_DEV, {useNewUrlParser: true})
        .then(
            () => console.log('database successfully connected '))
        .catch(
            (err) => {
                console.log("err in database connectivity",err);
                process.exit(1);
            }
    );
}