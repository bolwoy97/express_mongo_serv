
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connection.on('error',(err)=>
{
    console.error("Database Connection Error: " + err);
    process.exit(2);
});

mongoose.connection.on('connected',()=>
{
    console.log("Succesfully connected to MongoDB Database");
});

connect = async function () {
    await mongoose.connect(
        process.env.MONGO_CONNECTION_STR,
      {
        useNewUrlParser: true,
        useFindAndModify: false
      }
    )
}

module.exports.connect = connect
