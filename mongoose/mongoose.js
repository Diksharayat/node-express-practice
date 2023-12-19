const mongoose = require("mongoose");
const {schema}= require('mongoose')

// connect to mongoose

mongoose.connect("mongodb+srv://diksha:SyaCG5a141zq4mfi@mongodb-demo.roiawvw.mongodb.net/school?retryWrites=true&w=majority"
).then(()=>console.log("Db connected")).catch((err)=> console.log(err.message))


// Schema
// name
// city
// course
const studentSchema = new mongoose.Schema({
name: String,
city: String ,
courses: Array,
isMarried: Boolean,
age:Number,
})

// model

const Student= mongoose.model("Student",studentSchema);
 
// create student

// Student.create({
//   name:"rohan",
//   city:"chandigarh",
//   courses:["cs","python","web"],
//   isMarried:true,
//   age:30,
// }).then((student)=>console.log(student)).catch((err)=>console.log(err));

// find all student

// Student.find()
// .then((students)=>console.log(students))
// .catch((err)=>console.log(err));

// find all students whose age is ===20

// Student.find({age:20}).then(students=>console.log(students)).catch((err)=>{console.log(err)})

// find single record

// Student.findById("658033d35f42fb1050fd1444").then((student)=>{console.log(student)}).catch((err)=>{console.log(err)})


//Update  record

// Student.findOneAndUpdate(
//   { name: "John" },
//   { age: 50 },
//   {
//     new: true,
//   }
// )
//   .then(student => console.log(student))
//   .catch(err => console.log(err));

// Student.findByIdAndUpdate(
//   "6308626ca44c9505e911f0ef",
//   { age: 50 },
//   {
//     new: true,
//   }
// )
//   .then(student => console.log(student))
//   .catch(err => console.log(err));

//delete
Student.findByIdAndDelete("6308626ca44c9505e911f0ef")
  .then(() => console.log("Student has been deleted"))
  .catch(err => console.log(err));
