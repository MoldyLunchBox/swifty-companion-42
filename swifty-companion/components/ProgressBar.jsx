import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
    const fractionalPart = (number) => {
        return String(number).split('.')[1]
    }

    return (
        <View style={styles.container}>
            <View style={[styles.progressBar, { width: `${parseInt(fractionalPart(progress), 10)}%` }]} />
            <Text style={styles.progressText}>{progress}%</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 30,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#F5BD38',
        borderRadius: 5,
    },

    progressText: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        lineHeight: 20,
        color: '#fff',
        fontWeight: 'bold',
    },

});

export default ProgressBar;
