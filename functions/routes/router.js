const Router = require('express');
const router = new Router();
const addRouter = require('./addRouter');

router.use('/weather', addRouter);

module.exports = router;