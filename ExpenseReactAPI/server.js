const express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const transaction = require('./routes/transaction')
const connectDB = require('./config/db')
const path=require('path')

connectDB()
app.use(express.json())

dotenv.config({path:'./config/config.env'})

app.use('/api/v1/transaction', transaction)

app.use(morgan('dev')) 


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('expensereact/build'))
    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'expensereact','build','index.html')))
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is up and running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
    
})