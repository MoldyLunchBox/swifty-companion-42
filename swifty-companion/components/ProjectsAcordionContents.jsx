import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

const ProjectsAccordionContents = ({ projects }) => {
  const [myProjects, setMyProjects] = useState(projects);

  useEffect(() => {
    if (projects) setMyProjects(projects.filter((element) => element.cursus_ids[0] === 21));
  }, [projects]);

  return (
    <View style={{  }}>
      {myProjects.map((project) => (
        <View key={project.id} style={styles.projectContainer}>
          <Text style={styles.name}>{project.project.name}</Text>
          <Text style={styles.score}>{project.final_mark}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  projectContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  name: {
    flex: 1, // Take remaining space
    color: 'black',
  },
  score: {
    color: 'green',
  },
});

export default ProjectsAccordionContents;
