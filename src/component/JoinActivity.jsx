import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { root } from "../root/colors";
import { useNavigation } from "@react-navigation/native";
import JoinActivity2 from "./JoinActivity2";




const JoinActivity = () => {


  const navigation = useNavigation();

  return (
    <>

      <View style={styles.card_wrap}>
        <ScrollView style={{ minHeight: "100%" }} showsVerticalScrollIndicator={false}>

          <JoinActivity2 crdtitle="Darood Pak/Darood Tanjeena" ctr="23" prtcpnts="55" />
          <JoinActivity2 crdtitle="Surah ikhlaas" ctr="59" prtcpnts="67" />
          <JoinActivity2 crdtitle="Teesra Kalma" ctr="88" prtcpnts="9" />

        </ScrollView>
      </View>
    </>
  );
};








const styles = StyleSheet.create({
  card_wrap: {
    minHeight: "100%",
  },
  card_Child: {
    marginBottom: 10,
    width: "100%",
    minHeight: "18%",
    flexDirection: "row",
  },
  card_Left: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: root.primaryColor,
    width: "80%",
    minHeight: "18%",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: root.primaryAccent,
  },
  card_title: {
    color: root.primaryColor,
    fontWeight: "bold",
    fontSize: 22,
  },
  card_counter: {
    color: root.bkackAccent,
  },
  card_Right: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  joinTxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: root.primaryColor,
  },
});



export default JoinActivity;
