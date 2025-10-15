import './App.css';
import { Accordion, PersonalInfo } from './components';

function App() {
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
            <PersonalInfo />
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
