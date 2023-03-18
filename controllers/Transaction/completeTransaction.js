const Transaction = require('../../model/transactionModel')

const completeTransaction = async (req, res) => {
  const condition = { transactionUuid: req.body.transactionUuid }
  const isCompleted = {
    wentThrough: true,
    userCompleted: true,
  }

  // double check transaction data? qrLink belongs to seller, 

  try {
    const transaction = await Transaction.updateData('transactions', isCompleted, condition)
    return res.status(200).json(transaction)
  } catch (error) {
    console.log('postQrLink controller', error)
    const message = 'An error occurred while processing your request'
    return res.status(500).json({ error: message })
  }
}

module.exports = completeTransaction
