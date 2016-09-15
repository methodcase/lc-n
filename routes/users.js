var express = require('express');
var router = express.Router();
var langcodes = require('../languages.js');

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  
  const LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');

  const language_translator = new LanguageTranslatorV2({
    username: '68811a4f-c475-48b8-884e-a0f735884a92',
    password: 'hCg8pOKNya4n'
  });

  language_translator.identify({
    text: req.body.lang },
    function (err, language) {
      if (err)
        console.log('error:', err);
      else
        console.log(langcodes[language.languages[0].language]);
        res.send(JSON.stringify(langcodes[language.languages[0].language]));
  });

  //res.send('respond with a resource');
});

module.exports = router;
