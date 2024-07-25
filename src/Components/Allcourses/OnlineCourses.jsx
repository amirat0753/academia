import React from 'react'
import './courses.css'
import { online } from '../../Data'
import Heading from '../Common/Heading/Heading'

const OnlineCourses = () => {
  return (
    <>
      <section className='online'> 
        <div className="container">
          <Heading subtitle='COURSES' title="browse our Online Courses" />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} alt="" />
                  <img src={val.hoverCover} alt="" className='show' />
                  <h1>{val.courseName}</h1>
                  <span>{val.course}</span>

                </div>

              </div>
            ))}
              
           
          </div>
          
       </div>
      </section>

    </>
  )
}

export default OnlineCourses