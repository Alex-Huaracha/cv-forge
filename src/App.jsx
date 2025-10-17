import { useState } from 'react';
import './App.css';
import {
  AccordionSection,
  PersonalInfo,
  ExperienceSection,
} from './components';

function App() {
  const [data, setData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      portfolio: '',
    },

    education: [
      {
        id: crypto.randomUUID(),
        university: '',
        degree: '',
        descriptions: [''],
        startDate: '',
        endDate: '',
        location: '',
      },
    ],

    workExperience: [
      {
        id: crypto.randomUUID(),
        company: '',
        position: '',
        descriptions: [''],
        startDate: '',
        endDate: '',
        location: '',
      },
    ],

    projects: [
      {
        id: crypto.randomUUID(),
        name: '',
        website: '',
        sourceCode: '',
        descriptions: [''],
        technologies: '',
      },
    ],

    technicalSkills: [
      {
        id: crypto.randomUUID(),
        title: '',
        skills: '',
      },
    ],
  });

  const handleSectionUpdate = (section, newData) => {
    setData((prevData) => ({
      ...prevData,
      [section]: newData,
    }));
    console.log(`Updated ${section}:`, newData);
  };

  const educationFields = [
    { name: 'university', label: 'University/School', type: 'text' },
    { name: 'degree', label: 'Degree/Title', type: 'text' },
    { name: 'descriptions', label: 'Descriptions', type: 'textarea' },
    { name: 'startDate', label: 'Start Date', type: 'text' },
    { name: 'endDate', label: 'End Date', type: 'text' },
    { name: 'location', label: 'Location', type: 'text' },
  ];

  // const workFields = [
  //   { name: 'company', label: 'Company', type: 'text' },
  //   { name: 'position', label: 'Position Title', type: 'text' },
  //   { name: 'startDate', label: 'Start Date', type: 'text' },
  //   { name: 'endDate', label: 'End Date', type: 'text' },
  //   { name: 'location', label: 'Location', type: 'text' },
  // ];

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
          {/* Personal Information */}
          <AccordionSection
            icon="person"
            title="Personal Information"
            defaultOpen={true}
          >
            <PersonalInfo
              data={data.personalInfo}
              onChange={(newData) =>
                handleSectionUpdate('personalInfo', newData)
              }
            />
          </AccordionSection>
          {/* Education */}
          <AccordionSection icon="education" title="Education">
            <ExperienceSection
              items={data.education}
              onUpdateItems={(updated) =>
                handleSectionUpdate('education', updated)
              }
              initialItemData={{
                id: '',
                university: '',
                degree: '',
                startDate: '',
                endDate: '',
                location: '',
              }}
              fields={educationFields}
              sectionTitle="Education"
            />
          </AccordionSection>
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
