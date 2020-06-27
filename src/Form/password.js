import React from "react";

const Password = Props => {
  return (
    <div className="form-group">
      <label>Password (<strong>NOTE:</strong> The password should be of atleast 8 or more characters.)</label>
      <br />
      <input
        type="password"
        className="password"
        placeholder="Password"
        value={Props.password}
        onChange={Props.passwordInputHandler}
      />
      {Props.passwordErr && 
      <p className="input-error">{Props.passwordErr}</p>}
    </div>
  );
};

export default Password;
