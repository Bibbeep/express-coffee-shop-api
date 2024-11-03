const router = require('express').Router();
const userController = require('../controllers/user');

router.post('/register', userController.create);

// router.use('/login');

// router.use('/login/google');

module.exports = router;