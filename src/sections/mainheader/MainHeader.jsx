import './mainheader.css'
import Card from '../../components/Card'

export const MainHeader = () => {
  return (
    <header className='main__header'>
        <div className="container main__header-container">
            <div className="main__header-left">
               <Card>
               <h1>AKME-K MEDICAL DIAGNOSTICS</h1>
                <p>...because we truly care</p>
                <h4>Leading diagnostic center with top-notch equipment and professionals that offer great medical investigations. We provide 24-hours access to a medical laboratory, radiology (X-Ray and Ultrasound scan) and a dental clinic.</h4>
                <div className="main__header-cta">
                  <div className="first__cta">
                    <a href="/Services" className='btn primary'>Contact Us</a>
                 </div>
                </div>
               </Card>
            </div>
        </div>
    </header>
  )
}

export default MainHeader