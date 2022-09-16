// If in development,
if (process.env.NODE_ENV !== "production") {
    //require the development npm package, dotenv.
    //and load all environment variables stored inside our .env file, which includes our database connection url.
    //the .env file is ignored by github, so it's contents are kept secret from the public.
    require("dotenv").config();
}

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var port = process.env.PORT || 3000;
var session = require('express-session');
var flash = require('express-flash');
var passport = require('passport');
var methodOverride = require('method-override');
var passReq = require('./public/serverjs/password_requirements');
const journalsRouter = require('./routes/journals.js');
const initializePassport = require("./public/serverjs/passport-config.js");
var Journal = require('./models/journal');
var User = require('./models/user');
var axios = require('axios');
const { options } = require("./routes/journals.js");

console.log("Check"+ process.env.MONGO_URL)

//Connect to database
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log("mongoose error: ", err);
    }
});

var users = [];

function fetchUsers() {
    User.find({}, function (err, foundUsers) {
        if (err) {
            console.log("error finding users: ", err);
        } else {
            users = foundUsers;
        }
    })
};

fetchUsers();


//Give passport two ways to find users
initializePassport(passport,
    //find user by username
    (username) => {
        return users.find((user) => user.username === username);
    },
    //find user by id
    id => users.find(user => user.id === id)
);

//Allows us to render ejs files instead of html files.
//(ejs files are pretty much the same as html files. The only difference is that they are inclusive of javascript.)
app.set("view-engine", "ejs");

//express setup
app.use(express.static(__dirname + '/public')); //Tells our app to look inside the public directory for files, like our images.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(flash());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/journals', journalsRouter);   // Make sure this is on the bottom of app.use section

//ROUTES

//root route
app.get('/', async (req, res) => {
    if (req.isAuthenticated()) {
        var user = await User.findById(req.user._id);
        delete user.password;
        user.isSignedIn = true;
    } else {
        var user = new User();
        user.isSignedIn = false;
    }
    res.render("home.ejs", { user: user });
})

//contact route
app.get('/contact', async (req, res) => {
    if (req.isAuthenticated()) {
        var user = await User.findById(req.user._id);
        delete user.password;
        user.isSignedIn = true;
    } else {
        var user = new User();
        user.isSignedIn = false;
    }
    res.render("contact.ejs", { user: user });
})

//about route
app.get('/about', async (req, res) => {
    if (req.isAuthenticated()) {
        var user = await User.findById(req.user._id);
        delete user.password;
        user.isSignedIn = true;
    } else {
        var user = new User();
        user.isSignedIn = false;
    }
    res.render("about.ejs", { user: user });
})

app.get('/mood/:userMood', async (req, res) => {
    if (req.isAuthenticated()) {
        var user = await User.findById(req.user._id);
        delete user.password;
        user.isSignedIn = true;
    } else {
        var user = new User();
        user.isSignedIn = false;
    }
    var mood = req.params.userMood;
    switch(mood){
        case "anxious":
            res.render("healing/mood.ejs", { mood: mood, user: user, option1: "a", option2: "b", option3: "c", option4: "d"});
            break;
        case "sad":
            res.render("healing/mood.ejs", { mood: mood, user: user,option1: "e", option2: "f", option3: "g", option4: "h"});
            break;
        case "angry":
            res.render("healing/mood.ejs", { mood: mood, user: user,option1: "i", option2: "j", option3: "k", option4: "l"});
            break;
        case "lonely":
            res.render("healing/mood.ejs", { mood: mood, user: user,option1: "m", option2: "n", option3: "o", option4: "p"});
            break;
    }
})

app.get('/healing/talktome', async (req, res) => {
    if (req.isAuthenticated()) {
        var user = await User.findById(req.user._id);
        delete user.password;
        user.isSignedIn = true;
    } else {
        var user = new User();
        user.isSignedIn = false;
    }
    res.render('healing/talktome.ejs', {user: user });
})

app.get('/analytics/analytics', async (req, res) => {
    if (req.isAuthenticated()) {
        var user = await User.findById(req.user._id);
        delete user.password;
        user.isSignedIn = true;
    } else {
        var user = new User();
        user.isSignedIn = false;
    }
    res.render('analytics/analytics.ejs', {user: user });
})

app.get('/healing/talktome', async (req, res) => {
    if (req.isAuthenticated()) {
        var user = await User.findById(req.user._id);
        delete user.password;
        user.isSignedIn = true;
    } else {
        var user = new User();
        user.isSignedIn = false;
    }
    res.render('healing/talktome.ejs', {user: user });
})

app.get('/healing/:userMood/:reason', async (req, res) => {
    if (req.isAuthenticated()) {
        var user = await User.findById(req.user._id);
        delete user.password;
        user.isSignedIn = true;
    } else {
        var user = new User();
        user.isSignedIn = false;
    }
    var mood = req.params.userMood;
    var reason = req.params.reason;
    res.render('healing/index.ejs', { mood: mood, reason: reason, user: user });
})

app.get('/healing/:userMood/:reason/:healing_method?', async (req, res) => {
    if (req.isAuthenticated()) {
        var user = await User.findById(req.user._id);
        delete user.password;
        user.isSignedIn = true;
    } else {
        var user = new User();
        user.isSignedIn = false;
    }
    // var user = new User();
    // user.isSignedIn = false;
    var mood = req.params.userMood;
    var healing_method = req.params.healing_method;
    switch (healing_method) {
        case "music":
            res.render('healing/music.ejs', { mood: mood, healing_method: healing_method, user: user });
            break;
        case "pictures":
            res.render('healing/picture.ejs', { mood: mood, healing_method: healing_method, user: user });
            break;
        case "help":
            res.render('healing/help.ejs', { mood: mood, healing_method: healing_method, user: user });
            break;
        case "workout":
            res.render('healing/workout.ejs', { mood: mood, healing_method: healing_method, user: user });
            break;
        case "memes":
            res.render('healing/funny.ejs', { mood: mood, healing_method: healing_method, user: user });
            break;
        case "inspiration":
            res.render('healing/inspiration.ejs', { mood: mood, healing_method: healing_method, user: user });
            break;
        default:
            console.log("unrecognized healing method: " + healing_method);
            res.render('home.ejs', { user: user });
    }
})


app.get("/users/login", checkNotAuthenticated, (req, res) => {
    var user = new User();
    user.isSignedIn = false;
    res.render("user/login.ejs", { user: user });
});


app.get("/users/register", checkNotAuthenticated, (req, res) => {
    var user = new User();
    user.isSignedIn = false;
    res.render("user/register.ejs", { user: user });
});

app.post(
    "/users/login", checkNotAuthenticated,
    passport.authenticate("local", {
        successRedirect: "/journals",
        failureRedirect: "/users/login",
        failureFlash: true,
    })
);


// bcrypt.hash() is an async function, so the callback needs to be async. We also need to await for the password to hash before we save it.
app.post("/users/register", checkNotAuthenticated, async (req, res) => {
    // 10 is generally a fast, but also safe setting for hashing a password using bcrypt


    try {
        passReq.meetsMinReq(req.body.password);
        passReq.meetsMaxReq(req.body.password);
        passReq.hasUpperCase(req.body.password);
        passReq.hasLowerCase(req.body.password);
        passReq.hasNumber(req.body.password);
        passReq.notContainUsername(req.body.password, req.body.username);
        passReq.notDescendOrAscend(req.body.password);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        var newUser = {
            username: req.body.username,
            password: hashedPassword,
        };
        User.create(newUser, function (err, createdUser) {
            if (err) {
                console.log(err);
            } else {
                fetchUsers();
                res.redirect('/users/login');
            }
        })
    } catch (e) {
        var user = new User();
        user.isSignedIn = false;
        res.render("user/register.ejs", { messages: { error: e }, user: user });
    }
});


app.delete("/users/logout", checkAuthenticated, (req, res) => {
    req.logout(function(err) {
        if (err) { 
            return next(err); 
        }
        res.redirect('/');
      });
})


function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/users/login");
    }
}

function getMoodAdjective(mood){
    switch (mood){
        case "angry":
            return "anger";
        default:
            return mood+"ness";
    }
}


function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect("/journals");
    } else {
        return next();
    }
}

// code to access Picture API from Unsplash
app.get('/getPicture/:selected', async (req, res) => {
    try {
        const selected = req.params.selected;
        const config = {
            headers: {
                'Accept-Version': 'v1',
                Authorization: process.env.PIC_API_KEY
            }
        }
        console.log("Selected: "+ selected)
        console.log("Config "+ config)
        var response = await axios.get('https://api.unsplash.com/photos/random?query=' + selected, config)

        response = response.data;

        res.send(response);
    } catch (e) {
        console.log("error", e)
        res.send(e);
    }
})

// code to access Joke API 
app.get('/getJoke/', async (req, res) => {
    try {

        axios.get('https://official-joke-api.appspot.com/jokes/general/random')
            .then(function (response) {
                // handle success
                res.send((response.data[0]));
            })
            .catch(function (error) {
                // handle error
                console.log(error)
                res.send(error);
            })

    } catch (e) {
        console.log("error", e)
        res.send(e);
    }
})

//Server starts here with a port of 3000
app.listen(port);