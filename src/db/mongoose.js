const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// const User = mongoose.model("User", {
//   name: {
//     type: String
//   },
//   age: {
//     type: Number
//   }
// });

// const me = new User({
//   name: "Michael",
//   age: 25
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const newTask = new Task({
  description: "study pls",
  completed: false
});

newTask
  .save()
  .then(() => {
    console.log(newTask);
  })
  .catch(error => {
    console.log(error);
  });
