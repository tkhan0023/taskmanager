//006

// const express = require("express");

// const router = express.Router();

// const { getAllTasks } = require("../controllers/tasks");
// router.route("/").get(getAllTasks);

// module.exports = router;

// const express = require("express");

// const router = express.Router();

// const {
//   getAllTasks,
//   createTask,
//   getTask,
//   deleteTask,
//   updateTask,
// } = require("../controllers/tasks");
// router.route("/").get(getAllTasks).post(createTask);
// router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

// module.exports = router;

// const express = require("express");

// const router = express.Router();

// const {
//   getAllTasks,
//   createTask,
//   getTask,
//   deleteTask,
//   updateTask,
// } = require("../controllers/tasks");
// router.route("/").get(getAllTasks).post(createTask);
// router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

// module.exports = router;

const express = require("express");

const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
  editTask,
} = require("../controllers/tasks");
router.route("/").get(getAllTasks).post(createTask);
router
  .route("/:id")
  .get(getTask)
  .patch(updateTask)
  .delete(deleteTask)
  .put(editTask);

module.exports = router;
