import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { root } from "../root/colors";




const Forget = () => {


  
  const navigation = useNavigation();

  return (
    <>

      <View style={styles.container}>
        <View style={styles.section1}>
          <View style={{ height: 100, marginTop: '15%', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 200, height: 150, }} source={require("../../assets/logo/landscapeLogo.png")} />
          </View>
        </View>
        <View style={styles.section2}>
          <Text style={styles.headingTitle}>Forget Password</Text>
          <View style={{ width: '80%', }}>
            <Text style={{ color: root.bkackAccent }}>Enter your valid email</Text>
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="mail" style={styles.inputIcon} size={18} color={root.primaryColor} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
            />
          </View>
          <View
            style={{
              width: "100%",
              height: "22%",
              //   borderWidth: 1,
              alignItems: "center",
              marginVertical: "15%",
            }}
          >
            <TouchableOpacity
              style={styles.inputBtn}
              onPress={() => {
                navigation.navigate("Reset");
              }}
            >
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "75%",
                marginVertical: 10,
              }}
            >
              <Text style={{ color: root.bkackAccent, }} >Try again with password?</Text>
              <Text onPress={() => { navigation.navigate('Login') }} style={{ fontWeight: 'bold', color: root.primaryColor, fontSize: 15 }}>Login</Text>

            </View>
          </View>
        </View>
      </View>
    </>
  );
};




export default Forget;






const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  section1: {
    height: "30%",
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  section2: {
    height: "70%",
    flexDirection: "column",
    alignItems: "center",
  },
  box: {
    margin: 5,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 45,
  },
  headingTitle: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: "10%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    borderWidth: 2,
    paddingLeft: 15,
    borderColor: root.primaryColor,
    borderRadius: 90,
    height: "10%",
    minHeight: 50,
    marginVertical: "2%"
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  showPasswordIcon: {
    position: "absolute",
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
  },
  inputBtn: {
    width: "85%",
    borderWidth: 2,
    backgroundColor: root.primaryColor,
    justifyContent: "center",
    alignItems: "center",
    borderColor: root.primaryColor,
    borderRadius: 90,
    height: "45%",
  },
  btnText: {
    color: "white",
    fontSize: 20,
    elevation: 2,
    fontWeight: "500",
  },
});
