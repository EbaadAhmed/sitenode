var express = require('express'),
    googleTrends = require('google-trends-api');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    console.log('[Requested] ', new Date());
    var keywords = req.query.keyword;
    googleTrends.trendData({ keywords: keywords, timePeriod: { type: 'day', value: 1 } })
        .then(function (results) {
            res.send(valuecheck);
        }).catch(function (err) {
            res.status(500).send(err);
        });
});
var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("App is up on http://localhost:" + 3000);
});