import './contacts.css'
import Card from '../../components/Card'
import data from './data'

const Contacts = () => {
  const formatContactInfo = (item) => {
    if (item.title === 'EMAIL') {
      const emails = item.desc.split('; ');
      return (
        <p>
          {emails.map((email, index) => (
            <>
              <a href={`mailto:${email.trim()}`} className="contact-link">
                {email.trim()}
              </a>
              {index < emails.length - 1 && '; '}
            </>
          ))}
        </p>
      );
    } else if (item.title === 'EMERGENCY') {
      const phones = item.desc.split('; ');
      return (
        <p>
          {phones.map((phone, index) => (
            <>
              <a href={`tel:${phone.trim()}`} className="contact-link">
                {phone.trim()}
              </a>
              {index < phones.length - 1 && '; '}
            </>
          ))}
        </p>
      );
    }
    return <p>{item.desc}</p>;
  };

  return (
    <section id='contacts'>
      <div className="container contacts__container">
        <div className="contacts__right">
          <h2>CONTACT US </h2>
          <p>We are a health facility that offers first-class, affordably priced, quality diagnostic services in an effort to meet clients' diagnostic demands by utilizing highly skilled personnel and up-to-date technologies.</p>
        </div>

        <div className="contacts__left">
          <div className="contacts__cards">
            {data.map(item => (
              <Card key={item.id} classname='contacts__card'>
                <span className='contacts__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                {formatContactInfo(item)}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts