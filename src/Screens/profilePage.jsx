import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { root } from "../root/colors";
import { EvilIcons } from "@expo/vector-icons";



const Reset = () => {

    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();


    return (
        <>

            <View style={styles.container}>

                <View style={styles.section1}>
                    <EvilIcons name="user" size={170}  />
                </View>

                <View style={styles.section2}>



                </View>

            </View>
        </>
    );
};
export default Reset;




const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        borderWidth: 9
    },
    section1: {
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        backgroundColor: "#00B998"
    },
    section2: {
        height: "50%",
        flexDirection: "column",
        alignItems: "center",
        borderWidth: 2
    },

});
