import type {
    CompositeNavigationProp,
    RouteProp,
  } from '@react-navigation/native';
  import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

  export type RootStackParamList = {
    Home: undefined;
    Capital: undefined;
    Country: undefined;
  };
  
  export type HomeScreenNavigationParamList={
    Home:undefined;
    Country:{
      capital:string,
      population:number,
      latitute:number,
      longitute:number,
      flagImage:string,
    }
  }

  export type CountryScreenNavigationParamList={
    Country:undefined;
    Capital:{
      capital:string,
     
    }
  }
  export type CapitalScreenNavigationParamList={
    Capitals:undefined;
    Home:{
      capital:string
    }
  }

  export type HomeScreenNavigationProp = CompositeNavigationProp<
    NativeStackNavigationProp<HomeScreenNavigationParamList, 'Country'>,
    NativeStackNavigationProp<CountryScreenNavigationParamList, 'Capital'>
    >;
  export type CountryScreenNavigationProp = CompositeNavigationProp<
    NativeStackNavigationProp<CountryScreenNavigationParamList, 'Capital'>,
    NativeStackNavigationProp<HomeScreenNavigationParamList, 'Home'>
  >;
  export type CapitalScreenNavigationProp = CompositeNavigationProp<
    NativeStackNavigationProp<CapitalScreenNavigationParamList, 'Home'>,
    NativeStackNavigationProp<HomeScreenNavigationParamList, 'Country'>
  >;
  export type CountryScreenRouteProp= RouteProp<
    HomeScreenNavigationParamList, 
    'Country'
  >
  export type CapitalScreenRouteProp = RouteProp<
    CountryScreenNavigationParamList,
    'Capital'
  >

  