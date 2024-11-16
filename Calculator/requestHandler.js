const { calculator } = require("./calculator");
const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write(`<h1>Welcome to Calculator!</h1>
        <br>
        <br>
        <a href="/calculator">Go to Calculator</a>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.write(calculator);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    sumRequestHandler(req, res);
  } else {
    res.write("<h1>Oops! You are not supposed to be here.</h1>");
    return res.end();
  }
};

module.exports = requestHandler;
