import React from 'react'
import Heading from '../../common/heading/Heading'
import './hero.css'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
          <div className="row">
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonanta, there lived the blind texts</p>

            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='primary-btn'>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>      
    </>
  )
}

export default Hero