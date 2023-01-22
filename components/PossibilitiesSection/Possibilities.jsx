import Image from "next/image";
import React from "react";
import classes from "./Possibilities.module.css";
const Possibilities = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftImageContainer}>
        <Image src="/assets/possibility.png" width={400} height={400} />
      </div>
      <div className={classes.rightContainer}>
        <p className={classes.rightPara}>Request Early Access to Get Started</p>
        <h3 className={classes.rightHeading}>The possibilities are beyond your imagination</h3>
        <p className={classes.rightPara}>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className={classes.rightPara} style={{color:"#9b6d1b"}}>Request Early Access to Get Started</p>
      </div>
    </div>
  );
};

export default Possibilities;
