import './services.css'
import Image from '../../assets/IMG-20230305-WA0035.jpg'
import Card from '../../components/Card'
import data from './data'

export const About = () => {
  return (
   <section id='about'>
    <div className="container about__container">

      <div className="about__right">
        <h2>WELCOME TO AKME-K MEDICAL DIAGNOSTICS! </h2>
        <p>We are a cutting-edge organization that offers top-notch clinical and diagnostic services.
            Our services are consistently reliable, timely, and accurate.</p>
        <p>We are a health facility that offers first-class, affordably priced, quality diagnostic services in an effort to meet clients' diagnostic demands by utilizing highly skilled personnel and up-to-date technologies.</p>

        <h3>Vision</h3>
        <p>A zenith bound clinical diagnosis centre for the betterment of every being.</p>

        <h3>Mission</h3>
        <p>To help improve medi-care through dedication to exceptional clinical diagnosis and research.</p>
      </div>

      <div className="about__left">
      <h2>WHY CHOOSE  US?</h2>
        <div className="about__cards">
          {
            data.map(item => (
              <Card key={item.id} classname='about__card'>
                <span className='about__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </Card>
            ))
          }
        </div>
      </div>
    </div>
   </section>
  )
}

export default About