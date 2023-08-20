import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { root } from "../root/colors";


const Counter = () => {

    const [count, setCount] = useState(0);
    const [savedValue, setSavedValue] = useState(null);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const saveValue = () => {
        setSavedValue(count);
    };

    return (
        <>
            <View style={styles.main_card}>
                <View style={styles.card}>
                    <View style={styles.counter}>
                        <Text style={styles.countervalue}>{count}</Text>
                    </View>

                    <View style={styles.buttons}>
                        <View style={styles.indnbtn}>

                            <TouchableOpacity
                                style={{ backgroundColor: root.primaryColor, height: 80, width: 80, alignItems: "center", justifyContent: "center" }}
                                onPress={decrement}
                            >
                                <Text style={{ color: "white", fontSize: 60 }}>-</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ backgroundColor: root.primaryColor, height: 80, width: 80, alignItems: "center", justifyContent: "center" }}
                                onPress={increment}
                            >
                                <Text style={{ color: "white", fontSize: 60 }}>+</Text>
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity
                            style={{ backgroundColor: root.primaryColor, color: "white", height: 80, width: "100%", alignItems: "center", justifyContent: "center" }}
                            onPress={saveValue}
                        >
                            <Text style={{ color: "white", fontSize: 50 }}>Save</Text>
                        </TouchableOpacity>
                        {savedValue !== null && (
                            <Text style={styles.savedValue}>Saved Value: {savedValue}</Text>
                        )}
                    </View>
                </View>
            </View>
        </>

    );
};



const styles = StyleSheet.create({
    main_card: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 2
    },
    card: {
        height: "70%",
        width: "80%",
        borderWidth: 2,
        borderRadius: 20,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        // elevation: 2,
        borderStyle: 'solid',
        borderTopColor: '#ddd', // Light border color for top
        borderRightColor: "#ddd",
        borderLefttWidth: 20,
        borderLeftColor: "#ddd",
        borderBottomColor: "#666",


    },
    counter: {
        height: "50%",
        width: "100%",
        // borderWidth: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    countervalue: {
        height: "70%",
        width: "70%",
        borderWidth: 4,
        textAlign: "center",
        textAlignVertical: 'center',
        fontSize: 60,
        borderColor: root.primaryColor

    },
    buttons: {
        height: "40%",
        alignSelf: 'center',
        width: "70%",
        // borderWidth: 2,
        justifyContent: "space-between"

    },
    indnbtn: {
        flexDirection: "row",
        justifyContent: "space-between"
    }

});


export default Counter;