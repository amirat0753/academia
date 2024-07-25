import React from 'react'
import OnlineCourses from '../Allcourses/OnlineCourses'
import Heading from '../Common/Heading/Heading'
import '../Allcourses/courses.css'
import { coursesCard } from '../../Data'

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
         <div className="container">
          <Heading subtitle='our courses' title='explore our popular online courses' />

          <div className="coursesCard">
            <div className="grid2">
              {coursesCard.slice(0,3).map((val) => (
                <div className="items">
                  <div className="content flex">
                    <div className="flex">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <h1>{val.coursesName}</h1>
                      <div className="rate">
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor="">(5.0)</label>
                      </div>
                      <div className="details">
                        {val.courTeacher.map((details) => (
                          <>
                          <div className="box">
                            <div className="dimg">
                              <img src={details.dcover} alt="" />
                            </div>
                            <div className="para">
                              <h4>{details.name}</h4>
                            </div>
                          </div>
                          <span>{details.totalTime}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
         </div>
      </section>
    </>
  )
}

export default HAbout