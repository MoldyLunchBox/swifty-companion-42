import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const FooterBottons = ({ navigation }) => {
    const goto = (destination) => {

        navigation.navigate(destination)
    }
    return (
        <View style={[styles.row, styles.BottomBottons]}>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>goto("search")}>

                <Text>goo back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>goto("cluster")}>
                <Text>goo back</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
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
});


export default FooterBottons