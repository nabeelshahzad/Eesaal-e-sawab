import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { root } from "../root/colors";
const Donation = () => {
  return (
    <>
      <View style={styles.card_wrap}>
        <ScrollView style={{ height: "100%", minHeight: "100%" }}>
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <Text style={styles.card_title}>Indus Welfare</Text>
              <Text style={styles.card_desc}>
                Serving Humanity is the spirit of all religions{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                  padding:3,
                  marginVertical: 10,
                  justifyContent: "center",
                // height:20,
                borderRadius:19,
                backgroundColor:root.primaryColor

                }}
              >
                
                <MaterialCommunityIcons name="hand-coin" style={{marginRight:10,}} color={root.primaryAccent} size={18} />
                <Text style={styles.card_counter}>
                  Donate Now
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <Text style={styles.card_title}>Saylani Welfare </Text>
              <Text style={styles.card_desc}>
                Serving Humanity is the spirit of all religions{" "}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                  padding:3,
                  marginVertical: 10,
                  justifyContent: "center",
                // height:20,
                borderRadius:19,
                backgroundColor:root.primaryColor

                }}
              >
                
                <MaterialCommunityIcons name="hand-coin" style={{marginRight:10,}} color={root.primaryAccent} size={18} />
                <Text style={styles.card_counter}>
                  Donate Now
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <Text style={styles.card_title}>JDC Foundation </Text>
              <Text style={styles.card_desc}>
                Serving Humanity is the spirit of all religions{" "}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                  padding:3,
                  marginVertical: 10,
                  justifyContent: "center",
                // height:20,
                borderRadius:19,
                backgroundColor:root.primaryColor

                }}
              >
                
                <MaterialCommunityIcons name="hand-coin" style={{marginRight:10,}} color={root.primaryAccent} size={18} />
                <Text style={styles.card_counter}>
                  Donate Now
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <Text style={styles.card_title}>Chipa Welfare</Text>
              <Text style={styles.card_desc}>
                Serving Humanity is the spirit of all religions{" "}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                  padding:3,
                  marginVertical: 10,
                  justifyContent: "center",
                // height:20,
                borderRadius:19,
                backgroundColor:root.primaryColor

                }}
              >
                
                <MaterialCommunityIcons name="hand-coin" style={{marginRight:10,}} color={root.primaryAccent} size={18} />
                <Text style={styles.card_counter}>
                  Donate Now
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <Text style={styles.card_title}>AMAN Foundation</Text>
              <Text style={styles.card_desc}>
                Serving Humanity is the spirit of all religions{" "}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                  padding:3,
                  marginVertical: 10,
                  justifyContent: "center",
                // height:20,
                borderRadius:19,
                backgroundColor:root.primaryColor

                }}
              >
                
                <MaterialCommunityIcons name="hand-coin" style={{marginRight:10,}} color={root.primaryAccent} size={18} />
                <Text style={styles.card_counter}>
                  Donate Now
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <Text style={styles.card_title}>SEWA Organization</Text>
              <Text style={styles.card_desc}>
                Serving Humanity is the spirit of all religions{" "}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                  padding:3,
                  marginVertical: 10,
                  justifyContent: "center",
                // height:20,
                borderRadius:19,
                backgroundColor:root.primaryColor

                }}
              >
                
                <MaterialCommunityIcons name="hand-coin" style={{marginRight:10,}} color={root.primaryAccent} size={18} />
                <Text style={styles.card_counter}>
                  Donate Now
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <Text style={styles.card_title}>Edhi Welfare </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                  padding:3,
                  marginVertical: 10,
                  justifyContent: "center",
                // height:20,
                borderRadius:19,
                backgroundColor:root.primaryColor

                }}
              >
                
                <MaterialCommunityIcons name="hand-coin" style={{marginRight:10,}} color={root.primaryAccent} size={18} />
                <Text style={styles.card_counter}>
                  Donate Now
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  card_wrap: {
    flex: 1,
    minHeight: "100%",
    padding: 5,
  },
  card_Child: {
    marginBottom: 10,
    width: "100%",
    minHeight: 100,
    flexDirection: "row",
  },
  card_Left: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: root.primaryColor,
    width: "100%",
    minHeight: 100,
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
    color: root.primaryAccent,
    
  },
  card_desc: {
    color: root.bkackAccent,
  },
  card_Right: {
    // borderWidth: 1,
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

export default Donation;
