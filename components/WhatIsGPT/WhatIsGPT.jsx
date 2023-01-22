import React from "react";
import classes from "./WhatIsGPT.module.css";
const WhatIsGPT = () => {
  return (
    <div className={classes.container}>
      <div className={classes.gptContainer}>
        <div className={classes.gptHeader}>
          <div className={classes.headerLeft}>
            <h2
              className={`${classes.headingWithTopBorder} ${classes.heading}`}
            >
              What
            </h2>
            <h2 className={classes.heading}> is GPT-3</h2>
          </div>
          <div className={classes.headerRight}>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </div>
        </div>
        <div className={classes.gptMid}>
          <h2 className={classes.midGradientText}>
            The possibilities are beyond your imagination
          </h2>
          <p className={classes.midGradientText}>Explore The Library</p>
        </div>
        <div className={classes.gptBottom}>
          <div className={classes.cardContainer}>
            <h2 className={`${classes.headingWithTopBorder}`}>Chatbots</h2>
            <p className={classes.cardText}>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </p>
          </div>
          <div className={classes.cardContainer}>
            <h2 className={`${classes.headingWithTopBorder}`}>Knowledgebase</h2>
            <p className={classes.cardText}>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments.
            </p>
          </div>
          <div className={classes.cardContainer}>
            <h2 className={`${classes.headingWithTopBorder}`}>Education</h2>
            <p className={classes.cardText}>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsGPT;
