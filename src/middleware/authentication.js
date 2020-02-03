const jwt = require("jsonwebtoken"); // to validate the token being provided
const User = require("../models/user"); // to find token in database

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log(token)
    const decoded = jwt.verify(token, 'thisismynewcourse');
    console.log(decoded)
    // find a user with a correct ID who has authentication token still stored. 
    
    const user = await User.findOne({id: decoded._id, 'tokens.token': token });
    console.log(user)
    
    /* When the user logs out we will delete the auth token from the tokens
     array of the user. So if the user tries to authenticate with the same token,
     it won't work because the token  was deleted from the tokens array
     by the log out function.*/

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (e) {
     console.log(e)
    res.status(401).send({ error: "Please authenticate!" });
  }
};
module.exports = auth;