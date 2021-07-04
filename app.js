const express = require('express')
const session = require('express-session')
const router = require('./router')
const { resolveInclude } = require("ejs")//required for ejs templating
const flash = require('connect-flash')

app = express()

app.use(session({
    secret:'login form',
    saveUninitialized: true,
    resave: true
}))

app.use(flash())

app.use(function(req, res, next) {
    res.locals.errors = req.flash("fail")//need to add the flash messages to the res object for use in the routers
    res.locals.success = req.flash("success")
    next()
})

app.use(express.urlencoded({extended:false}))//add user submitted data to the request object so it can be accessed from req.body
app.use(express.json())//handles any json returned data from ejs templates

app.use(express.static('public'))
app.set('views', 'views')//sets views to use the views folder.
app.set('view engine', 'ejs')//sets the view engine to ejs, the const { resolveInclude } = require("ejs") statementis needed for ejs to be imported.

app.use('/', router)//handles the home request and any routes following the home route and sends them to the router const from the router module.

app.listen(3000)