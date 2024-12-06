//006
// const getAllTasks = (req, res) => {
//   res.send("all items from file");
// };
// module.exports = {
//   getAllTasks,
// };

// const getAllTasks = (req, res) => {
//   res.send("get all tasks");
// };

// const createTask = (req, res) => {
//   res.send("create task");
// };
// const getTask = (req, res) => {
//   res.send("create single task");
// };
// const updateTask = (req, res) => {
//   res.send("update task");
// };
// const deleteTask = (req, res) => {
//   res.send("delete task");
// };
// module.exports = {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
// };

//008
// const getAllTasks = (req, res) => {
//   res.send("get all tasks");
// };

// const createTask = (req, res) => {
//   res.json(req.body);
// };
// const getTask = (req, res) => {
//   res.json({ id: req.params.id });
// };
// const updateTask = (req, res) => {
//   res.send("update task");
// };
// const deleteTask = (req, res) => {
//   res.send("delete task");
// };
// module.exports = {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
// };

//009

// const getAllTasks = (req, res) => {
//   res.send("get all tasks");
// };

// const createTask = (req, res) => {
//   res.json(req.body);
// };
// const getTask = (req, res) => {
//   res.json({ id: req.params.id });
// };
// const updateTask = (req, res) => {
//   res.send("update task");
// };
// const deleteTask = (req, res) => {
//   res.send("delete task");
// };
// module.exports = {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
// };

//021
// const Task = require("../models/Task");
// const getAllTasks = (req, res) => {
//   res.send("get all tasks");
// };

// const createTask = async (req, res) => {
//   const task = await Task.create(req.body);
//   res.status(201).json({ task });
// };
// const getTask = (req, res) => {
//   res.json({ id: req.params.id });
// };
// const updateTask = (req, res) => {
//   res.send("update task");
// };
// const deleteTask = (req, res) => {
//   res.send("delete task");
// };
// module.exports = {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
// };

//024

// const Task = require("../models/Task");
// const getAllTasks = (req, res) => {
//   res.send("get all tasks");
// };

// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// const getTask = (req, res) => {
//   res.json({ id: req.params.id });
// };
// const updateTask = (req, res) => {
//   res.send("update task");
// };
// const deleteTask = (req, res) => {
//   res.send("delete task");
// };
// module.exports = {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
// };

//025
// const Task = require("../models/Task");
// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.status(200).json({ tasks: tasks });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// const getTask = (req, res) => {
//   res.json({ id: req.params.id });
// };
// const updateTask = (req, res) => {
//   res.send("update task");
// };
// const deleteTask = (req, res) => {
//   res.send("delete task");
// };
// module.exports = {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
// };

//026
// const Task = require("../models/Task");
// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.status(200).json({ tasks: tasks });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// const getTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOne({ _id: taskID });
//     if (!task) {
//       return res.status(404).json({ msg: `no task with id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// const updateTask = (req, res) => {
//   res.send("update task");
// };
// const deleteTask = (req, res) => {
//   res.send("delete task");
// };
// module.exports = {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
// };

//28
// const Task = require("../models/Task");
// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.status(200).json({ tasks: tasks });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// const getTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOne({ _id: taskID });
//     if (!task) {
//       return res.status(404).json({ msg: `no task with id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// const updateTask = (req, res) => {
//   res.send("update task");
// };
// const deleteTask = async (req, res) => {
//   try {
//     const { id: taskId } = req.params;
//     const task = await Task.findOneAndDelete({ _id: taskId });
//     if (!task) {
//       return res.status(404).json({ msg: `No task wit id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//     //res.status(200).send
//     //res.status(200).json({task: null ,status: 'success})
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// module.exports = {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
// };

//029

// const Task = require("../models/Task");
// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.status(200).json({ tasks: tasks });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// const getTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOne({ _id: taskID });
//     if (!task) {
//       return res.status(404).json({ msg: `no task with id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const deleteTask = async (req, res) => {
//   try {
//     const { id: taskId } = req.params;
//     const task = await Task.findOneAndDelete({ _id: taskId });
//     if (!task) {
//       return res.status(404).json({ msg: `No task wit id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//     //res.status(200).send
//     //res.status(200).json({task: null ,status: 'success})
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const updateTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;

//     // res.status(200).json({ id: taskID, data: req.body });
//     // const task = await Task.findOneAndUpdate({ _id: taskID }, req.body);
//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!task) {
//       return res.status(404).json({ msg: `No task wit id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const editTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;

//     // res.status(200).json({ id: taskID, data: req.body });
//     // const task = await Task.findOneAndUpdate({ _id: taskID }, req.body);
//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//       overwrite: true,
//     });

//     if (!task) {
//       return res.status(404).json({ msg: `No task wit id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// module.exports = {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
//   editTask,
// };

//32
// const Task = require("../models/Task");
// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     // res.status(200).json({ tasks: tasks });
//     // res.status(200).json({tasks, amount:tasks.length})
//     //   res
//     //     .status(200)
//     //     .json({ success: true, data: { tasks, nbHits: tasks.length } });

//     res
//       .status(200)
//       .json({ status: "success", data: { tasks, nbHits: tasks.length } });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// const getTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOne({ _id: taskID });
//     if (!task) {
//       return res.status(404).json({ msg: `no task with id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const deleteTask = async (req, res) => {
//   try {
//     const { id: taskId } = req.params;
//     const task = await Task.findOneAndDelete({ _id: taskId });
//     if (!task) {
//       return res.status(404).json({ msg: `No task wit id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//     //res.status(200).send
//     //res.status(200).json({task: null ,status: 'success})
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const updateTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;

//     // res.status(200).json({ id: taskID, data: req.body });
//     // const task = await Task.findOneAndUpdate({ _id: taskID }, req.body);
//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!task) {
//       return res.status(404).json({ msg: `No task wit id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const editTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;

//     // res.status(200).json({ id: taskID, data: req.body });
//     // const task = await Task.findOneAndUpdate({ _id: taskID }, req.body);
//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//       overwrite: true,
//     });

//     if (!task) {
//       return res.status(404).json({ msg: `No task wit id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// module.exports = {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
//   editTask,
// };

//34

// const Task = require("../models/Task");
// const asyncWrapper = require("../middleware/async");
// const getAllTasks = asyncWrapper(async (req, res) => {
//   const tasks = await Task.find({});

//   res.status(200).json({ tasks });
// });

// const createTask = asyncWrapper(async (req, res) => {
//   const task = await Task.create(req.body);
//   res.status(201).json({ task });
// });

// const getTask = asyncWrapper(async (req, res) => {
//   const { id: taskID } = req.params;
//   const task = await Task.findOne({ _id: taskID });
//   if (!task) {
//     return res.status(404).json({ msg: `no task with id: ${taskID}` });
//   }
//   res.status(200).json({ task });
// });

// const deleteTask = asyncWrapper(async (req, res) => {
//   const { id: taskId } = req.params;
//   const task = await Task.findOneAndDelete({ _id: taskId });
//   if (!task) {
//     return res.status(404).json({ msg: `No task wit id: ${taskID}` });
//   }
//   res.status(200).json({ task });
// });

// const updateTask = asyncWrapper(async (req, res) => {
//   const { id: taskID } = req.params;

//   const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   if (!task) {
//     return res.status(404).json({ msg: `No task wit id: ${taskID}` });
//   }
//   res.status(200).json({ task });
// });

// const editTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;

//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//       overwrite: true,
//     });

//     if (!task) {
//       return res.status(404).json({ msg: `No task wit id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// module.exports = {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
//   editTask,
// };

//36

const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});

  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`no task with id: ${taskID}`, 404));
    // const error = new Error("Not Found");
    // error.status = 404;
    // return next(error);
    //return res.status(404).json({ msg: `no task with id: ${taskID}` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return next(createCustomError(`no task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`no task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const editTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
      //overwrite: true,
    });

    if (!task) {
      return next(createCustomError(`no task with id: ${taskID}`, 404));
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};
