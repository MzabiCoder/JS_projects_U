const express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const transaction = require('./routes/transaction')
const connectDB = require('./config/db')

connectDB()
app.use(express.json())

dotenv.config({path:'./config/config.env'})

app.use('/api/v1/transaction',transaction)



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is up and running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
    
})