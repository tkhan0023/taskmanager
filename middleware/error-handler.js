// const errorHandlerMiddleware = (err, req, res, next) => {
//   return res.status(500).json({ msg: err });
//   // return res.status(500).json({ msg: "Something happened" });
// };
// module.exports = errorHandlerMiddleware;

//36
const { CustomAPIError } = require("../errors/custom-error");
const { insertMany } = require("../models/Task");
const errorHandlerMiddleware = (err, req, res, next) => {
  //console.log(err);
  //return res.status(500).json({ msg: err });
  // return res.status(500).json({ msg: `Something went wrong ,try again later` });
  //   return res.status(err.status).json({ msg: err.message });
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: `something happened wrong` });
};
module.exports = errorHandlerMiddleware;
