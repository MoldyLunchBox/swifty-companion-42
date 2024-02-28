import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

const SkillsAccordionContents = ({ skills }) => {
  const [mySkills, setMySkills] = useState(null);

  useEffect(() => {
    

    if (skills) setMySkills(skills?.filter(item => item.cursus.name === "42cursus")[0]?.skills);
  }, [skills]);


  function formatNumberWithTwoDecimals(num) {
    if (typeof num !== 'number') {
        throw new Error('Input must be a number');
    }
    return num.toFixed(2);
}


  return (
    <View style={{  }}>
      {
        mySkills ? 
      mySkills?.map((skills) => (
        <View key={skills?.id} style={styles.projectContainer}>
          <Text style={styles.name}>{skills?.name}</Text>
          <View style={{width:200,flexDirection:'row',justifyContent:'space-between', rowGap:10}}>

          <Text style={styles.score}>{formatNumberWithTwoDecimals(skills?.level)}</Text>
          <Text style={styles.score}>{formatNumberWithTwoDecimals(skills?.level/21*100)}%</Text>
          </View>
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