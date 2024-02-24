import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator,TouchableOpacity } from 'react-native';
import axios from 'axios';
import xml2js from 'xml2js';
import Svg, {  SvgXml } from 'react-native-svg';
import  { SvgWithCss } from 'react-native-svg/css';
import parser from 'react-native-xml2js';

function addImageLinksToSVG(svgString, cluster, setClusters) {
    parser.parseString(svgString, (err, result) => {
        if (!err && cluster) {
            // console.log(typeof(result.svg))
            for (let i = 0; i < result.svg.image.length; i++) {
                // result.svg.image[i].$['xlink:href'] = "https://profile.intra.42.fr/images/default.png"
                cluster.forEach(item => {
                    if (item[0] === result.svg.image[i].$.id) {
                        result.svg.image[i].$['xlink:href'] = item[1].image
                    }
                })
                if (result.svg.image[i].$['xlink:href'] === '')
                {
                    result.svg.image[i].$['xlink:href'] = null
                }
            }
            console.log(result.svg.image)
            var builder = new xml2js.Builder();
            var xml = builder.buildObject(result);
            // console.log(xml)
            setClusters(xml);
        } else {
            console.log("ERR =>", err);
        }
    });
}

const Cluster = ({ navigator }) => {
    const [clusters, setClusters] = useState(null);
    const [posts, setPosts] = useState(null);
    const [cluster, setCluster] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                fetch('https://cdn.intra.42.fr/cluster/image/8/khouribga-cluster-e2.svg')
                    .then(response => response.text())
                    .then(data => {
                        data = data.replaceAll(/<g\b[^>]*\/?>/g, '');
                        data = data.replaceAll('</g>', '');
                        // setClusters(data)
                        addImageLinksToSVG(data, posts, setClusters)
                    })
                    .catch(error => {
                        console.error('Error loading SVG file:', error);
                    });
            } catch (error) {
                console.error('Error fetching SVG file:', error);
            }
        };
        if (posts)
            fetchData();
    }, [posts]);

    useEffect(() => {
        try {
            fetch("https://clusters-watcher.onrender.com/16").then(resp => resp.text()).then((data) => {
                data = data.replace("var campus_locations = ", "")
                data = data.replace(";", "")
                data = JSON.parse(data)
                // console.log(Object.entries(data))
                setPosts(Object.entries(data))
            })
        } catch (error) {
            console.log("CAMPUS=>", error)
        }
    }, [])


    return (
        <View style={styles.container}>
            {/* Options */}
            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress('e1')}>
                    <Text style={styles.optionText}>e1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress('e2')}>
                    <Text style={styles.optionText}>e2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress('e3')}>
                    <Text style={styles.optionText}>e3</Text>
                </TouchableOpacity>
            </View>
            {/* Render the modified SVG */}
            {clusters ? (
                <SvgWithCss
                    xml={clusters}
                    width="100%"
                    height="100%"
                />
            ) :
                <ActivityIndicator size='large' color={'#000'} />
            }
        </View>
    );
};

const handleOptionPress = (option) => {
    // Handle what each option does here
    console.log(`Option ${option} pressed`);
    // Implement your logic accordingly
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 20,
    },
    optionButton: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
    },
    optionText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Cluster;