const User = require('../models/user')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

passport.use(
    new LocalStrategy( async (collegeId, password, done)=>{
        try{
            console.log("Local strategy")
            const user = await User.find({collegeId: collegeId});
            if(!user){
                return done(null, false, {message: "User not found"})
            }
            if(password!==user.password){
                return done(null, false, {message: "Incorrect password"})
            }
            return (null, user)
        }catch{
            return done(err)
        }
    })

);
passport.serializeUser((user,done)=>{
    done(null, user.collegeId)
});

passport.deserializeUser( async (collegeId,done)=>{
    try{
        const user = await User.find({collegeId: collegeId});
        done(null, user)
    }catch(error){
        done(error, false)
    }
});