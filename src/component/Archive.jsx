import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { root } from "../root/colors";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const ArchiveActivityScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.card_wrap}>
        <ScrollView
          style={{ minHeight: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <FontAwesome
                name="remove"
                size={14}
                color="red"
                style={{ position: "absolute", top: 5, right: 7 }}
              />
              <Text style={styles.card_title}>99 Names Of Allah</Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "70%",
                  marginVertical: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></View>
                <MaterialCommunityIcons
                  name="counter"
                  color={root.primaryColor}
                  size={18}
                />
                <Text style={styles.card_counter}>Counted:</Text>

                <Text style={styles.card_counterText}> 32/100</Text>
              </View>
              <View style={styles.participantWrap}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Fontisto
                    name="date"
                    size={15}
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                  />
                  <Text style={styles.card_counter}>07/22/2023</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="users"
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                    size={15}
                  />
                  <Text style={styles.card_counter}>10/100</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <FontAwesome
                name="remove"
                size={14}
                color="red"
                style={{ position: "absolute", top: 5, right: 7 }}
              />

              <Text style={styles.card_title}>Dua E Shifa</Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "70%",
                  marginVertical: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></View>
                <MaterialCommunityIcons
                  name="counter"
                  color={root.primaryColor}
                  size={18}
                />
                <Text style={styles.card_counter}>Counted:</Text>

                <Text style={styles.card_counterText}> 32/100</Text>
              </View>
              <View style={styles.participantWrap}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Fontisto
                    name="date"
                    size={15}
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                  />
                  <Text style={styles.card_counter}>07/22/2023</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="users"
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                    size={15}
                  />
                  <Text style={styles.card_counter}>10/100</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <FontAwesome
                name="remove"
                size={14}
                color="red"
                style={{ position: "absolute", top: 5, right: 7 }}
              />

              <Text style={styles.card_title}>Ayat E Kareema</Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "70%",
                  marginVertical: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="counter"
                    color={root.primaryColor}
                    size={18}
                  />
                  <Text style={styles.card_counter}>Counted:</Text>
                  <Text style={styles.card_counterText}> 32/100</Text>
                </View>
              </View>
              <View style={styles.participantWrap}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Fontisto
                    name="date"
                    size={15}
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                  />
                  <Text style={styles.card_counter}>07/22/2023</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="users"
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                    size={15}
                  />
                  <Text style={styles.card_counter}>10/100</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <FontAwesome
                name="remove"
                size={14}
                color="red"
                style={{ position: "absolute", top: 5, right: 7 }}
              />

              <Text style={styles.card_title}>Surah Baqarah</Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "70%",
                  marginVertical: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="counter"
                    color={root.primaryColor}
                    size={18}
                  />
                  <Text style={styles.card_counter}>Counted:</Text>
                  <Text style={styles.card_counterText}> 32/100</Text>
                </View>
              </View>
              <View style={styles.participantWrap}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Fontisto
                    name="date"
                    size={15}
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                  />
                  <Text style={styles.card_counter}>07/22/2023</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="users"
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                    size={15}
                  />
                  <Text style={styles.card_counter}>10/100</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <FontAwesome
                name="remove"
                size={14}
                color="red"
                style={{ position: "absolute", top: 5, right: 7 }}
              />

              <Text style={styles.card_title}>Quran Shareef</Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "70%",
                  marginVertical: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="counter"
                    color={root.primaryColor}
                    size={18}
                  />
                  <Text style={styles.card_counter}>Counted:</Text>
                  <Text style={styles.card_counterText}> 32/100</Text>
                </View>
              </View>
              <View style={styles.participantWrap}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Fontisto
                    name="date"
                    size={15}
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                  />
                  <Text style={styles.card_counter}>07/22/2023</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="users"
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                    size={15}
                  />
                  <Text style={styles.card_counter}>10/100</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <FontAwesome
                name="remove"
                size={14}
                color="red"
                style={{ position: "absolute", top: 5, right: 7 }}
              />

              <Text style={styles.card_title}>Surah Fatiha</Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "70%",
                  marginVertical: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="counter"
                    color={root.primaryColor}
                    size={18}
                  />
                  <Text style={styles.card_counter}>Counted:</Text>
                  <Text style={styles.card_counterText}> 32/100</Text>
                </View>
              </View>
              <View style={styles.participantWrap}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Fontisto
                    name="date"
                    size={15}
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                  />
                  <Text style={styles.card_counter}>07/22/2023</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="users"
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                    size={15}
                  />
                  <Text style={styles.card_counter}>10/100</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <FontAwesome
                name="remove"
                size={14}
                color="red"
                style={{ position: "absolute", top: 5, right: 7 }}
              />

              <Text style={styles.card_title}>Durood E Pak</Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "70%",
                  marginVertical: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="counter"
                    color={root.primaryColor}
                    size={18}
                  />
                  <Text style={styles.card_counter}>Counted:</Text>
                  <Text style={styles.card_counterText}> 32/100</Text>
                </View>
              </View>
              <View style={styles.participantWrap}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Fontisto
                    name="date"
                    size={15}
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                  />
                  <Text style={styles.card_counter}>07/22/2023</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="users"
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                    size={15}
                  />
                  <Text style={styles.card_counter}>10/100</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card_Child}>
            <View style={styles.card_Left}>
              <FontAwesome
                name="remove"
                size={14}
                color="red"
                style={{ position: "absolute", top: 5, right: 7 }}
              />

              <Text style={styles.card_title}>Kalma E Awwal</Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "70%",
                  marginVertical: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="counter"
                    color={root.primaryColor}
                    size={18}
                  />
                  <Text style={styles.card_counter}>Counted:</Text>
                  <Text style={styles.card_counterText}> 32/100</Text>
                </View>
              </View>
              <View style={styles.participantWrap}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Fontisto
                    name="date"
                    size={15}
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                  />
                  <Text style={styles.card_counter}>07/22/2023</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="users"
                    style={{ marginRight: 5 }}
                    color={root.primaryColor}
                    size={15}
                  />
                  <Text style={styles.card_counter}>10/100</Text>
                </View>
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
    minHeight: "100%",
  },
  card_Child: {
    marginBottom: 10,
    width: "100%",
    minHeight: 90,
    flexDirection: "row",
  },
  card_Left: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: root.primaryColor,
    width: "100%",
    elevation: 2,
    shadowColor: root.bkackAccent,
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
  card_counterText: {
    marginBottom: 0,
    color: root.SecondaryColor,
    fontWeight: "bold",
  },
  // bold
  card_Right: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  participantWrap: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    // borderWidth:1,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  joinTxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: root.primaryColor,
  },
});

export default ArchiveActivityScreen;
