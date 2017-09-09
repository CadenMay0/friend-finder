// JavaScript source code
var path = require("path");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newfriend = req.body;
        friends.push(newcharacter);
        res.json(newcfriend);
    });
};
