import React from "react";
import { root } from "../root/colors";
import { StyleSheet, Text, View } from "react-native";
const ProfileScreen = () => {
  return (
    <>
      <View>
        <View style={styles.top}></View>
        <View style={styles.bottom}></View>

        <View></View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  top: {
    backgroundColor: root.primaryAccent,
    height: "40%",
    borderWidth: 1,
  },
  bottom: {
    height: "60%",
    borderWidth: 1,
  },
});
export default ProfileScreen;
