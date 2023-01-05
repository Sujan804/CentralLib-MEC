
const User = require('..user/models/user');
function isAdmin(req, res, next) {
  User.findById(req.userId, (error, user) => {
    if (error) {
      res.status(500).send(error);
    } else if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(403).send();
    }
  });
}

module.exports = isAdmin;