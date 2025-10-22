import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: '0.5in 0.75in',
    fontFamily: 'Times-Roman',
    fontSize: 11,
  },
  header: {
    textAlign: 'center',
    marginBottom: 12,
    paddingBottom: 6,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Times-Bold',
    marginBottom: 4,
  },
  contact: {
    fontSize: 11,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  contactItem: {
    marginHorizontal: 4,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,

    textTransform: 'uppercase',
    marginBottom: 5,
    paddingBottom: 2,
    borderBottom: '1pt solid black',
    letterSpacing: 1,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  entryLeft: {
    flex: 1,
  },
  entryRight: {
    alignItems: 'flex-end',
    minWidth: 100,
  },
  entryTitle: {
    fontSize: 12,
    fontFamily: 'Times-Bold',
    marginBottom: 2,
  },
  entrySubtitle: {
    fontSize: 11,
    fontFamily: 'Times-Italic',
  },
  entryDate: {
    fontSize: 10,
    fontFamily: 'Times-Bold',
    textAlign: 'right',
    marginBottom: 2,
  },
  entryLocation: {
    fontSize: 9,
    fontFamily: 'Times-Italic',
    textAlign: 'right',
  },
  bulletPoint: {
    fontSize: 11,
    marginLeft: 20,
    marginBottom: 2,
    flexDirection: 'row',
  },
  bulletSymbol: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  skillEntry: {
    fontSize: 11,
    marginBottom: 4,
  },
  skillTitle: {
    fontFamily: 'Times-Bold',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
});

export function ResumePDF({ data }) {
  const { personalInfo, education, workExperience, projects, technicalSkills } =
    data;

  const renderBullets = (description) => {
    if (!description) return null;
    const items = description.split('\n').filter((line) => line.trim());
    return items.map((item, index) => (
      <View key={index} style={styles.bulletPoint}>
        <Text style={styles.bulletSymbol}>•</Text>
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ));
  };

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {personalInfo.firstName} {personalInfo.lastName}
          </Text>
          <View style={styles.contact}>
            {personalInfo.phone && (
              <Text style={styles.contactItem}>{personalInfo.phone}</Text>
            )}
            {personalInfo.email && (
              <>
                <Text style={styles.contactItem}>|</Text>
                <Text style={styles.contactItem}>{personalInfo.email}</Text>
              </>
            )}
            {personalInfo.linkedin && (
              <>
                <Text style={styles.contactItem}>|</Text>
                <Link
                  src={personalInfo.linkedin}
                  style={[styles.contactItem, styles.link]}
                >
                  LinkedIn
                </Link>
              </>
            )}
            {personalInfo.github && (
              <>
                <Text style={styles.contactItem}>|</Text>
                <Link
                  src={personalInfo.github}
                  style={[styles.contactItem, styles.link]}
                >
                  GitHub
                </Link>
              </>
            )}
            {personalInfo.portfolio && (
              <>
                <Text style={styles.contactItem}>|</Text>
                <Link
                  src={personalInfo.portfolio}
                  style={[styles.contactItem, styles.link]}
                >
                  Portfolio
                </Link>
              </>
            )}
          </View>
        </View>

        {/* Education */}
        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 8 }}>
                <View style={styles.entryHeader}>
                  <View style={styles.entryLeft}>
                    <Text style={styles.entryTitle}>{edu.university}</Text>
                    <Text style={styles.entrySubtitle}>{edu.degree}</Text>
                  </View>
                  <View style={styles.entryRight}>
                    <Text style={styles.entryDate}>
                      {edu.startDate} – {edu.endDate}
                    </Text>
                    {edu.location && (
                      <Text style={styles.entryLocation}>{edu.location}</Text>
                    )}
                  </View>
                </View>
                {renderBullets(edu.description)}
              </View>
            ))}
          </View>
        )}

        {/* Work Experience */}
        {workExperience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {workExperience.map((work) => (
              <View key={work.id} style={{ marginBottom: 8 }}>
                <View style={styles.entryHeader}>
                  <View style={styles.entryLeft}>
                    <Text style={styles.entryTitle}>{work.position}</Text>
                    <Text style={styles.entrySubtitle}>{work.company}</Text>
                  </View>
                  <View style={styles.entryRight}>
                    {' '}
                    {/* 👈 Usa el estilo */}
                    <Text style={styles.entryDate}>
                      {work.startDate} – {work.endDate}
                    </Text>
                    {work.location && (
                      <Text style={styles.entryLocation}>{work.location}</Text>
                    )}
                  </View>
                </View>
                {renderBullets(work.description)}
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {projects.map((proj) => (
              <View key={proj.id} style={{ marginBottom: 8 }}>
                <View style={styles.entryHeader}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.entryTitle}>
                      {proj.name}
                      {proj.technologies && (
                        <Text style={{ fontFamily: 'Times-Italic' }}>
                          {' '}
                          | {proj.technologies}
                        </Text>
                      )}
                    </Text>
                  </View>
                </View>
                {renderBullets(proj.description)}
              </View>
            ))}
          </View>
        )}

        {/* Technical Skills */}
        {technicalSkills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            {technicalSkills.map((skill) => (
              <Text key={skill.id} style={styles.skillEntry}>
                <Text style={styles.skillTitle}>{skill.title}:</Text>{' '}
                {skill.skills}
              </Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
