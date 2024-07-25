import Heading from '../Common/Heading/Heading'
import './about.css'
import {homeAbout} from '../../Data'
import Awrapper from '../About/Awrapper'


const AboutCard = () => {
  return (
    <div>
      <section className='aboutHome'>
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.webp" alt="" />
          </div>

          <div>
            <Heading subtitle='LEARN ANYTHING' title='Benefit of Online Learning Expertise'/>
            <div className='items'>
              {homeAbout.map((val) => {
                <div className='item flexSB'>
                  <div className='img'>
                    <img src={val.cover} alt="" />
                  </div>
                  <div>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />

    </div>
  )
}

export default AboutCard