import React from 'react'
import Header from '../Header/Header'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import style from './Home.module.css'
function Home() {
  return (
    <div className={style.home}>
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home