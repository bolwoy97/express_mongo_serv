const { Router } = require('express')
const router = Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/',(req,res,next)=>{
    res.render('index',{title:"Hello, world!"});
});

router.get('/test',(req,res,next)=>{
    res.send('test22');
});

router.get('/users/:userId/books/:bookId', function (req, res) {
  var txt =` userId =: ${req.params.userId} <br>`+
  `  bookId =: ${req.params.bookId}`
  res.send(txt)
  //res.send(req.params);
})


module.exports = router;