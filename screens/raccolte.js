import React from "react";
import { useState, useRef, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Easing } from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, Alert, Animated, View, Text, TouchableOpacity, TextInput, Share, KeyboardAvoidingView, ScrollView, Image, FlatList, TouchableWithoutFeedback, Keyboard, Modal  } from "react-native";
import { dbFire } from "../firebaseConfig";
import {collection, deleteDoc, doc, onSnapshot ,addDoc ,updateDoc, query, orderBy, where, serverTimestamp, limit, getDocs, getCountFromServer} from 'firebase/firestore';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { RewardedInterstitialAd, RewardedAdEventType, AdEventType } from 'react-native-google-mobile-ads';
import { globalStyles } from "../styles/global";
import { Button, ActivityIndicator } from 'react-native-paper';
import { Checkbox } from "react-native-paper";
import { shareAsync } from "expo-sharing";
import * as Clipboard from 'expo-clipboard';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useIsFocused } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { showMessage } from "react-native-flash-message";
import FlashMessage from 'react-native-flash-message';
import JSONDATA from '../dbCantici.json'
import { LinearGradient } from "expo-linear-gradient";
import * as SQLite from 'expo-sqlite';

const primary = "#013241"
const back = "#EFEFEF"
const { Value, timing, SpringUtils } = Animated;

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8550341729584646/1847498781';

const rewardAdUnitId = __DEV__
  ? TestIds.REWARDED_INTERSTITIAL
  : 'ca-app-pub-8550341729584646/4599716832';

const rewardedInterstitial = RewardedInterstitialAd.createForAdRequest(rewardAdUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const Raccolte = (props) => {
  const [db, setDb] = useState(SQLite.openDatabase('example.db'));
  const [currentNumero, setCurrentNumero] = useState('');

  const [dBFirebase, setDbFirebase] = useState([]);
  const [uniqueId, setUniqueId] = useState(generateShortId(8));
  var idRaccFire
  const [loading1, setLoading1] = useState(false)
  const [loading, setLoading] = useState(false)

  const [rewardedInterstitialLoaded, setRewardedInterstitialLoaded] = useState(false);
  const [rewu, setRewu] = useState(0);

  const [currentNomeCantico, setCurrentNomeCantico] = useState('');
  const [currentIdRaccPred, setCurrentIdRaccPred] = useState('');
  const [codiceRaccolta, setCodiceRaccolta] = useState('');
  const [currentTona, setCurrentTona] = useState('');
  const [activeRaccPred, setActiveRaccPred] = useState(false);
  const isFocusedNice = useIsFocused();
  const [text, setText] = useState("");
  const [pageState, setPageState] = useState("");
  const [raccolte, setRaccolte] = useState([]);
  const [cantici, setCantici] = useState([]);
  const [raccoltaPredefinita, setRaccoltaPredefinita] = useState([]);
  const [codiceDown, setCodiceDown] = useState([]);
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
  const [modalVisibleDownRaccolta, setModalVisibleDownRaccolta] = useState(false);
  const [modalVisibleCodiceRaccolta, setModalVisibleCodiceRaccolta] = useState(false);

  const [isFocused1, setIsFocused1] = useState(false);
  const [currentNomeRaccolta, setCurrentNomeRaccolta] = useState("");
  const [currentNomeRaccoltaSele, setCurrentNomeRaccoltaSele] = useState("");
  const [currentIdRaccolta, setCurrentIdRaccolta] = useState(0);

  const translateY = useRef(new Value(-175)).current;
  const fadeInDuration = 400; // Durata dell'animazione in millisecondi

  //filtri cantici________________________________________________________________
  const [filterApertura, setFilterApertura] = useState(false);
  const [filterBrevi, setFilterBrevi] = useState(false);
  const [filterTestimonianze, setFilterTestimonianze] = useState(false);
  const [filterDiLode, setFilterDiLode] = useState(false);
  const [filterAdorazione, setFilterAdorazione] = useState(false);
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
setFilterCantico({   //diventano tutte false
  A: false,
  B: false,
  T: false,
  L: false,
  P: false,
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



//***************************************************************************** */
useFocusEffect(
  React.useCallback(() => {
    AsyncStorage.getItem('globalIdRaccolta').then((value) => {
      if (value) {
        setCurrentIdRaccPred(parseInt(value, 10))
      }
    });

  }, [])
);

//settaggio, si attiva quando premo il pulsante
const setGlobalIdRaccolta = async (value) => {
  setCurrentIdRaccPred(value);
  await AsyncStorage.setItem('globalIdRaccolta', value.toString());
  console.log("preso: "+  value.toString())
};


  //publicità ricompensa__________________________________________________
  const loadRewardedInterstitial = () => {
    const unsubscribeLoaded = rewardedInterstitial.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setRewardedInterstitialLoaded(true);
      }
    );
  
    const unsubscribeEarned = rewardedInterstitial.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        setRewu(prevRewu => prevRewu + 1);
      }
    );
  
    const unsubscribeClosed = rewardedInterstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setRewardedInterstitialLoaded(false);
        rewardedInterstitial.load();
      }
    );
  
    rewardedInterstitial.load();
  
    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
      unsubscribeEarned();
    };
  };
  
  useEffect(() => {
    const unsubscribeRewardedInterstitialEvents = loadRewardedInterstitial();
  
    return () => {
      unsubscribeRewardedInterstitialEvents();
    };
  }, []);


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
//**************************************************************************** */
//funzione per copiare uniqueId negli appunti del telefono
const copyToClipboard = () => {
  Clipboard.setString(uniqueId); // Utilizza Clipboard da expo-clipboard
};

//copia il codice quello presente nella tabella SQL
const copyToClipboardCodicSQL = (codiceSQL) => {
  Clipboard.setString(codiceSQL); // Utilizza Clipboard da expo-clipboard
};

//funzione per condividere uniqueId
const shareUniqueId = async () => {
    if (!uniqueId) {
      return;
    }

    const result = await Share.share({
      message: uniqueId,
      title: 'Condividi il codice Raccolta',
    });

};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//carica i cantici sul database firebase
  const handleSubmit = async (e) => {
    setLoading(true); // Attiva l'indicatore di progresso

    if(currentNomeRaccoltaSele == "") {  //controllo
      setLoading(false);
      return
    }

    const newId = await generateNewId(); 

    filterDataCantici.map( async (hi) => {  //vado a prendere tutti i canti attuali nella cartella selezionata, e li salvo Online
      await addDoc(collection(dbFire, "cantici"), {
        titolo: hi.name,
        num: hi.num,
        tona: hi.keyTona,
        tipologia: hi.tipologia,
        nomeRaccolta: currentNomeRaccoltaSele,
        idRaccolta: newId,
        testo: hi.testo,
        idVideoYt: hi.idVideoYt,
        idVideoYtIta: hi.idVideoYtIta
      });
    })

    addICodiceRaccolta(currentNomeRaccoltaSele, newId);  //aggiunge la trupla codice sqlLite
    setLoading(false);

    setModalVisibleDownRaccolta(false)
    setRewu(0)
    setModalVisibleCodiceRaccolta(true)
  };

  //scarica i Cantici online tramite il database firebase--------------------------------
  const handleScaricaCantici = async (e) => {  
    setLoading1(true);
  
    // Se l'inserimento non va a buon fine, esce dalla funzione
    if (!await addItemRaccolta()) {
      setLoading1(false);
      return;
    }
  
    if (rewardedInterstitialLoaded) {  // Mostra l'annuncio video se è stato caricato
      setRewu(rewu -1)
      rewardedInterstitial.show();
    }
    
    console.log("ha")
    const collectionRef = collection(dbFire, "cantici");
    const q = query(collectionRef, where("idRaccolta", "==", codiceRaccolta));
    console.log("haha")
    const querySnapshot = await getDocs(q);
    console.log("hahaha")
    let todosArray = [];
    querySnapshot.forEach((doc) => {
      todosArray.push({ ...doc.data(), id: doc.id });
    });
    setDbFirebase(todosArray);
  
    addCanticiFirebaseLocale(todosArray)
    console.log("completato yees")
    setCodiceRaccolta("");
    setLoading1(false);
  };


  const addCanticiFirebaseLocale = async (todosArray) => {
    todosArray.map( (hi)=> {
      //inserimento dei cantici 
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO canticiRaccolta2 (idRaccolte, name, num, keyTona, tipologia, testo, idVideoYt, idVideoYtIta) values (?, ?, ?, ?, ?, ?, ?, ?)',
          [idRaccFire, hi.titolo, hi.num, hi.tona, hi.tipologia, hi.testo, hi.idVideoYt, hi.idVideoYtIta],
          (_, resultSet) => {
            setCurrentNomeCantico('');
            setCurrentNumero('');
          },
          (_, error) =>  console.error("Errore durante l'inserimento nel database:", error)
        );
      });
    })

    db.transaction(tx => {  //infine va ad aggiornare l'array con l'ordinamento
      tx.executeSql(
        'SELECT * FROM canticiRaccolta2 WHERE idRaccolte = ? ORDER BY CAST(num AS INTEGER)',
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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
/*
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
*/
//******************************************************************** */
  // Funzione per generare una nuova stringa di lunghezza specifica
  function generateShortId(length) {
    const randomString = uuidv4().replace(/-/g, '').substr(0, length);
    return randomString;
  }

  // Funzione per generare un nuovo identificatore e aggiornare lo stato
  const generateNewId = async () => {
    const newId = generateShortId(8);
    await setUniqueId(newId);
    return newId;
  };

  //************************************************************************* */
    //Caricamento del database LOCALE
    useEffect(() => {
      setDb(SQLite.openDatabase('example.db'));
  
      db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS raccolte (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeRaccolta TEXT)');
      });

      db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS codiciDown (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeRaccolta TEXT, codice TEXT)');
      });
  
      db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS canticiRaccolta2 (id INTEGER PRIMARY KEY AUTOINCREMENT, idRaccolte INTEGER, name TEXT, num TEXT, keyTona TEXT, tipologia TEXT, testo TEXT, idVideoYt TEXT, idVideoYtIta TEXT)');
      });


  
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM canticiRaccolta2 WHERE idRaccolte = ? ORDER BY CAST(num AS INTEGER)',
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

      db.transaction(tx => {
        tx.executeSql('SELECT * FROM codiciDown ORDER BY id DESC LIMIT 20', null,
          (_, resultSet) => setCodiceDown(resultSet.rows._array),
          (_, error) => console.log(error)
        );
      });

  
    }, []);


//************************************************************************* */
    //Caricamento del database cantici
    useEffect(() => {

      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM canticiRaccolta2 WHERE idRaccolte = ? ORDER BY CAST(num AS INTEGER)',
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
  const addItemRaccolta = async () => {
    try {
      if (currentNomeRaccolta === "") {
        showMessage({
          message: 'Attenzione',
          description: 'Inserisci un nome alla raccolta',
          type: 'danger',
        });
        return false;
      }
  
      // Verifica se c'è ci sono dei duplicati, ed evita di creare il duplicato
      const isDuplicate = raccolte.some((nice) => nice.nomeRaccolta === currentNomeRaccolta);
      if (isDuplicate) {
        showMessage({
          message: 'Attenzione',
          description: 'Questa raccolta già esiste',
          type: 'danger',
        });
        return false;
      }
  
      // Inserimento della trupla nel database e aggiornamento dell'array
      await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            tx.executeSql(
              'INSERT INTO raccolte (nomeRaccolta) values (?)',
              [currentNomeRaccolta],
              (_, resultSet) => {
                idRaccFire = resultSet.insertId;
                setRaccolte([
                  ...raccolte,
                  { id: resultSet.insertId, nomeRaccolta: currentNomeRaccolta },
                ]);
                setCurrentNomeRaccolta('');
                setCodiceRaccolta("");
                resolve(true);
              },
              (_, error) => {
                console.error("Errore durante l'inserimento nel database:", error);
                resolve(false);
              }
            );
          },
          undefined,
          () => {}
        );
      });
  
      return true;
    } catch (error) {
      console.error("Errore durante l'esecuzione della funzione addItemRaccolta:", error);
      return false;
    }
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
    let tipol = "";
    let testo = "";
    let idYtit= "";
    let idYtOr= "";

    JSONDATA.map( (nice)=> {  //mi va a prendere la tonalità, e la tipologia dal file JSON
      if(nice.titolo === currentNomeCantico) {
        tona = nice.keyTona
        tipol = nice.tipologia
        testo = nice.testo
        idYtit = nice.idVideoYtIta
        idYtOr = nice.idVideoYt
      }
    })

  //inserimento della trupla nel database aggiorna l'array
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO canticiRaccolta2 (idRaccolte, name, num, keyTona, tipologia, testo, idVideoYt, idVideoYtIta) values (?, ?, ?, ?, ?, ?, ?, ?)',
        [currentIdRaccolta, currentNomeCantico, currentNumero, tona, tipol, testo, idYtOr, idYtit],
        (_, resultSet) => {
          setCurrentNomeCantico('');
          setCurrentNumero('');
        },
        (_, error) =>  console.error("Errore durante l'inserimento nel database:", error)
      );
    });

    db.transaction(tx => {  //va ad aggiornare l'array e va a fare anche l'ordinamento
      tx.executeSql(
        'SELECT * FROM canticiRaccolta2 WHERE idRaccolte = ? ORDER BY CAST(num AS INTEGER)',
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


//****************AGGIUNGI il codice della raccolta caricata su internet*************************************************** */
const addICodiceRaccolta = (nomeRacc, codi) => {

//inserimento della trupla nel database aggiorna l'array
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO codiciDown (nomeRaccolta, codice) values (?, ?)',
      [nomeRacc, codi],
      (_, resultSet) => {
      },
      (_, error) =>  console.error("Errore durante l'inserimento nel database:", error)
    );
  });

  db.transaction(tx => {   //aggiorna l'array
    tx.executeSql('SELECT * FROM codiciDown ORDER BY id DESC LIMIT 20', null,
      (_, resultSet) => setCodiceDown(resultSet.rows._array),
      (_, error) => console.log(error)
    );
  });

};

//Cancella il cantico  (compare prima un alert e poi esegue la funzione per la cancellazione)-----------------------------------------------
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
//Cancella la raccolta  (compare prima un alert e poi esegue la funzione per la cancellazione)-------------------------------------------------
const deleteRaccolta = (id, nomeRaccolta)=> {
  Alert.alert(
    'Attenzione',
    'Sei sicuro di voler cancellare questa Raccolta: <<' + nomeRaccolta + '>> perderai tutti i cantici presenti in questa raccolta',
    [
      {
        text: 'SI',
        onPress: () => deleteItemRaccolta(id, nomeRaccolta),
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
        'DELETE FROM canticiRaccolta2 WHERE id = ?',
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
    const deleteItemRaccolta = (id, nomeRaccolta) => {
      
      //vado prima a cancellare tutti  i cantici presenti in questa raccolta
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM canticiRaccolta2 WHERE idRaccolte = ?',
          [id],
          (_, resultSet) => {
            setCurrentNomeRaccoltaSele("");
            setCurrentIdRaccolta("");
            setCantici([])
          },
          (_, error) => console.log(error)
        );
      });
  
      //infine cancello la raccolta
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
const filterDataCantici = cantici.filter((item) => {
  // Aggiungi condizioni per ogni lettera nel filterCantico
  const filterByType = !(
    (filterCantico.A && !item.tipologia.includes('A')) ||
    (filterCantico.B && !item.tipologia.includes('B')) ||
    (filterCantico.T && !item.tipologia.includes('T')) ||
    (filterCantico.L && !item.tipologia.includes('L')) ||
    (filterCantico.P && !item.tipologia.includes('P'))
  );

  // Aggiungi condizioni per il numero e il nome
  const filterByNumAndName = [item.num.toLowerCase(), item.name.toLowerCase()].some(
    (field) => field.includes(filter.toLowerCase())
  );

  return filterByType && filterByNumAndName;
});

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
<LinearGradient style={globalStyles.containerHome} colors={[ back, primary ]} start={{x:0, y:0.1}} end={{x:0, y:0.6}}>
{/*******************   HEADER***************************************************** */}     
      <View style={ globalStyles.header}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1 }}>
        <Text style={globalStyles.titleHeader}> HyChords  </Text>
      </View>
      <View style={{ flex: 1 }}></View> 
     
      </View>

    <Animated.View style= {{flex: 1, transform: [{ translateY }] }}>
      <View style= {{ flex: 0.88, borderBottomLeftRadius:40, borderBottomRightRadius: 40, backgroundColor: "#EFEFEF" }}>  
                

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

      <TouchableOpacity onPress={() => { setModalVisibleRaccolta(true) }}>
        <View style= {styles.containerRaccolta}>
            {currentNomeRaccoltaSele == "" ? <Text>Seleziona la Raccolta</Text> :
            <Text> {currentNomeRaccoltaSele} </Text>
            }
          <Image style={{ width:24, height: 24, tintColor:"black" }}  source={require("../images/folder.png")}/>
        
        </View>
      </TouchableOpacity>
    </View>
   

    <View style= {{ flexDirection: "column" }}>
      <Text> </Text>
      <View style= {styles.containerRaccoltaAdd}>
      <TouchableOpacity onPress={() => { setModalVisibleDownRaccolta(true) }}>
      <FontAwesome5 name="cloud-download-alt" size={24} color="black" />
        </TouchableOpacity>
      <TouchableOpacity onPress={() => { setModalVisibleRaccoltaAdd(true) }}>
        <Image style={{ width:24, height: 24, tintColor:"black" }}  source={require("../images/folder-plus.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setModalVisibleCanticiAdd(true) }}>
          <AntDesign name="addfile" size={24} color="black" />
        </TouchableOpacity>
      </View>    

    </View>
</View>

<View style= {{ marginTop:20, marginLeft: 15, marginRight: 15, flexDirection: "row", justifyContent: "space-between", }}>
    <View style= {{ flexDirection: "row" }}>
    <View style= {{ flexDirection: "column" }}>
      <View style= {{ flexDirection: "row", justifyContent: "space-between" }}>  
      <Text style= {{ color: "white" }}> Filtri Cantici: </Text>
      <TouchableOpacity onPress={handleResetFlag}>
      <Text style= {{ color: "#0a0a0a", paddingRight: 2 }}> Anulla </Text>
      </TouchableOpacity>
      </View>

        <View style= {styles.containerRaccoltaFiltri}>
        <View style= {{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <Checkbox
        status={filterApertura ? 'checked' : 'unchecked'}
        onPress={handleToggleApertura}
        color={primary}
        />
            <Text> Apertura </Text>
          </View>
        
        <View style= {{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <Checkbox
        status={filterBrevi ? 'checked' : 'unchecked'}
        onPress={handleToggleBrevi}
        color={primary}
        />
            <Text> Brevi </Text>
        </View>
  
        <View style= {{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <Checkbox
        status={filterTestimonianze ? 'checked' : 'unchecked'}
        onPress={handleToggleTestimonianze}
        color={primary}
        />
            <Text> Testimonianze </Text>
        </View>

        <View style= {{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <Checkbox
        status={filterDiLode ? 'checked' : 'unchecked'}
        onPress={handleToggleDiLode}
        color={primary}
        />
            <Text> Di Lode </Text>
        </View>

        <View style= {{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <Checkbox
        status={filterAdorazione ? 'checked' : 'unchecked'}
        onPress={handleToggleAdorazione}
        color={primary}
        />
            <Text> Adorazione </Text>
        </View>
      
          </View>
    </View>

    <View style={{ flexDirection: "column", alignContent: "center", textAlign: "center", alignItems:"center", marginTop: 77, paddingLeft: 15 }}>
      <Text style={globalStyles.text}> Cantategli un cantico nuovo, </Text>
      <Text style={globalStyles.text}> suonate bene e con gioia </Text>
      <Text style={globalStyles.text}>Salmo 33:3</Text>
    </View>

    </View>
</View>


  </Animated.View>



{/***************************************************************************************************************** */}
{/*                MODAL                                                                                             */}
{/********************************************************************************************************************/}




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
          {!activeRaccPred ?  <Text style={styles.modalTitle}>Seleziona la Raccolta</Text>: <Text style={styles.modalTitle}>Seleziona la Raccolta Predefinita</Text>}
          <View style={{ marginTop: 10 }}></View>
    {/**********RICERCA************************* */}
      <View style={{ justifyContent: "center", flexDirection: "row", alignItems: "center" }}>
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
      {!activeRaccPred &&   <TouchableOpacity onPress={()=> {setActiveRaccPred(true)}} style={{ marginLeft: 15}}>
                              <AntDesign name="tag" size={30} color= {primary} />
                            </TouchableOpacity> }
      {activeRaccPred &&   <TouchableOpacity onPress={()=> {setActiveRaccPred(false)}} style={{ marginLeft: 15 }}>
                              <AntDesign name="close" size={30} color= {primary} />
                            </TouchableOpacity> }
      </View>
              <View style= {{ marginTop: 20 }}></View>

          {/********************ELENCO RACCOLTE***************************************************** */}
              <FlatList style={{ flex: 1,  width: "100%" }}
                keyboardShouldPersistTaps={'handled'}
                  data={filteredDataRaccolta}
                  renderItem={({item}) => (
                    <TouchableOpacity onPress= { ()=> {   
                     if(!activeRaccPred) {setCurrentIdRaccolta(item.id); setCurrentNomeRaccoltaSele(item.nomeRaccolta); setModalVisibleRaccolta(false); setFilterRaccolta(""); };
                     if(activeRaccPred) { setGlobalIdRaccolta(item.id)}; setActiveRaccPred(false) }}>
                                  <View style={globalStyles.containerElenco}>
                                    <View style={{ flex: 1, top:6, textAlign: "center", left: 20 }}>
                                      {currentIdRaccPred == item.id && <AntDesign name="tag" size={26} color= {primary} />}
                                    </View>
                                      <View style={{ flex: 3, textAlign: "flex-start", marginLeft: -10 }}>
                                          <Text style={globalStyles.titleElenco}> {item.nomeRaccolta} </Text>
                                      </View>
                                      <View style={globalStyles.rightColumnElenco}>
                                        <Entypo  name="chevron-right" size={24} color="#04457E" />
                                      </View>
                                  </View>
                    </TouchableOpacity>
                )}/> 

          </View>
      <View style={{ position: "absolute", bottom: 0 }}>
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
      />
    </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>



{/************MODAL Download Raccolta************************************************************* */}
<Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleDownRaccolta}
        onRequestClose={() => {
          setModalVisibleDownRaccolta(!modalVisibleDownRaccolta);
        }} 
       statusBarTranslucent= {true}>
      <TouchableWithoutFeedback onPress={() => {
              if (Keyboard && Keyboard.dismiss) {
                Keyboard.dismiss();
                handleInputBlur()
              } 
              if (isFocused == false && isFocused1 == false) {
                setModalVisibleDownRaccolta(false);
              }
  }}>
        <View style={styles.centeredView}>
        <FlashMessage position="top" />

          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Scarica la Raccolta Online</Text>
            <TextInput value={codiceRaccolta} 
                      placeholder='Inserisci il Codice'  placeholderTextColor="#7f8082" selectionColor= "#04457E"
                                    onFocus={handleInputFocus1}
                                    onBlur={handleInputBlur1}
                                     onChangeText={setCodiceRaccolta}  style={styles.input} />
            <TextInput value={currentNomeRaccolta} 
                      placeholder='Nome Raccolta Nuova'  placeholderTextColor="#7f8082" selectionColor= "#04457E"
                                    onFocus={handleInputFocus1}
                                    onBlur={handleInputBlur1}
                                     onChangeText={setCurrentNomeRaccolta}  style={styles.input} />
              
            <Button
              mode="contained" onPress={() => handleScaricaCantici()} loading={loading1} style={{ backgroundColor: primary, marginTop: 20}} labelStyle={{ color: 'white' }}>
              Scarica
            </Button>
          </View>


          <View style={styles.modalViewDown}>
            <Text style={styles.modalTitle}>Carica la Raccolta Online</Text>
              <Text style={styles.modalText}> {currentNomeRaccoltaSele} </Text>

          {rewu <3 ? 
          <>
          <Button
        labelStyle={{ color: 'white' }}
        mode="contained"
        onPress={() =>rewardedInterstitial.show()}
        loading={!rewardedInterstitialLoaded}
        style={{ backgroundColor: primary, marginTop: 20 }}
      >
        {!rewardedInterstitialLoaded ? 'Caricamento...' : 'Pubblicità mancanti ' + (-3 + rewu)}
      </Button>
          </> :
        <Button
        labelStyle={{ color: 'white' }}
          mode="contained"
          loading={loading}
          onPress={() => handleSubmit()}
          style={{ backgroundColor: primary, marginTop: 20 }}>
          Carica
      </Button>
          
            }



          </View>

{/****************Visualizza tutti i codici inseriti******************************************************** */}
<View style={styles.modalViewCodici}>
            <Text style={styles.modalTitle}> Codici Raccolte Caricate</Text>

  {/********************ELENCO Raccolte***************************************************** */}
              <FlatList style={{ flex: 1,  width: "100%" }}
                keyboardShouldPersistTaps={'handled'}
                  data={codiceDown}
                  renderItem={({item}) => (
                    <TouchableOpacity activeOpacity={1}>
                                  <View style={globalStyles.containerElenco}>
                                  <View style={globalStyles.leftColumnElenco}>
                                          <Text style={globalStyles.titleElenco}> {item.nomeRaccolta} </Text>
                                      </View>
                                      <View style={{ flex: 4, alignItems: "center", }}>
                                          <Text style={globalStyles.titleElenco}> {item.codice} </Text>
                                      </View>
                                    <TouchableOpacity onPress= {()=> {copyToClipboardCodicSQL(item.codice)}}>
                                      <View style={globalStyles.rightColumnElenco}>
                                      <MaterialIcons name="content-copy" size={24} color={primary} />
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                      </TouchableOpacity>
                )}/> 

</View>

    <View style={{ position: "absolute", bottom: 0 }}>
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
      />
    </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>


{/************MODAL Codice da condividere della raccolta una volta caricato************************************************************* */}
<Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleCodiceRaccolta}
        onRequestClose={() => {
          setModalVisibleCodiceRaccolta(!modalVisibleCodiceRaccolta);
        }} 
       statusBarTranslucent= {true}>
        <View style={styles.centeredView}>
        <FlashMessage position="top" />

          <View style={styles.modalViewCodice}>
            <Text style={styles.modalTitle}>Raccolta Caricata Correttamente</Text>
              <Text >Condividi questo codice, per condividere la racccolta</Text>
              <View style={{ marginBottom: 10 }}></View>
              <Text style={styles.modalText}> {uniqueId} </Text>
              
                <View style= {{ marginTop: 25 }}></View>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
              style={[styles.button, styles.buttonClose, { marginRight: 10 }]}
              onPress={() => shareUniqueId()}>
              <Text style={styles.textStyle}>Condividi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose, { marginRight: 10 }]}
              onPress={() => copyToClipboard()}>
              <Text style={styles.textStyle}>Copia</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisibleCodiceRaccolta(false)}>
              <Text style={styles.textStyle}>Chiudi</Text>
            </TouchableOpacity>
            </View>
          </View>
      <View style={{ position: "absolute", bottom: 0 }}>
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
      />
    </View>
        </View>

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
                      placeholder='Nome Raccolta Nuova'  placeholderTextColor="#7f8082" selectionColor= "#04457E"
                                    onFocus={handleInputFocus1}
                                    onBlur={handleInputBlur1}
                                     onChangeText={setCurrentNomeRaccolta}  style={styles.input} />
            <Button
              mode="contained" onPress={() => addItemRaccolta()} style={{ backgroundColor: primary, marginTop: 20}} labelStyle={{ color: 'white' }}>
              Aggiungi
            </Button>
          </View>

{/****************Secondo Modal Intero visualizza i canti di quella raccolta******************************************************** */}
<View style={styles.modalViewCantico}>
            <Text style={styles.modalTitle}> Raccolte </Text>

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
              <View style= {{ marginTop: 0 }}></View>

  {/********************ELENCO Raccolte***************************************************** */}
              <FlatList style={{ flex: 1,  width: "100%" }}
                keyboardShouldPersistTaps={'handled'}
                  data={filteredDataRaccolta}
                  renderItem={({item}) => (
                    <TouchableOpacity activeOpacity={1}>
                                  <View style={globalStyles.containerElenco}>
                                      <View style={globalStyles.centerColumnElenco}>
                                          <Text style={globalStyles.titleElenco}> {item.nomeRaccolta} </Text>
                                      </View>
                                    <TouchableOpacity onPress= {()=> {deleteRaccolta(item.id, item.nomeRaccolta)}}>
                                      <View style={globalStyles.rightColumnElenco}>
                                      <FontAwesome5 name="trash" size={24} color= {primary} />
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                      </TouchableOpacity>
                )}/> 

</View>
    <View style={{ position: "absolute", bottom: 0 }}>
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
      />
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
            <Button
              mode="contained" onPress={() => addItem()} loading={loading1} style={{ backgroundColor: primary, marginTop: 20}} labelStyle={{ color: 'white' }}>
              Aggiungi il Cantico
            </Button>
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
      <View style={{ position: "absolute", bottom: 0 }}>
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
      />
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

            <View style= {{ marginTop: 15 }}></View>

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
              <View style= {{ marginTop: 15 }}></View>

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



      </LinearGradient>
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
    width: 150,
    height: 40,
    justifyContent: "space-around",
    alignItems: "center" ,
  },
  containerRaccoltaFiltri: {
    flexDirection: "column" ,
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: "#EFEFEF",
    borderRadius:10,
    width: 170,
    justifyContent: "flex-start",
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
        marginTop: 70,
        width: "80%",
        backgroundColor: "#EFEFEF",
        borderRadius: 20,
        padding: 10,
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
      modalViewCodice: {
        margin: 0,
        marginTop: 250,
        width: "80%",
        backgroundColor: "#EFEFEF",
        borderRadius: 20,
        padding: 10,
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
      modalViewDown: {
        margin: 0,
        marginTop: 20,
        width: "80%",
        backgroundColor: "#EFEFEF",
        borderRadius: 20,
        padding: 10,
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
        marginTop: 70,
        width: "90%",
        height: "80%",
        backgroundColor: "#EFEFEF",
        borderRadius: 20,
        padding: 0,
        paddingTop: 10,
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
        height: "50%",
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
      modalViewCodici: {
        margin: 0,
        marginTop: 20,
        width: "90%",
        height: "38%",
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
      modalText: {
        fontSize: 18,
        color: "black",
        textAlign: 'center',
        fontFamily: "Newsreader_400Regular",
      },
      modalTitleRaccolta: {
        fontSize: 18,
        color: "black",
        marginBottom: 5,
        textAlign: 'center',
        fontFamily: "Newsreader_600SemiBold",
      },
  });