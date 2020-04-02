const Store = require('../models/Store');

// @desc Get all stores
// @route GET /api/v1/stores
// @access public

exports.getStores = async(req, res, next) => {
  //res.send('Hello');
  try{
    const stores = await Store.find();

    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores
    });

  }catch (err){
    console.error(err);
    res.status(500).json({error:'Server Error'});
  }
};


// @desc create a store
// @route POST /api/v1/stores
// @access public

exports.addStores = async(req, res, next) => {

  try{
  //  console.log(req.body);
  const store = await Store.create(req.body);

  return res.status(200).json({
    success: true,
    data: store
  });
  }catch (err){
    console.error(err);
    if(err.code === 11000){
      return res.status(400).json({error: 'This Store Id already exists'});
    }
    res.status(500).json({error:'Server Error'});
  }
};

/*
// @desc delete a store
// @route POST /api/v1/stores
// @access public

exports.deleteStores = async(req, res, next) => {

  try{
  //  console.log(req.body);
  const store = await Store.deleteOne(req.body);

  return res.status(200).json({
    success: true,
    data: store
  });
  }catch (err){
    console.error(err);
    if(err.code === 11000){
      return res.status(400).json({error: 'This Store Id already exists'});
    }
    res.status(500).json({error:'Server Error'});
  }
};
*/
