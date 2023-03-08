import './body.css'
import Card from '../../components/Card'
import data from './data'


export const Body = () => {
  return (
   <section id='body'>
    <div className="container body__container">
    <div className="body__left">
    <h4>We are a cutting-edge organization that offers top-notch clinical and diagnostic medical services.
           </h4>
    <h4> Our services are consistently reliable, timely, and accurate and come at an affordable price.</h4>       
    <div className="body__cards">
          {
            data.map(item => (
              <Card key={item.id} classname='body__card'>
                <span className='body__card-icon'>{item.icon}</span>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </Card>
            ))
          }
        </div>
        <h4> We also offer:</h4>
        <ol>
          <li>E.C.G</li>
          <li>Coagulation tests</li>
          <li>Hormonal assay</li>
          <li>Screening for food handlers / house attendants</li>
          <li>Screening for day care givers</li>
          <li>Vaccines and more</li>
        </ol>
    </div>
    </div>
   </section>
  )
}

export default Body