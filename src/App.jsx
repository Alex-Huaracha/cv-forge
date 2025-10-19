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
        description: '',
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
        description: '',
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
        description: '',
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
    { name: 'university', label: 'School', type: 'text' },
    { name: 'degree', label: 'Course', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'startDate', label: 'Start Date', type: 'text' },
    { name: 'endDate', label: 'End Date', type: 'text' },
    { name: 'location', label: 'Location', type: 'text' },
  ];

  const getEducationTitle = (item) => {
    return item.university || item.degree || 'New Education';
  };

  const workFields = [
    { name: 'company', label: 'Company', type: 'text' },
    { name: 'position', label: 'Position', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'startDate', label: 'Start Date', type: 'text' },
    { name: 'endDate', label: 'End Date', type: 'text' },
    { name: 'location', label: 'Location', type: 'text' },
  ];

  const getWorkTitle = (item) => {
    return item.company || item.position || 'New Work Experience';
  };

  console.log('Current CV Data:', data.education);

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
              initialItemData={{
                id: '',
                university: '',
                degree: '',
                description: '',
                startDate: '',
                endDate: '',
                location: '',
              }}
              fields={educationFields}
              sectionTitle="Education"
              onUpdateItems={(newData) =>
                handleSectionUpdate('education', newData)
              }
              getTitleFromItem={getEducationTitle}
            />
          </AccordionSection>
          {/* Work Experience */}
          <AccordionSection icon="work" title="Work Experience">
            <ExperienceSection
              items={data.workExperience}
              initialItemData={{
                id: '',
                company: '',
                position: '',
                description: '',
                startDate: '',
                endDate: '',
                location: '',
              }}
              fields={workFields}
              sectionTitle="Work Experience"
              onUpdateItems={(newData) =>
                handleSectionUpdate('workExperience', newData)
              }
              getTitleFromItem={getWorkTitle}
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
