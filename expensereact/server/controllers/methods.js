// GET all transactions

exports.getTransaction = (req, res, next) => {
    res.send('GET Transaction...')
}
// Add transaction
exports.addTransaction = (req, res, next) => {
    res.send('ADD Transaction...')
}
//delete transaction
exports.delTransaction = (req, res, next) => {
    res.send('DEL Transaction...')
}