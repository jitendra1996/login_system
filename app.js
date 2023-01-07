const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes/login");

const app = express();

app.set("view engine", "ejs");
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.get("*", (req, res) => {
    res.status(404).render("404", {
        pageTitle: "Error",
        path: ""
    });
})

app.listen(3001, () => console.log("server is running on port number 3001"));