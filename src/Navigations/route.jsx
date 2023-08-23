import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../Screens/Welcome.jsx";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup.jsx";
import Forget from "../Screens/Forget.jsx";
import Verification from "../Screens/Verification.jsx";
import Reset from "../Screens/Reset.jsx";
import MyDrawer from "./drawer.jsx"
import Activities from "../Screens/Activities.jsx";
import profilePage from "../Screens/profilePage";

const Stack = createNativeStackNavigator();


function Route() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="welcome" component={Welcome} options={{ headerShadowVisible: false, title: null, headerTransparent: true }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShadowVisible: false, title: null, headerTransparent: true, }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShadowVisible: false, title: null, headerTransparent: true, }} />
        <Stack.Screen name="Forget" component={Forget} options={{ headerShadowVisible: false, title: null, headerTransparent: true, }} />
        <Stack.Screen name="Verification" component={Verification} options={{ headerShadowVisible: false, title: null, headerTransparent: true, }} />
        <Stack.Screen name="profilePage" component={profilePage} options={{ headerShadowVisible: false, title: null, headerTransparent: true, }} />
        <Stack.Screen name="Reset" component={Reset} options={{ headerShadowVisible: false, title: null, headerTransparent: true, }} />
        <Stack.Screen name="HomeDrawer" component={MyDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="Activities" component={Activities} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


export default Route;
