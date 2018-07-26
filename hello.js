var express = require('express');
var router = express.Router();



router.get('/', function (req, res) {
    res.send('Hello. Your IP: ' + req.connection.remoteAddress.toString().split(':')[3]);

    // console.log(req.connection.remoteAddress)
    // console.log(req.connection.remotePort)
    // console.log(req.connection.localAddress)
    // console.log(req.connection.localPort)

    // var str = "::ffff:10.218.145.214"

    // var str2 = str.split(':')
    // var str3 = str2[3]

    // console.log(str)
    // console.log(str2)
    // console.log(str3)

});
router.get('/hello', function (req, res) {
    res.send('GET hello.');
});
router.post('/', function (req, res) {
    res.send('POST route on hello.');
});
router.post('/hello', function (req, res) {
    res.send('POST hello.');
});

//export this router to use in our index.js
module.exports = router;