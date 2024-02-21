import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import ProgressBar from '../components/ProgressBar';

const Profile = ({ navigation, route }) => {
    const [user, setUser] = useState(route.params)
    const goback = () => {

        navigation.navigate('search')
    }
    useEffect(() => {
        console.log(user.projects_users)
    }, [user])
    return (
        <>
            {
                user ?
                    <View style={styles.container}>

                        {/* Top Part - Split in Half */}
                        <View style={styles.topContainer}>
                            <View style={styles.row}>

                                {/* Left Square with Image */}
                                <View style={styles.leftContainer}>
                                    <Image
                                        source={{ uri: `${user.image.link}` }}
                                        style={styles.image}
                                        resizeMode="contain"
                                    />

                                </View>
                                {/* Right Part with Multiple Rows */}
                                <View style={styles.rightContainer}>
                                    <View style={[styles.row, styles.br4]}>
                                        <Text style={styles.title}>{user.displayname}</Text>
                                    </View>
                                    <View style={[styles.row, styles.br4]}>
                                        <Text style={styles.title}>{user.last_name}</Text>
                                    </View>
                                    <View style={[styles.row, styles.br4]}>
                                        <Text style={styles.title}> {user.campus[0].city}</Text>
                                    </View>
                                    <View style={[styles.row, styles.br4]}>
                                        <Text style={styles.title}> {user.kind}</Text>
                                    </View>
                                    {/* <View style={[styles.row, styles.br4]}>
                                        <Text style={styles.title}> {user.displayname}</Text>
                                    </View> */}
                                    {/* Add more rows as needed */}
                                </View>
                            </View>

                            <View style={[{ flex: 1 }, styles.rgap]}>
                                <View style={styles.col}>
                                    <Text style={styles.title}>{user.location ? 'Available' : 'Unavailable'}</Text>
                                    <Text style={styles.title}>{user.location ? user.location : '-'}</Text>
                                </View>

                                <View style={styles.row}>
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
                                        <Text style={styles.title}>{user.cursus_users[2].grade}</Text>
                                    </View>
                                </View>

                                <View style={styles.row}>
                                    <ProgressBar progress={user.cursus_users[2].level}/>
                                </View>

                            </View>
                        </View>
                        {/* Bottom Part (You can add more content here if needed) */}
                        <View style={styles.bottomContainer}>
                            <TouchableOpacity onPress={goback}>
                                <Text>go back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : null
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 1,
        flexDirection: 'col',
    },

    leftContainer: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'lightgray',
        rowGap: 3
    },
    image: {
        width: '100%', // Adjust width as needed
        height: '100%', // Adjust height as needed
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#353435',
        justifyContent: 'center',
        alignItems: 'center',
    },
    col: {
        flex: 1,
        flexDirection: 'col',
        backgroundColor: '#353435',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: 'lightyellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    br4: {
        borderRadius: 4
    },
    rgap: {
        rowGap: 4
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
});




export default Profile