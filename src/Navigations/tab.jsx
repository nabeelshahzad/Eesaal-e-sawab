import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import ProfileScreen from "../Screens/profile";
import Activities from "../Screens/Activities.jsx";
import MyActivity from "../Screens/MyActivity.jsx";
import HomeScreen from "../Screens/Home.jsx";
import Reset from "../Screens/Reset";
import Activity from "../Screens/Activity";
import Donation from "../Screens/Donation";
import Counter from "../Screens/Counter";
import profilePage from "../Screens/profilePage";
import { root } from "../root/colors";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const HomeStack = () => (
  <Stack.Navigator initialRouteName="Activities" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Activities" component={Activities} />
    <Stack.Screen name="Activity" component={Activity} />
    <Stack.Screen name="Donation" component={Donation} />
    <Stack.Screen name="MyActivity" component={MyActivity} />
    <Stack.Screen name="Counter" component={Counter} />
    <Stack.Screen name="Reset" component={Reset} />
    <Stack.Screen name="profilePage" component={profilePage} />
  </Stack.Navigator>
);

function MyTabs() {

  return (

    <Tab.Navigator
      initialRouteName="HomeBN"
      tabBarOptions={{
        showLabel: false,
        style: styles.tabBar,
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { height: "8%", backgroundColor: root.primaryAccent },
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeBN") {
            iconName = "home";
          } else if (route.name === "Profile") {
            iconName = "account";
          } else if (route.name === "Notification") {
            iconName = "bell";
          } else if (route.name === "GiftBN") {
            iconName = "shopping";
          }
          return (
            <View
              style={[
                styles.tabBarIconContainer,
                focused && styles.tabBarIconContainerFocused,
              ]}
            >
              <MaterialCommunityIcons
                name={iconName}
                size={24}
                color={focused ? root.primaryColor : root.bkackAccent}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="HomeBN" component={HomeStack} />
      <Tab.Screen name="Notification" component={ProfileScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0,
    elevation: 10,
    paddingBottom: 5,
  },
  tabBarIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  tabBarIconContainerFocused: {
    borderRadius: 400,
    paddingHorizontal: 7,
  },
});

export default MyTabs;
