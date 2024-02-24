import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import xml2js from 'xml2js';
import Svg, { SvgXml } from 'react-native-svg';
import { SvgWithCss } from 'react-native-svg/css';
import parser from 'react-native-xml2js';
import FooterBottons from '../components/FooterBottons';
/**
 * the svg file fetched is a map of a school floor. we call it a cluster because 
 * its a cluster of mac computers. 
 * this function adds profile pictures of users connected on each mac to the svg file
 *
 * @param {*} svgString stringified svg file of the cluster map
 * @param {*} cluster   array of users who are connected. it holds user info such as which computer they r on
 * @param {*} setClusters  hook to set the svg file state. which is then passed to SvgWithCss to be displayed with css enabled
 */
function addImageLinksToSVG(svgString, cluster, setClusters, oo) {
    parser.parseString(svgString, (err, result) => {
        if (!err && cluster) {
            // console.log(typeof(result.svg))
            for (let i = 0; i < result.svg.image.length; i++) {
                if (cluster[result.svg.image[i].$.id] && cluster[result.svg.image[i].$.id]['image'])
                    result.svg.image[i].$['xlink:href'] = cluster[result.svg.image[i].$.id].image
                else
                    result.svg.image[i].$['xlink:href'] = 'https://m.media-amazon.com/images/I/31DhmKeNrWL._AC_UF1000,1000_QL80_.jpg'
            }
            // console.log(cluster)
            var builder = new xml2js.Builder();
            var xml = builder.buildObject(result);
            // console.log(xml)
            setClusters(xml);
        } else {
            console.log("ERR =>", err);
        }
    });
}

const clusterSVG = {
    1: 'https://cdn.intra.42.fr/cluster/image/7/khouribga-cluster-e1.svg',
    2: 'https://cdn.intra.42.fr/cluster/image/8/khouribga-cluster-e2.svg',
    3: 'https://cdn.intra.42.fr/cluster/image/207/khga-cluster-e3.svg',

}

const Cluster = ({ navigation }) => {
    const [clusters, setClusters] = useState(null);
    const [posts, setPosts] = useState(null);
    const [cluster, setCluster] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            const svgLink = clusterSVG[cluster]

            try {
                fetch(svgLink)
                    .then(response => response.text())
                    .then(data => {
                        data = data.replaceAll(/<g\b[^>]*\/?>/g, '');
                        data = data.replaceAll('</g>', '');
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
    }, [posts, cluster]);

    useEffect(() => {
        try {
            fetch("https://clusters-watcher.onrender.com/16").then(resp => resp.text()).then((data) => {
                data = data.replace("var campus_locations = ", "")
                data = data.replace(";", "")
                data = JSON.parse(data)
                // console.log(Object.entries(data))
                setPosts(data)
            })
        } catch (error) {
            console.log("CAMPUS=>", error)
        }
    }, [])


    return (
        <View style={styles.container}>
            {/* Options */}
            {/* Render the modified SVG */}
            <View style={{ flex: 1, width: '100%', borderColor: 'yellow', borderWidth: 1 }}>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress('1', setCluster)}>
                        <Text style={styles.optionText}>e1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress('2', setCluster)}>
                        <Text style={styles.optionText}>e2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress('3', setCluster)}>
                        <Text style={styles.optionText}>e3</Text>
                    </TouchableOpacity>
                </View>

                {clusters ? (
                    <SvgWithCss
                        xml={clusters}
                    />
                ) :
                    <ActivityIndicator size='large' color={'#000'} />
                }
            </View>
            <View style={{ width: '100%' }}>

                <View style={{ backgroundColor: '#F5BD38' }}>
                    <FooterBottons navigation={navigation} />
                </View>
            </View>
        </View>
    );
};
/**
 * cluster choice. there are three clusters to choose from
 *
 * @param {*} option the cluster of choice
 */
const handleOptionPress = (option, setCluster) => {
    setCluster(option)
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