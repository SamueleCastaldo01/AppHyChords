import React from "react";
import { useState, useRef, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Easing } from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, Animated, View, Text, Button, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Image, FlatList, TouchableWithoutFeedback, Keyboard  } from "react-native";
import { globalStyles } from "../styles/global";
import { useIsFocused } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import JSONDATA from '../dbCantici.json'
import INNIDATA from '../dbInni.json'

const { Value, timing, SpringUtils } = Animated;

export default function Ricerca(props) {

    const isFocusedNice = useIsFocused();
    const [text, setText] = useState("");
    const [pageState, setPageState] = useState("");
    const [flagRaccolta, setFlagRaccolta] = useState("A");
    const [filter, setFilter] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const textInputRef = useRef();

    const translateY = useRef(new Value(-175)).current;
    const fadeInDuration = 400; // Durata dell'animazione in millisecondi
    //***************************************************************************** */
//animazione quando entra nella pagina
const fadeInFromTop = () => {
  timing(translateY, {
    toValue: 0, // Posizione finale (sullo schermo)
    duration: fadeInDuration,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: true, // Abilita il driver nativo
  }).start();
};

const fadeOutToTop = () => {
  timing(translateY, {
    toValue: -175, // Posizione finale (fuori dallo schermo)
    duration: fadeInDuration,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: true, // Abilita il driver nativo
  }).start(() => {
  });
};
  
    useFocusEffect(
      React.useCallback(() => {
        // Esegui l'animazione quando la schermata riceve il focus
        fadeInFromTop()
        return () => {
          // Azioni di pulizia (opzionale) quando la schermata perde il focus
          fadeOutToTop()
        };
      }, [])
    );

//________________________________________________________________________________
    const filteredDataArm = JSONDATA.filter((item) =>
    item.num.toLowerCase().includes(filter.toLowerCase()) || item.titolo.toLowerCase().includes(filter.toLowerCase()) || item.testo.toLowerCase().includes(filter.toLowerCase())
  );

  const filteredDataInni = INNIDATA.filter((item) =>
  item.num.toLowerCase().includes(filter.toLowerCase()) || item.titolo.toLowerCase().includes(filter.toLowerCase()) || item.testo.toLowerCase().includes(filter.toLowerCase())
);

const FlatAggiunta = () => {
  if (filteredDataArm.length <= 0) {
    // Se la lunghezza dell'array è minore o uguale a zero, mostra un messaggio
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Nessun cantico trovato &#x1F622;</Text>
      </View>
    );
  }
  // Altrimenti, mostra il contenuto desiderato
  return (
    <FlatList
    keyboardShouldPersistTaps={'handled'}
    numColumns={1}
    data={filteredDataArm}
    renderItem={({item}) => (
      <TouchableOpacity onPress={() =>{ props.navigation.navigate("CanticoScreen", {
                                    num: item.num,
                                    titolo: item.titolo,
                                    keyTona: item.keyTona, }); }}>
                {item.raccolta === "A" &&
                    <View style={globalStyles.containerElenco}>
                        {/* <Image style={styles.image} source={require("../images/cerchio1.png")}/> */}
                        <View style={globalStyles.leftColumnElenco}>
                            <Text style={globalStyles.numberElenco}> {item.num}  </Text>
                        </View> 
                        <View style={globalStyles.centerColumnElenco}>
                            <Text style={globalStyles.titleElenco}> {item.titolo} </Text>
                        </View>
                        <View style={globalStyles.rightColumnElenco}>
                        <Entypo  name="chevron-right" size={24} color="#04457E" />
                        </View>
                        
                    </View>
                                    } 
      </TouchableOpacity>
    )}
     /> 
  );
};

const FlatInni = () => {
  if (filteredDataInni.length <= 0) {
    // Se la lunghezza dell'array è minore o uguale a zero, mostra un messaggio
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Nessun cantico trovato &#x1F622;</Text>
      </View>
    );
  }
  // Altrimenti, mostra il contenuto desiderato
  return (
    <FlatList
    keyboardShouldPersistTaps={'handled'}
    numColumns={1}
    data={filteredDataInni}
    renderItem={({item}) => (
      <TouchableOpacity onPress={() =>{ props.navigation.navigate("CanticoScreen", {
                                    num: item.num,
                                    titolo: item.titolo,
                                    keyTona: item.keyTona, }); }}>
                {item.raccolta === "I" &&
                    <View style={globalStyles.containerElenco}>
                        {/* <Image style={styles.image} source={require("../images/cerchio1.png")}/> */}
                        <View style={globalStyles.leftColumnElenco}>
                            <Text style={globalStyles.numberElenco}> {item.num}  </Text>
                        </View> 
                        <View style={globalStyles.centerColumnElenco}>
                            <Text style={globalStyles.titleElenco}> {item.titolo} </Text>
                        </View>
                        <View style={globalStyles.rightColumnElenco}>
                        <Entypo  name="chevron-right" size={24} color="#04457E" />
                        </View>
                        
                    </View>
                                    } 
      </TouchableOpacity>
    )}
     /> 
  );
};

  const handleInputFocus = () => {
    setIsFocused(true);
  }

  const handleInputBlur = () => {
    setIsFocused(false);
  }

  const changeRaccoltaA = () => {
    setFlagRaccolta("A")
  }

  const changeRaccoltaI = () => {
    setFlagRaccolta("I")
  }

  const clearText = () => {
    setFilter("");
  }

  const clickForFocus = () => {
    textInputRef.current.focus();
  }

  /*
  //mette il focus automatico sulla tastiera, appena che rientra nella sua pagin
  useEffect(() => { 
    if (isFocusedNice === true) {
        setTimeout(function(){
            setFilter("");
            clickForFocus();
          },50);
      }
    }, [isFocusedNice]) */

    return (
<>
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={globalStyles.containerRicerca}>
{/*******************   HEADER***************************************************** */}     
        <View style={ globalStyles.header}>
            <Text style={globalStyles.titleHeader}> HyChords  </Text>
        </View>

      <Animated.View style= {{flex: 1, transform: [{ translateY }] }}>
        <View style= {{ flex: 0.5, borderBottomLeftRadius:40, borderBottomRightRadius: 40, backgroundColor: "#EFEFEF" }}>  
{/*********SCROLL INNI DI LODE********************************************* */}
    {flagRaccolta === "I" &&  
      <FlatInni />
    }                  
    {/*********SCROLL AGGIUNTA********************************************* */}
{flagRaccolta === "A"  && 
    <FlatAggiunta />
}

{/*********RICERCA**********_______________________******************************************* */}

    <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <View  style={[styles.containerInput, isFocused ? { borderColor: '#04457E' } : null]}>
            <AntDesign name="search1" size={20} color={isFocused ? "#04457E" : "#04457E"} />
            <TextInput value={filter}
                    ref={textInputRef}
                    onChangeText={(text) => setFilter(text)}
                    color= "black"
                    style={styles.input}
                    placeholder='Ricerca...' placeholderTextColor="#7f8082" selectionColor= "#04457E"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    />
                <TouchableOpacity onPress={clearText}>
                    <AntDesign name="close" size={20} color="gray" />
                </TouchableOpacity>
        </View> 
        </View>


    {/********* SPACCO***************************************************** */}
</View>

{/********* BOTTONI***************************************************** */}
<View style={{ justifyContent: "center", flexDirection: "row" }}>
        <TouchableOpacity
            style={[styles.buttonLeft, flagRaccolta === "A" ? { backgroundColor: "white"} : null]}
            activeOpacity={0.7} // Imposta l'opacità quando il pulsante è premuto
            onPress={changeRaccoltaA}>
            <Text style={[styles.buttonText, flagRaccolta=== "A" ? {color: "black"} : null]}>AGGIUNTA</Text>
      </TouchableOpacity>
      <TouchableOpacity
            style={[styles.buttonDestro, flagRaccolta === "I" ? { backgroundColor: "white"} : null ]}
            activeOpacity={0.7} // Imposta l'opacità quando il pulsante è premuto
            onPress={changeRaccoltaI}>
            <Text style={[styles.buttonText, flagRaccolta=== "I" ? {color: "black"} : null ]}>INNI DI LODE</Text>
      </TouchableOpacity>
        </View>
    </Animated.View>


        </View>
  </TouchableWithoutFeedback>
    </>
    )
}




const styles = StyleSheet.create({
    containerRicerca: {
        flex:1,
        alignItems: 'center', // Allineamento verticale al centro
        marginTop: 20,
      },
    image: {
        position: "absolute",
        left: "2.5%",
        width: 60, // Larghezza dell'immagine PNG
        height: 60, // Altezza dell'immagine PNG
      },
    input: {
        flex:1,
        marginLeft:5,
        height: 45,
        fontFamily: "Newsreader_400Regular",
      },
     containerInput: {
        flexDirection: 'row',
        width:"70%",
         alignItems: 'center',
         justifyContent: "center",
          borderColor: '#04457E',
           borderWidth: 2,
            borderRadius: 15,
             paddingLeft: 10,
             paddingRight: 10,
      },
      buttonLeft: {
        height: 45,
        backgroundColor: "#04457E", // Imposta il background trasparente
        padding: 10,
        borderRadius: 0,
        borderTopWidth: 0,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderWidth: 1,
        borderColor: "gray",
      },
      buttonDestro: {
        backgroundColor: "#04457E", // Imposta il background trasparente
        padding: 10,
        borderRadius: 0,
        borderTopWidth: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderWidth: 1,
        borderColor: "gray",
      },
      buttonText: {
        color: "gray",
        textAlign: "center",
      },
  });
