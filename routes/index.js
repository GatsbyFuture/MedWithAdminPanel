var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/login", function(req, res, next) {
    res.render("login");
});
// ma'lumotlarni bazaga kiritishning qismi...
router.get("/add", function(req, res, next) {
    res.render("form");
});
// tablitsa qilib chiqarish qismi...
router.get("/view", function(req, res, next) {
    res.render("tables");
});
module.exports = router;