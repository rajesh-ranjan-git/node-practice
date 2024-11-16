import express from "express";

const server = express();

server.use("/", (req, res, next) => {
  console.log("First middleware");
  console.log("req.url : ", req.url);
  console.log("req.method : ", req.method);
  next();
});

server.use("/", (req, res, next) => {
  console.log("Second middleware");
  next();
});

// server.use("/", (req, res, next) => {
//   console.log("Third middleware");
//   res.send(`<h1>From Third Middleware</h1>`);
// });

server.get("/", (req, res, next) => {
  console.log("Fourth middleware");
  res.send(`<a href="/contact-us">Go To Contact Us Form</a>`);
});

server.get("/contact-us", (req, res, next) => {
  console.log("Fifth middleware");
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Us Form</title>
  </head>
  <body>
    <h1>Contact US Form</h1>
    <br />
    <form action="/contact-us" method="POST">
      <label for="name">Name : </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name..."
      />
      <br /><br />
      <label for="email">Email : </label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Enter your email..."
      />
      <br /><br />
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>`);
});

server.post("/contact-us", (req, res, next) => {
  res.send("<h1>This is from Contact us form.</h1>");
});

const PORT = process.env.PORT || 8001;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
