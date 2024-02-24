import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import ProgressBar from '../components/ProgressBar';
import Accordion from '../components/Acordion';
import FooterBottons from '../components/FooterBottons';

const Profile = ({ navigation, route }) => {
    const [user, setUser] = useState(route.params)
    const [panels, setPanels] = useState([
        { id: 1, title: 'Projects', content: user.projects_users, isExpanded: false },
        { id: 2, title: 'Skills', content: user.cursus_users, isExpanded: false },
        { id: 3, title: 'Panel 3', content: 'Content for Panel 3', isExpanded: false },
    ]);
    const togglePanel = (id) => {
        const updatedPanels = panels.map((panel) =>
            panel.id === id ? { ...panel, isExpanded: !panel.isExpanded } : panel
        );
        setPanels(updatedPanels);
    };


    return (
        <>
            <ImageBackground
                style={styles.backgroundImage}
                source={require("../assets/42background.jpg")}

                resizeMode="cover"
            >

                {
                    user ?
                        <View style={styles.container}>

                            {/* Top Part - Split in Half */}
                            <View style={styles.topContainer}>
                                <View style={[styles.row, styles.rgap]}>

                                    {/* Left Square with Image */}
                                    <View style={styles.imageContainer}>
                                        <ImageBackground
                                            source={{ uri: `${user.image.link}` }}
                                            style={styles.image}
                                            resizeMode="cover"
                                        />
                                    </View>
                                    {/* Right Part with Multiple Rows */}
                                    <View style={styles.rightContainer}>
                                        <View style={[styles.row, styles.br4, styles.grey]}>
                                            <Text style={styles.title}>{user.displayname}</Text>
                                        </View>
                                        <View style={[styles.row, styles.br4, styles.grey]}>
                                            <Text style={styles.title}>{user.last_name}</Text>
                                        </View>
                                        <View style={[styles.row, styles.br4, styles.grey]}>
                                            <Text style={styles.title}> {user.campus[0].city}</Text>
                                        </View>
                                        <View style={[styles.row, styles.br4, styles.grey]}>
                                            <Text style={styles.title}> {user.kind}</Text>
                                        </View>
                                        {/* <View style={[styles.row, styles.br4]}>
                                        <Text style={styles.title}> {user.displayname}</Text>
                                    </View> */}
                                        {/* Add more rows as needed */}
                                    </View>
                                </View>



                                <View style={[{ flex: 1 }, styles.rgap,]}>
                                    <View style={[styles.col, styles.grey, styles.br4, { marginTop: 30 }]}>
                                        <Text style={styles.title}>{user.location ? 'Available' : 'Unavailable'}</Text>
                                        <Text style={styles.title}>{user.location ? user.location : '-'}</Text>
                                    </View>

                                    <View style={[styles.row, { paddingVertical: 8 }, styles.grey, styles.br4]}>
                                        <View style={styles.col}>
                                            <Text style={styles.title}>Wallet</Text>
                                            <Text style={styles.title}>{user.wallet}</Text>
                                        </View>
                                        <View style={styles.col}>
                                            <Text style={styles.title}>Correction Points</Text>
                                            <Text style={styles.title}>{user.correction_point}</Text>
                                        </View>
                                        <View style={styles.col}>
                                            <Text style={styles.title}>Grade</Text>
                                            <Text style={styles.title}>{user?.cursus_users?.filter(item => item.cursus.name === "42cursus")[0]?.grade || "-"}</Text>
                                        </View>
                                    </View>

                                    <View style={[styles.row, styles.br4]}>
                                        {/* <ProgressBar progress={user.cursus_users[2].level} /> */}
                                    </View>

                                </View>
                            </View>
                            {/* Bottom Part (You can add more content here if needed) */}
                            <View style={styles.bottomContainer}>
                                <View style={[panelss.container,]}>
                                    {panels.map((panel) => (
                                        <Accordion key={panel.id} panel={panel} togglePanel={togglePanel} />
                                    ))}
                                </View>
                                <View style={{ backgroundColor: '#F5BD38' }}>
                                    <FooterBottons navigation={navigation} />
                                </View>
                            </View>
                        </View>
                        : null
                }
            </ImageBackground>

        </>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 10, // Set border radius for the container
        overflow: 'hidden', // Clip overflow content
        width: 250,
        height: '100%',
        // borderWidth: 3,
        // borderColor: "red",
        aspectRatio: 1, // Ensure the container maintains a square aspect ratio

    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // Cover the entire screen
        justifyContent: 'center', // Center content vertically
    },
    container: {
        flex: 1,

    },
    topContainer: {
        flex: 1,
        flexDirection: 'col',
        paddingHorizontal: 10,
    },

    leftContainer: {
        flex: 1,
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'space-between',
        rowGap: 3,
        paddingLeft: 10,

    },
    image: {
        width: '100%', // Adjust width as needed
        height: '100%', // Adjust height as needed
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    col: {
        flex: 1,
        flexDirection: 'col',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    bottomContainer: {
        flex: 1,
    },
    BottomBottons: {
        paddingVertical: 30,
        backgroundColor: '#ff'
    },
    br4: {
        borderRadius: 4
    },
    rgap: {
        rowGap: 20
    },
    cgap: {
        colGap: 4
    },
    progressContainer: {
        height: 20,
        backgroundColor: '#ccc',
        borderRadius: 10,
        margin: 10,
    },
    bar: {
        height: 20,
        backgroundColor: '#333',
        borderRadius: 10,
    },
    grey: {
        backgroundColor: 'rgba(53, 52, 53, 0.9)',

    }
});


const panelss = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,


    },
    panel: {
        borderWidth: 1,
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


export default Profile