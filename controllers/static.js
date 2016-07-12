var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/../assets'));
router.use('/layouts', express.static(__dirname + '/../layouts'));

router.get('/', function (req, res) {
	res.render('app.html');
});



module.exports = router;