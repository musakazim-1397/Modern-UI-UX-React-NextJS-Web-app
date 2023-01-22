import React from 'react'
import classes from './Navbar.module.css';
import Link from 'next/link';
import {RiMenu4Line} from 'react-icons/ri';
const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className={classes.container}>
        <div className={classes.left}>
            <Link href="/"><a className={classes.logoText}>GPT-3</a></Link>
            <Link href="/"><a className={classes.navText}>Home</a></Link>
            <Link href="/"><a className={classes.navText}>What is GPT</a></Link>
            <Link href="/"><a className={classes.navText}>Open AI</a></Link>
            <Link href="/"><a className={classes.navText}>Case Studies</a></Link>
            <Link href="/"><a className={classes.navText}>Library</a></Link>
        </div>
        <div className={classes.right}>
            <button className={classes.loginBtn}>Sign In</button>
            <button className={classes.signupBtn}>Sign Up</button>
        </div>
        <div className={classes.menu}>
            <RiMenu4Line color='white' size={30} onClick={()=>setShowMenu(prevState=>!prevState)}/>
           {showMenu && <div className={classes.menuContainer}>
            <Link href="/" style={{ borderBottom: '1px solid #0c0c0c'}}><a className={classes.menuItem}>Home</a></Link>
            <Link href="/" style={{ borderBottom: '1px solid #0c0c0c'}}><a className={classes.menuItem}>What is GPT</a></Link>
            <Link href="/" style={{ borderBottom: '1px solid #0c0c0c'}}><a className={classes.menuItem}>Open AI</a></Link>
            <Link href="/" style={{ borderBottom: '1px solid #0c0c0c'}}><a className={classes.menuItem}>Case Studies</a></Link>
            <Link href="/" style={{ borderBottom: '1px solid #0c0c0c'}}><a className={classes.menuItem}>Library</a></Link>
            <button className={classes.menuLoginBtn}>Sign In</button>
            <button className={classes.menuSignupBtn}>Sign Up</button>
            </div>}
        </div>
    </div>
  )
}

export default Navbar