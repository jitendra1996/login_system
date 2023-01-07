exports.getHomePage = (req, res) => {
    if (req.body.email && req.body.username && req.body.password && req.body.confirm_password) {
        console.log("Email Id : ", req.body.email);
        console.log("Password : ", req.body.password);
        console.log("Username : ", req.body.username);
        console.log("Confirm Password : ", req.body.confirm_password);
        if (req.body.password !== req.body.confirm_password) {
            return res.redirect('/registration');
        }
        return res.render('home_page', {
            pageTitle: "Profile Page",
            path: "/homepage"
        });
    }
    else if (req.body.emailId && req.body.password) {
        console.log("Email Id : ", req.body.emailId);
        console.log("Password : ", req.body.password);
        return res.render('home_page', {
            pageTitle: "Profile Page",
            path: "/homepage"
        });
    }
    return res.status(404).render("404", {
        pageTitle: "Error",
        path: ""
    });
}