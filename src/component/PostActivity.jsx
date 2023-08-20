import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { root } from "../root/colors";
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';




const PostActivity = () => {

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedValue, setSelectedValue] = useState('option1');


  const countryOptions = [
    { label: "Wazaif", value: "WZ" },
    { label: "Quran Khuwani", value: "QK" }
    // ... Add more countries here
  ];

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };


  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <>
      <View style={styles.main_card}>

        <View style={styles.card}>

          <View style={styles.inputContainer}>
            <Picker
              selectedValue={selectedCountry}
              onValueChange={handleCountryChange}
              style={styles.picker}
            >
              {countryOptions.map((country) => (
                <Picker.Item key={country.value} label={country.label} value={country.value} style={{ fontSize: 20 }} />
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

              <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "bold" }}>Time Duration</Text>

              <TextInput style={{ borderWidth: 2, height: 59, borderColor: root.primaryColor, textAlign: "center", fontSize: 25 }} keyboardType="phone-pad" />

            </View>

          </View>

          <View style={{ width: "100%", marginTop: 30 }}>
            <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "bold" }}>Activity Title</Text>
            <TextInput style={{ borderWidth: 2, height: 59, width: "100%", borderColor: root.primaryColor, paddingLeft: 10, fontSize: 20 }} keyboardType="text-phone-pad" />
          </View>


          <View style={{ width: "100%", marginTop: 30 }}>
            <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "bold" }}>Description</Text>
            <TextInput style={{ borderWidth: 2, height: 89, width: "100%", borderColor: root.primaryColor, paddingLeft: 10, fontSize: 20 }} keyboardType="text-phone-pad" />
          </View>

          <View style={{ width: "100%", marginTop: 30 }}>
            <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "bold" }}>Counter</Text>
            <TextInput style={{ borderWidth: 2, height: 69, width: "100%", borderColor: root.primaryColor, paddingLeft: 10, fontSize: 20 }} keyboardType="phone-pad" />
          </View>


          <View style={styles.container}>
            <View style={styles.radioContainer}>
              <RadioButton
                value="option1"
                status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
                onPress={() => handleRadioChange('option1')}
              />
              <Text>Option 1</Text>
            </View>
            <View style={styles.radioContainer}>
              <RadioButton
                value="option2"
                status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
                onPress={() => handleRadioChange('option2')}
              />
              <Text>Option 2</Text>
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
    borderWidth: 1

  },
  card: {
    width: "95%",
    minHeight: 600,
    alignItems: "center",
    marginTop: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 2,
    borderColor: root.primaryColor,
    height: "9%",
    minHeight: 45,
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
  },
  btnText: {
    color: "gray",
    fontSize: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexDirection: "row",
    borderWidth: 1,
    width: "100%"
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

});



export default PostActivity;
