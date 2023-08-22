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
                    <EvilIcons name="user" size={170} />
                    <TouchableOpacity style={{ width: "60%", height: 50, backgroundColor: "white", borderRadius: 10, justifyContent: "center", paddingLeft: 9, marginTop: 15 }}>
                        <Text style={{ fontSize: 20 }}>Edit Name</Text>
                        {/* edit icon on left here */}
                    </TouchableOpacity>
                </View>

                <View style={styles.section2}>

                    <View style={styles.inputContainer}>
                        <Ionicons name="mail" style={styles.inputIcon} size={18} color={root.primaryColor} />
                        <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed" style={styles.inputIcon} size={18} color={root.primaryColor} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                        // secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            style={styles.showPasswordIcon}
                        // onPress={() => setShowPassword(!showPassword)}
                        >

                        </TouchableOpacity>

                    </View>


                    <View style={styles.inputContainer}>
                        <Ionicons name="md-call" style={styles.inputIcon} size={18} color={root.primaryColor} />
                        <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />
                    </View>


                    <View
                        style={{
                            width: "90%",
                            height: "22%",
                            marginVertical: "7%",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}
                    >
                        <TouchableOpacity
                            style={styles.inputBtn}
                            onPress={() => {
                                // navigation.navigate("Verification");
                            }}
                        >
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.inputBtn}
                            onPress={() => {
                                // navigation.navigate("Verification");
                            }}
                        >
                            <Text style={styles.btnText}>Save</Text>
                        </TouchableOpacity>

                    </View>



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
        height: 450,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "85%",
        borderWidth: 2,
        paddingLeft: 15,
        borderColor: root.primaryColor,
        borderRadius: 90,
        height: "9%",
        minHeight: 45,
        marginVertical: "2%",
    },
    inputIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
    },
    showPasswordIcon: {
        position: "absolute",
        right: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        height: 30,
    },
    inputBtn: {
        width: "47%",
        borderWidth: 2,
        backgroundColor: root.primaryColor,
        justifyContent: "center",
        alignItems: "center",
        borderColor: root.primaryColor,
        borderRadius: 90,
        height: "50%",
    },
    btnText: {
        color: "white",
        fontSize: 20,
        elevation: 2,
        fontWeight: "500",
    }

});
