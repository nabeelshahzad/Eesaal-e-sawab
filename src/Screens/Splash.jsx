import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { root } from "../root/colors";



const Splash = () => {


    return (
        <>

            <View style={styles.container}>
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require("../../assets/splash.png")} >
              <ImageBackground style={{ width: '60%', height: '60%', position: "absolute", top: 220, left: 130 }} source={require("../../assets/logo/landscapeLogo.png")}>
                
              </ImageBackground>
            </ImageBackground>
            </View>

        </>
    );
};




export default Splash;





const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },

});
