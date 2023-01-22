import React from 'react'
import classes from './Footer.module.css'
const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.footerUpContent}>
            <h1 className={classes.footerMainHeading}>
            Do you want to step in to the future before others
            </h1>
            <button className={classes.btn}>Request Early Access</button>
        </div>
        <div className={classes.footerbottomContent}>
            <div className={classes.bottomLeftContent}>
                <h3 className={classes.logoText}>
                    GPT-3
                </h3>
                <p className={classes.logoSmallText}>
                Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                </p>
            </div>
            <div className={classes.bottomRightContent}>
                <div className={classes.linksContainer}>
                    <h4 className={classes.linksHeading}>Links</h4>
                    <p className={classes.linksPara}>Overons</p>
                    <p className={classes.linksPara}>Social Media</p>
                    <p className={classes.linksPara}>Contact</p>
                    <p className={classes.linksPara}>Counters</p>
                </div>
                <div className={classes.companyContainer}>
                    <h4 className={classes.linksHeading}>Company</h4>
                    <p className={classes.linksPara}>Privacy Policy</p>
                    <p className={classes.linksPara}>Terms and Conditions</p>
                    <p className={classes.linksPara}>Contact</p>
                </div>
                <div className={classes.getInTouchContainer}>
                    <h4 className={classes.linksHeading}>Get in Touch</h4>
                    <p className={classes.linksPara}>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p className={classes.linksPara}>085-132567</p>
                    <p className={classes.linksPara}>info@payment.net</p>
                </div>
            </div>
        </div>
        <p className={classes.allRightsReserved}>© 2021 GPT-3. All rights reserved.</p>
    </div>
  )
}

export default Footer