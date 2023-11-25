import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { globalStyles } from './styles/global';
import {DarkTheme} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, Easing, TextInput, KeyboardAvoidingView, Platform, Animated, Image } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { DefaultTheme} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPreset, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from '@expo-google-fonts/newsreader/useFonts';
import { Octicons } from '@expo/vector-icons';
import { Newsreader_400Regular, Newsreader_500Medium, Newsreader_600SemiBold, Newsreader_400Regular_Italic, Newsreader_600SemiBold_Italic } from '@expo-google-fonts/newsreader';
import Ricerca from './screens/ricerca';
import Home from './screens/home';
import AudioPlayer from './screens/LettoreAudio';
import Raccolte from './screens/raccolte';
import Cantico from './screens/cantico';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

console.disableYellowBox = true; // Disabilita tutti gli avvisi gialli

const primary = "#04457E"
const back = "#EEEEEE"
const backBottomNavi = primary
const colorIconBottom = "white"

const theme = {
  ...DefaultTheme, // Usa il tema predefinito come base
  dark: true, // Abilita il tema scuro
  colors: {
    ...DefaultTheme.colors, // Mantieni i colori predefiniti
    primary: 'coral', // Personalizza i colori a tuo piacimento
    accent: 'green',
    backgroundColor: "black",
    color: "white"
  },
};

//style BottomTab
const screenTabOpt = {
  tabBarShowLabel: false,
  animationEnabled: true,
  headerShown: false,
  tabBarStyle: {
    borderTopWidth: 0,
    elevation: 0,
    height: 60,
    backgroundColor:  backBottomNavi,
  }
}

function HomeStack() {
  return (
    <Stack.Navigator  
  screenOptions={{
    headerShown: false,
    gestureEnabled: true,
    cardStyle: { backgroundColor: 'black' },
    transitionSpec: {
      open: { animation: 'timing', config: { duration: 350 } },
      close: { animation: 'timing', config: { duration: 350 } },
    },
    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
  }} >
      <Stack.Screen name="HyChords" component={Home}  />
      <Stack.Screen name="CanticoScreen" component={Cantico}  />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator  
    initialRouteName="SearchScreen"
    screenOptions={{
    headerShown: false,
    gestureEnabled: true,
    cardStyle: { backgroundColor: 'black' },
    transitionSpec: {
      open: { animation: 'timing', config: { duration: 350 } },
      close: { animation: 'timing', config: { duration: 350 } },
    },
    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
  }}  >
      <Stack.Screen name="RicercaScreen" component={Ricerca}  />
      <Stack.Screen name="CanticoScreen" component={Cantico}  />
    </Stack.Navigator>
  );
}

const InfoStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
    }}
  >
            <Stack.Screen name="raccolte" component={Raccolte}  />
            <Stack.Screen name="CanticoScreen" component={Cantico}  />
  </Stack.Navigator>
);

const TabNavigator = () => {
  return (
    <PaperProvider>
   <Tab.Navigator screenOptions={screenTabOpt} >
        <Tab.Screen name="Home" component={HomeStack} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center", width: 100 }}>
                  {!focused ? 
                        <Image style={globalStyles.iconNavBar}  source={require("./images/Home-icon.png")}/>   :
                       <Image style={globalStyles.iconNavBar}  source={require("./images/HomeTotWhite.png")}/> }
                {focused && <Text style={{fontSize: 12, color:focused ? colorIconBottom : colorIconBottom }}>Home</Text>}
            </View>
            )}}} />

        <Tab.Screen name="Ricerca" component={SearchStack} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center", width: 100 }}>
                       {focused ? 
                        <Image style={globalStyles.iconNavBar}  source={require("./images/search.png")}/>   :
                       <Image style={globalStyles.iconNavBar}  source={require("./images/search.png")}/> }
                {focused && <Text style={{fontSize: 12, color:focused ? colorIconBottom : colorIconBottom }}>Ricerca</Text>}
            </View>
            )}}} />

        <Tab.Screen name="Info" component={InfoStack} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center", width: 100 }}>
              <Image style={globalStyles.iconNavBar}  source={require("./images/folder.png")}/>
                {focused && <Text style={{fontSize: 12, color:focused ? colorIconBottom : colorIconBottom }}>Raccolte</Text>}
            </View>
            )}}} />
      </Tab.Navigator>
      </PaperProvider>
  );
};


export default function App() {
//serve per inizzializzare AsyncStorage all'apertura dell'app  //forse non serve nemmeno questo vb lo lasciamo per il momento
  const [isDataInitialized, setIsDataInitialized] = useState(false);
  const initializeData = async () => {
    try {
      // Verifica se il valore è già stato impostato in AsyncStorage
      const value = await AsyncStorage.getItem('accordiStru');
      if (value === null) {
        // Il valore non è stato impostato, quindi lo impostiamo
        await AsyncStorage.setItem('accordiStru', 'Piano');
        setIsDataInitialized(true); // Cambiamo lo stato per indicare che il valore è stato impostato
      } else {
        setIsDataInitialized(true); // Il valore è già stato impostato
      }
    } catch (error) {
      // Gestisci l'errore in caso di fallimento
    }
  };

  useEffect(() => {
    initializeData();
  }, [isDataInitialized]);


        //serve per caricare i font
        let [fontsLoaded] = useFonts({
          Newsreader_400Regular,
          Newsreader_500Medium,
          Newsreader_600SemiBold,
          Newsreader_400Regular_Italic,
          Newsreader_600SemiBold_Italic,
        });
      
        if (!fontsLoaded) {
          return null; // Attendere il caricamento dei font
        }

  return (
    <>
    <NavigationContainer  >
    <TabNavigator />
    </NavigationContainer>

  <StatusBar style="dark" />
  </>
  );
}



