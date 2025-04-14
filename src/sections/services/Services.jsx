import './services.css'
import data from './data'

export const About = () => {
  return (
    <section id="about" className="about">
      {/* Hero Section */}
      <div className="about__hero">
        <div className="container">
          <h1 className="about__title">Welcome to AKME-K Medical Diagnostics</h1>
          <p className="about__subtitle">
            A cutting-edge organization offering top-notch clinical and diagnostic services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* About Section */}
        <div className="about__content">
          <div className="about__text">
            <p className="about__description">
              We are a health facility that offers first-class, affordably priced, quality diagnostic services in an effort to meet clients' diagnostic demands by utilizing highly skilled personnel and up-to-date technologies.
            </p>
            
            {/* Vision & Mission Cards */}
            <div className="about__statements">
              <div className="statement-card vision">
                <div className="statement-card__icon">👁️</div>
                <h3>Vision</h3>
                <p>A zenith bound clinical diagnostics centre for the betterment of every being.</p>
              </div>
              
              <div className="statement-card mission">
                <div className="statement-card__icon">🎯</div>
                <h3>Mission</h3>
                <p>To help improve medi-care through dedication to exceptional clinical diagnosis and research.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="about__services">
          <h2>Why Choose Us?</h2>
          <div className="services__grid">
            {data.map(item => (
              <div className="service-card" key={item.id}>
                <div className="service-card__icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About