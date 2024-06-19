const express = require('express');
const { serachController } = require('../Controllers/serachController');
const router = express.Router();


router.get('/search/:searchKeyword',serachController)

module.exports=router;