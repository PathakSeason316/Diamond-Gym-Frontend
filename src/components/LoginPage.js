import React,{useState} from "react";
import "../App.css";
import {ReactComponent as AdminImage} from '../assets/AdminImage.svg'


const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div class="split left">
        <h1 class="welcome1">Welcome to</h1>
        <h2 class="welcome2">Diamond Gym Monitoring System!!</h2>
        <div class="centered1">
          <AdminImage/>
        </div>
      </div>

      <div class="split right">
        <div class="centered2">
          <form className ="login_form">
            <input type="username" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="submit_btn">Login</button>
          </form>
        </div>
        <footer class="footer">@2021 Diamond Gym and Fitness</footer>
      </div>
    </>
  );
};

export default LoginPage;

