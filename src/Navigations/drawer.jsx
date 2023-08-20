import * as React from "react";
import { StatusBar, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions, NavigationContainer, useNavigation } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerContent } from "./DrawerContent.jsx";
import { Image } from "react-native";
import Activities from "../Screens/Home.jsx";
import { root } from "../root/colors.jsx";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from "./tab.jsx";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


export default function MyDrawer({  }) {
const navigation = useNavigation()
  const headerOptions = {
    headerStyle: {
      backgroundColor: root.primaryColor, // Set the background color to transparent
    },
    headerTitleStyle: {},
    headerTitleAlign: "center",
    headerLeft: () => (
      <TouchableOpacity>
        <Foundation
          name="align-left"
          size={24}
          color={root.primaryAccent}
          style={{ marginLeft: 10 }}
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity>
        <Ionicons
          name="power-outline"
          size={24}
          color={root.primaryAccent}
          style={{ marginRight: 10 }}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </TouchableOpacity>
    ),
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={root.primaryColor} />
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          //   Task 13/07/2023
          //   Add tab in drawer and on home tab add the home screens stack
          component={MyTabs}
          options={{
            ...headerOptions,
            headerTitle: (props) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/logo/landscapeLogoWh.png")}
                  style={{ width: 20, height: 45, marginTop: 2 }}
                />
              </View>
            ),
          }}
        />
        {/* <Drawer.Screen
          name="ViewProduct"
          component={ProductScreen}
          options={{
            ...headerOptions,
            headerTitle: (props) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/headerCenterImg.png")}
                  style={{ width: 120, height: 30, marginTop: 2 }}
                />{" "}
              </View>
            ),
          }}
        /> */}
      </Drawer.Navigator>
    </>
  );
}
