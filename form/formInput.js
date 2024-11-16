const formInput = `<h1>Provide details...</h1>
    <form action="/user-action" method="POST">
      <label for="name">Enter your Name : </label>
      <input type="text" name="name" id="name" placeholder="Enter name..." />
      <br /><br />
      <label for="gender">Male</label>
      <input type="radio" name="gender" id="male" value="male" />
      <label for="gender">Female</label>
      <input type="radio" name="gender" id="female" value="female" />
      <br /><br />
      <button type="submit">Submit</button>
    </form>`;

exports.formInput = formInput;
