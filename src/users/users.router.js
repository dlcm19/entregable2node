const router = require('express').Router();

const AllServices = require('./users.services')



router.get('/users', AllServices.getUsers)
router.post('/users', AllServices.createNewUsers)

router.get('/users/:id', AllServices.getId)

module.exports = router