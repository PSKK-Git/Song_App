import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        alt=""
      />
      <a href={loginUrl}>LOGIN TO SONGAPP</a>
    </div>
  );
}

export default Login;