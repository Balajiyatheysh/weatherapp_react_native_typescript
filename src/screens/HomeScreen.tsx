import { useState } from "react";
import { FlatList, View, Button,  Text, TextInput, TouchableOpacity } from "react-native";
import  { HomeScreenNavigationProp } from '../../Paramlist.types'
import { useNavigation } from '@react-navigation/native';



const HomeScreen= ()=> {

  const navigation = useNavigation<HomeScreenNavigationProp>();

    const [text, setText] = useState("");
    const [Data, setData] = useState([]);

    const handleClick=()=>{
        
        fetch(`https://restcountries.com/v2/name/${text}`)
        .then(Response=> Response.json())
        .then(res=>setData(res))
        .catch(err => console.log(err))
        
    }
    const pressHandler=(item:any)=>{
      navigation.navigate('Country',{
        capital:item.capital,
        population:item.population,
        latitute:item.latlng[0],
        longitute:item.latlng[1],
        flagImage:item.flags.png,
      });
    }
   
  return (
    <View style={{ flex:1, alignItems: "center", justifyContent:"space-around"}}>
      <TextInput
        style={{height: 40, borderWidth: 0.5,  width:250, margin:20,paddingLeft:10, marginTop:200}}
        placeholder="   Enter Country"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />

      <Button disabled={!text}  title='Submit' onPress={handleClick} />
     
      <FlatList
        style={{width:260}}
        data = {Data}
        renderItem={({item})=>(<TouchableOpacity style={{backgroundColor:'#d6d6d0', margin:5}}><Text style={{margin:5,  padding:10}} onPress={()=>{pressHandler(item)}}>{item.name}</Text></TouchableOpacity>)}
      />
    </View>
    
  );
};

export default HomeScreen;