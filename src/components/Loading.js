import React from "react";
import { StyleSheet, Text, StatusBar, ImageBackground } from "react-native";


export default function Loading() {
    return (
        <ImageBackground
            style={styles.container}
            source={require("../assets/images/clouds.jpg")}
            resizeMode="cover"
        >
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>Получение погоды...</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
    },
    text: {
        color: "#FFF",
        fontSize: 30,
    }
});