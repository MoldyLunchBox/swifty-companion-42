import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ProjectsAcordionContents from './ProjectsAcordionContents';
import SkillsAccordionContents from './SkillsAccordionContents';

const Acordion = ({ panel, togglePanel }) => {
    return (
        <View key={panel.id} style={panelsStyle.panel}>
            {/* Header */}
            <TouchableOpacity onPress={() => togglePanel(panel.id)} style={panelsStyle.header}>
                <Text style={panelsStyle.headerText}>{panel.title}</Text>
                <Text>{panel.isExpanded ? '▼' : '▶'}</Text>
            </TouchableOpacity>

            {/* Content */}
            {panel.isExpanded && (
                <ScrollView style={panelsStyle.content}>
                        {
                            panel.title == 'Projects'
                                ?
                                <ProjectsAcordionContents projects={panel.content}/>
                                :
                                panel.title == 'Skills' ?
                                <SkillsAccordionContents skills={panel.content}/>
                                : 
                                <Text>sa</Text>
                        }
                </ScrollView>
            )}
        </View>
    )
}

const panelsStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'lightblue',
        width:'100%',
    },
    panel: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    headerText: {
        fontWeight: 'bold',
    },
    content: {
        padding: 10,
        maxHeight: 200, // Adjust as needed
    },
});

export default Acordion