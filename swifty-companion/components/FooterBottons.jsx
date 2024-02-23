import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { fetchUser } from '../utils/searchUsers'
import { useAuthContext } from "../store/authProvider";

const FooterBottons = ({ navigation }) => {
    let { signOut, state, dispatch } = useAuthContext();
    const logmeout = () => {
        signOut()
        navigation.navigate("login");

    }
    const goto = (destination) => {

        navigation.navigate(destination)
    }
    const myprofil = async () => {


        try {

            const res = await fetchUser('me', dispatch)
            navigation.navigate("profile", res);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={[styles.row, styles.BottomBottons]}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => myprofil()}>

                <Text style={styles.boldAndCapitalized}>profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => goto("search")}>

                <Text style={styles.boldAndCapitalized}>SEARCH</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => goto("cluster")}>
                <Text style={styles.boldAndCapitalized}>Clusters</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => logmeout()}>

                <Text style={styles.boldAndCapitalized}>Log out</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'red',

    },
    col: {
        flex: 1,
        flexDirection: 'col',
        backgroundColor: '#353435',
        justifyContent: 'center',
        alignItems: 'center',
    },

    BottomBottons: {
        paddingVertical: 30,
        backgroundColor: '#ff'
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
    boldAndCapitalized: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase',
    },
});


export default FooterBottons