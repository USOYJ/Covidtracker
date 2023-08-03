const router = require('express').Router()
const mainRoutes = require('./mainroutes')
// const apiRoutes = require('./api')


// router.use('/api',apiRoutes)
router.use('/', mainRoutes)
module.exports = router