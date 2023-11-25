import React from "react";
import { useState, useRef, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Easing } from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, Alert, Animated, View, Text, Button, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Image, FlatList, TouchableWithoutFeedback, Keyboard, Modal  } from "react-native";
import { globalStyles } from "../styles/global";
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useIsFocused } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { showMessage } from "react-native-flash-message";
import FlashMessage from 'react-native-flash-message';
import JSONDATA from '../dbCantici.json'
import * as SQLite from 'expo-sqlite';
import ColSignorMarciam from "../cantici/aggiunta/colSignorMarciam";

const primary = "#04457E"
const { Value, timing, SpringUtils } = Animated;

const Raccolte = (props) => {
  const [db, setDb] = useState(SQLite.openDatabase('example.db'));
  const [currentNumero, setCurrentNumero] = useState('');
  const [currentNomeCantico, setCurrentNomeCantico] = useState('');
  const [currentTona, setCurrentTona] = useState('');
  const isFocusedNice = useIsFocused();
  const [text, setText] = useState("");
  const [pageState, setPageState] = useState("");
  const [raccolte, setRaccolte] = useState([]);
  const [cantici, setCantici] = useState([]);
  const [flagRaccolta, setFlagRaccolta] = useState("A");
  const [filter, setFilter] = useState("");
  const [filterRaccolta, setFilterRaccolta] = useState("");
  const [filterCantici, setFilterCantici] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef();
  const [modalVisibleRaccolta, setModalVisibleRaccolta] = useState(false);
  const [modalVisibleCantici, setModalVisibleCantici] = useState(false);
  const [modalVisibleRaccoltaAdd, setModalVisibleRaccoltaAdd] = useState(false);
  const [modalVisibleCanticiAdd, setModalVisibleCanticiAdd] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);
  const [currentNomeRaccolta, setCurrentNomeRaccolta] = useState("");
  const [currentNomeRaccoltaSele, setCurrentNomeRaccoltaSele] = useState("");
  const [currentIdRaccolta, setCurrentIdRaccolta] = useState(undefined);

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

  //***************************************************************************** */
//mi permette di salvare lo stato dello raccolta, quando esco dalla pagina  (salvataggio in locale)
useEffect(() => {
  AsyncStorage.getItem('RaccoltaSele').then((value) => {
    if (value) {  //verifica se è vuoto
      setCurrentNomeRaccoltaSele(value);  //se è presente fa questo
    }
  });
}, []);

useEffect(() => {
  AsyncStorage.getItem('RaccoltaId').then((value) => {
    if (value) {
      setCurrentIdRaccolta(value);
    }
  });
}, []);

//settaggio, si attiva quando cambio la raccolta
const setGlobalAccor = async (value) => {
  setCurrentNomeRaccoltaSele(value)
  await AsyncStorage.setItem('RaccoltaSele', value);
};

//settaggio, si attiva quando cambio la raccolta
const setGlobalAccorId = async (value) => {
  setCurrentIdRaccolta(value)
  await AsyncStorage.setItem('RaccoltaId', value.toString());
};


  //************************************************************************* */
    //Caricamento del database
    useEffect(() => {
      setDb(SQLite.openDatabase('example.db'));
  
      db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS raccolte (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeRaccolta TEXT)');
      });
  
      db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS canticiRaccolte (id INTEGER PRIMARY KEY AUTOINCREMENT, idRaccolte INTEGER, name TEXT, num TEXT, keyTona TEXT)');
      });
  
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM canticiRaccolte WHERE idRaccolte = ? ORDER BY CAST(num AS INTEGER)',
          [currentIdRaccolta],
          (_, resultSet) => {
            setCantici(resultSet.rows._array);
          },
          (_, error) => {
            console.log(error);
          }
        );
      });

      db.transaction(tx => {
        tx.executeSql('SELECT * FROM raccolte', null,
          (_, resultSet) => setRaccolte(resultSet.rows._array),
          (_, error) => console.log(error)
        );
      });
  
    }, []);


//************************************************************************* */
    //Caricamento del database cantici
    useEffect(() => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM canticiRaccolte WHERE idRaccolte = ? ORDER BY CAST(num AS INTEGER)',
          [currentIdRaccolta],
          (_, resultSet) => {
            setCantici(resultSet.rows._array);
          },
          (_, error) => {
            console.log(error);
          }
        );
      });

  }, [currentIdRaccolta]);


  //****************AGGIUNGI una raccolta******************************************* */
      const addItemRaccolta = () => {
        if(currentNomeRaccolta == "") {
          showMessage({
            message: 'Attenzione',
            description: 'Inserisci un nome alla raccolta',
            type: 'danger',
          });
          return
        }

      // Verifica se c'è ci sono dei duplicati, ed evita di creare il duplicato
      const isDuplicate = raccolte.some((nice) =>  nice.nomeRaccolta === currentNomeRaccolta);
      if (isDuplicate) {
        showMessage({
          message: 'Attenzione',
          description: 'Questa raccolta già esiste',
          type: 'danger',
        });
        return; 
      }

        //inserimento della trupla nel database aggiorna l'array
          db.transaction(tx => {
            tx.executeSql(
              'INSERT INTO raccolte (nomeRaccolta) values (?)',
              [currentNomeRaccolta],
              (_, resultSet) => {
                setRaccolte([
                  ...raccolte,
                  { id: resultSet.insertId, nomeRaccolta: currentNomeRaccolta }
                ]);
                setCurrentNomeRaccolta('');
              },
              (_, error) => console.error("Errore durante l'inserimento nel database:", error)
            );
          });
        };

//****************AGGIUNGI un cantico*************************************************** */
  const addItem = () => {
    if(currentNomeCantico == "" ||  currentNumero == "") {
        return
    }

      // Verifica se c'è ci sono dei duplicati, ed evita di creare duplicato
  const isDuplicate = cantici.some((nice) =>  nice.name === currentNomeCantico);
    if (isDuplicate) {
      showMessage({
        message: 'Attenzione',
        description: 'Questo cantico è già stato inserito nella raccolta',
        type: 'danger',
      });
      return; 
    }

    let tona = "";

    JSONDATA.map( (nice)=> {  //mi va a prendere la tonalità
      if(nice.titolo === currentNomeCantico) {
        tona = nice.keyTona
      }
    })


  //inserimento della trupla nel database aggiorna l'array
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO canticiRaccolte (idRaccolte, name, num, keyTona) values (?, ?, ?, ?)',
        [currentIdRaccolta, currentNomeCantico, currentNumero, tona],
        (_, resultSet) => {
          setCurrentNomeCantico('');
          setCurrentNumero('');
        },
        (_, error) =>  console.error("Errore durante l'inserimento nel database:", error)
      );
    });

    db.transaction(tx => {  //va ad aggiornare l'array e va a fare anche l'ordinamento
      tx.executeSql(
        'SELECT * FROM canticiRaccolte WHERE idRaccolte = ? ORDER BY CAST(num AS INTEGER)',
        [currentIdRaccolta],
        (_, resultSet) => {
          setCantici(resultSet.rows._array);
        },
        (_, error) => {
          console.log(error);
        }
      );
    });
  };

const deletePrevCantico = (id, nomeCantico, num)=> {
  Alert.alert(
    'Attenzione',
    'Sei sicuro di voler cancellare questo cantico: ' + num + " " + nomeCantico,
    [
      {
        text: 'SI',
        onPress: () => deleteItem(id),
      },
      {
        text: 'NO',
        onPress: () => console.log(''),
      },
    ],
    { cancelable: false }
  );
}

//***************cancella il cantico */*************************************/
  const deleteItem = (id) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM canticiRaccolte WHERE id = ?',
        [id],
        (_, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let existingNames = cantici.filter(name => name.id !== id);
            setCantici(existingNames);
          }
        },
        (_, error) => console.log(error)
      );
    });
  };


  //***************cancella la raccolta */*************************************/
    const deleteItemRaccolta = (id) => {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM raccolte WHERE id = ?',
          [id],
          (_, resultSet) => {
            if (resultSet.rowsAffected > 0) {
              let existingNames = raccolte.filter(name => name.id !== id);
              setRaccolte(existingNames);
            }
          },
          (_, error) => console.log(error)
        );
      });
    };
//________________________________________________________________________________
  const filterDataCantici = cantici.filter((item) =>
  item.num.toLowerCase().includes(filter.toLowerCase()) || item.name.toLowerCase().includes(filter.toLowerCase())
);

const filteredDataRaccolta = raccolte.filter((item) =>
item.nomeRaccolta.toLowerCase().includes(filterRaccolta.toLowerCase())
);

  //AutoComplete______________________________________________________________________
  const filterDataCanticiModal = JSONDATA.filter((item) => {
    const isIncluded = item.titolo.toLowerCase().includes(filterCantici.toLowerCase());
    // Nascondi l'elemento se è un match esatto
    return isIncluded 
  });


//_____________________________________________________________________________________
const FlatCantici = () => {
if (filterDataCantici.length <= 0) {
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
  data={filterDataCantici}
  renderItem={({item}) => (
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("CanticoScreen", {
                                  num: item.num,
                                  titolo: item.name,
                                  keyTona: item.keyTona, }); }}>

                  <View style={globalStyles.containerElenco}>
                      {/* <Image style={styles.image} source={require("../images/cerchio1.png")}/> */}
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
);
};


const handleInputFocus = () => {
  setIsFocused(true);
}

const handleInputBlur = () => {
  setIsFocused(false);
}

const handleInputFocus1 = () => {
  setIsFocused1(true);
}

const handleInputBlur1 = () => {
  setIsFocused1(false);
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
      <View style= {{ flex: 0.6, borderBottomLeftRadius:40, borderBottomRightRadius: 40, backgroundColor: "#EFEFEF" }}>  
                
  {/*********CANTICI DELLE RACCOLTE********************************************* */}
  <FlatCantici />


{/*********RICERCA**********_______________________******************************************* */}

  <View style={{ justifyContent: "center", flexDirection: "row" }}>
      <View  style={[styles.containerInput, isFocused ? { borderColor: '#04457E' } : null]}>
          <AntDesign name="search1" size={20} color={isFocused ? "#04457E" : "#04457E"} />
          <TextInput value={filter}
                  ref={textInputRef}
                  onChangeText={(text) => setFilter(text)}
                  color= "black"
                  style={styles.input2}
                  placeholder='Ricerca...' placeholderTextColor="#7f8082" selectionColor= "#04457E"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  />
              <TouchableOpacity onPress={clearText}>
                  <AntDesign name="close" size={20} color="gray" />
              </TouchableOpacity>
      </View> 
      </View>

  </View>
  {/********* SPACCO***************************************************** */}

<View style= {{ marginTop:30, marginLeft: 15, marginRight: 15, flexDirection: "row", justifyContent: "space-between", }}>
    <View style= {{ flexDirection: "column" }}>
      <Text style= {{ color: "white" }}> Seleziona la Raccolta:</Text>
      <View style= {styles.containerRaccolta}>
        <Text> {currentNomeRaccoltaSele} </Text>

        <TouchableOpacity onPress={() => { setModalVisibleRaccolta(true) }}>
        <Image style={{ width:24, height: 24, tintColor:"black" }}  source={require("../images/folder.png")}/>
        </TouchableOpacity>
      </View>
    </View>

    <View style= {{ flexDirection: "column" }}>
      <Text> </Text>
      <View style= {styles.containerRaccoltaAdd}>
      <TouchableOpacity onPress={() => { setModalVisibleRaccoltaAdd(true) }}>
        <Image style={{ width:24, height: 24, tintColor:"black" }}  source={require("../images/folder-plus.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setModalVisibleCanticiAdd(true) }}>
          <AntDesign name="addfile" size={24} color="black" />
        </TouchableOpacity>
      </View>    

    </View>
</View>

  </Animated.View>








{/************MODAL SELEZIONA RACCOLTA************************************************************* */}
<Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleRaccolta}
        onRequestClose={() => {
          setModalVisibleRaccolta(!modalVisibleRaccolta);
        }} 
       statusBarTranslucent= {true}>
      <TouchableWithoutFeedback onPress={() => {
              if (Keyboard && Keyboard.dismiss) {
                Keyboard.dismiss();
                handleInputBlur()
              } 
              if (isFocused == false && isFocused1 == false) {
                setModalVisibleRaccolta(false);
              }
  }}>
        <View style={styles.centeredView}>
        <FlashMessage position="top" />
          <View style={styles.modalViewRaccolte}>
            <Text style={styles.modalTitle}>Seleziona la Raccolta</Text>

    {/**********RICERCA************************* */}
            <View style={{ justifyContent: "center", flexDirection: "row" }}>
      <View  style={[styles.containerInput, isFocused ? { borderColor: '#04457E' } : null]}>
          <AntDesign name="search1" size={20} color={isFocused ? "#04457E" : "#04457E"} />
          <TextInput value={filterRaccolta}
                  ref={textInputRef}
                  onChangeText={(text) => setFilterRaccolta(text)}
                  color= "black"
                  style={styles.input2}
                  placeholder='Ricerca...' placeholderTextColor="#7f8082" selectionColor= "#04457E"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  />
              <TouchableOpacity onPress={()=> { setFilterRaccolta("") }}>
                  <AntDesign name="close" size={20} color="gray" />
              </TouchableOpacity>
      </View> 
      </View>
              <View style= {{ marginTop: 35 }}></View>

          {/********************ELENCO RACCOLTE***************************************************** */}
              <FlatList style={{ flex: 1,  width: "100%" }}
                keyboardShouldPersistTaps={'handled'}
                  data={filteredDataRaccolta}
                  renderItem={({item}) => (
                    <TouchableOpacity onPress= { ()=> { setCurrentIdRaccolta(item.id); setCurrentNomeRaccoltaSele(item.nomeRaccolta); setGlobalAccor(item.nomeRaccolta); setGlobalAccorId(item.id);  setFilterRaccolta(""); setModalVisibleRaccolta(false) }}>
                                  <View style={globalStyles.containerElenco}>
                                      <View style={globalStyles.centerColumnElenco}>
                                          <Text style={globalStyles.titleElenco}> {item.nomeRaccolta} </Text>
                                      </View>
                                      <View style={globalStyles.rightColumnElenco}>
                                        <Entypo  name="chevron-right" size={24} color="#04457E" />
                                      </View>
                                  </View>
                    </TouchableOpacity>
                )}/> 

          </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>


{/************MODAL aggingi raccolta************************************************************* */}
<Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleRaccoltaAdd}
        onRequestClose={() => {
          setModalVisibleRaccoltaAdd(!modalVisibleRaccoltaAdd);
        }} 
       statusBarTranslucent= {true}>
      <TouchableWithoutFeedback onPress={() => {
              if (Keyboard && Keyboard.dismiss) {
                Keyboard.dismiss();
                handleInputBlur()
              } 
              if (isFocused == false && isFocused1 == false) {
                setModalVisibleRaccoltaAdd(false);
              }
  }}>
        <View style={styles.centeredView}>
        <FlashMessage position="top" />
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Aggiungi una Raccolta</Text>


                <TextInput value={currentNomeRaccolta} 
                      placeholder='Nome Raccolta'  placeholderTextColor="#7f8082" selectionColor= "#04457E"
                                    onFocus={handleInputFocus1}
                                    onBlur={handleInputBlur1}
                                     onChangeText={setCurrentNomeRaccolta}  style={styles.input} />
              <View style= {{ marginTop: 35 }}></View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => addItemRaccolta()}>
              <Text style={styles.textStyle}>Aggiungi Raccolta</Text>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>

{/************MODAL aggiungi cantico************************************************************* */}
<Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleCanticiAdd}
        onRequestClose={() => {
          setModalVisibleCanticiAdd(!modalVisibleCanticiAdd);
        }} 
       statusBarTranslucent= {true}>
      <TouchableWithoutFeedback onPress={() => {
              if (Keyboard && Keyboard.dismiss) {
                Keyboard.dismiss();
                handleInputBlur()
              } 
              if (isFocused == false && isFocused1 == false) {
                setModalVisibleCanticiAdd(false);
                setFilter("");
              }
  }}>
        <View style={styles.centeredView}>
        <FlashMessage position="top" />
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Aggiungi un Cantico alla Raccolta:</Text>
            <Text style={styles.modalTitleRaccolta}> {currentNomeRaccoltaSele} </Text>

  
                <TextInput value={currentNumero} 
                      placeholder='Numero Cantico' keyboardType='numeric' placeholderTextColor="#7f8082" selectionColor= "#04457E"
                                    onFocus={handleInputFocus1}
                                    onBlur={handleInputBlur1}
                                     onChangeText={setCurrentNumero}  style={styles.input} />

            <TouchableOpacity onPress= {()=> { setModalVisibleCantici(true)}}>
              <View style= {{ borderRadius: 10, borderWidth: 2, borderColor: primary, padding: 7, marginTop: 20, width: 200, alignItems: "center" }}>
              {currentNomeCantico == "" ? 
              <Text > Seleziona il cantico </Text>
              :<Text> {currentNomeCantico} </Text>}
              </View>
            </TouchableOpacity>
                 
                  <View style={{marginTop:20}}></View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => addItem()}>
              <Text style={styles.textStyle}>Aggiungi il Cantico</Text>
            </TouchableOpacity>
          </View>
{/****************Secondo Modal Intero visualizza i canti di quella raccolta******************************************************** */}
          <View style={styles.modalViewCantico}>
            <Text style={styles.modalTitle}>{currentNomeRaccoltaSele}</Text>

    {/**********RICERCA************************* */}
            <View style={{ justifyContent: "center", flexDirection: "row" }}>
      <View  style={[styles.containerInput, isFocused ? { borderColor: '#04457E' } : null]}>
          <AntDesign name="search1" size={20} color={isFocused ? "#04457E" : "#04457E"} />
          <TextInput value={filter}
                  ref={textInputRef}
                  onChangeText={(text) => setFilter(text)}
                  color= "black"
                  style={styles.input2}
                  placeholder='Ricerca...' placeholderTextColor="#7f8082" selectionColor= "#04457E"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  />
              <TouchableOpacity onPress={()=> { setFilter("") }}>
                  <AntDesign name="close" size={20} color="gray" />
              </TouchableOpacity>
      </View> 
      </View>
              <View style= {{ marginTop: 0 }}></View>

  {/********************ELENCO CANTICI***************************************************** */}
              <FlatList style={{ flex: 1,  width: "100%" }}
                keyboardShouldPersistTaps={'handled'}
                  data={filterDataCantici}
                  renderItem={({item}) => (
                    <TouchableOpacity activeOpacity={1}>
                                  <View style={globalStyles.containerElenco}>
                                      <View style={globalStyles.leftColumnElenco}>
                                            <Text style={globalStyles.numberElenco}> {item.num}  </Text>
                                      </View> 
                                      <View style={globalStyles.centerColumnElenco}>
                                          <Text style={globalStyles.titleElenco}> {item.name} </Text>
                                      </View>
                                    <TouchableOpacity onPress= {()=> {deletePrevCantico(item.id, item.name, item.num)}}>
                                      <View style={globalStyles.rightColumnElenco}>
                                      <FontAwesome5 name="trash" size={24} color= {primary} />
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                      </TouchableOpacity>
                )}/> 

          </View>
        </View>
        </TouchableWithoutFeedback>
</Modal>
{/************************************************************************* */}


{/************MODAL SELEZIONA CANTICO************************************************************* */}
<Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleCantici}
        onRequestClose={() => {
          setModalVisibleCantici(!modalVisibleCantici);
        }} 
       statusBarTranslucent= {true}>
      <TouchableWithoutFeedback onPress={() => {
              if (Keyboard && Keyboard.dismiss) {
                Keyboard.dismiss();
                handleInputBlur()
              } 
              if (isFocused == false && isFocused1 == false) {
                setFilterCantici("")
                setModalVisibleCantici(false);
              }
  }}>
        <View style={styles.centeredView}>
        <FlashMessage position="top" />
          <View style={styles.modalViewRaccolte}>
            <Text style={styles.modalTitle}>Seleziona il Cantico</Text>

    {/**********RICERCA************************* */}
            <View style={{ justifyContent: "center", flexDirection: "row" }}>
      <View  style={[styles.containerInput, isFocused ? { borderColor: '#04457E' } : null]}>
          <AntDesign name="search1" size={20} color={isFocused ? "#04457E" : "#04457E"} />
          <TextInput value={filterCantici}
                  ref={textInputRef}
                  onChangeText={(text) => setFilterCantici(text)}
                  color= "black"
                  style={styles.input2}
                  placeholder='Ricerca...' placeholderTextColor="#7f8082" selectionColor= "#04457E"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  />
              <TouchableOpacity onPress={()=> { setFilterCantici("") }}>
                  <AntDesign name="close" size={20} color="gray" />
              </TouchableOpacity>
      </View> 
      </View>
              <View style= {{ marginTop: 35 }}></View>

          {/********************ELENCO RACCOLTE***************************************************** */}
              <FlatList style={{ flex: 1,  width: "100%" }}
                keyboardShouldPersistTaps={'handled'}
                  data={filterDataCanticiModal}
                  renderItem={({item}) => (
                    <TouchableOpacity onPress= { ()=> { setCurrentNomeCantico(item.titolo); setFilterCantici(""); setModalVisibleCantici(false) }}>
                                  <View style={globalStyles.containerElenco}>
                                      <View style={globalStyles.centerColumnElenco}>
                                          <Text style={globalStyles.titleElenco}> {item.titolo} </Text>
                                      </View>
                                      <View style={globalStyles.rightColumnElenco}>
                                        <Entypo  name="chevron-right" size={24} color="#04457E" />
                                      </View>
                                  </View>
                    </TouchableOpacity>
                )}/> 

          </View>
        </View>
        </TouchableWithoutFeedback>
</Modal>



      </View>
</TouchableWithoutFeedback>
  </>
  )
};

export default Raccolte;

const styles = StyleSheet.create({
  containerRicerca: {
    flex:1,
    alignItems: 'center', // Allineamento verticale al centro
    marginTop: 20,
  },
  containerRaccolta: {
    flexDirection: "row" ,
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: "#EFEFEF",
    borderRadius:10,
    width: 200,
    height: 40,
    justifyContent: "space-between",
    alignItems: "center" ,
  },
  containerRaccoltaAdd: {
    flexDirection: "row" ,
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: "#EFEFEF",
    borderRadius:10,
    width: 100,
    height: 40,
    justifyContent: "space-around",
    alignItems: "center" ,
  },
image: {
    position: "absolute",
    left: "2.5%",
    width: 60, // Larghezza dell'immagine PNG
    height: 60, // Altezza dell'immagine PNG
  },
input2: {
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

  
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      margin: 8
    },
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
      height: 40,
      width: 200,
       paddingLeft:6,
        borderBottomWidth: 1,
        borderColor: primary,
         paddingTop: 10,
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


      centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
      },
      modalView: {
        margin: 0,
        marginTop: 75,
        width: "80%",
        backgroundColor: "#EFEFEF",
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalViewRaccolte: {
        margin: 0,
        marginTop: 75,
        width: "90%",
        height: "83%",
        backgroundColor: "#EFEFEF",
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalViewCantico: {
        margin: 0,
        marginTop: 20,
        width: "90%",
        height: "46%",
        backgroundColor: "#EFEFEF",
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: primary,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalTitle: {
        fontSize: 18,
        color: primary,
        marginBottom: 5,
        textAlign: 'center',
        fontFamily: "Newsreader_600SemiBold",
      },
      modalTitleRaccolta: {
        fontSize: 18,
        color: "black",
        marginBottom: 5,
        textAlign: 'center',
        fontFamily: "Newsreader_600SemiBold",
      },
  });