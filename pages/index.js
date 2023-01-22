import BlogSection from '../components/BlogSection/BlogSection'
import Brands from '../components/BrandsSection/Brands'
import Footer from '../components/Footer/Footer'
import FutureSection from '../components/FutureSection/FutureSection'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Possibilities from '../components/PossibilitiesSection/Possibilities'
import Register from '../components/RegisterSection/Register'
import WhatIsGPT from '../components/WhatIsGPT/WhatIsGPT'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <HeroSection/>
      <Brands/>
      <WhatIsGPT/>
      <FutureSection/>
      <Possibilities/>
      <Register/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}
