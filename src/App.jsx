import { useEffect } from 'react';
import './index.css';
import hammerNailsImg from './assets/hammer_nails.png';
import rollerScrewsImg from './assets/roller_screws.png';
import fixiLogoImg from './assets/fixi-logo.png';
import babyImg from './assets/baby_care.png';
import elderImg from './assets/elder_care.png';
import babyImg2 from './assets/baby_care_lifestyle.png';
import elderImg2 from './assets/elder_care_lifestyle.png';
import domesticImg from './assets/domestic_help.png';
import appPreviewImg from './assets/PHOTO-2026-04-10-18-13-24.jpg';

// SVGs mapped out for standard elements
const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.42 12.33c-.02-2.18 1.77-3.23 1.85-3.28-1.02-1.49-2.6-1.7-3.14-1.73-1.34-.13-2.61.79-3.3.79-.69 0-1.73-.77-2.83-.75-1.42.02-2.73.82-3.46 2.09-1.49 2.58-.38 6.42 1.07 8.52.71 1.02 1.54 2.16 2.65 2.12 1.06-.04 1.48-.68 2.76-.68 1.28 0 1.66.68 2.78.66 1.14-.02 1.85-1.04 2.55-2.06.82-1.19 1.15-2.35 1.17-2.41-.02-.01-2.25-.86-2.27-3.27zm-1.89-6.3c.59-.71.98-1.7.87-2.69-.85.03-1.91.56-2.52 1.27-.54.62-.99 1.63-.86 2.6.94.07 1.92-.47 2.51-1.18z"/>
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.5 2.5v19l14-9.5-14-9.5z" fill="#7BB2DD"/>
    <path d="M3.5 2.5v19L20 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M8 12l3 3 5-6" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18M8 14h2M14 14h2" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.6.8 1 1.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

const SignalIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 21l-8-8c2-2.5 5-4 8-4s6 1.5 8 4l-8 8z" />
  </svg>
);

const WifiIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 21l-2-2c1.5-1.5 2.5-1.5 4 0l-2 2zm0-4.5l-4.5-4.5c3-2.5 6-2.5 9 0L12 16.5zm0-4.5l-7-7c4.5-4 9.5-4 14 0l-7 7z" />
  </svg>
);

const BatteryIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" width="16" height="16">
    <rect x="2" y="7" width="16" height="10" rx="2" />
    <path d="M22 11v2" />
    <rect x="4" y="9" width="12" height="6" fill="currentColor" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" width="20" height="20">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const RepairClockIcon = () => (
  <svg viewBox="0 0 100 100" className="repair-card-icon">
    <circle cx="50" cy="50" r="45" fill="#f8a44d" />
    <circle cx="50" cy="50" r="38" fill="#7cc0b5" />
    <text x="50" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="system-ui">24/7</text>
    <path d="M50 20 L50 40 M55 40 L70 40" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <rect x="42" y="80" width="16" height="4" rx="2" fill="#555" />
    <rect x="35" y="15" width="6" height="12" rx="3" fill="#f8a44d" transform="rotate(-30 38 20)" />
    <rect x="59" y="15" width="6" height="12" rx="3" fill="#f8a44d" transform="rotate(30 62 20)" />
  </svg>
);

const RepairTagIcon = () => (
  <svg viewBox="0 0 100 100" className="repair-card-icon">
    <path d="M20 50 L50 20 L85 20 L85 80 L50 80 Z" fill="#f8a44d" />
    <path d="M25 50 L50 25 L80 25 L80 75 L50 75 Z" fill="#008a4e" />
    <circle cx="40" cy="40" r="4" fill="white" />
    <text x="58" y="58" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="system-ui">$</text>
    <path d="M40 35 L30 25 C25 20 15 20 10 25 C5 30 5 40 10 45 L20 55" fill="none" stroke="#f8a44d" strokeWidth="3" />
  </svg>
);

const RepairToolsIcon = () => (
  <svg viewBox="0 0 100 100" className="repair-card-icon">
    <path d="M20 70 L40 50 L50 60 L30 80 Z" fill="#555" />
    <path d="M40 50 L50 40 C55 35 65 35 70 40 L75 45 C80 50 80 60 75 65 L70 70" fill="none" stroke="#555" strokeWidth="6" strokeLinecap="round" />
    <path d="M60 70 L90 40 L80 30 L50 60 Z" fill="#00a8cc" />
    <circle cx="75" cy="45" r="4" fill="white" />
    <path d="M25 65 C25 45 40 30 50 30 C60 30 75 45 75 65 L25 65" fill="#f8a44d" />
  </svg>
);

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <header className="header scroll-reveal fade-in">
        <div className="logo-container">
          <img src={fixiLogoImg} alt="FixiHelp Logo" className="logo-image" />
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
        </nav>
        <button className="btn-primary">Coming soon</button>
      </header>

      <main>
        <section className="hero scroll-reveal fade-up">
          <h1>Find verified baby and <br/> elder care pros <br/> instantly.</h1>
          <p>Hire background-checked nannies, caregivers, and specialized care experts direct—no agents.</p>
          
          <div className="store-buttons">
            <button className="store-btn">
              <AppleIcon />
              <div className="store-btn-text">
                <span className="store-btn-sub">Download on the</span>
                <span className="store-btn-main">App Store</span>
              </div>
            </button>
            <button className="store-btn">
              <PlayIcon />
              <div className="store-btn-text">
                <span className="store-btn-sub">GET IT ON</span>
                <span className="store-btn-main">Google Play</span>
              </div>
            </button>
          </div>
        </section>

        <section className="content-area">
          <div className="theme-bottom-bg"></div>
          
          {/* High-fidelity Hammer and Nails illustration leaning behind the phone */}
          <div className="floating-element float-hammer-nails">
             <img src={hammerNailsImg} alt="Hammer and Nails" style={{ width: '320px', height: 'auto' }} />
          </div>
          <div className="floating-element float-roller-screws">
             <img src={rollerScrewsImg} alt="Roller and Screws" style={{ width: '320px', height: 'auto' }} />
          </div>
          <div className="floating-element float-screw-1">
             <svg width="50" height="50" viewBox="0 0 50 50">
               <path d="M15,35 L30,10" stroke="#777" strokeWidth="4" strokeLinecap="round" />
               <ellipse cx="32" cy="10" rx="10" ry="4" fill="#555" transform="rotate(-30 32 10)" />
             </svg>
          </div>
          
          <div className="phone-wrapper">
            <div className="phone-mockup with-app-capture" style={{ backgroundImage: `url(${appPreviewImg})`, backgroundSize: 'cover', backgroundPosition: 'center 40px', backgroundRepeat: 'no-repeat', backgroundColor: '#fff' }}>
              <div className="phone-status-bar">
                <span>9:41</span>
                <div className="status-icons">
                  <SignalIcon />
                  <WifiIcon />
                  <BatteryIcon />
                </div>
              </div>
              <div className="dynamic-island"></div>
              
              <div className="app-safe-area-top"></div>
              <div className="phone-home-indicator"></div>
            </div>
          </div>

          <div className="content-inner">
            <div className="left-text">
              <h2>How FixiHelp helps your family?</h2>
            </div>
            
            <div className="right-features">
              <div className="feature-item scroll-reveal fade-in stagger-1">
                <div className="feature-icon">
                  <SettingsIcon />
                </div>
                <div className="feature-text">Specialized on-demand baby & elder care</div>
              </div>
              
              <div className="feature-item scroll-reveal fade-in stagger-2">
                <div className="feature-icon">
                  <CalendarIcon />
                </div>
                <div className="feature-text">Verified nannies, caregivers & professional experts</div>
              </div>
              
              <div className="feature-item scroll-reveal fade-in stagger-3">
                <div className="feature-icon">
                  <CheckIcon />
                </div>
                <div className="feature-text">No middlemen—connect directly with pros</div>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-intro">
            <h2>
              FixiHelp is building a future of <span className="highlight-orange">specialized baby and elder care</span>, 
              preparing to meet the unique needs of every modern family. 
              We are currently in our pre-market phase, laying the foundations 
              for a revolution in compassionate care and specialized nanny support.
            </h2>
          </div>

          <div className="info-grid">
            <div className="info-card card-teal scroll-reveal fade-up stagger-1">
              <div className="card-icon-circle seal-teal">
                <CheckIcon />
              </div>
              <h3>500+ Families on Early-Access Waitlist</h3>
              <p>Significant early demand as we prepare to connect families with expert nanny and specialized care support.</p>
            </div>

            <div className="info-card card-image scroll-reveal fade-up stagger-2">
              <img src={babyImg} alt="Specialized Baby Care" />
              <div className="card-overlay">
                <div className="overlay-badge">
                   <SettingsIcon />
                   <span>Expert-Led Nanny Infrastructure</span>
                </div>
              </div>
            </div>

            <div className="info-card card-yellow scroll-reveal fade-up stagger-3">
              <div className="card-icon-circle seal-yellow">
                <StarIcon />
              </div>
              <h3>95% Positive Market Validation</h3>
              <p>Extensive pre-launch research confirms a high need for reliable, professional, and compassionate home care.</p>
            </div>

            <div className="info-card card-image scroll-reveal fade-up stagger-4">
              <img src={elderImg} alt="Compassionate Elder Care" />
              <div className="card-overlay">
                <div className="overlay-badge">
                   <span>Future-Ready Senior Care</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="care-management-section">
          <div className="care-intro">
            <h2>Comprehensive care and home management <br/> for your family, right now!</h2>
          </div>

          <div className="care-grid">
            <div className="care-card scroll-reveal fade-up stagger-1">
              <div className="care-card-image-wrapper">
                <img src={babyImg2} alt="Specialized Nanny Support" />
              </div>
              <div className="care-card-content">
                <h3>Verified nannies and baby care experts for your little ones.</h3>
                <p>Ensuring your children grow in a safe, nurturing, and professional environment.</p>
              </div>
            </div>

            <div className="care-card scroll-reveal fade-up stagger-2">
              <div className="care-card-image-wrapper">
                <img src={elderImg2} alt="Compassionate Elder Care" />
              </div>
              <div className="care-card-content">
                <h3>Compassionate elder care professionals for your seniors.</h3>
                <p>Dedicated support to ensure dignity, health, and comfort for your aging loved ones.</p>
              </div>
            </div>

            <div className="care-card scroll-reveal fade-up stagger-3">
              <div className="care-card-image-wrapper">
                <img src={domesticImg} alt="Professional Home Management" />
              </div>
              <div className="care-card-content">
                <h3>Background-checked domestic help and home management.</h3>
                <p>Trustworthy experts to handle your home maintenance, cleaning, and more.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="scheduler-section">
          <div className="scheduler-bg-split"></div>
          <div className="scheduler-card scroll-reveal fade-up">
            <div className="scheduler-card-left">
              <div className="scheduler-phone">
                <div className="scheduler-phone-inner">
                  <div className="phone-status-bar">
                    <span>9:41</span>
                    <div className="status-icons">
                      <SignalIcon />
                      <WifiIcon />
                      <BatteryIcon />
                    </div>
                  </div>
                  <div className="dynamic-island"></div>
                  
                  <div className="app-header">
                    <div className="user-profile">
                      <div className="avatar">JD</div>
                      <div className="user-info">
                        <span className="user-greeting">Hello, Jane</span>
                        <span className="user-date">Friday, Oct 10</span>
                      </div>
                    </div>
                    <div className="app-icon-small"><SettingsIcon /></div>
                  </div>

                  <div className="scheduler-app-content">
                    <div className="dashboard-summary">
                      <div className="summary-card">
                        <div className="summary-left">
                          <span className="summary-label">Today's Care</span>
                          <span className="summary-value">8.5 hrs</span>
                        </div>
                        <div className="summary-right">
                          <div className="progress-mini"></div>
                        </div>
                      </div>
                    </div>

                    <h2 className="app-title-special">Care Plan</h2>

                    <div className="scheduler-list">
                      <div className="scheduler-item item-done">
                        <div className="item-icon-wrap"><CheckIcon /></div>
                        <div className="item-details">
                          <span className="item-name">Morning Nanny Arrival</span>
                          <span className="item-time">8:00 AM • Verified</span>
                        </div>
                        <div className="badge-diy">active</div>
                      </div>
                      
                      <div className="scheduler-item item-done">
                        <div className="item-icon-wrap"><CheckIcon /></div>
                        <div className="item-details">
                          <span className="item-name">Elder Med Reminder</span>
                          <span className="item-time">10:30 AM • Confirmed</span>
                        </div>
                        <div className="badge-diy">done</div>
                      </div>

                      <div className="scheduler-item">
                        <div className="item-icon-wrap-pending"><CalendarIcon /></div>
                        <div className="item-details">
                          <span className="item-name">Senior Wellness Check</span>
                          <span className="item-time">2:00 PM • Pending</span>
                        </div>
                      </div>

                      <div className="scheduler-item">
                        <div className="item-icon-wrap-pending"><StarIcon /></div>
                        <div className="item-details">
                          <span className="item-name">Child Activity Plan</span>
                          <span className="item-time">4:00 PM • Scheduled</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="phone-bottom-nav">
                    <div className="nav-item active"><CalendarIcon /></div>
                    <div className="nav-item"><SettingsIcon /></div>
                    <div className="nav-item-center"><div className="plus-btn">+</div></div>
                    <div className="nav-item"><StarIcon /></div>
                    <div className="nav-item"><CheckIcon /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scheduler-card-right">
              <h2>Care made easy, <br/> one click away.</h2>
              <p>From background-checked nannies to compassionate elder care, we've got everything you need to keep your family in safe hands without the stress.</p>
              
              <div className="store-buttons">
                <button className="store-btn btn-orange">
                  <AppleIcon />
                  <div className="store-btn-text">
                    <span className="store-btn-sub">Download on the</span>
                    <span className="store-btn-main">App Store</span>
                  </div>
                </button>
                <button className="store-btn btn-orange">
                  <PlayIcon />
                  <div className="store-btn-text">
                    <span className="store-btn-sub">GET IT ON</span>
                    <span className="store-btn-main">Google Play</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="card-branding-blobs-bottom">
              <div className="brand-blob blob-yellow"></div>
              <div className="brand-blob blob-orange"></div>
              <div className="brand-blob blob-green-small"></div>
              <div className="brand-blob blob-green-dark"></div>
              <div className="brand-blob blob-green-light"></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-col brand-col">
            <img src={fixiLogoImg} alt="FixiHelp Logo" className="footer-logo" />
            <p>Building a future of specialized baby and elder care. Connecting families with verified experts for a better tomorrow.</p>
            <div className="footer-contact">
              <a href="mailto:team@fixihelp.com">team@fixihelp.com</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Baby Care</a></li>
              <li><a href="#">Elder Care</a></li>
              <li><a href="#">Home Management</a></li>
              <li><a href="#">Join Waitlist</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-col stores-col">
            <h4>Get the App</h4>
            <div className="footer-store-btns">
              <button className="footer-store-btn">App Store</button>
              <button className="footer-store-btn">Google Play</button>
            </div>
            <div className="social-links">
              <a href="#">𝕏</a>
              <a href="#">📸</a>
              <a href="#">💼</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 FixiHelp Inc. All rights reserved.</p>
          <div className="footer-legal">
            <span>Made with Care.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
