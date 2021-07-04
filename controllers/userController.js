const User = require('../models/User')

exports.login = function(req, res) {
    //cleanup input
    //validate input
    let user = new User(req.body)
    user.login().then(function(status) {
        if(status == "success") {
            req.flash("success", "Successful login attempt!")
            res.redirect('/')
        } else {
            res.send('Please try again later.')//if they make it here something really went wrong.
        }
    }).catch(function(status){
        req.flash("fail", "Incorrect credentials. Please try again.")
        res.redirect('/')
    })
}

exports.home = function(req, res) {
    if(req.flash("fail").length == 0) {
        res.render('loginPage')
    } else {
        res.render('loginPage', {fail: req.flash("fail")})
    }
}