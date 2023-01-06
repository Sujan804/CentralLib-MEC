const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/book-cover');
  },
  filename: (req, file, cb) => {
    cb(null, `${req.body.title}-${Date.now()}.jpg`);
  }
});

const upload = multer({ storage });

module.exports = upload;
