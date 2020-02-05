const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const User = mongoose.model("User", {
  name: {
    type: String,
    trim: true
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is invalid");
      }
    }
  }
});

const me = new User({
  name: "Michael                    ",
  age: 25,
  email: "mobrien@colgate.edu"
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log(error);
  });

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: true
//   },
//   completed: {
//     type: Boolean
//   }
// });

// const newTask = new Task({
//   description: "study pls",
//   completed: false
// });

// newTask
//   .save()
//   .then(() => {
//     console.log(newTask);
//   })
//   .catch(error => {
//     console.log(error);
//   });
