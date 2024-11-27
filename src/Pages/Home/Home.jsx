import React from 'react'
import './Home.css'
import NavBar from '../../Components/NavBar/NavBar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <div className='hero'>
        <img src={hero_banner} alt='' className='banner-img'/>
        <div className='hero-caption'>
          <img src={hero_title} alt='' className='caption-img'/>
          <p>In a dystopian future, a young woman named Mara discovers an underground resistance group fighting against a totalitarian regime that controls every aspect of life. As she joins their ranks, Mara learns that her long-lost brother, presumed dead, is alive and works for the oppressive government. Torn between family loyalty and the greater cause, she navigates a dangerous game of deception, betrayal, and shifting alliances. As the revolution intensifies, Mara faces a harrowing choice: save her brother or risk everything to bring down the regime. In the end, the fight for freedom becomes a fight for humanity itself.</p>
          <div className='hero-btns'>
            <button className='btn'><img src={play_icon} alt=""/>Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt=""/>More Info</button>
          </div>
          <TitleCards/>
          </div>
      </div>
      <div className = 'more-cards'>
        <TitleCards title={'Blockbuster Movies'} category={'top_rated'}/>
        <TitleCards title={'Only On Netflix'} category={'popular'}/>
        <TitleCards title={'Upcoming'} category={'upcoming'}/>
        <TitleCards title={'Top Picks For You'} category={'now_playing'}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
