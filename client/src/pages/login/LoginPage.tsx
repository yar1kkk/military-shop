import React from "react";
import Button from "../../shared/button/Button";
import Title from "../../shared/title/Title";
import "./LoginPage.scss";

const LoginPage = () => {
  const [value, setValue] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit() {
    setValue("");
    setPassword("");
    console.log(`Login - ${value} \n password - ${password}`);
  }

  return (
    <div className="login">
      <div className="login__content">
        <Title />
        <h2 className="login__content-title">Enter your data</h2>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Username or email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <div className="login__content-button">
          <Button content="Log in" filled handler={handleSubmit} />
        </div>
        <p>
          Don&#39;t have your account yet?{" "}
          <a href="/register"> Register now!</a>
        </p>
        <span className="login__content-back">
          <a href="/">&lt;-- BACK TO HOME</a>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
