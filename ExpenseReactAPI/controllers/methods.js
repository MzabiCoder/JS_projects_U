const Transaction = require('../models/Transaction')



// GET all transactions

exports.getTransaction = async (req, res, next) => {
   // res.send('GET Transaction...')
    
     try {
         const transactions = await Transaction.find().sort({date:-1})
         return res.status(200).json({
             success:true,
             count: transactions.length,
             data:transactions
         })
         
         
  
     } catch (error) {
         return res.status(500).json({
             success: false,
             error:'Server Error'
        })
         
     }
    
}
// Add transaction
exports.addTransaction = async (req, res, next) => {
   
    try {
        const {text,amount}=req.body
        let newTran = await new Transaction({
            text,
            amount,
        })

        await newTran.save()
     
         res.status(201).json({
            success: true,
            data:newTran
        })   
       
   } catch (error) {
  
        if (error.name === 'ValidatorError') {
            const messages = Object.values(error.erros).map(val=>val.message)
            
            return res.status(400).json({
                success: false,
                error: messages
        })
        } else {
            return res.status(500).json({
                success: false,
                error:'Server Error'
           })
        }
        
   }

}
//delete transaction
exports.delTransaction = async (req, res, next) => {
   
    try {
        const transaction = await Transaction.findById(req.params.id)
        if (!transaction) {
            return res.status(404).json({
                success:false,
               error:'Trans not found !!'
           })
       }
       
        await transaction.remove()

        return res.status(200).json({
            success: true,
            data:{}
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            error:'Server Error'
       })
    }
}