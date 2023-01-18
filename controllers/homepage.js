exports.getHomePage = (req, res) => {
    if (req.body.emailId && req.body.password) {
        console.log("Email Id : ", req.body.emailId);
        console.log("Password : ", req.body.password);
        return res.render('home_page', {
            pageTitle: "Profile Page",
            path: "/homepage",
            emailId: `${req.body.emailId}`
        });
    }
    return res.status(404).render("404", {
        pageTitle: "Error",
        path: ""
    });
}