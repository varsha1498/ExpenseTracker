const Transaction  = require('../models/Transaction');

//GEt all transactions
//Route -  /api/v1/transactions


exports.getTransactions = async (req, res, next) => {
    try{
        const transactions = await Transaction.find();

        return res.status(200).json({
            message: "Successful",
            data: transactions
        })
    }
    catch(err){
        return res.status(500).json({
            error: "error found"
        })
    }
}

//Add transactions
//Route -  /api/v1/transactions


exports.addTransactions = async (req, res, next) => {
  try{
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(200).json({
        sucess: true,
        data: transaction
    })
  }
  catch(err){
      return res.status(500).json({
          error: "Failed"
      })
  }
}


//Delete a transaction
//Route -  /api/v1/transactions


exports.deleteTransactions = async (req, res, next) => {
    try{
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction){
            return res.status(404).json({
                sucess: false,
                error: "No transaction found"
            });
        }

        await transaction.remove();
        return res.status(200).json({
            sucess: true,
            data: []
        });
    }
    catch(err){
        return res.status(500).json({
            error: "something went wrong"
        });
    }
}