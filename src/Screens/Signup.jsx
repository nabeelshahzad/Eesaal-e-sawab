import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import { root } from "../root/colors";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";




const Signup =  () => {


  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");


  const navigation = useNavigation();


  const countryOptions = [
    { label: "Afghanistan", value: "AF" },
    { label: "Albania", value: "AL" },
    { label: "Algeria", value: "DZ" }
    // ... Add more countries here
  ];


  const handleCountryChange = (value) => {
    setCountry(value);
  };


  const handleName = (value) => {
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handlePhoneNumber = (value) => {
    setPhone(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };


  const SignUp = async () => {


    const userData = {
      name: name,
      phone: phone,
      email: email,
      country: country,
      password: password
    }


    await AsyncStorage.setItem("email", email);
    
    // Make a POST request using Axios
    axios.post('http://192.168.100.6:5000/register', userData)
      .then(response => {
        console.log('Sign-up successful!', response.data);
        if (response.status === 200) {
          navigation.navigate('Verification')
        }
      })
      .catch(error => {
        console.error('Sign-up failed:', error);
        if (error.message) {
          Alert.alert(error.message)
          Alert.alert(error.response.data)
          console.log(error.response.data)
        }
        if (error.message) {
          console.log(error.message)
        }
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

          <Text style={styles.headingTitle}>SIGN UP</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="person" style={styles.inputIcon} size={18} color={root.primaryColor} />
            <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={handleName} keyboardType="name-phone-pad" />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="mail" style={styles.inputIcon} size={18} color={root.primaryColor} />
            <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={handleEmail} keyboardType="email-address" />
          </View>



          <PhoneInput value={phone} onChangeText={handlePhoneNumber} defaultCode="PK" containerStyle={styles.inputContactContainer} >
            <TouchableOpacity onPress={() => { Alert.alert(phone) }} style={{ width: 50 }}  >
              <Text >Phone Number</Text>
            </TouchableOpacity>
          </PhoneInput>




          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" style={styles.inputIcon} size={18} color={root.primaryColor} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!showPassword}
              onChangeText={handlePassword}
              value={password}
            />
            <TouchableOpacity
              style={styles.showPasswordIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Ionicons name="eye-off" size={20} color={root.bkackAccent} />
              ) : (
                <Ionicons name="eye" size={20} color={root.bkackAccent} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="globe" style={styles.inputIcon} size={18} color={root.primaryColor} />
            <Picker
              selectedValue={country}
              onValueChange={handleCountryChange}
              style={styles.picker}
            >
              {countryOptions.map((country) => (
                <Picker.Item key={country.value} label={country.label} value={country.value} />
              ))}
            </Picker>
          </View>

          <View
            style={{
              width: "100%",
              height: "22%",
              alignItems: "center",
              marginVertical: "7%",
            }}
          >
            <TouchableOpacity
              style={styles.inputBtn}
              onPress={SignUp}
            >
              <Text style={styles.btnText}>SIGN UP</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "75%",
                marginVertical: 10,
              }}
            >
              <Text style={{ color: root.bkackAccent }}>Already have an account?</Text>
              <Text
                onPress={() => {
                  navigation.navigate("Login");
                }}
                style={{ fontWeight: "bold", color: root.primaryColor, fontSize: 15 }}
              >
                Signin
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};




const styles = StyleSheet.create({

  container: {
    height: "100%",
    width: "100%",
  },
  section1: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  section2: {
    height: "75%",
    flexDirection: "column",
    alignItems: "center",
  },
  box: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 45,
  },
  headingTitle: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    borderWidth: 2,
    paddingLeft: 15,
    borderColor: root.primaryColor,
    borderRadius: 90,
    height: "9%",
    minHeight: 45,
    marginVertical: "2%",
  },
  inputContactContainer: {
    width: "85%",
    borderWidth: 2,
    borderColor: root.primaryColor,
    borderRadius: 90,
    height: 59,
    minHeight: 45,
    marginVertical: "2%",
    paddingRight: 24
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
  picker: {
    flex: 1,
    height: "100%",
    color: root.primaryColor,
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
  }

});




export default Signup;
