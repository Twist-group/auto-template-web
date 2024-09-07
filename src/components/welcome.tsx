import React from 'react';
import './welcome.css'; // Import the custom CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

type SidebarItemProps = {
  text: string;
};


type DesignCardProps = {
  projectName: string;
  editedTime: string;
  highlighted?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ text }) => (
  <button className="sidebar-item">{text}</button>
);



const Sidebar: React.FC = () => (
  <div className="sidebar">
    <div className="sidebar-title">
      <span className="sidebar-logo">⚙️</span> TEMPLATE
      </div>
    <SidebarItem text="Template" />
    <SidebarItem text="Color" />
    <SidebarItem text="Text" />
    <div className="sidebar-icons">
      <button className="sidebar-icons">⚙️</button>
      <button className="sidebar-icons">⚙️</button>
      <button className="sidebar-icons">⚙️</button>
    </div>
  </div>
);

const Header: React.FC = () => (
  <div className="header">
    <div className="header-title">WELCOME BACK, IOTA</div>
    <button className="login-button-2">
      <Link to="/login" style={{ textDecoration: 'none' }}className="login-button-2">
          <span className="login-icon">⚙️</span> Login
        </Link>
      </button>
  </div>
);

const DesignCard: React.FC<DesignCardProps> = ({ projectName, editedTime, highlighted }) => (
  <div className={`design-card ${highlighted ? 'highlighted' : ''}`}>
    <div className="design-card-content">
      <h5 className="design-card-title">{projectName}</h5>
      <p className="design-card-time">{editedTime}</p>
    </div>
  </div>
);


const RecentDesigns: React.FC = () => (
  <div className="recent-designs-bounding-box">
    <div className="recent-designs-grid">
      {[...Array(8)].map((_, index) => (
        <DesignCard
          key={index}
          projectName="Project Name"
          editedTime="Edited 10 minutes ago"
          highlighted={index === 0} // Highlight the first card
        />
      ))}
    </div>
  </div>
);

const Welcome: React.FC = () => {
  return (
    <div className="welcome-page">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="autotemplater-box">
          <h3 className="autotemplater-title">AUTOTEMPLATER</h3>
          <p className="autotemplater-description">
            Save Time On Slides Design. All tools you need to generate, format, and edit slides with just a few clicks.
          </p>
        </div>
        <div className="section">
          <div className="section-row">
            <div className="section">
              <div className="section-title">Start from Scratch</div>
              <div className="import-section">
                <button className="import-button">
                  <span className="import-button-title">Import</span>
                  <p className="import-button-caption">
                    bring in slide to modify and templates to refer to </p>
                </button>
              </div>
            </div>
            <div className="section">
              <div className="section-title">Instruction Demo</div>
              <div className="instruction-demo-box"></div>
            </div>
          </div>
        </div>
        <div className="recent-designs-title">Recent Designs</div>
        <RecentDesigns />
      </div>
    </div>
  );
};

export default Welcome;