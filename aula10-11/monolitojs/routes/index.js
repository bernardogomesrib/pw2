var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = { 
    title: 'Express',
    aluno:"Roberta do campus jaboatão",
    people:[{nome:"vadia",job:"puta"},{nome:"prostituta",job:"arroz doce"}]
  }
  res.render('index', data);
});

module.exports = router;
