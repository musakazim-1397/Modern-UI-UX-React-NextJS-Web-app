import React from "react";
import classes from "./HeroSection.module.css";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <h1 className={classes.heroMainHeading}>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p className={classes.heroMainPara}>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className={classes.emailInputSection}>
            <input className={classes.emailInput} placeholder='Your Email Address'/>
            <button className={classes.emailButton} type="submit">Get Started</button>
        </div>
        <div className={classes.peopleSection}>
            <Image src='/assets/people.png' alt="people" width={120} height={28}/>
            <p style={{fontSize:'11px', marginLeft:'4px'}}>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.rightImageContainer}>
            <Image src='/assets/ai.png' height={400} width={400}/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
