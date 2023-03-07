import './navbar.css'
import {useState} from 'react'
import Logo from '../../assets/AkmeK Logo_094612.png'
import data from './data'
import {AiOutlineBars} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
    return (
      <nav>   
          <div className="container nav__container">
            <a href="/" className='nav__logo'>
              <img src={Logo} alt="Logo" />
            </a>
            <ul className={`nav__menu ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
              {
                data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
              }
            </ul>
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                  {
                      isNavShowing ? <AiOutlineClose/> : <AiOutlineBars/>
                  }
            </button>
          </div>
      </nav>
    )
  }
export default Navbar