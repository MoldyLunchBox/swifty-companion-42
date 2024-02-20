import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Profile = ({}) => {
    return (
        <View style={styles.container}>
            {/* Top Part - Split in Half */}
            <View style={styles.topContainer}>
                {/* Left Square with Image */}
                <View style={styles.leftContainer}>
                    {/* <Image
                        source={require('../assets/your_image.png')}
                        style={styles.image}
                        resizeMode="cover"
                    /> */}
                        <Text style={styles.title}>image place 1</Text>

                </View>
                {/* Right Part with Multiple Rows */}
                <View style={styles.rightContainer}>
                    {/* Row 1 */}
                    <View style={styles.row}>
                        <Text style={styles.title}>Title 1</Text>
                    </View>
                    {/* Row 2 */}
                    <View style={styles.row}>
                        <Text style={styles.title}>Title 2</Text>
                    </View>
                    {/* Add more rows as needed */}
                </View>
            </View>
            {/* Bottom Part (You can add more content here if needed) */}
            <View style={styles.bottomContainer}>
                {/* Your content here */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 1,
        flexDirection: 'row', // Horizontal layout
    },
    leftContainer: {
        flex: 1, // Takes half of the top container
        backgroundColor: 'lightblue', // Example background color
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightContainer: {
        flex: 1, // Takes half of the top container
        backgroundColor: 'lightgray', // Example background color
        paddingHorizontal: 10,
    },
    image: {
        width: '80%', // Adjust width as needed
        height: '80%', // Adjust height as needed
        resizeMode: 'contain',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomContainer: {
        flex: 1, // Takes the rest of the screen
        backgroundColor: 'lightyellow', // Example background color
        justifyContent: 'center',
        alignItems: 'center',
    },
});



export default Profile