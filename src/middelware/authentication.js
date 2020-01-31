const jwt = require("jsonwebtoken"); // to validate the token being provided
const User = require("../models/user"); // to find token in database

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace('Bearer ', '');
    const decoded = jwt.verify(token, 'thisismynewcourse');
    const user = await User.findOne({id: decoded._id, 'tokens.token': token });
    // find a user with a correct ID who has authentication token still stored. 
    // If the user logs out that means this token is still valid

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate!" });
  }
};
module.exports = auth;
