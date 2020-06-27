import React from "react";

const EmailInput = Props => {
  return (
    <div className="form-group">
      <label>Email</label>
      <br />
      <input
        type="email"
        className="username"
        placeholder="Email"
        value={Props.email}
        onChange={Props.emailInputHandler}
      />
      {Props.emailErr && <p className="input-error"> {Props.emailErr} </p>}
    </div>
  );
};

export default EmailInput;
