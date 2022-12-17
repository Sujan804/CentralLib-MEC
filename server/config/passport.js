require('dotenv').config()
const User = require('../models/user')
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt
const passport  =  require('passport')

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY

passport.use( 
    new JwtStrategy(opts,  (jwt_payload, done)=>{
        User.findOne({collegeId: jwt_payload.collegeId}, (err, user)=>{
            if(err){
                return done(err, false);
            }
            if(user){
                return done(null, user);
            }else{
                return done(null, false)
            }
        })
    
    })  
)