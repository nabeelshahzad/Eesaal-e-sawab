import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { root } from "../root/colors";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";




const JoinActivity2 = (props) => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.card_wrap}>
                <ScrollView style={{ Height: '100%' }}>

                    <View style={styles.card_Child}>

                        <View style={styles.card_Left}>

                            <Text style={styles.card_title}>{props.crdtitle}</Text>
                            <View style={{ flexDirection: "row", width: '70%', marginVertical: 10, justifyContent: 'space-around' }}>
                                <Text style={styles.card_counter}>
                                    <MaterialCommunityIcons name="counter" size={18} />
                                    {props.ctr}/100
                                </Text>
                                <Text style={styles.card_counter}>
                                    <FontAwesome name="users" size={18} />
                                    {props.prtcpnts}/100
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.card_Right} onPress={() => {navigation.navigate("Activity")}}>
                            <Text style={styles.joinTxt}>Join</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        </>
    );
};







const styles = StyleSheet.create({
    card_wrap: {
        Height: "100%",
        width: "100%",
    },
    card_Child: {
        marginBottom: 10,
        width: "100%",
        minHeight: "18%",
        flexDirection: "row",
        alignItems: "center",
    },
    card_Left: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: root.primaryColor,
        width: "85%",
        minHeight: "18%",
        backgroundColor: root.primaryAccent,
        justifyContent: "center",
        alignItems: "center",
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
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor:root.primaryColor ,
        marginLeft:'6%',
        width: "40%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        minHeight:'100%'
    },
    joinTxt: {
        fontSize: 18,
        fontWeight: "bold",
        color: root.primaryAccent,
    },
});



export default JoinActivity2;
