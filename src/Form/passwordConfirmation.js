import React from "react";

const PasswordConfirmation = Props => {
  return (
    <div className="form-group">
      <label>Password Confirmation</label>
      <br />
      <input
        type="password"
        className="password"
        placeholder="Password Confirmation"
        value={Props.passwordConf}
        onChange={Props.passwordConfHandler}
      />
      {Props.passwordConfErr && 
        <p className="input-error">{Props.passwordConfErr}</p>
      }
    </div>
  );
};

export default PasswordConfirmation;
