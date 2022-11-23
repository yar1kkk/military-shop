import React from "react";
import Button from "../../shared/button/Button";
import Input from "../../shared/input/Input";
import "./RegisterPage.scss";

const RegisterPage = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeadPassword] = React.useState("");

  function handleRegister() {
    console.log("reg");
  }

  return (
    <div className="register">
      <div className="register__content">
        <h2>Register Now!</h2>
        <Input
          placeholder="Enter your full name"
          onChange={setFullName}
          value={fullName}
        />
        <Input
          placeholder="Enter your email"
          onChange={setEmail}
          value={email}
        />
        <div className="register__content-doubleinput">
          <div>
            <Input
              placeholder="Enter password"
              onChange={setPassword}
              value={password}
            />
          </div>
          <div>
            <Input
              placeholder="Repeat password"
              onChange={setRepeadPassword}
              value={repeatPassword}
            />
          </div>
        </div>
        <div className="register__content-button">
          <Button content="Sign up!" filled handler={handleRegister} />
        </div>
        <span>
          You already have an account? <a href="/login">Log in!</a>
        </span>
        <div className="register__content-back">
          <a href="/">&lt;-- BACK HOME</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
