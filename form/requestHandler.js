const fs = require("fs");
const { errorPage } = require("./errorPage");
const { formInput } = require("./formInput");

const requestHandler = (req, res) => {
  console.log("req.method : ", req.method);
  console.log("req.url : ", req.url);
  res.setHeader("Content-Type", "text/html");

  if (req.url.toLowerCase() == "/") {
    res.write(formInput);
  } else if (
    req.url.toLowerCase() === "/user-action" &&
    req.method === "POST"
  ) {
    const data = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      data.push(chunk);
    });

    req.on("end", () => {
      console.log("data : ", data);

      const parsedData = Buffer.concat(data).toString();
      console.log("parsedData : ", parsedData);

      const params = new URLSearchParams(parsedData);
      console.log(params);

      const jsonObjectData = {};
      for (const [key, value] of params.entries()) {
        jsonObjectData[key] = value;
      }
      console.log(jsonObjectData);

      fs.writeFileSync("user-details.txt", JSON.stringify(jsonObjectData));
    });

    res.setHeader("Location", "/");
    res.statusCode = 302;
    return res.end();
  } else {
    res.write(errorPage);
  }

  res.end();
};

module.exports = requestHandler;
