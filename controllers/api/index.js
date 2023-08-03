const router = require('express').Router()
const childRoutes = require('./childAPI')
const parentRoutes = require('./parentAPI')
const scheduleRoutes = require('./scheduleRoutes')


router.use('/child', childRoutes)
router.use('/parent', parentRoutes)
router.use ('/schedule', scheduleRoutes)
module.exports =  router