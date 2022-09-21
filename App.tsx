import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator,NativeStackScreenProps } from "@react-navigation/native-stack";
import  CountryScreen  from "./src/screens/CountryScreen";
import HomeScreen from './src/screens/HomeScreen'
import {RootStackParamList} from './Paramlist.types'
import CapitalScreen from './src/screens/CapitalScreen'

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() { 1
  return (
  
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen  name='Home' component={HomeScreen}/>
        <Stack.Screen name='Country' component={CountryScreen} />
        <Stack.Screen name='Capital' component={CapitalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

