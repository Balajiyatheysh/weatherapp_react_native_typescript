import { View, Text,Image, Button } from "react-native";
import  { CountryScreenRouteProp ,CountryScreenNavigationProp} from '../../Paramlist.types'
import { useNavigation, useRoute } from '@react-navigation/native';



const ProfileScreen=() => {

  const navigation = useNavigation<CountryScreenNavigationProp>();
  const route = useRoute<CountryScreenRouteProp>();
  const {population,latitute, flagImage,longitute, capital}= route.params;

  const HandleClick=()=>{
    navigation.navigate('Capital',{
      capital:capital
    })
  }

  return (
    <View style={{ flex: 0.75, alignItems: "center", justifyContent: "center" }}>
      <Image style={{flex:3, width:250, height:100, margin:40}} source={{uri:`${flagImage}`}}/>
      <Text style={{flex:2}}>Capital : {capital}</Text>
      <Text style={{flex:2}}>Country's Population:{population}</Text>
      <Text style={{flex:2}}>Latitude:{latitute}° deg</Text>
      <Text style={{flex:2}}>Longitude:{longitute}° deg</Text>
      <Button title='Capital weather' onPress={HandleClick} />
    </View>
  );
};

export default ProfileScreen;