import React, { useState, useEffect } from 'react'
import Login from './Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  const [originalUsername, setOriginalUsername] = useState(undefined);
  const [originalPassword, setOriginalPassword] = useState(undefined);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const pwd = localStorage.getItem("pwd");
    if (user && pwd) {
      setOriginalUsername(user);
      setOriginalPassword(pwd);
    }
  }, []);

  return (
    <div id="main">
      <Login />
      {/* {originalUsername && originalPassword ? <Login /> : <Signup/>} */}
    </div>
  );
}



