const handler = (req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url == "/") {
    res.write(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Practice Set 1</title>
                </head>
                <body>
                    <h1>Practice Set 1</h1>
                    <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/men">Men</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/kids">Kids</a></li>
                    <li><a href="/cart">Cart</a></li>
                    </ul>
                </body>
            </html>`);
  } else if (req.url.toLowerCase() == "/home") {
    res.write("<h1>This is Home page.</h1>");
  } else if (req.url.toLowerCase() == "/men") {
    res.write("<h1>This is Men page.</h1>");
  } else if (req.url.toLowerCase() == "/women") {
    res.write("<h1>This is Women page.</h1>");
  } else if (req.url.toLowerCase() == "/kids") {
    res.write("<h1>This is Kids page.</h1>");
  } else if (req.url.toLowerCase() == "/cart") {
    res.write("<h1>This is Cart page.</h1>");
  } else {
    res.write("<h1>This is Error Page.</h1>");
  }

  res.end();
};

module.exports = handler;
