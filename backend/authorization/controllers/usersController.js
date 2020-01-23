const db = require("../models");

const show = (req, res) => {
  // show user by id found from token
  db.User.findById(req.userId, { password: 0, __v: 0 }, (err, foundUser) => {
    if(err) {
      return res.status(500).json({
        status: 500,
        message: "Something went wrong"
      })
    }

    return res.status(200).json({
      status: 200,
      data: foundUser
    })
  })
};

module.exports = {
  show
};
