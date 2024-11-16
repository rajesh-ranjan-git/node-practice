const sumRequestHandler = (req, res) => {
  const inputBuffer = [];
  req.on("data", (chunk) => inputBuffer.push(chunk));

  req.on("end", () => {
    const jsonParamObject = Object.fromEntries(
      new URLSearchParams(Buffer.concat(inputBuffer).toString())
    );

    const result = Number(jsonParamObject.num1) + Number(jsonParamObject.num2);

    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Calculated Sum : ${result}</h1>`);
    return res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;
