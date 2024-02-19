const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const Blog = require("./models/blog");

const app = express();
dotenv.config();
//routes 

// app.get("/add", (req, res) => {
//   const blog = new Blog({
//     title: "sorting",
//     authorName: "mav",
//     authorRating: "1660",
//     tag: "sorting",
//   });
//   blog
//     .save()
//     .then((result) => res.send("blog created successfully."))
//     .catch((err) => console.log(err));
// });

app.get("/all", async (req, res) => {
  try {
    const allBlogs = await Blog.find().sort({ createdAt: -1 });
    res.send(allBlogs);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// connect to mongoDB & start server
const dbURI = process.env.DATABASE;
const port = 5000;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB".cyan.underline);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`.cyan.underline);
    });
  })
  .catch((err) => console.log(err));
