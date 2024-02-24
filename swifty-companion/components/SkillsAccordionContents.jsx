import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

const SkillsAccordionContents = ({ skills }) => {
  const [mySkills, setMySkills] = useState(null);

  useEffect(() => {
    console.log(skills.filter(item => item.cursus.name === "42cursus"))
    console.log('skills')

    if (skills) setMySkills(skills?.filter(item => item.cursus.name === "42cursus")[0]?.skills);
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