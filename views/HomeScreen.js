import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from "react-native";



const HomeScreen = () => {
    useEffect(() => {
        console.log('home page works')
    })
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
      alignItems: "center",
      justifyContent: "center",
    },
});


export default HomeScreen
