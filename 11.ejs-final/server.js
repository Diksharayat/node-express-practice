const express = require("express");
const app = express();

//set the view engine
app.set("view engine", "ejs");

//Home Route
app.get("/", function (req, res) {
  let user = {
    isAdmin: false,
  };
  res.render("home", { user });
});

//About us Route
app.get("/about", function (req, res) {
  res.render("about");
});

//Contact Route
app.get("/contact", function (req, res) {
  res.render("contact");
});

//profile
app.get("/profile", function (req, res) {
  let user = {
    name: "Emmanuel",
    age: 25,
    city: "Kumasi",
  };
  res.render("profile", {
    user,
  });
});

//profile
app.get("/posts", function (req, res) {
  const posts = [
    {
      title: "CSS",
      desc: "The best post ever 2",
    },
    {
      title: "Node JS",
      desc: "The best post ever 3",
    },
  ];
  res.render("posts", { posts });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
