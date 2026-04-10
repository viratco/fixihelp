import './index.css';
import hammerNailsImg from './assets/hammer_nails.png';
import rollerScrewsImg from './assets/roller_screws.png';
import fixiLogoImg from './assets/fixi-logo.png';
import babyImg from './assets/baby_care.png';
import elderImg from './assets/elder_care.png';

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

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <img src={fixiLogoImg} alt="FixiHelp Logo" className="logo-image" />
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
        </nav>
        <button className="btn-primary">Coming soon</button>
      </header>

      <main>
        <section className="hero">
          <h1>Find verified baby and elder care pros instantly.</h1>
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
            <div className="phone-mockup">
              <div className="phone-status-bar">
                <span>9:41</span>
                <div className="status-icons">
                  <SignalIcon />
                  <WifiIcon />
                  <BatteryIcon />
                </div>
              </div>
              <div className="dynamic-island"></div>
              
              <div className="phone-top-shape"></div>
              <div className="yellow-blob"></div>
              
              <div className="phone-content">
                <h3>Connecting you with verified experts for specialized baby and elder care.</h3>
                <div className="phone-btns">
                  <button className="phone-btn btn-white">I have an account</button>
                  <button className="phone-btn btn-orange-full">I'm new here</button>
                </div>
              </div>
              <div className="phone-home-indicator"></div>
            </div>
          </div>

          <div className="content-inner">
            <div className="left-text">
              <h2>How FixiHelp helps your family?</h2>
            </div>
            
            <div className="right-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <SettingsIcon />
                </div>
                <div className="feature-text">Specialized on-demand baby & elder care</div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <CalendarIcon />
                </div>
                <div className="feature-text">Verified nannies, caregivers & professional experts</div>
              </div>
              
              <div className="feature-item">
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
              FixiHelp is building a future of <span className="highlight-orange">specialized professional care</span>, 
              preparing to meet the unique needs of every modern family. 
              We are currently in our pre-market phase, laying the foundations 
              for a revolution in home care and management.
            </h2>
          </div>

          <div className="info-grid">
            <div className="info-card card-teal">
              <div className="card-icon-circle seal-teal">
                <CheckIcon />
              </div>
              <h3>500+ Families on Early-Access Waitlist</h3>
              <p>Significant early demand as we prepare to connect families with expert nanny and specialized care support.</p>
            </div>

            <div className="info-card card-image">
              <img src={babyImg} alt="Specialized Baby Care" />
              <div className="card-overlay">
                <div className="overlay-badge">
                   <SettingsIcon />
                   <span>Expert-Led Nanny Infrastructure</span>
                </div>
              </div>
            </div>

            <div className="info-card card-yellow">
              <div className="card-icon-circle seal-yellow">
                <StarIcon />
              </div>
              <h3>95% Positive Market Validation</h3>
              <p>Extensive pre-launch research confirms a high need for reliable, professional, and compassionate home care.</p>
            </div>

            <div className="info-card card-image">
              <img src={elderImg} alt="Compassionate Elder Care" />
              <div className="card-overlay">
                <div className="overlay-badge">
                   <span>Future-Ready Senior Care</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
