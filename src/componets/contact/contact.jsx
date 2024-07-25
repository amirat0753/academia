import React from 'react'
import Back from '../common/back/Back'
import './contact.css'

const Contact = () => {
    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094247!2d144.95373531531674!3d-37.81627937975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f7aefca5670!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1653295766742!5m2!1sen!2sau";

  return (
    <>
    <Back title = 'Contact Us'/>
    <section className='contacts padding'>
        <div className='container shawdow flexSB'>
            <div className='left row'>
                <iframe src={map}></iframe>
            </div>

            <div className='right now'>
                <h1>Contact Us</h1>
                <p>We're open for any suggestion or just to have a chat</p>

                <div className='items grid2'>
                    <div className='box'>
                        <h4>ADDRESS</h4>
                        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>

                    <div className='box'>
                        <h4>Email</h4>
                        <p>info@yoursite.com</p>
                    </div>

                    <div className='box'>
                        <h4>PHONE</h4>
                        <p>+ 1235 2355 98</p>
                    </div>

                </div>

                <form>
                    <div className="flexSB">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <input type="text" placeholder="Subject" />
                    <textarea name="" id="" cols='30' rows='10'>
                    Creating a message here
                    </textarea>
                    <button className="primary-btn">SEND MESSAGE</button>
                
                </form>

                <h3>Follow us here</h3>
                <span>FACEBOOK TWITTER INSTAGRAM BRIBBLE</span>


            </div>
        </div>
    </section>

    </>
  )
}

export default Contact