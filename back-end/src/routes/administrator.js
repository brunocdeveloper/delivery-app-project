const router = require('express').Router();
const { validateJWT } = require('../middlewares/validateJWT');
const usersCtrl = require('../controllers/Users');

router.get('/users', usersCtrl.getUsers);

router.delete('/users', usersCtrl.deleteUser);

module.exports = router;