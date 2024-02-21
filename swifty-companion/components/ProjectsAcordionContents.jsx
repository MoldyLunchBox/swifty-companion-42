import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const ProjectsAcordionContents = ({projects}) => {
    const [myProjects , setMyProjects] = useState(projects)
    useEffect(()=>{
            if (projects)
                setMyProjects(projects.filter((element) => element.cursus_ids[0] == 21))
    },[projects])
    useEffect(()=>{
 console.log('first\n\n\n\n\n')
        myProjects.map((e)=>{
            console.log(e)
        })
        console.log('end')
    },[myProjects])
    return (
        <View style={{ backgroundColor:'#ffff00'}}>
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
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
      },
      name: {
        width: '70%', // Adjust width as needed
        color: 'black',
      },
      score: {
        width: '30%', // Adjust width as needed
        textAlign: 'right',
        color: 'green',
      },
    });
    
export default ProjectsAcordionContents