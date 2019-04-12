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

app.use(cors());

// THESE NEED TO IMPLEMENTED FOR MY DB
/*
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    db.collection('chatusers').findOne(
        { id: id },
        (err, doc) => {
            done(null, doc);
        }
    );
});
*/

// This will be necessary to verify that user is authenticated at particular routes like in settings...
/* 
function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) {
          return next();
      }
      res.redirect('/');
    };
*/

// init passport and restore authentication state from session (if any)
app.use(passport.initialize());
app.use(passport.session());

// clean this up by exporting from a different file 
passport.use(new FacebookStrategy({
    clientID: FB_CLIENT_ID,
    clientSecret: FB_CLIENT_SECRET,
    callbackURL: `http://localhost:${PORT}/auth/facebook/callback`
},
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        // DB needs to be set up to store user data. 
        // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        return cb(err, user);
        // });
    }
));

app.get('/',
    (req, res) => {
        console.log('/ was hit \n');
        res.send('Hello World!')
    }
);

app.get('/auth/facebook',
    passport.authenticate('facebook'),
    (req, res) => {
        console.log('/auth/facebook was hit \n');
        console.log('/auth/facebook... \n')
    }
);

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
        console.log('/auth/facebook/cb was hit \n');
        return res.redirect('/')
    }
);

app.get('*', (req, res) => {
    console.log('in server side code but did not find path')
    res.send('in server but did not find path');
});

app.listen(PORT,
    () => console.log(`Example app listening on port ${PORT}!`)
);