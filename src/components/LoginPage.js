import React from "react";
import "../App.css";
import {ReactComponent as AdminImage} from '../assets/AdminImage.svg'

const LoginPage = () => {
  return (
    <>
      <div class="split left">
        <h1 class="welcome">Welcome to</h1>
        <h2 class="welcome">Diamond Gym Monitoring System!!</h2>
        <div class="centered">
          <AdminImage/>
        </div>
      </div>

      <div class="split right">
        <div class="centered"></div>
      </div>
    </>
  );
};

export default LoginPage;

