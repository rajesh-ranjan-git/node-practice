const calculator = `<h1>Sum Calculator</h1>
    <form action="/calculate-result" method="POST">
      <label for="num1">Enter first number : </label>
      <input type="text" name="num1" id="num1" placeholder="num1..." />
      <br /><br />
      <label for="num2">Enter second number : </label>
      <input type="text" name="num2" id="num2" placeholder="num2..." />
      <br /><br />
      <button type="submit">Sum</button>
    </form>`;

exports.calculator = calculator;
