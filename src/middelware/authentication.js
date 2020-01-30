const auth = async (req, res, next) => {
  console.log("Middelware function");
  next();
};

module.exports = auth;