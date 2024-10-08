import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div>
        <h2 className ="text-5x1 text-center">Login Page</h2>

       <button className="submit-btn">Login Button</button> 

       <button className={classes.btn}>another button</button>
    </div>
  )
}

export default Login;
