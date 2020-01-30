const auth = async (req, res, next) => {
  console.log("Middelware function");
  next();
};

modules.export = auth;