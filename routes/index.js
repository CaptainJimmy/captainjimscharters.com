var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile("./blog/db.json", "utf8", (error, data) => {
        var db = JSON.parse(data)
        var dbSlice = db.models.Post.slice(-1)[0];
        if (dbSlice.source.split('/')[0] === "_discarded") {
            dbSlice = db.models.Post.slice(-2)[0];
        }
        res.render("index", { title: "JamesReinknecht.com", latestBlogEntry: dbSlice })
    })
});

module.exports = router;