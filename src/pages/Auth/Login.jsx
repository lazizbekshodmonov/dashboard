import { useRef, useState } from "react";
import "../../Scss/login.scss";
import logo from "./logo.svg";
import hide from "../../icons/invisible.svg";
import show from "../../icons/view.svg";
import http from "../../services/http";

const Login = ({ setToken }) => {
  const email = useRef(""),
    password = useRef("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(true);

  function setInput(e) {
    e.preventDefault();
    setLoader(true);
    http
      .post("/login", {
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        setError(true);
        setToken(res.data.token);

        window.localStorage.setItem("token", res.data.token);
      })
      .catch(() => {
        setError(false);
      })
      .finally(() => {
        setLoader(false);
      });
  }

  const [passwordType, setPasswordType] = useState(true);

  return (
    <div className="login">
      <div className="login_card">
        <img src={logo} alt="" />
        <p className="text">Dashboard Kit</p>
        <h2 className="tite">Log In to Dashboard Kit</h2>
        <p className="text_email">
          Enter your email and password below
          <span>{error ? "" : "Email or password is incorrect!"}</span>
        </p>
        <form
          onSubmit={(e) => {
            setInput(e);
          }}
          className="form"
        >
          <div className="email">
            <label htmlFor="exampleInputEmail1" className="form_label">
              Email
            </label>
            <input
              ref={email}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email address"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="password">
            <label htmlFor="exampleInputPassword1" className="form_label">
              Password
            </label>
            <input
              ref={password}
              type={passwordType ? "password" : "text"}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <img
              className="passwordType"
              src={passwordType ? hide : show}
              alt=""
              onClick={() => setPasswordType(!passwordType)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {loader ? "loading..." : "Log in"}
          </button>
        </form>
        <div className="text_sign_up">
          <p className="question">Don’t have an account?</p>
          <p className="sign_up">Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
