import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { root } from "../root/colors";

const Welcome = () => {

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>

        <View style={styles.section1}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>

            <ImageBackground style={{ width: '100%', height: '102%' }} source={require("../../assets/Vector2.png")} >
              <ImageBackground style={{ width: '100%', height: '95%' }} source={require("../../assets/Vector.png")}>
                <ImageBackground style={{ width: '100%', height: '70%', position: 'absolute', top: '69%', right: '2%', }} source={require("../../assets/flower.png")}>

                </ImageBackground>
              </ImageBackground>
            </ImageBackground>
          </View>

        </View>


        <View style={styles.section2}>
          <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('Login') }} >
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={{ color: root.primaryColor, fontWeight: "bold" }}>OR</Text>
          <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('Signup') }}>
            <Text style={styles.btnText} >SIGNUP</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  );
};



export default Welcome;





const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    // borderWidth: 5,
  },
  section1: {
    width: "100%",
    height: "55%",
    // borderWidth: 2,
  },
  section2: {
    height: "45%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
  },
  box: {
    margin: 5,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 45,
    backgroundColor: root.primaryColor,
  },
  btnText: {
    color: "white",
    fontWeight: "500",
  },
});
