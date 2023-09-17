import React, {useState} from 'react';
import { Text, View, TextInput, Button, FlatList,Image } from 'react-native';
import {Picker} from '@react-native-picker/picker';
export default function Muunnin() {
const [tulos, setTulos] = useState('');
const [kaannettava, setKaannettava] = useState('');
const [selectedValue, setSelectedValue] = useState('');
var myHeaders = new Headers();
    myHeaders.append("apikey", "O68mpAYT6biKJ5YIueyR7NrI68KbPMGo");
var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
const buttonPressed = () => {
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=EUR&from=${selectedValue}&amount=${kaannettava}`, requestOptions)
    .then(response => response.text())
    .then(result => setTulos(result))
    .catch(error => Alert.alert('Error', error));
};
const etsi = () => {
    muuttuja = '',
    fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
    .then(response => response.text())
    .then(result => muuttuja = result)
    .catch(error => console.log('error', error));
    return(muuttuja)
};
var currenciesList = () => {
    keys = Object.keys(etsi())
    return( this.keys.map( (x) => { 
        return( <Picker.Item value={x}  />)} ));
    };
    return (
      <View>
      <TextInput style={{fontSize: 18, width: 200}} placeholder='keyword' keyboardType='numeric' value={kaannettava.toString()} onChangeText={text => setKaannettava(text)}/>
      <Button title="Find" onPress= {buttonPressed()} />
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedValue({itemValue})
        }>
        { currenciesList() }
        </Picker>
      <Text style={{fontSize: 18}}> {tulos} </Text>
      </View>
    )
  }

  