import React from 'react'
import HeroContainer from './Hero/HeroContainer'
import PopularClasses from './PopularClasses/PopularClasses'
import PopularTeacher from './PopularTeacher/PopularTeacher'

const Home = () => {
  return (
    <section className=''>
        <HeroContainer/>
        <div className='max-w-screen-xl mx-auto'>
        <PopularClasses/>
        <PopularTeacher></PopularTeacher>
        </div>
    </section>
  )
}

export default Home
