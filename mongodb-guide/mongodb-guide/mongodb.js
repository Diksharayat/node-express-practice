const { MongoClient } = require("mongodb");

const url =
"mongodb+srv://diksha:SyaCG5a141zq4mfi@mongodb-demo.roiawvw.mongodb.net/school?retryWrites=true&w=majority";
//create new client
const client = new MongoClient(url);

const dbConnect = async () => {
  try {
    //connect to db
    await client.connect();
    console.log("DB Connected successfully");

    //create new db
    const db = client.db("school");
    //create collection
    const students = db.collection("students");

    //create document(student)-single
    const student1 = await students.insertOne({
     
      city: "Kumasi",
      jadjakdja:  "kajdkajkaj",
      amount: true,
      ismarried: true
    });

    //create document(student)-multiple
    const students2 = await students.insertMany([
      { name: "Emmanuel", city: "Kumasi" },
      { name: "Thomas", city: "Western" },
    ]);

    //find all students
    const allStudents = await students.find().toArray();
    console.log(allStudents);
    //find a student by name Emmanuel
    const foundSt = await students.findOne({ name: "dan" });
    console.log(foundSt);

    //find all students  from kumasi
    const foundSts = await students.find({ city: "Kumasi" }).toArray();
    // console.log(foundSts);

    //update record
    const updatedStudent = await students.updateOne(
      { name: "Emmanuel" },
      {
        $set: { name: "Tweneboah", city: "Accra" },
      }
    );

    //delete
    // const deletedStudent = await students.deleteOne({ name: "Tweneboah" });
    // console.log(deletedStudent);
  } catch (error) {
    console.log(error);
  }
};

dbConnect();
