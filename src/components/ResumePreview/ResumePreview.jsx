import './ResumePreview.css';

export function ResumePreview({ data }) {
  const renderDescriptionList = (description) => {
    if (!description || description.trim() === '') return null;

    const items = description
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    if (items.length === 0) return null;

    return (
      <ul className="description-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  const renderTechnologies = (technologies) => {
    if (!technologies || technologies.trim() === '') return null;

    const techList = technologies
      .split(',')
      .map((tech) => tech.trim())
      .filter((tech) => tech.length > 0);

    if (techList.length === 0) return null;

    return techList.join(' | ');
  };

  const { personalInfo, education, workExperience, projects, technicalSkills } =
    data;

  return (
    <div className="resume">
      {/* Personal Information */}
      <header className="resume-header">
        <h1 className="resume-name">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="resume-contact">
          {personalInfo.phone && (
            <span className="contact-item">
              <svg
                className="contact-icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
              </svg>
              {personalInfo.phone}
            </span>
          )}
          {personalInfo.email && (
            <>
              <span className="separator">|</span>
              <a href={`mailto:${personalInfo.email}`} className="contact-item">
                <svg
                  className="contact-icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                </svg>
                {personalInfo.email}
              </a>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              <span className="separator">|</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <svg
                  className="contact-icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
                LinkedIn
              </a>
            </>
          )}
          {personalInfo.github && (
            <>
              <span className="separator">|</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <svg
                  className="contact-icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                  ></path>
                  <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                </svg>
                GitHub
              </a>
            </>
          )}
          {personalInfo.portfolio && (
            <>
              <span className="separator">|</span>
              <a
                href={personalInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <svg
                  className="contact-icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z" />
                </svg>
                Portfolio
              </a>
            </>
          )}
        </div>
      </header>

      {/* Education */}
      {education.length > 0 &&
        education.some((edu) => edu.university || edu.degree) && (
          <section className="resume-section">
            <h2 className="section-title">Education</h2>
            <div className="section-content">
              {education.map((edu) => {
                if (!edu.university && !edu.degree) return null;
                return (
                  <div key={edu.id} className="resume-entry">
                    <div className="entry-header">
                      <div className="entry-left">
                        <h3 className="entry-title">{edu.university}</h3>
                        <p className="entry-subtitle">{edu.degree}</p>
                      </div>
                      <div className="entry-right">
                        {(edu.startDate || edu.endDate) && (
                          <p className="entry-date">
                            {edu.startDate}{' '}
                            {edu.startDate && edu.endDate && '–'} {edu.endDate}
                          </p>
                        )}{' '}
                        {edu.location && (
                          <p className="entry-location">{edu.location}</p>
                        )}
                      </div>
                    </div>
                    {renderDescriptionList(edu.description)}
                  </div>
                );
              })}
            </div>
          </section>
        )}

      {/* Experience */}
      {workExperience.length > 0 &&
        workExperience.some((work) => work.company || work.position) && (
          <section className="resume-section">
            <h2 className="section-title">Work Experience</h2>
            <div className="section-content">
              {workExperience.map((work) => {
                if (!work.company && !work.position) return null;
                return (
                  <div key={work.id} className="resume-entry">
                    <div className="entry-header">
                      <div className="entry-left">
                        <h3 className="entry-title">{work.company}</h3>
                        <p className="entry-subtitle">{work.position}</p>
                      </div>
                      <div className="entry-right">
                        {(work.startDate || work.endDate) && (
                          <p className="entry-date">
                            {work.startDate}{' '}
                            {work.startDate && work.endDate && '–'}{' '}
                            {work.endDate}
                          </p>
                        )}
                        {work.location && (
                          <p className="entry-location">{work.location}</p>
                        )}
                      </div>
                    </div>
                    {renderDescriptionList(work.description)}
                  </div>
                );
              })}
            </div>
          </section>
        )}

      {/* Projects */}
      {projects.length > 0 && projects.some((proj) => proj.name) && (
        <section className="resume-section">
          <h2 className="section-title">Projects</h2>
          <div className="section-content">
            {projects.map((proj) => {
              if (!proj.name) return null;
              return (
                <div key={proj.id} className="resume-entry">
                  <div className="entry-header">
                    <div className="entry-left">
                      <h3 className="entry-title">
                        {proj.name}
                        {(proj.website || proj.sourceCode) && (
                          <span className="project-links">
                            {' | '}
                            {proj.website && (
                              <a
                                href={proj.website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Website
                              </a>
                            )}
                            {proj.sourceCode && (
                              <>
                                {proj.website && (
                                  <span className="separator">|</span>
                                )}
                                <a
                                  href={proj.sourceCode}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Source Code
                                </a>
                              </>
                            )}
                          </span>
                        )}
                      </h3>
                    </div>
                    <div className="entry-right">
                      {proj.technologies && (
                        <span className="tech-stack">
                          {renderTechnologies(proj.technologies)}
                        </span>
                      )}
                    </div>
                  </div>
                  {renderDescriptionList(proj.description)}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Technical Skills */}
      {technicalSkills.length > 0 &&
        technicalSkills.some((skill) => skill.title || skill.skills) && (
          <section className="resume-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="section-content">
              {technicalSkills.map((skill) => {
                if (!skill.title && !skill.skills) return null;
                return (
                  <div key={skill.id} className="skill-entry">
                    <span className="skill-category">{skill.title}:</span>{' '}
                    <span className="skill-list">{skill.skills}</span>
                  </div>
                );
              })}
            </div>
          </section>
        )}
    </div>
  );
}
