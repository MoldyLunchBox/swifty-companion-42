import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

const SkillsAccordionContents = ({ skills }) => {
  const [mySkills, setMySkills] = useState(null);

  useEffect(() => {
    if (skills) setMySkills(skills[2].skills);
  }, [skills]);





  return (
    <View style={{  }}>
      {
        mySkills ? 
      mySkills.map((skills) => (
        <View key={skills.id} style={styles.projectContainer}>
          <Text style={styles.name}>{skills.name}</Text>
          <Text style={styles.score}>{skills.level}</Text>
        </View>
      ))
      : null
      }
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

export default SkillsAccordionContents