import React from 'react'
import Back from '../Common/Back/Back'
import './Contact.css'
const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3|1d904726.613173954912d85.2456553513d27.65273865|2m311f0|2f013f0|3m2|111024|21768|4f13.115013m2/1sen|2sp|4v1652535615693|5m2!1sen! 2sp" width="600" height="450" style="border:0;* allowfullscreen="* loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
  return (
    <>
      <Back title='Contact Us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>

          </div>
          <div className="right">
            <h1>Contact Us</h1>
            <p>We're open to any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, suite 721 New York NY 10016</p>
              </div>

                <div className="box">
                <h4>Email:</h4>
                <p>info@yoursite.com</p>
              </div>
              
               <div className="box">
                <h4>PHONE:</h4>
                <p>+ 1235 2355 98</p>
             </div>

            </div>

            <form>
              <div className="flexSB">
                <input type="text" placeholder='Name' />
                  <input type="text"  placeholder='Email'/>
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols="30" rows="10">
                Creating a messsage here
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>

            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
            
           </div>
        </div>

      </section>
    </> 
  )
}

export default Contact