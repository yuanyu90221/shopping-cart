var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passportField: 'password',
    passReqToCallback: true
}, function(req, email, password, done){
    User.findOne({'email': email}, function(err,user){

        if(err){
            console.log(err);
            return done(err);
        }
        if(user){
            return done(null, false,{message: 'email already in use!'});
        }
        
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        
        newUser.save(function(err, result){
            // console.log(result);
            if(err){
               return done(err);
            }
            else{
                return done(null, newUser);
            }
          
        });
    });


}));