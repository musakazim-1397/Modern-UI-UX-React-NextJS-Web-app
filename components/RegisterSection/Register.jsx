import React from 'react'
import classes from './Register.module.css';
const Register = () => {
  return (
    <div className={classes.container}>
        <div className={classes.registerContainer}>
            <div className={classes.leftSide}>
                <p className={classes.para}>Request Early Access to Get Started</p>
                <h2 className={classes.heading}>Register today &amp; start exploring the endless possiblities.</h2>
            </div>
            <div className={classes.rightSide}>
                <button className={classes.btn}>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Register