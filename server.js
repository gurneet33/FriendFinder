var express = require("express");


var app = express();

var PORT = process.env.PORT || 3300;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.post("/addF", function (req, res) {

    res.json(req.body)

})


require("./routing/htmlRoutes")(app)
require("./routing/apiRoutes")(app)

app.listen(PORT, function () {
    console.log("connected to", PORT)
})