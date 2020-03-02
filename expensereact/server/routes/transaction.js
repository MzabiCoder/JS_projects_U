const express = require('express')
const router = express.Router()
const {getTransaction,addTransaction,delTransaction} =require('../controllers/methods')


router.route('/')
    .get(getTransaction)
    .post(addTransaction)
   
router.route('/:id')
 .delete(delTransaction)   


module.exports=router