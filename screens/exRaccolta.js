import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal, Pressable, Alert  } from 'react-native';
import { globalStyles } from '../styles/global';
import { showMessage } from "react-native-flash-message";
import FlashMessage from 'react-native-flash-message';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import JSONDATA from '../dbCantici.json'
import * as SQLite from 'expo-sqlite';

const primary = "#04457E"

const Raccolte2 = (props) => {
  const [db, setDb] = useState(SQLite.openDatabase('example.db'));
  const [isLoading, setIsLoading] = useState(true);
  const [names, setNames] = useState([]);
  const [currentNomeRaccolta, setCurrentNomeRaccolta] = useState("");
  const [currentIdRaccolta, setCurrentIdRaccolta] = useState(0);
  const [raccolte, setRaccolte] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);
  const textInputRef = useRef();
  const [currentNumero, setCurrentNumero] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [currentTona, setCurrentTona] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleRaccolta, setModalVisibleRaccolta] = useState(false);

  //AutoComplete______________________________________________________________________
const filteredDataArm = JSONDATA.filter((item) => {
  const isIncluded = item.titolo.toLowerCase().includes(currentName.toLowerCase());
  const isExactMatch = item.titolo.toLowerCase() === currentName.toLowerCase();

  // Nascondi l'elemento se è un match esatto
  return isIncluded && !isExactMatch;
});

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
    setCurrentName("");
  }


const FlatAggiunta = () => {
    return (
        <View style= {{ height: 210, borderRadius: 10, marginBottom:20, overflow: 'hidden', position: "absolute", top: 50 }}> 
      <FlatList contentContainerStyle={{borderRadius: 10, overflow: 'hidden' }}
      keyboardShouldPersistTaps={'handled'}
      data={filteredDataArm}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() =>{ setCurrentName(item.titolo); Keyboard.dismiss(); }}>
                      <View style={globalStyles.containerAutoComplete}>
                          {/* <Image style={styles.image} source={require("../images/cerchio1.png")}/> */}
                          <View style={globalStyles.centerColumnElenco}>
                              <Text style={globalStyles.titleAutoComplete}> {item.titolo} </Text>
                          </View>
                          
                      </View>
        </TouchableOpacity>
      )}
       /> 
       </View>
    );
  };


//************************************************************************* */
    //Caricamento del database
    useEffect(() => {
      setDb(SQLite.openDatabase('example.db'));
  
      db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS raccolte (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeRaccolta TEXT)');
      });
  
      db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS racco1 (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, num TEXT, keyTona TEXT)');
      });
  
      db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS canticiRaccolte (id INTEGER PRIMARY KEY AUTOINCREMENT, idRaccolte INTEGER, name TEXT, num TEXT, keyTona TEXT)');
      });
  
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM canticiRaccolte where idRaccolte = ?', [currentIdRaccolta],
          (_, resultSet) => setNames(resultSet.rows._array),
          (_, error) => console.log(error)
        );
      });
  
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM raccolte', null,
          (_, resultSet) => setRaccolte(resultSet.rows._array),
          (_, error) => console.log(error)
        );
      });
  
      setIsLoading(false);
    }, []);

    //************************************************************************* */
    //Caricamento del database
    useEffect(() => {
        db.transaction(tx => {
          tx.executeSql('SELECT * FROM canticiRaccolte where idRaccolte = ?', [currentIdRaccolta],
            (_, resultSet) => setNames(resultSet.rows._array),
            (_, error) => console.log(error)
          );
        });
  
    }, [currentIdRaccolta]);



  //****************AGGIUNGI un cantico******************************************* */
  const addItem = () => {
    if(currentName == "" ||  currentNumero == "") {
        return
    }

      // Verifica se c'è ci sono dei duplicati, ed evita di creare duplicato
  const isDuplicate = names.some((nice) =>  nice.name === currentName);
    if (isDuplicate) {
      showMessage({
        message: 'Titolo duplicato',
        description: 'Questo cantico è già stato inserito nella raccolta',
        type: 'danger',
      });
      return; 
    }

    let tona = "";

    JSONDATA.map( (nice)=> {  //mi va a prendere la tonalità
      if(nice.titolo === currentName) {
        console.log(nice.titolo + "===" +currentName)
        console.log(nice.keyTona)
        tona = nice.keyTona
        console.log(tona)
      }
    })

    console.log(tona)

  //inserimento della trupla nel database aggiorna l'array
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO canticiRaccolte (idRaccolte, name, num, keyTona) values (?, ?, ?, ?)',
        [currentIdRaccolta, currentName, currentNumero, tona],
        (_, resultSet) => {
          setNames([
            ...names,
            { id: resultSet.insertId, name: currentName, num: currentNumero, keyTona: tona }
          ]);
          setCurrentName('');
          setCurrentNumero('');
        },
        (_, error) =>  console.error("Errore durante l'inserimento nel database:", error)
      );
    });
  };

    //****************AGGIUNGI una raccolta******************************************* */
    const addItemRaccolta = () => {
  
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

  //***************cancella il cantico */*************************************/
  const deleteItem = (id) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM canticiRaccolte WHERE id = ?',
        [id],
        (_, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let existingNames = names.filter(name => name.id !== id);
            setNames(existingNames);
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
//******************************************************* */
//*************INTERFACCIA**************************** */
//******************************************************* */
  return (
    <>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style= {globalStyles.containerCantico}>
{/*******************   HEADER***************************************************** */}     
    <View style={ globalStyles.header}>
          <Text style={globalStyles.titleHeader}> HyChords  </Text>
    </View>

    {isLoading == false && <Text>Database Caricato</Text>}
    {isLoading == true && names.length === 0 && <Text> Sta caricando </Text>} 

        <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisibleRaccolta(true)}>
              <Text style={styles.textStyle}>Aggiungi una raccolta</Text>
      </TouchableOpacity>

      <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Aggiungi un cantico</Text>
      </TouchableOpacity>

       
{/********************ELENCO CANTICO RACCOLTA***************************************************** */}
<FlatList
    data={names}
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
                            <Button title='Delete' onPress={() => deleteItem(item.id)} />
                        </View>
                        <View style={globalStyles.rightColumnElenco}>
                        
                        <Entypo  name="chevron-right" size={24} color="#04457E" />
                        </View>
                    </View>
      </TouchableOpacity>
  )}/> 

  {/*********Modifica raccolta***************************************************** */}
  <View style= {{ justifyContent: "center", alignItems: "center", position: "relative", zIndex: 1, marginTop:20, marginBottom: 35 }}>
                <View style={{ justifyContent: "center", flexDirection: "row" }}>
                      <Text> {currentIdRaccolta} </Text>
                      <Button title='bhoID' onPress={() => setCurrentIdRaccolta(currentIdRaccolta -1)} />
                      <Button title='addID' onPress={() => setCurrentIdRaccolta(currentIdRaccolta +1)} />
                  </View>

                </View>

{/********************ELENCO RACCOLTE***************************************************** */}
<Text> Raccolte </Text>
<FlatList
    data={raccolte}
    renderItem={({item}) => (
      <TouchableOpacity >

                    <View style={globalStyles.containerElenco}>
                        {/* <Image style={styles.image} source={require("../images/cerchio1.png")}/> */}
                        <View style={globalStyles.leftColumnElenco}>
                            <Text style={globalStyles.numberElenco}> {item.id}  </Text>
                        </View> 
                        <View style={globalStyles.centerColumnElenco}>
                            <Text style={globalStyles.titleElenco}> {item.nomeRaccolta} </Text>
                            <Button title='Delete' onPress={() => deleteItemRaccolta(item.id)} />
                        </View>
                        <View style={globalStyles.rightColumnElenco}>
                        <Entypo  name="chevron-right" size={24} color="#04457E" />
                        </View>
                    </View>
      </TouchableOpacity>
  )}/> 


{/************MODAL aggiungi cantico************************************************************* */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }} 
       statusBarTranslucent= {true}>
      <TouchableWithoutFeedback onPress={() => {
              if (Keyboard && Keyboard.dismiss) {
                Keyboard.dismiss();
                handleInputBlur()
              } 
              if (isFocused == false && isFocused1 == false) {
                setModalVisible(false);
              }
  }}>
        <View style={styles.centeredView}>
        <FlashMessage position="top" />
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Aggiungi un Cantico</Text>


                <TextInput value={currentNumero} 
                      placeholder='Numero Cantico' keyboardType='numeric' placeholderTextColor="#7f8082" selectionColor= "#04457E"
                                    onFocus={handleInputFocus1}
                                    onBlur={handleInputBlur1}
                                     onChangeText={setCurrentNumero}  style={styles.input} />

  {/*********Autocomplete***************************************************** */}
                <View style= {{ justifyContent: "center", alignItems: "center", position: "relative", zIndex: 1, marginTop:20, marginBottom: 35 }}>
                <View style={{ justifyContent: "center", flexDirection: "row" }}>
                            <TextInput value={currentName}
                                    ref={textInputRef}
                                    onChangeText={(text) => setCurrentName(text)}
                                    color= "black"
                                    style={styles.input}
                                    placeholder='Titolo' placeholderTextColor="#7f8082" selectionColor= "#04457E"
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                    />
                  </View>
                        {isFocused && 
                        <>
                        <FlatAggiunta />
                        </>
                        }
                </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => addItem()}>
              <Text style={styles.textStyle}>Aggiungi il Cantico</Text>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
{/************************************************************************* */}

{/************MODAL aggingi raccolta************************************************************* */}
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
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Aggiungi Raccolta</Text>


                <TextInput value={currentNomeRaccolta} 
                      placeholder='Nome Raccolta'  placeholderTextColor="#7f8082" selectionColor= "#04457E"
                                    onFocus={handleInputFocus1}
                                    onBlur={handleInputBlur1}
                                     onChangeText={setCurrentNomeRaccolta}  style={styles.input} />
              <View style= {{ marginTop: 35 }}></View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => addItemRaccolta()}>
              <Text style={styles.textStyle}>Aggiungi raccolta</Text>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>


    </View>
    </TouchableWithoutFeedback>
    </>
  );
};

export default Raccolte2;

const styles = StyleSheet.create({
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
      width: "70%",
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
        marginTop: 120,
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
        marginBottom: 15,
        textAlign: 'center',
        fontFamily: "Newsreader_600SemiBold",
      },
  });