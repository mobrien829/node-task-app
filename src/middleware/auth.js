const User = require("../models/user");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "thisisblah");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token
    });
    // // console.log(decoded);
    if (!user) {
      throw new Error();
    }
    console.log(user);
    req.user = user;
    // next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate" });
  }
  console.log("im here lel in the auth.js file");
  next();
};

module.exports = auth;
