// console.log('Task Manager App')

//003
// const express = require("express");
// const app = express();
// const port = 3000;

// //routes
// app.get("/hello", (req, res) => {
//   res.send("tak manager app");
// });

// //app.get('/api/v1/tasks') get all tasks
// //app.post('/api/v1/tasks') create new task
// //app.get('/api/v1/tasks/:id')get single task
// //app.patch('/api/v1/tasks/:id') update task
// //app.delete('api/v1/tasks/:id') detete task
// app.listen(port, console.log(`server is listning on port ${port}`));

//006
// const express = require("express");
// const app = express();
// const port = 3000;
// const tasks = require("./routes/tasks");
// //middleware

// app.use(express.json());

// app.get("/hello", (req, res) => {
//   res.send("tak manager app");
// });
// app.use("/api/v1/tasks", tasks);

// app.listen(port, console.log(`server is listning on port ${port}`));

// const express = require("express");
// const app = express();
// const port = 3000;
// const tasks = require("./routes/tasks");
// //middleware

// app.use(express.json());

// app.get("/hello", (req, res) => {
//   res.send("tak manager app");
// });
// app.use("/api/v1/tasks", tasks);

// app.listen(port, console.log(`server is listning on port ${port}`));

//008

// const express = require("express");
// const app = express();
// const port = 3000;
// const tasks = require("./routes/tasks");
// //middleware

// app.use(express.json());

// app.get("/hello", (req, res) => {
//   res.send("tak manager app");
// });
// app.use("/api/v1/tasks", tasks);

// app.listen(port, console.log(`server is listning on port ${port}`));

//017

// const express = require("express");
// const app = express();
// const port = 3000;
// const tasks = require("./routes/tasks");

// const connectDB = require("./db/connect");
// //middleware

// app.use(express.json());

// app.get("/hello", (req, res) => {
//   res.send("tak manager app");
// });
// app.use("/api/v1/tasks", tasks);
// const start = async () => {
//   try {
//     await connectDB();
//     app.listen(port, console.log(`server is listning on port ${port}`));
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

//019
// const express = require("express");
// const app = express();
// const port = 3000;
// const tasks = require("./routes/tasks");
// require("dotenv").config();
// const connectDB = require("./db/connect");
// //middleware

// app.use(express.json());

// app.get("/hello", (req, res) => {
//   res.send("tak manager app");
// });
// app.use("/api/v1/tasks", tasks);
// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, console.log(`server is listning on port ${port}`));
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

//020
// const express = require("express");
// const app = express();
// const port = 3000;
// const tasks = require("./routes/tasks");
// require("dotenv").config();
// const connectDB = require("./db/connect");
// //middleware

// app.use(express.json());

// app.get("/hello", (req, res) => {
//   res.send("tak manager app");
// });
// app.use("/api/v1/tasks", tasks);
// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, console.log(`server is listning on port ${port}`));
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

//30

// const express = require("express");
// const app = express();
// const port = 3000;
// const tasks = require("./routes/tasks");
// require("dotenv").config();
// const connectDB = require("./db/connect");
// //middleware
// app.use(express.static("./public"));
// app.use(express.json());

// // app.get("/hello", (req, res) => {
// //   res.send("tak manager app");
// // });

// app.use("/api/v1/tasks", tasks);
// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, console.log(`server is listning on port ${port}`));
//   } catch (error) {
//     console.log(error);
//   }
// };
//start();

//33

// const express = require("express");
// const app = express();
// const port = 3000;
// const tasks = require("./routes/tasks");
// require("dotenv").config();
// const connectDB = require("./db/connect");
// const notFound = require("./middleware/not-found");
// const errorHandlerMiddleware = require("./middleware/error-handler");
// //middleware
// app.use(express.static("./public"));
// app.use(express.json());

// app.use("/api/v1/tasks", tasks);
// app.use(notFound);
// app.use(errorHandlerMiddleware);
// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, console.log(`server is listning on port ${port}`));
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

//37
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const tasks = require("./routes/tasks");
require("dotenv").config();
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
//middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listning on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
