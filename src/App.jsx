import { useState } from 'react';
import './App.css';
import { Accordion, PersonalInfo, ProfileSummary } from './components';

function App() {
  const [data, setData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      portfolio: '',
    },
    profileSummary: '',
    education: [],
    experience: [],
    skills: [],
    projects: [],
  });

  const updateData = (section, data) => {
    setData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <h2>CV Forge</h2>
        <p>Your CV quickly and easily</p>
      </header>
      {/* Main */}
      <div className="cv-container">
        <div className="cv-editor">
          <Accordion
            icon="person"
            title="Personal Information"
            defaultOpen={true}
          >
            <PersonalInfo
              data={data.personalInfo}
              onChange={(data) => updateData('personalInfo', data)}
            />
          </Accordion>

          {/* accordion sumary */}
          <Accordion icon="summary" title="Profile Summary">
            <ProfileSummary
              data={data.profileSummary}
              onChange={(data) => updateData('profileSummary', data)}
            />
          </Accordion>
        </div>

        <div className="cv-preview">
          {/* <CVPreview personalInfo={personalData} /> */}
        </div>
      </div>
      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; 2024 Designed and developed by{' '}
          <a
            href="https://github.com/Alex-Huaracha"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <svg className="icon" aria-hidden="true">
              <use href="#icon-github"></use>
            </svg>
            Alex Huaracha
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
