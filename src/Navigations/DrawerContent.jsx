import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { root } from "../root/colors";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const { height } = Dimensions.get("window");



export function DrawerContent(props) {

  const navigation = useNavigation();

  const showAlert = () => {
    Alert.alert(
      "Alert",
      "Are you sure, You want to logout from your account ",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
            handleLogout();
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleLogout = async () => {

  };


  return (

    <View {...props}>

      <View style={styles.drawerMain}>

        <View style={styles.drawerTop}>

          <EvilIcons name="user" size={170} color={root.primaryColor} />
          <Text style={{ fontWeight: "700", fontSize: 20, color: root.primaryColor }}>
            Huzaifa Usman
          </Text>
          <Text style={{ fontSize: 13, color: root.primaryColor }}>
            huzaifa@cloudlabweb.com
          </Text>
        </View>


        <View style={styles.drawerBottom}>
          <View style={styles.drawerContent}>

            <TouchableOpacity style={styles.drawerItem} onPress={() => { navigation.navigate("profilePage"); }}>

              <FontAwesome5 name="user-alt" size={20} style={{ marginLeft: 5, }} color={root.primaryColor} />
              <Text style={styles.drawerText}>My Profile</Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => navigation.navigate("MyActivity")}
            >
              <MaterialCommunityIcons name="book-edit" size={20} style={{ marginLeft: 5, }} color={root.primaryColor} />
              <Text style={styles.drawerText}>My Activities</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <FontAwesome5 name="hand-holding-heart" size={20} style={{ marginLeft: 5, }} color={root.primaryColor} />
              <Text style={styles.drawerText}>My Donation</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <FontAwesome5 name="hand-holding-heart" size={20} style={{ marginLeft: 5, }} color={root.primaryColor} />
              <Text style={styles.drawerText}>My Sadqah</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Fontisto name="power" size={20} style={{ marginLeft: 5, }} color={root.primaryColor} />
              <Text style={styles.drawerText}>Logout</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>

      <StatusBar style="light" backgroundColor={root.primaryColor} />
    </View>
  );
}





const styles = StyleSheet.create({
  drawerContent: {
    justifyContent: "center",
    alignContent: "center",
  },
  drawerItem: {
    borderBottomWidth: 1,
    paddingBottom: 12,
    borderColor: root.bkackAccent,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  drawerText: {
    fontSize: 18,
    fontWeight: "600",
    color: root.bkackAccent,
    paddingHorizontal: 10,
  },
  drawerMain: {
    height: height,
    width: "100%",
  },
  drawerTop: {
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: root.primaryAccent,
    height: "45%",
  },
  drawerBottom: {
    justifyContent: "center",
    height: "60%",
  },
  iconsBlock: {
    display: "flex",
    justifyContent: "center",
  },
});