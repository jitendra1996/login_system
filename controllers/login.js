exports.getLoginPage = (req, res) => {
    res.render('login', {
        pageTitle: "Login Page",
        path: "/"
    });
}