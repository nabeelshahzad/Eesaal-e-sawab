import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { root } from "../root/colors";
import { useNavigation } from "@react-navigation/native";



const HomeScreen = () => {

  const navigation = useNavigation();


  return (
    <>
      <View style={styles.wrap}>
        <View style={styles.ActivityTop}>
          <View style={styles.topChild}>
            <View>
              <Image
                style={styles.userImg}
                source={require("../../assets/Images/user.png")}
              />
            </View>
            <View style={{ marginLeft: "4%" }}>
              <Text style={{ color: root.primaryAccent }}>Hello,</Text>
              <Text style={styles.userName}>Mr.Islamic User </Text>
            </View>
          </View>
        </View>
        <View style={styles.ActivityBottom}>
          <View style={styles.ActivityBottomChild}>
            <TouchableOpacity style={styles.box} onPress={()=>{navigation.navigate("Activities")}}>
              <Text style={styles.boxText}>ESSAL-E-SAWAB</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.boxText}>SADQA</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Donation")}} style={styles.box}>
              <Text style={styles.boxText}>DONATION</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};






const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: root.primaryColor,
  },
  ActivityTop: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  topChild: {
    minWidth: "90%",
    maxWidth: "90%",
    maxHeight: "70%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  userImg: {
    maxWidth: 80,
    maxHeight: 80,
    aspectRatio: 2,
  },
  userName: {
    color: root.primaryAccent,
    fontSize: 22,
  },
  ActivityBottom: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  ActivityBottomChild: {
    height: "90%",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
  },
  box: {
    minWidth: "90%",
    borderRadius: 10,
    minHeight: "20%",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: root.primaryColor,
  },
  boxText: {
    color: "white",
    fontSize: 19,
  },
});




export default HomeScreen;
