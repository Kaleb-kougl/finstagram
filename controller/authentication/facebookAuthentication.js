const FacebookStrategy = require('passport-facebook');

export default new FacebookStrategy({
    clientID: FB_CLIENT_ID,
    clientSecret: FB_CLIENT_SECRET,
    callbackURL: `http://localhost:${PORT}/auth/facebook/callback`
},
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        User.findOrCreate({ facebookId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
)