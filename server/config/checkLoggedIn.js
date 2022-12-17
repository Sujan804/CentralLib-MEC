const checkAuthenticated = (req, res, next) => {
  console.log(req)
    if (req.isAuthenticated()) {
      return next();
    }else{
        res.status(200).send({
            success: false,
            message: "Login First"
        })
    }
  };
module.exports = {checkAuthenticated}