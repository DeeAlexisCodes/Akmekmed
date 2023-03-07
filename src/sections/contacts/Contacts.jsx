import './contacts.css'
import Card from '../../components/Card'
import data from './data'

const Contacts = () => {
  return (
    <section id='contacts'>
      <div className="container contacts__container">
      <div className="contacts__right">
        <h2>CONTACT US </h2>
        <p>We are a health facility that offers first-class, affordably priced, quality diagnostic services in an effort to meet clients' diagnostic demands by utilizing highly skilled personnel and up-to-date technologies.</p>
      </div>

      <div className="contacts__left">
        <div className="contacts__cards">
          {
            data.map(item => (
              <Card key={item.id} classname='contacts__card'>
                <span className='contacts__card-icon'>{item.icon}</span>
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

export default Contacts