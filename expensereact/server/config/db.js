const mongoose = require('mongoose')
const config = require('config')

 const db=config.get('mongoURI')
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const connectDB = async () => {
    try {
         const conn=await mongoose.connect(db, {
        useNewUrlParser: true

    })
       console.log(`MOngoDB connected on port ${conn.connection.host}`.cyan.underline.bold)
        //console.log('MongoConnected ');
         
    } catch (err) {
        console.log(err.message)
        // Exit Process with failue
        process.exit(1)
    }
}

module.exports = connectDB



