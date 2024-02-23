import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import xml2js from 'xml2js';
import Svg, { SvgXml } from 'react-native-svg';
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
                    // else {
                    //     result.svg.image[i].$['xlink:href'] = null;
                    // }
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


    useEffect(() => {
        const fetchData = async () => {
            try {
                fetch('https://cdn.intra.42.fr/cluster/image/7/khouribga-cluster-e1.svg')
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
            {/* Render the modified SVG */}
            {clusters ? (
                <SvgXml
                    xml={clusters}
                    width="100%"
                    height="100%"
                />
            ) :
                <Text>sdsd</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Cluster;
