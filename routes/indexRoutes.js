const router = require('express').Router()
const { ensureAuth, ensureGuest } = require('../middlewares/auth')

router.get('/', ensureGuest ,(req, res) => {
    res.render('index');
  })

router.get("/log",ensureAuth, async(req,res)=>{
    res.render('index',{userinfo:req.user});
})

module.exports = router;