import './footer.css'
import Image from '../../assets/AkmeK Logo_094612.png'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container"> 
          <article>
            <a href="/" className='logo'>
             <img src={Image} alt="Logo" />
            </a>
            <h2>Akme-K Medical Diagnosis</h2>
            <p>...because we truly care</p>
          </article>
          <div className="footer__copyright"> 
            <small>2023 Akme-K Medical Diagnosis &copy; All Right Reserved</small>
          </div>
        </div>
    </footer>
  )
}

export default Footer