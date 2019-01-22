var express = require("express");


var app = express();

var PORT = process.env.PORT || 3300;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.post("/addF", function (req, res) {
    
    res.json(req.body)
    // res.send("somewhere")
})
// var friends = [{
//         "name": "Selena",
//         "photo": "https://www.wonderslist.com/wp-content/uploads/2017/01/Selena-Gomez-Hair-2017-Wallpaper.jpg",
//         "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
//     },
//     {
//         "name": "Ahmed",
//         "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//         "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
//     },
//     {
//         "name": "Jennifer",
//         "photo": "http://www.worldlifestyle.com/wp-content/uploads/2017/04/10-most-beautiful-women-in-the-world_7.jpg",
//         "scores": [4, 4, 5, 1, 2, 5, 4, 1, 2, 3]
//     },
//     {
//         "name": "Anna",
//         "photo": "http://www.worldlifestyle.com/wp-content/uploads/2017/04/10-most-beautiful-women-in-the-world_6.jpg",
//         "scores": [1, 5, 1, 4, 4, 5, 1, 2, 5, 4]
//     }
// ]

require("./routing/htmlRoutes")(app)
require("./routing/apiRoutes")(app)

app.listen(PORT, function () {
    console.log("connected to", PORT)
})