import React from 'react'
import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div>

      <button className="submit-btn">Login button</button>

      <button className={classes.btn}>Local CSS</button>

    </div>
  )
}

export default Login;