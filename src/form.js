import React, { Component } from "react";
import EmailInput from "./Form/email";
import Password from "./Form/password";
import PasswordConfirmation from "./Form/passwordConfirmation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGithub } from "@fortawesome/free-brands-svg-icons";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailErr: "",
      password: "",
      passwordErr: "",
      passowrdConfirmation: "",
      passwordConfirmationErr: "",
    };
    this.emailInputHandler = this.emailInputHandler.bind(this);
    this.passwordInputHandler = this.passwordInputHandler.bind(this);
    this.passwordConfirmationHandler = this.passwordConfirmationHandler.bind(
      this
    );
    this.validateForm = this.validateForm.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  // Function for handling the email input
  emailInputHandler(e) {
    this.setState({
      email: e.target.value,
      emailErr: "",
    });
  }

  // Function for handling the password input
  passwordInputHandler(e) {
    this.setState({
      password: e.target.value,
      passwordErr: "",
    });
  }

  // Function for handling the confirmation password input
  passwordConfirmationHandler(e) {
    this.setState({
      passwordConfirmation: e.target.value,
      passwordConfirmationErr: "",
    });
  }

  // Function for validating the form
  validateForm(e) {
    e.preventDefault();

    // Condition for checking the email address is in the correct format
    if (!this.validateEmail(this.state.email)) {
      this.setState({
        emailErr: "The email addrress is incorrect !",
      });
    }

    // Condition for checking whether the password entered is of atleast 8 characters or not
    if (this.state.password.length < 8) {
      this.setState({
        passwordErr: "The password should be of atleast 8 or more characters.",
      });
    }

    // Condition for checking the actual password is not empty and it's same as the confirmation password
    if (
      this.state.password.length <= 0 &&
      this.state.password !== this.state.passowrdConfirmation
    ) {
      console.log(this.state.password);
      console.log(this.state.passowrdConfirmation);
      this.setState({
        passwordConfirmationErr:
          "The confirmation password is not the same as the actual password.",
      });
    }

    // Timeout function for confirming successful submission of the form
    setTimeout(() => {
      if (
        !this.state.emailErr &&
        !this.state.passwordErr &&
        !this.state.passwordConfirmationErr
      ) {
        alert("Form Submission Status: Success.");
      } else {
        alert("Form Submission Status: Failure.");
      }
    }, 1000);
  }

  // Function for checking the format of the user email address
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    const codeIcon = "</>";
    return (
      <div className="main-div">
        <div className="heading-div">
          Form Validation Component in{" "}
          <span className="reactjs-span">
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReactJS <FontAwesomeIcon icon={faReact} />
            </a>
          </span>
        </div>
        <form action="" onSubmit={this.validateForm}>
          <EmailInput
            email={this.state.email}
            emailErr={this.state.emailErr}
            emailInputHandler={this.emailInputHandler}
          />

          <Password
            password={this.state.password}
            passwordErr={this.state.passwordErr}
            passwordInputHandler={this.passwordInputHandler}
          />

          <PasswordConfirmation
            passwordConf={this.state.passwordConfirmation}
            passwordConfErr={this.state.passwordConfirmationErr}
            passwordConfHandler={this.passwordConfirmationHandler}
          />

          <button className="signUpButton" type="submit">
            Sign up
          </button>
        </form>
        <div className="footer-div">
          <div className="footer">
            {codeIcon} by{" "}
            <a
              href="https://github.com/AnonSar"
              target="_blank"
              rel="noopener noreferrer"
            >
              AnonSar
              <FontAwesomeIcon className="github-icon" icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
