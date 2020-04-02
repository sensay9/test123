const express = require('express');
const { getStores,addStores } = require('../controllers/stores');


const router = express.Router();
//router.get('/', (req,res) => {res.send('Hello');});
router.route('/').get(getStores).post(addStores);

module.exports = router;
