exports.getRegistrationPage = (req, res) => {
    res.render('registration', {
        pageTitle: 'Registration',
        path: '/registration'
    });
}