import './header.css'
import Card from '../../components/Card'

export const Header = () => {
    return (
        <header className='man__header'>
            <div className="container main__header-container">
                <div className="man__header-left">
                   <Card>
                   <h1>OUR SERVICES</h1>
                   </Card>
                </div>

                
            </div>
        </header>
      )
}

export default Header