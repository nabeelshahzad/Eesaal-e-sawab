import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { root } from "../root/colors";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");


  const navigation = useNavigation();


  const handlePhone = (value) => {
    setPhone(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };


  const handleLogIn = () => {

    const userLoginData = {
      phone: phone,
      password: password
    }

    console.log(userLoginData);


    axios.post('http://192.168.100.98:5000/login', userLoginData)
      .then(response => {
        if (response.status === 200) {
          console.log('Login successful!', response?.data);

          // save the token by using async storage
          const token = response?.data?.data?.tokenData; // Assuming the token is received as response.data.tokenData
          AsyncStorage.setItem('token', token)
            .then(() => {
              console.log('Token saved successfully');
              console.log(token);
              Alert.alert('Login successful');
              navigation.navigate('HomeDrawer');
            });


        }
      })
      .catch(error => {
        console.error('Login failed:', error);
        Alert.alert('User Phone or password does not match');
      });

  };



  return (
    <>
      <View style={styles.container}>
        <View style={styles.section1}>
          <View style={{ height: 180 }}>
            <Image
              style={{ width: 120, height: 210 }}
              source={require("../../assets/logo/landscapeLogo.png")}
            />
          </View>
        </View>
        <View style={styles.section2}>

          <Text style={styles.headingTitle}>LOG IN</Text>
          <View style={styles.inputContainer}>
            <Ionicons
              name="md-call"
              style={styles.inputIcon}
              size={18}
              color={root.primaryColor}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={phone}
              onChangeText={handlePhone}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed"
              style={styles.inputIcon}
              size={18}
              color={root.primaryColor}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={handlePassword}
              secureTextEntry={!showPassword}
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

          <View style={{ width: "80%" }}>
            <Text
              onPress={() => {
                navigation.navigate("Forget");
              }}
              style={{ textAlign: "right", color: root.bkackAccent }}
            >
              Forget password
            </Text>
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
              onPress={handleLogIn}>
              <Text style={styles.btnText}>LOG IN</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "75%",
                marginVertical: 10,
              }}
            >
              <Text style={{ color: root.bkackAccent }}>
                Don't have an account ?
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: root.primaryColor,
                  fontSize: 15,
                }}
                onPress={() => {
                  navigation.navigate("Signup");
                }}
              >
                Signup
              </Text>

            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export default Login;











const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  section1: {
    height: "30%",
    marginTop: "10%",
    // borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  section2: {
    height: "70%",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
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
    marginVertical: "2%",
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
