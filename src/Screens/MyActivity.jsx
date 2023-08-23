import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Text, View } from "react-native";
import ArchiveActivityScreen from "../component/Archive.jsx";
import ActiveActivityScreen from "../component/ActiveActivity.jsx";
import { root } from "../root/colors.jsx";


const Tab = createMaterialTopTabNavigator();



const MyActivity = () => {

  return (
    <>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        tabBarOptions={{}}
      >
        <Tab.Screen
          name="ActiveActivity"
          options={{ tabBarLabel: "Active Activities" }}
          component={ActiveActivity}
        />
        <Tab.Screen
          name="ArchiveActivity"
          options={{ tabBarLabel: "Archived Activities" }}
          component={ArchiveActivity}
        />
      </Tab.Navigator>
    </>
  );
};



const CustomTabBar = ({ state, descriptors, navigation }) => {

  return (

    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const tabStyle = isFocused ? styles.activeTab : styles.inactiveTab;

        return (
          <Text
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={tabStyle}
          >
            {label}
          </Text>
        );
      })}
    </View>
  );
};





const ArchiveActivity = () => {

  return (
    <View style={styles.tabContentContainer}>
      <ArchiveActivityScreen />
    </View>
  );
};

const ActiveActivity = () => {
  return (
    <View style={styles.tabContentContainer}>
      <ActiveActivityScreen />
    </View>
  );
};




const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor:"white",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 6,
    marginBottom: 0,
  },
  activeTab: {
    flex: 1,
    textAlign: "center",
    backgroundColor: root.primaryColor, // Change the color to your desired value
    borderRadius: 5,
    color: "white",
    paddingVertical: 10,
    margin: 10,
    marginHorizontal:5,
    marginTop: 2,
  },
  inactiveTab: {
    flex: 1,
    textAlign: "center",
    borderRadius: 5,
    color: "white",
    paddingVertical: 10,
    margin: 10,
    color:root.bkackAccent,
    marginHorizontal:5,
    marginTop: 2,
  },
  tabContentContainer: {
    backgroundColor:'white',
    padding: 6,
    paddingTop:0,
  },
});



export default MyActivity;
