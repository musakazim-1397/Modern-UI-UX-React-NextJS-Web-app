import Image from 'next/image';
import React from 'react'
import classes from './Brands.module.css';
const Brands = () => {
  return (
    <div className={classes.container}>
        <div className={classes.brandIcon}>
            <Image src={'/assets/google.png'} width={120} height={50}/>
        </div>
        <div className={classes.brandIcon}>
            <Image src={'/assets/slack.png'} width={120} height={50}/>
        </div>
        <div className={classes.brandIcon}>
            <Image src={'/assets/atlassian.png'} width={120} height={50}/>
        </div>
        <div className={classes.brandIcon}>
            <Image src={'/assets/dropbox.png'} width={120} height={50}/>
        </div>
        <div className={classes.brandIcon}>
            <Image src={'/assets/shopify.png'} width={120} height={50}/>
        </div>
    </div>
  )
}

export default Brands