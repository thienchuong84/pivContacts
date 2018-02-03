const express = require('express');
const router = express.Router();

// router.use('/', (req, res, next) => {
//   res.send('contacts page');
// });

const contactController = require('../controllers/contactController');

router.use('/', contactController.getAll);

module.exports = router;