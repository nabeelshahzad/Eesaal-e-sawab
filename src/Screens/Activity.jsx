import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { root } from "../root/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const Activity = () => {

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.wrap}>
        <View style={styles.ImgWrap}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{
              uri: "https://i.pinimg.com/550x/8a/68/bf/8a68bfa302b826498ca7ec0313d4f3b3.jpg",
            }}
          />
        </View>
        <View style={styles.bottomWrap}>
          <View style={styles.bottomTop}>
            <Text style={styles.title}>Durood E Pak</Text>
            <Text style={styles.description}>
              lorem ipsum de casta is osf olive casta inok bar b q is good and veg
              sadlskdd the cotlin series
            </Text>
          </View>
          <View style={styles.box_parent}>
            <View style={styles.box}>
              <View style={styles.boxLeft}>
                <MaterialCommunityIcons
                  name="counter"
                  size={24}
                  color={root.primaryColor}
                />
                <Text style={styles.boxLeftTx}>Counter</Text>
              </View>
              <View style={styles.boxRight}>
                <Text style={styles.boxRightTx}>100/12</Text>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.boxLeft}>
                <MaterialCommunityIcons
                  name="calendar-today"
                  size={24}
                  color={root.primaryColor}
                />
                <Text style={styles.boxLeftTx}>Duration</Text>
              </View>
              <View style={styles.boxRight}>
                <Text style={styles.boxRightTx}>07</Text>
                <Text style={styles.boxRightSTx}>Days</Text>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.boxLeft}>
                <FontAwesome5
                  name="users"
                  size={24}
                  color={root.primaryColor}
                />
                <Text style={styles.boxLeftTx}>Total Users</Text>
              </View>
              <View style={styles.boxRight}>
                <Text style={styles.boxRightTx}>10</Text>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.boxLeft}>
                <FontAwesome5
                  name="user-friends"
                  size={24}
                  color={root.primaryColor}
                />
                <Text style={styles.boxLeftTx}>Participating</Text>
              </View>
              <View style={styles.boxRight}>
                <Text style={styles.boxRightTx}>10/3</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 5 }}>
          <TouchableOpacity style={styles.joinBtn} onPress={() => { navigation.navigate("Counter") }}>
            <Text style={styles.joinBtnTx}>Join Activity</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};








const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  ImgWrap: {
    height: "50%",
  },
  bottomWrap: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    height: "50%",
    paddingHorizontal: 5,
  },
  bottomTop: {},

  title: {
    marginTop:5,
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: root.primaryColor,
  },
  description: {
    color: root.bkackAccent,
  },
  box_parent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  box: {
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "48%",
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: root.primaryColor,
    backgroundColor: root.primaryAccent,
    marginBottom: "4%",
  },
  boxLeft: {
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    width: "50%",
  },
  boxRight: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  boxLeftTx: {
    color: root.bkackAccent,
    fontSize: 10,
  },
  boxRightSTx: {
    color: root.bkackAccent,
    fontSize: 10,
    marginRight: 5,
  },
  boxRightTx: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: root.primaryColor,
  },
  joinBtn: {
    width: "100%",
    backgroundColor: root.primaryColor,
    borderRadius: 1,
    borderRadius:10,
    marginBottom:5,
  },
  joinBtnTx: {
    color: "white",
    alignSelf: "center",
    fontSize:20,
    paddingVertical:10
  },
});
export default Activity;
