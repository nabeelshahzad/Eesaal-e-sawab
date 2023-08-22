import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { root } from "../root/colors";
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';




const PostActivity = () => {

  const [selectedEvent, setSelectedEvent] = useState("none");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [selectedValue, setSelectedValue] = useState('public');



  const eventOptions = [
    { label: "Wazaif", value: "WZ" },
    { label: "Quran Khuwani", value: "QK" }
    // ... Add more countries here
  ];


  const numberOptions = [
    { label: "1", value: "ONE" },
    { label: "2", value: "TWO" },
    { label: "3", value: "THREE" },
    { label: "4", value: "FOUR" },
    { label: "5", value: "FIVE" },
    { label: "6", value: "SIX" },
    { label: "7", value: "SEVEN" },
    { label: "8", value: "EIGHT" },
    { label: "9", value: "NINE" },
    { label: "10", value: "TEN" },
    { label: "11", value: "ELEVEN" },
    { label: "12", value: "TWELVE" },
    { label: "13", value: "THIRTEEN" },
    { label: "14", value: "FOURTEEN" },
    { label: "15", value: "FIFTEEN" },
    { label: "16", value: "SIXTEEN" },
    { label: "17", value: "SVENTEEN" },
    { label: "18", value: "EIGHTEEN" },
    { label: "19", value: "NINTEEN" },
    { label: "20", value: "TWENTY" },
    { label: "21", value: "TWENTYONE" },
    { label: "22", value: "TWENTYTWO" },
    { label: "23", value: "TWENTYTHREE" },
    { label: "24", value: "TWENTYFOUR" },
    { label: "25", value: "TWENTYFIVE" },
    { label: "26", value: "TWENTYSIX" },
    { label: "27", value: "TWENTYSEVEN" },
    { label: "28", value: "TWENTYEIGHT" },
    { label: "29", value: "TWENTYNINE" },
    { label: "30", value: "THIRTY" }

  ];



  const handleEventChange = (value) => {
    setSelectedEvent(value);
    console.log(value)
  };

  const handleNumberChange = (value) => {
    setSelectedNumber(value);
  };


  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };



  return (
    <>
      <View style={styles.main_card}>

        <View style={styles.card}>

          <View style={styles.inputContainer}>
            <Picker selectedValue={selectedEvent} onValueChange={handleEventChange} style={styles.picker} >
              {eventOptions.map((event) => (
                <Picker.Item key={event.value} label={event.label} value={event.value} style={{ fontSize: 20 }} />
              ))}
            </Picker>
          </View>


          <View style={{ width: "100%", height: "13%", marginTop: 30, flexDirection: "row", justifyContent: "space-between" }}>

            <View style={{ width: "40%" }}>

              <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "bold" }}>Image</Text>
              <TouchableOpacity style={styles.imageBtn}  >
                <Text style={styles.btnText}>Upload image</Text>
              </TouchableOpacity>

            </View>


            <View style={{ width: "55%" }}>

              <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "bold", borderRadius: 7 }}>Time Duration</Text>

              <TextInput style={{ borderWidth: 2, height: 59, borderColor: root.primaryColor, textAlign: "center", fontSize: 25, borderRadius: 7 }} keyboardType="phone-pad" />

            </View>

          </View>

          <View style={{ width: "100%", marginTop: 30 }}>
            <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "bold" }}>Activity Title</Text>
            <TextInput style={{ borderWidth: 2, height: 59, width: "100%", borderColor: root.primaryColor, paddingLeft: 10, fontSize: 20, borderRadius: 7 }} keyboardType="text-phone-pad" />
          </View>


          <View style={{ width: "100%", marginTop: 30 }}>
            <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "bold" }}>Description</Text>
            <TextInput style={{ borderWidth: 2, height: 89, width: "100%", borderColor: root.primaryColor, paddingLeft: 10, fontSize: 20, borderRadius: 7 }} keyboardType="text-phone-pad" />
          </View>





          {selectedEvent === 'QK' ? (
            <View style={{ width: "100%", marginTop: 30 }}>
              <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "bold" }}>Counter</Text>
              <TextInput style={{ borderWidth: 2, height: 69, width: "100%", borderColor: root.primaryColor, paddingLeft: 10, fontSize: 20, borderRadius: 7 }} keyboardType="phone-pad" />
            </View>

          ) : (

            <View style={styles.inputContainerNumber}>
              <Picker selectedValue={selectedNumber} onValueChange={handleNumberChange} style={styles.picker} >
                {numberOptions.map((number) => (
                  <Picker.Item key={number.value} label={number.label} value={number.value} style={{ fontSize: 20 }} />
                ))}
              </Picker>
            </View>

          )}

<View style={styles.radioContainerUltra}>
      <View style={styles.radioContainer}>
        <RadioButton
          value="public"
          status={selectedValue === 'public' ? 'checked' : 'unchecked'}
          onPress={() => handleRadioChange('public')}
        />
        <Text style={{ fontSize: 20, paddingBottom: 5, fontWeight: "bold", color: root.primaryColor }}>Public</Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButton
          value="private"
          status={selectedValue === 'private' ? 'checked' : 'unchecked'}
          onPress={() => handleRadioChange('private')}
        />
        <Text style={{ fontSize: 20, paddingBottom: 5, fontWeight: "bold", color: root.primaryColor }}>Private</Text>
      </View>
    </View>
      </View>
        </View>


    </>
  );
};







const styles = StyleSheet.create({
  main_card: {
    minHeight: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 1

  },
  card: {
    width: "95%",
    Height: 500,
    alignItems: "center",
    marginTop: 15,
    // borderWidth: 2
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 2,
    borderRadius: 7,
    borderColor: root.primaryColor,
    height: "9%",
    minHeight: 45,

  },
  inputContainerNumber: {
    marginTop:25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 2,
    borderRadius: 7,
    borderColor: root.primaryColor,
    height: "9%",
    // minHeight: 60,

  },
  picker: {
    flex: 1,
    height: "100%",
  },
  imageBtn: {
    width: "100%",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: root.primaryColor,
    height: 59,
    borderRadius: 7
  },
  btnText: {
    color: "gray",
    fontSize: 15,
  },
  container: {
    flex: 1,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexDirection: "row",
    // borderWidth: 1,
    width: "95%",
    alignItems: "flex-end",
  },
  radioContainerUltra :{
    width:'100%',
    marginTop:20,
    flexDirection:"row",
    justifyContent:"space-around"
  },
  radioContainer: {
    flexDirection: 'row',
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    // color: "root.primarycolor"
  },

});



export default PostActivity;
