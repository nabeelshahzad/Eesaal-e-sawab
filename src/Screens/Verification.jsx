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
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";



const Verification = () => {

  const [otp, setOtp] = useState(""); // State to manage the OTP input value

  const navigation = useNavigation();




  const handleOtpChange = (value) => {
    setOtp(value); // Update the state with the OTP input value
  };



  const verifyemail = async() => {

    const email = await AsyncStorage.getItem("email");
    
  };



  const handleVerify = () => {

    // console.log("OTP entered:", otp); // Log the OTP input value to the console
    // navigation.navigate("HomeDrawer");


    const userVerify = {
      email: verifyemail,
      otp: otp
    }

    // Send OTP to the backend for verification
    axios.post('http://localhost:5000/verify', userVerify )
      .then(response => {
        console.log('OTP verification response:', response.data);

        // Assuming the response contains a field indicating OTP verification success
        if (response.data.success) {
          console.log('OTP matched. Navigating to HomeDrawerScreen');
          navigation.navigate("HomeDrawer");
        } else {
          console.log('OTP did not match');
          // Handle case where OTP did not match (show error message or something)
        }
      })
      .catch(error => {
        console.error('Error verifying OTP:', error);
      });
  };




  return (
    <>

      <View style={styles.container}>
        <View style={styles.section1}>
          <View style={{ height: 100, marginTop: '15%', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 200, height: 150, }} source={require("../../assets/logo/landscapeLogo.png")} />
          </View>
        </View>
        <View style={styles.section2}>
          <Text style={styles.headingTitle}>OTP Verification</Text>
          <View style={{ width: '80%', }}>
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="mail" style={styles.inputIcon} size={18} color={root.primaryColor} />
            <TextInput
              style={styles.input}
              placeholder="OTP Code"
              keyboardType="decimal-pad"
              value={otp} // Bind the input value to the state
              onChangeText={handleOtpChange} // Handle changes to the input value
            />

          </View>

          <View
            style={{
              width: "100%",
              height: "22%",
              alignItems: "center",
              marginVertical: "15%",
            }}
          >
            <TouchableOpacity style={styles.inputBtn} onPress={handleVerify} >
              <Text style={styles.btnText}>Verify</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "75%",
                marginVertical: 10,
              }}
            >
              <Text style={{ color: root.bkackAccent, }} >Faild to recieve OTP?</Text>
              <Text onPress={() => { navigation.navigate('Login') }} style={{ fontWeight: 'bold', color: root.primaryColor, fontSize: 15 }}>Resend OTP</Text>

            </View>
          </View>
        </View>
      </View>
    </>
  );
};



export default Verification;







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
    minHeight: 50,

  },
  btnText: {
    color: "white",
    fontSize: 20,
    elevation: 2,
    fontWeight: "500",
  },
});
