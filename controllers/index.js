const router = require('express').Router();
const apiRoutes = require('./api');
const htmlroutes = require('./home');

router.use('/', htmlroutes); //
router.use('/api', apiRoutes);

<<<<<<< HEAD
//router.use((req, res) => {
//  res.send('<h1>Wrong Route!</h1>');
//});
=======
// router.use((req, res) => {
//   res.send('<h1>Wrong Route!</h1>');
// });
>>>>>>> main

module.exports = router;
