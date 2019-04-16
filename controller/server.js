require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const app = express();
const {
    PORT,
    FB_CLIENT_ID,
    FB_CLIENT_SECRET
} = process.env;

app.use(express.json())
app.use(cors({ origin: "http://localhost:3000/" }));

/* This will be necessary to verify that user is authenticated at particular routes like in settings... 
function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) {
          return next();
      }
      res.redirect('/');
    };
*/

// init passport and restore authentication state from session (if any)
app.use(passport.initialize());
// saveUninit => allows attaching of socket id to session before authentication
app.use(passport.session({
    secret: 'KeyboardKittens',
    resave: true,
    saveUninitialized: true
}));

// allows us to save the user into the session
passport.serializeUser((user, cb) => cb(null, user))
passport.deserializeUser((obj, cb) => cb(null, obj))

// clean this up by exporting from a different file 
passport.use(new FacebookStrategy({
    clientID: FB_CLIENT_ID,
    clientSecret: FB_CLIENT_SECRET,
    callbackURL: `http://localhost:${PORT}/auth/facebook/callback`
},
    (accessToken, refreshToken, profile, cb) => {
        process.nextTick(() => cb(null, profile))
    }
));
// http://localhost:5000/auth/facebook/callback

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

// root 
app.get('/',
    (req, res) => {
        console.log('/ was hit \n');
        res.send('Hello World!')
    }
);

// initial route for facebook login
app.get('/auth/facebook',
    (req, res) => {
        res.setHeader('origin', 'http://localhost:5000/auth/facebook')
        console.log('setting header');
    },
    passport.authenticate('facebook'),
    (req, res) => {
        console.log('denied here? ')
        console.log(req.headers);
        console.log(err, 'not called');
    }
);

// callback for facebook login
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
        console.log('callback')
        console.log(req.user);
        console.log('/auth/facebook/cb was hit \n');
        res.json(req.user);
    }
);

// Catch-all if the route isn't in server
app.get('*', (req, res) => {
    console.log('in server side code but did not find path')
    // console.log(req.user);
    res.send('in server but did not find path');
});

app.listen(PORT,
    () => console.log(`Example app listening on port ${PORT}!`)
);