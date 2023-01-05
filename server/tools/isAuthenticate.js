const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
      if (error) {
        res.status(401).send();
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(401).send();
  }
}

module.exports = authenticate;
