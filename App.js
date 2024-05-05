import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { globalStyles } from './styles/global';
import {DarkTheme} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, Easing, TextInput, KeyboardAvoidingView, Platform, Animated, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { DefaultTheme} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPreset, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from '@expo-google-fonts/newsreader/useFonts';
import { Octicons } from '@expo/vector-icons';
import { Newsreader_400Regular, Newsreader_500Medium, Newsreader_600SemiBold, Newsreader_400Regular_Italic, Newsreader_600SemiBold_Italic } from '@expo-google-fonts/newsreader';
import Ricerca from './screens/ricerca';
import Ascolta from './screens/ascolta';
import Home1 from "./images/home.svg";
import Home2 from "./images/home2.svg";
import Home from './screens/home';
import Search1 from "./images/searchb.svg";
import { FontAwesome5 } from '@expo/vector-icons';
import AudioPlayer from './screens/LettoreAudio';
import Raccolte from './screens/raccolte';
import Cantico from './screens/cantico';
import PdfViewer from './screens/canticiInni';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const primary = "#013241"
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


function HomeStack() {
  const route = useRoute();

  useEffect(() => {
    const routeName = route.name;
    // Aggiorna il colore della barra di navigazione in base al nome della rotta
    if (routeName === 'HyChords') {
      setNavBarColor('#ff0000'); // Imposta il colore desiderato per la pagina Home
    } else if (routeName === 'Ascolta') {
      setNavBarColor('#00ff00'); // Imposta il colore desiderato per la pagina Ascolta
    }
  }, [route]);
  return (
    <Stack.Navigator  
  screenOptions={{
    headerShown: false,
    gestureEnabled: false,
    cardStyle: { backgroundColor: 'black' },
    transitionSpec: {
      open: { animation: 'timing', config: { duration: 350 } },
      close: { animation: 'timing', config: { duration: 350 } },
    },
    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
  }} >
      <Stack.Screen name="HyChords" component={Home}  />
      <Stack.Screen name="Ascolta" component={Ascolta}  />
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
      <Stack.Screen name="InniCanticiScreen" component={PdfViewer}  />
    </Stack.Navigator>
  );
}

const RaccolteStack = () => (
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
  const [navBarColor, setNavBarColor] = useState(backBottomNavi);
  

//style BottomTab
const screenTabOpt = {
  tabBarShowLabel: false,
  animationEnabled: true,
  headerShown: false,
  tabBarStyle: {
    borderTopWidth: 0,
    elevation: 0,
    height: 60,
    backgroundColor:  navBarColor,
  }
}

  return (
    <PaperProvider>
   <Tab.Navigator screenOptions={screenTabOpt}>
        <Tab.Screen name="Home" component={HomeStack} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center", width: 100}}>
                  {!focused ? 
                        <Home1 width={35} height={35} />   :
                        <Home2 width={35} height={35} /> }
                 <Text style={{fontSize: 12, color:focused ? colorIconBottom : "#939292" }}>Home</Text>
            </View>
            )}}} />

        <Tab.Screen name="Ricerca" component={SearchStack} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center", width: 100 }}>
                       {focused ? 
                        <Image style={{width: 35, height: 35}}  source={require("./images/searchP.png")}/>   :
                        <Search1 width={35} height={32} /> }
                <Text style={{fontSize: 12, color:focused ? colorIconBottom : "#939292" }}>Ricerca</Text>
            </View>
            )}}} />

        <Tab.Screen name="Info" component={RaccolteStack} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center", width: 100 }}>
               {focused ? 
                <Image style={{width: 32, height: 32, tintColor: "white"}}  source={require("./images/book.png")}/>  :
                <Image style={{width: 32, height: 32}}  source={require("./images/book.png")}/> }
              <Text style={{fontSize: 12, color:focused ? colorIconBottom : "#939292" }}>Raccolte</Text>
            </View>
            )}}} />
      </Tab.Navigator>
      </PaperProvider>
  );
};


export default function App() {
  const [navBarColor, setNavBarColor] = useState(backBottomNavi);
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
    <StatusBar style="dark" backgroundColor="transparent" translucent />
  </>
  );
}



