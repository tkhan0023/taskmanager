// const mongoose = require("mongoose");

// const connectionString =
//   "mongodb+srv://1234:helloABC@nodeexpresstutorail.h7yawws.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

// const connectDB = (url) => {
//   return mongoose.connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   });
// };

// //   .then(() => console.log("connected to db"))
// //   .catch((err) => console.log(err));
// module.exports = connectDB;

//019
// const mongoose = require("mongoose");

// const connectDB = (url) => {
//   return mongoose.connect(url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   });
// };

// //   .then(() => console.log("connected to db"))
// //   .catch((err) => console.log(err));
// module.exports = connectDB;

//020
const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

//   .then(() => console.log("connected to db"))
//   .catch((err) => console.log(err));
module.exports = connectDB;
