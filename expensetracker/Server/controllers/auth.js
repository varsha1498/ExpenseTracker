const _ = require("lodash");
const User = require("../models/auth");


exports.signUp = (req, res) => {
  const { name, email, dob, password, profession } = req.body;
  const userNew = new User();
  

  User.findOne({ email }).exec((err, user) => {
    if (err) {
      return res.status(401).json({
        error: "Something went wrong!!",
      });
    }

    if (user) {
      return res.status(400).json({
        error: "Email already exists!!",
      });
    }
    userNew.name = name;
    userNew.email = email;
    userNew.password = password;
    User.save();
     
      res.json({
        message: `Successfully signed up`,
      });
    });
  }


exports.signIn = (req, res) => {
  const { email, password } = req.body;

  // AuthLogger.setLogData(req.body);
  // AuthLogger.info("Request recieved at auth/signin", req.body);

  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      AuthLogger.error("User with the email specified doesn't exist.");

      return res.status(400).json({
        error: "User with the email specified doesn't exist.",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Password is incorrect",
      });
    }
    const { _id, name, role, email } = user;

    return res.json({
      user: {
        _id,
        name,
        role,
        email,
      },
      message: "Signed in successfully",
    });
  });
};

