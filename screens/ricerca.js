import React from "react";
import { useState, useRef, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Easing } from "react-native-reanimated";
import { StyleSheet, Animated, View, Text, Button, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Image, FlatList, TouchableWithoutFeedback, Keyboard  } from "react-native";
import { globalStyles } from "../styles/global";
import { Checkbox } from "react-native-paper"
import { FontAwesome } from '@expo/vector-icons';
import { useIsFocused } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import JSONDATA from '../dbCantici.json'
import { StatusBar } from "expo-status-bar";
import INNIDATA from '../dbInni.json'
import * as SQLite from 'expo-sqlite';

const { Value, timing, SpringUtils } = Animated;
const primary = "#013241"
const back = "#EFEFEF"

export default function Ricerca(props) {

  const [db, setDb] = useState(SQLite.openDatabase('example.db'));
    const isFocusedNice = useIsFocused();
    const [raccoltaPredefinita, setRaccoltaPredefinita] = useState([]);
    const [text, setText] = useState("");
    const [activeFilter, setActiveFilter] = useState(false);
    const [pageState, setPageState] = useState("");
    const [flagRaccolta, setFlagRaccolta] = useState("A");
    const [currentIdRaccolta, setCurrentIdRaccolta] = useState(3);
    const [filter, setFilter] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const textInputRef = useRef();


//***************************************************************************** */
//mi permette di salvare lo stato dello strumento selezionato, quando esco dalla pagina  (salvataggio in locale)
useEffect(() => {
  AsyncStorage.getItem('globalIdRaccolta').then((value) => {
    if (value) {
      setCurrentIdRaccolta(value);
    }
  });
}, []);


//caricamento della raccolta predefinita-------------------------------------------------------------
    useFocusEffect(
      React.useCallback(() => {
        let idRacc = 0

        AsyncStorage.getItem('globalIdRaccolta').then((value) => {
          if (value) {
            setCurrentIdRaccolta(value);
            idRacc = parseInt(value, 10)
          }
        });


        db.transaction(tx => {
          tx.executeSql('CREATE TABLE IF NOT EXISTS canticiRaccolta2 (id INTEGER PRIMARY KEY AUTOINCREMENT, idRaccolte INTEGER, name TEXT, num TEXT, keyTona TEXT, tipologia TEXT)');
        });


        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM canticiRaccolta2 WHERE idRaccolte = ? ORDER BY CAST(num AS INTEGER)',
            [idRacc],
            (_, resultSet) => {
              setRaccoltaPredefinita(resultSet.rows._array);
            },
            (_, error) => {
              console.log(error);
            }
          );
        });

      }, [])
    );


//filtri cantici________________________________________________________________
    const [filterApertura, setFilterApertura] = useState(false);
    const [filterBrevi, setFilterBrevi] = useState(false);
    const [filterTestimonianze, setFilterTestimonianze] = useState(false);
    const [filterDiLode, setFilterDiLode] = useState(false);
    const [filterAdorazione, setFilterAdorazione] = useState(false);
    const [filterChiusura, setFilterChiusura] = useState(false);
      const [filterCantico, setFilterCantico] = useState({
        A: false,
        B: false,
        T: false,
        L: false,
        P: false,
      });

const handleResetFlag = ()=> {
  setFilterApertura(false)
  setFilterAdorazione(false)
  setFilterBrevi(false)
  setFilterDiLode(false)
  setFilterTestimonianze(false)
  setFilterChiusura(false)
  setFilterCantico({   //diventano tutte false
    A: false,
    B: false,
    T: false,
    L: false,
    P: false,
    C: false,
  });
}

    const handleToggleApertura = () => {
      setFilterApertura(!filterApertura);
      setFilterCantico(prevState => ({
        ...prevState,
        A: !prevState.A, // Inverti il valore di "A"
      }));
    };

    const handleToggleBrevi = () => {
      setFilterBrevi(!filterBrevi);
      setFilterCantico(prevState => ({
        ...prevState,
        B: !prevState.B, // Inverti il valore di "A"
      }));
    };

    const handleToggleTestimonianze = () => {
      setFilterTestimonianze(!filterTestimonianze);
      setFilterCantico(prevState => ({
        ...prevState,
        T: !prevState.T, // Inverti il valore di "A"
      }));
    };

    const handleToggleDiLode = () => {
      setFilterDiLode(!filterDiLode);
      setFilterCantico(prevState => ({
        ...prevState,
        L: !prevState.L, // Inverti il valore di "A"
      }));
    };

    const handleToggleAdorazione = () => {
      setFilterAdorazione(!filterAdorazione);
      setFilterCantico(prevState => ({
        ...prevState,
        P: !prevState.P, // Inverti il valore di "A"
      }));
    };

    const handleToggleChiusura = () => {
      setFilterChiusura(!filterChiusura);
      setFilterCantico(prevState => ({
        ...prevState,
        C: !prevState.C, // Inverti il valore di "A"
      }));
    };


    //***************************************************************************** */
    const translateY = useRef(new Value(-500)).current;
    const fadeInDuration = 400; // Durata dell'animazione in millisecondi

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
    toValue: -75, // Posizione finale (fuori dallo schermo)
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
const normalizeString = (str) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//filtro armonia******************************************************************
const filteredDataArm = JSONDATA.filter((item) => {
  const normalizedText = normalizeString(item.testo);
  const normalizedTitle = normalizeString(item.titolo);
  const normalizedNum = normalizeString(item.num.toLowerCase());

  // Normalizza e rimuovi la punteggiatura dal termine di ricerca
  const normalizedFilter = normalizeString(filter).replace(/[^\w\s]/g, "");

  // Aggiungi condizioni per ogni lettera nel filterCantico
  const filterByType = !(
    (filterCantico.A && !item.tipologia.includes('A')) ||
    (filterCantico.B && !item.tipologia.includes('B')) ||
    (filterCantico.T && !item.tipologia.includes('T')) ||
    (filterCantico.L && !item.tipologia.includes('L')) ||
    (filterCantico.P && !item.tipologia.includes('P')) ||
    (filterCantico.C && !item.tipologia.includes('C'))
  );

  return (
    [normalizedText, normalizedTitle, normalizedNum].some(
      (field) => field.includes(normalizedFilter)
    ) && filterByType
  );
});

//filtro raccolta Predefinita*****************************************************
const filteredDataRaccPred = raccoltaPredefinita.filter((item) => {
  const normalizedText = normalizeString(item.testo);
  const normalizedTitle = normalizeString(item.name);
  const normalizedNum = normalizeString(item.num.toLowerCase());

  // Normalizza e rimuovi la punteggiatura dal termine di ricerca
  const normalizedFilter = normalizeString(filter).replace(/[^\w\s]/g, "");

  // Aggiungi condizioni per ogni lettera nel filterCantico
  const filterByType = !(
    (filterCantico.A && !item.tipologia.includes('A')) ||
    (filterCantico.B && !item.tipologia.includes('B')) ||
    (filterCantico.T && !item.tipologia.includes('T')) ||
    (filterCantico.L && !item.tipologia.includes('L')) ||
    (filterCantico.P && !item.tipologia.includes('P')) ||
    (filterCantico.C && !item.tipologia.includes('C'))
  );

  return (
    [normalizedText,normalizedTitle, normalizedNum].some(
      (field) => field.includes(normalizedFilter)
    ) && filterByType
  );
});

//filtro inni di lode quando effetto la ricerca, ignora tutte le punteggiature all'interno del testo, e le lettere accentate
const filteredDataInni = INNIDATA.filter((item) => {
  const normalizedText = normalizeString(item.testo);
  const normalizedTitle = normalizeString(item.titolo);
  const normalizedNum = normalizeString(item.num.toLowerCase());

  // Normalizza e rimuovi la punteggiatura dal termine di ricerca
  const normalizedFilter = normalizeString(filter).replace(/[^\w\s]/g, "");

  // Aggiungi condizioni per ogni lettera nel filterCantico
  const filterByType = !(
    (filterCantico.A && !item.tipologia?.includes('A')) ||
    (filterCantico.B && !item.tipologia?.includes('B')) ||
    (filterCantico.T && !item.tipologia?.includes('T')) ||
    (filterCantico.L && !item.tipologia?.includes('L')) ||
    (filterCantico.P && !item.tipologia?.includes('P')) ||
    (filterCantico.C && !item.tipologia?.includes('C'))
  );

  return (
    [normalizedText, normalizedTitle, normalizedNum].some(
      (field) => field.includes(normalizedFilter)
    ) && filterByType
  );
});



  const handleInputFocus = () => {
    setIsFocused(true);
    setActiveFilter(false)
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

  const changeRaccoltaP = () => {
    setFlagRaccolta("P")
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
<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss; setActiveFilter(false)}}>
<LinearGradient style={globalStyles.containerHome} colors={[ back, primary ]} start={{x:0, y:0.1}} end={{x:0, y:0.6}}>


{/*******************HEADER***************************************************** */}     
        <View style={ globalStyles.header}>
        <View style={{ flex: 1 }}>
            <Text ></Text>
          </View>    
          <View style={{ flex: 1 }}>
            <Text style={globalStyles.titleHeader}> HyChords  </Text>
          </View>    

          <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity onPress={() => { setActiveFilter(!activeFilter) }}>
            <Ionicons name="ellipsis-vertical" size={30} color="#04457E" />
          </TouchableOpacity>

          </View>
        </View>


{/***********************Filtro Che si attiva***************************************************** */}
    {activeFilter && (
            <View style= {{ position: "absolute", zIndex: 1, top: 80, right: 10 }}>

        <View style= {styles.containerRaccoltaFiltri}>
        <TouchableOpacity onPress={handleToggleApertura}>
        <View style= {{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <Checkbox
        status={filterApertura ? 'checked' : 'unchecked'}
        onPress={handleToggleApertura}
        color={"white"}
        />
            <Text style={{ color: "white" }}> Apertura </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleToggleBrevi}>
        <View style= {{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <Checkbox
        status={filterBrevi ? 'checked' : 'unchecked'}
        onPress={handleToggleBrevi}
        color={"white"}
        />
            <Text style={{ color: "white" }}> Brevi </Text>
        </View>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={handleToggleTestimonianze}>
        <View style= {{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <Checkbox
        status={filterTestimonianze ? 'checked' : 'unchecked'}
        onPress={handleToggleTestimonianze}
        color={"white"}
        />
            <Text style={{ color: "white" }}> Testimonianze </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleToggleDiLode}>
        <View style= {{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <Checkbox
        status={filterDiLode ? 'checked' : 'unchecked'}
        onPress={handleToggleDiLode}
        color={"white"}
        />
            <Text style={{ color: "white" }}> Di Lode </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleToggleDiLode}>
        <View style= {{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <Checkbox
        status={filterAdorazione ? 'checked' : 'unchecked'}
        onPress={handleToggleAdorazione}
        color={"white"}
        />
            <Text style={{ color: "white" }}> Adorazione </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleToggleChiusura}>
        <View style= {{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <Checkbox
        status={filterChiusura ? 'checked' : 'unchecked'}
        onPress={handleToggleChiusura}
        color={"white"}
        />
            <Text style={{ color: "white" }}> Chiusura </Text>
        </View>
        </TouchableOpacity>

          </View>
    </View>
              )}

{/*******************Barra di Ricerca*************************** */}
      <Animated.View style= {{flex: 1, transform: [{ translateY }] }}>
        <View style= {{ flex: 1, borderBottomLeftRadius:40, borderBottomRightRadius: 40, backgroundColor: "#EFEFEF" }}> 

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
        
{/*********flatList INNI DI LODE********************************************* */}
{flagRaccolta === "I" &&  
  (filteredDataInni.length <= 0 ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Nessun cantico trovato &#x1F622;</Text>
    </View>
  ) : (
    <FlatList
      keyboardShouldPersistTaps={'handled'}
      numColumns={1}
      data={filteredDataInni}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() =>{ props.navigation.navigate("InniCanticiScreen", {
                                  num: item.num,
                                  titolo: item.titolo,
                                  keyTona: item.keyTona,
                                  percorsoPdf: item.percorsoPdf,
                                  idVideoYtIta: item.idVideoYtIta,
                                  idVideoYt: item.idVideoYt }); setActiveFilter(false) }}>
          {item.raccolta === "I" &&
            <View style={globalStyles.containerElenco}>
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
  ))
}    

{/*********flatList RACCOLTA PREDIFINITA********************************************* */}
{flagRaccolta === "P" &&  
  (filteredDataRaccPred.length <= 0 ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Nessun cantico trovato &#x1F622;</Text>
    </View>
  ) : (
    <FlatList
      keyboardShouldPersistTaps={'handled'}
      numColumns={1}
      data={filteredDataRaccPred}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() =>{ props.navigation.navigate("CanticoScreen", {
                                  num: item.num,
                                  titolo: item.name,
                                  keyTona: item.keyTona,
                                  idVideoYtIta: item.idVideoYtIta,
                                  idVideoYt: item.idVideoYt }); setActiveFilter(false) }}>
          
            <View style={globalStyles.containerElenco}>
              <View style={globalStyles.leftColumnElenco}>
                <Text style={globalStyles.numberElenco}> {item.num}  </Text>
              </View> 
              <View style={globalStyles.centerColumnElenco}>
                <Text style={globalStyles.titleElenco}> {item.name} </Text>
              </View>
              <View style={globalStyles.rightColumnElenco}>
                <Entypo  name="chevron-right" size={24} color="#04457E" />
              </View>
            </View>
          
        </TouchableOpacity>
      )}
    /> 
  ))
}    
{/*********SCROLL AGGIUNTA********************************************* */}
{flagRaccolta === "A" &&  
  (filteredDataArm.length <= 0 ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Nessun cantico trovato &#x1F622;</Text>
    </View>
  ) : (
    <FlatList
    keyboardShouldPersistTaps={'handled'}
    numColumns={1}
    data={filteredDataArm}
    renderItem={({item}) => (
      <TouchableOpacity onPress={() =>{ props.navigation.navigate("CanticoScreen", {
                                    num: item.num,
                                    titolo: item.titolo,
                                    keyTona: item.keyTona,
                                    idVideoYtIta: item.idVideoYtIta,
                                    idVideoYt: item.idVideoYt }); }}>
               
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
                                    
      </TouchableOpacity>
    )}
     /> 
  ))
}    

{/*********Bottoni**********_______________________******************************************* */}

<View style={{ justifyContent: "center", flexDirection: "row" }}>
        <TouchableOpacity
            style={[styles.buttonLeft, flagRaccolta === "A" ? { backgroundColor: "white"} : null]}
            activeOpacity={0.7} // Imposta l'opacità quando il pulsante è premuto
            onPress={changeRaccoltaA}>
            <Text style={[styles.buttonText, flagRaccolta=== "A" ? {color: "black"} : null]}>TUTTI</Text>
      </TouchableOpacity>
      <TouchableOpacity
            style={[styles.buttonCentrale, flagRaccolta === "P" ? { backgroundColor: "white"} : null ]}
            activeOpacity={0.7} // Imposta l'opacità quando il pulsante è premuto
            onPress={changeRaccoltaP}>
            <Text style={[styles.buttonText, flagRaccolta=== "P" ? {color: "black"} : null ]}>AGGIUNTA</Text>
      </TouchableOpacity>
      <TouchableOpacity
            style={[styles.buttonDestro, flagRaccolta === "I" ? { backgroundColor: "white"} : null ]}
            activeOpacity={0.7} // Imposta l'opacità quando il pulsante è premuto
            onPress={changeRaccoltaI}>
            <Text style={[styles.buttonText, flagRaccolta=== "I" ? {color: "black"} : null ]}>INNI DI LODE</Text>
      </TouchableOpacity>
</View>


    {/********* SPACCO***************************************************** */}
</View>


   
    </Animated.View>



        </LinearGradient>
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
      dropdownMenu:{
        backgroundColor: "#2F2F2F",
      },
      containerRaccoltaFiltri: {
        flexDirection: "column" ,
        paddingLeft: 6,
        paddingRight: 6,
        backgroundColor: "#2F2F2F",
        borderRadius:10,
        width: 170,
        justifyContent: "flex-start",
        elevation: 5,
      },
     containerInput: {
        flexDirection: 'row',
        width:"80%",
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
        backgroundColor: primary,
        padding: 10,
        borderRadius: 0,
        borderTopWidth: 0,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderWidth: 1,
        borderColor: "gray",
      },
      buttonDestro: {
        backgroundColor: primary, 
        padding: 10,
        borderRadius: 0,
        borderTopWidth: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderWidth: 1,
        borderColor: "gray",
      },
      buttonCentrale: {
        backgroundColor: primary, 
        padding: 10,
        borderRadius: 0,
        borderTopWidth: 0,
        borderWidth: 1,
        borderColor: "gray",
      },
      buttonText: {
        color: "gray",
        textAlign: "center",
      },
  });
