const { Router } = require('express')
const router = Router()

router.get('/set', (req, res) => {
  req.session.test = 'test-'+Math.random();
  res.send('session is set to '+req.session.test)
})

router.get('/get', (req, res) => {
  res.send('session is '+req.session.test)
})

module.exports = router;