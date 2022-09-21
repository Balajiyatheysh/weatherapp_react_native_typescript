import { View, Text, Button, Image } from "react-native";
import {  useNavigation, useRoute } from "@react-navigation/native";
import  { CapitalScreenRouteProp, CapitalScreenNavigationProp } from '../../Paramlist.types'
import { useState, useEffect } from "react";
import Axios from 'axios'


 const CapitalScreen=() => {
  const navigation = useNavigation<CapitalScreenNavigationProp>();
  const route = useRoute<CapitalScreenRouteProp>();
  const {capital}= route.params;
  const [temp, settemp]=useState();
  const [icons, seticons]=useState();
  const [precipt, setPrecipt]=useState();
  const [windSpeed, setwindSpeed]=useState();
  const accKey = "55488268496081e22d506f0c32bdace3";

  const HandleClick=()=>{
    navigation.navigate('Home',{
      capital:'Home'
    })
  }

  useEffect(() => {
    fetchapicall();
  },[])

  const fetchapicall= async ()=>{
    const response = await Axios(`http://api.weatherstack.com/current?access_key=${accKey}&query=${capital}`)
    settemp(response.data.current.temperature)
    seticons(response.data.current.weather_icons)
    setPrecipt(response.data.current.precip)
    setwindSpeed(response.data.current.wind_speed)

  }

  return (
    <View style={{ flex: 0.75, alignItems: "center", justifyContent:"space-evenly" }}>
      <Text>Capital Weather </Text>
      <View style={{flex:1}}>
        <Image style={{flex:3, width:250, height:100, margin:40}} source={{uri:`${icons}`}}/>
        <Text style={{flex:2}}>Temperature: {temp} °C </Text>
        <Text style={{flex:2}}>Precipitation: {precipt}%</Text>
        <Text style={{flex:2}}>Wind Speed : {windSpeed} kmph</Text>
      </View>
      <Button title='HOME' onPress={HandleClick} />
    </View>
  );
};
 
export default CapitalScreen;

