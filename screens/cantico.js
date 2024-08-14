import React, { useRef, useCallback } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Image, Linking, Button } from "react-native";
import { RewardedInterstitialAd, RewardedAdEventType, AdEventType, InterstitialAd, TestIds, } from 'react-native-google-mobile-ads';
import Animated  from "react-native-reanimated";
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import { FadeInLeft } from "react-native-reanimated";
import * as Animatable from 'react-native-animatable';
import { StatusBar } from "expo-status-bar";
import { Shadow } from "react-native-shadow-2";
import { FontAwesome } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { LinearGradient } from "expo-linear-gradient";
import YoutubePlayer from "react-native-youtube-iframe";
import { Audio } from 'expo-av';
import { shareAsync } from "expo-sharing";
import * as Print from 'expo-print';
import { captureRef } from "react-native-view-shot";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Usa il set di icone desiderato
import { FontAwesome5 } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import { globalStyles } from "../styles/global";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DropDownPicker from "react-native-dropdown-picker";
import CanticiAgg from "../components/canticiAgg";


const colorIconBottom = "#04457E"
const primary = "#04457E"

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-8550341729584646/3475759278';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'],
});

export default function Cantico(props) {

  const [interstitialLoaded, setInterstitialLoaded] = useState(false);

    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [flagSaveKey, setFlagSaveKey] = useState();
    const [currentValue, setCurrentValue] = useState(props.route.params.keyTona);
    const [title, setTitle] =useState(props.route.params.titolo);
    const [key, setKey] =useState(props.route.params.keyTona);
    const [idVideo, setIdVideo] =useState(props.route.params.idVideoYt);
    const [idVideoIta, setIdVideoIta] =useState(props.route.params.idVideoYtIta);
    const [accordiStru, setAccordiStru] = useState("Piano");

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
      setIsOpen(false);
      setIsDropdownOpenDown(false);
      setIsDropdownMenuSound(false)
    };

    const [isDropdownOpenDown, setIsDropdownOpenDown] = useState(false);
    const toggleDropdownDown = () => {
      setIsDropdownOpenDown(!isDropdownOpenDown);
      setIsOpen(false);
      setIsDropdownOpen(false);
      setIsDropdownMenuSound(false)
    };

    const [isDropdownMenuSound, setIsDropdownMenuSound] = useState(false);
    const toggleDropdownDownMenuSound = () => {
      setIsDropdownMenuSound(!isDropdownMenuSound);
      setIsOpen(false);
      setIsDropdownOpen(false);
      setIsDropdownOpenDown(false)
    };


//Pubblicità_________________________________________________________
const loadInterstitial = () => {
  const unsubscribeLoaded = interstitial.addAdEventListener(
    AdEventType.LOADED,
    () => {
      setInterstitialLoaded(true);
    }
  );

  const unsubscribeClosed = interstitial.addAdEventListener(
    AdEventType.CLOSED,
    () => {
      setInterstitialLoaded(false);
      interstitial.load();
    }
  );

  interstitial.load();

  return () => {
    unsubscribeClosed();
    unsubscribeLoaded();
  }
}

useEffect(() => {
  const unsubscribeInterstitialEvents = loadInterstitial();

  return () => {
    unsubscribeInterstitialEvents();
  };
}, [])

//Player Youtube___________________________________________________________________________
    const [playing, setPlaying] = useState(false);

      const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
          Alert.alert("video has finished playing!");
        }
      }, []);
    
      const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
      }, []);

//****************************************************************************** */
    const openDropdown = () => {
      setIsOpen(true);
      setIsDropdownOpen(false);
      setIsDropdownOpenDown(false);
    };

    const closeDropdown = (e) => {
        setIsOpen(false);
        setIsDropdownOpen(false);
        setIsDropdownOpenDown(false);
        setIsDropdownMenuSound(false);
      };

    const onFocus = () => {
        setIsFocused(true);
      };
    
      const onBlur = () => {
        setIsFocused(false);
      };

      const changeBasso = () => {
        setAccordiStru("Basso");
        setGlobalAccor("Basso");
        setIsDropdownOpen(false);
      };

      const changePiano = () => {
        setAccordiStru("Piano");
        setGlobalAccor("Piano");
        setIsDropdownOpen(false);
      };

      const changeChitarra = () => {
        setAccordiStru("Chitarra");
        setGlobalAccor("Chitarra");
        setIsDropdownOpen(false);
      };

      const changeElettrica = () => {
        setAccordiStru("Elettrica");
        setGlobalAccor("Elettrica");
        setIsDropdownOpen(false);
      };

      const changeBatteria = () => {
        setAccordiStru("Batteria");
        setGlobalAccor("Batteria");
        setIsDropdownOpen(false);
      };

      const changeTesto = () => {
        setAccordiStru("Testo");
        setGlobalAccor("Testo");
        setIsDropdownOpen(false);
      };

      const viewToSnapshotRef = useRef();

      //crea un immagine del cantico e lo condivide
        const snapshotShare = async () => {
          closeDropdown()
          const result = await captureRef(viewToSnapshotRef);
          await shareAsync(result);
        };
      
//******************CREATE PDF FILE PRINT******************************************** */
          const captureImage = async () => {
          const result = await captureRef(viewToSnapshotRef, { result: 'data-uri' });
          return result;
        };

        const createPrintDocument = async (imageUri) => {
          const nomeFile = "bho.pdf"
          const html = `
          <html>
            <body>
            <div style=" margin: 0 auto; padding: 5mm; background-color:#EFEFEF; ">
                <img src="${imageUri}" style="width: 155mm; height: auto; padding-top: 5mm;"/>
            </div>
            </body>
          </html>
        `;
          const { uri } = await Print.printToFileAsync({ html: html, base64: false, });
          return uri;
        };
      
        const printDocument = async (documentUri) => {
          const nomeFile = "bho.pdf"
          await Print.printAsync({ uri: documentUri});
        };
      
//********************************************************************************* */
        const openExternalURLPDF = () => {
          const url = 'https://drive.google.com/drive/folders/1wHM6-ii-VwpTEqKMiC-bKWUyrdSPdLLf?usp=sharing'; // Sostituisci con l'URL che vuoi aprire
          Linking.openURL(url).catch((err) => console.error('Errore nellapertura dell\'URL', err));
        };
      
      
//**************************************************************_________________________________________________________________________ */
    const [menoTre, setMenoTre] = useState("");
    const [menoDueMenz, setMenoDueMenz] = useState("");
    const [menoDue, setMenoDue] = useState("");
    const [menoUnoMenz, setMenoUnoMenz] = useState("");
    const [menoUno, setMenoUno] = useState("");
    const [menoZeroMenz, setMenoZeroMenz] = useState("");
    const [zero, setZero] = useState("");
    const [piuZeroMenz, setPiuZeroMenz] = useState("");
    const [piuUno, setPiuUno] = useState("");
    const [piuUnoMenz, setPiuUnoMenz] = useState("");
    const [piuDue, setpiuDue] = useState("");
    const [piuDueoMenz, setPiuDueMenz] = useState("");
    const [piuTre, setpiuTre] = useState("");

    const keyTona = [
        {label: menoTre, value: "-3"},
        {label: menoDueMenz, value: "-2.5"},
        {label: menoDue, value: "-2"},
        {label: menoUnoMenz, value: "-1.5"},
        {label: menoUno, value: "-1"},
        {label: menoZeroMenz, value: "-0.5"},
        {label: zero, value: "0"},
        {label: piuZeroMenz, value: "0.5"},
        {label: piuUno, value: "1"},
        {label: piuUnoMenz, value: "1.5"},
        {label: piuDue, value: "2"},
        {label: piuDueoMenz, value: "2.5"},
        {label: piuTre, value: "3"},     
    ]

    const [c, setC] = useState("DO");
    const [cDiesis, setCDiesis] = useState("DO#");
    const [dBemolle, setDBemolle] = useState("REb");
    const [d, setD] = useState("RE");
    const [dDiesis, setDDiesis] = useState("RE#");
    const [eBemolle, setEBemolle] = useState("MIb");
    const [e, setE] = useState("MI");
    const [f, setF] = useState("FA");
    const [fDiesis, setFDiesis] = useState("FA#");
    const [gBemolle, setGBemolle] = useState("SOLb");
    const [g, setG] = useState("SOL");
    const [gDiesis, setGDiesis] = useState("SOL#");
    const [aBemolle, setABemolle] = useState("LAb");
    const [a, setA] = useState("LA");
    const [aDiesis, setADiesis] = useState("LA#");
    const [bBemolle, setBBemolle] = useState("SIb");
    const [b, setB] = useState("SI");


    const cambiaTona = (ton) => {
        if(ton === "-0.5") {
          setC("SI");
          setCDiesis("DO");
          setDBemolle("DO");
          setD("DO#");
          setDDiesis("RE");
          setEBemolle("RE");
          setE("MIb");
          setF("MI");
          setFDiesis("FA");
          setGBemolle("FA")
          setG("FA#");
          setGDiesis("SOL")
          setABemolle("SOL");
          setA("LAb");
          setADiesis("LA")
          setBBemolle("LA");
          setB("SIb");
      }
          if(ton === "-1") {
              setC("SIb");
              setCDiesis("SI");
              setDBemolle("SI");
              setD("DO");
              setDDiesis("DO#");
              setEBemolle("REb");
              setE("RE");
              setF("MIb");
              setFDiesis("MI");
              setGBemolle("MI")
              setG("FA");
              setGDiesis("FA#")
              setABemolle("SOLb");
              setA("SOL");
              setADiesis("SOL#")
              setBBemolle("LAb");
              setB("LA");
          }
          if(ton === "-1.5") {
            setC("LA");
            setCDiesis("SIb");
            setDBemolle("SIb");
            setD("SI");
            setDDiesis("DO")
            setEBemolle("DO");
            setE("DO#");
            setF("RE");
            setFDiesis("RE#");
            setGBemolle("MIb")
            setG("MI");
            setGDiesis("FA")
            setABemolle("FA");
            setA("FA#");
            setADiesis("SOL")
            setBBemolle("SOL");
            setB("LAb");
        }
          if(ton === "-2") {
              setC("LAb");
              setCDiesis("LA");
              setDBemolle("LA");
              setD("SIb");
              setDDiesis("SI")
              setEBemolle("SI");
              setE("DO");
              setF("DO#");
              setFDiesis("RE");
              setGBemolle("RE")
              setG("MIb");
              setGDiesis("MI")
              setABemolle("MI");
              setA("FA");
              setADiesis("FA#")
              setBBemolle("SOLb");
              setB("SOL");
          }
          if(ton === "-2.5") {
            setC("SOL");
            setCDiesis("SOL#");
            setDBemolle("LAb");
            setD("LA");
            setDDiesis("LA#")
            setEBemolle("SIb");
            setE("SI");
            setF("DO");
            setFDiesis("DO#");
            setGBemolle("REb")
            setG("RE");
            setGDiesis("RE#")
            setABemolle("MIb");
            setA("MI");
            setADiesis("FA")
            setBBemolle("FA");
            setB("FA#");
        }
          if(ton === "-3") {
              setC("FA#");
              setCDiesis("SOL");
              setDBemolle("SOL");
              setD("LAb");
              setDDiesis("LA");
              setEBemolle("LA");
              setE("SIb");
              setF("SI");
              setFDiesis("DO");
              setGBemolle("DO")
              setG("DO#");
              setGDiesis("RE")
              setABemolle("RE");
              setA("MIb");
              setADiesis("MI")
              setBBemolle("MI");
              setB("FA");
          }
          if(ton === "0") {
              setC("DO");
              setCDiesis("DO#");
              setDBemolle("REb");
              setD("RE");
              setDDiesis("RE#")
              setEBemolle("MIb");
              setE("MI");
              setF("FA");
              setFDiesis("FA#");
              setGBemolle("SOLb")
              setG("SOL");
              setGDiesis("SOL#")
              setABemolle("LAb");
              setA("LA");
              setADiesis("LA#")
              setBBemolle("SIb");
              setB("SI");
          }
          if(ton === "0.5") {
            setC("DO#");
            setCDiesis("RE");
            setDBemolle("RE");
            setD("MIb");
            setDDiesis("MI")
            setEBemolle("MI");
            setE("FA");
            setF("FA#");
            setFDiesis("SOL");
            setGBemolle("SOL")
            setG("LAb");
            setGDiesis("LA")
            setABemolle("LA");
            setA("SIb");
            setADiesis("SI")
            setBBemolle("SI");
            setB("DO");
        }
          if(ton === "1") {
              setC("RE");
              setCDiesis("RE#");
              setDBemolle("MIb");
              setD("MI");
              setDDiesis("FA");
              setEBemolle("FA");
              setE("FA#");
              setF("SOL");
              setFDiesis("SOL#");
              setGBemolle("LAb")
              setG("LA");
              setGDiesis("LA#")
              setABemolle("SIb");
              setA("SI");
              setADiesis("DO")
              setBBemolle("DO");
              setB("DO#");
          }
          if(ton === "1.5") {
            setC("MIb");
            setCDiesis("MI");
            setDBemolle("MI");
            setD("FA");
            setDDiesis("FA#")
            setEBemolle("FA#");
            setE("SOL");
            setF("LAb");
            setFDiesis("LA");
            setGBemolle("LA")
            setG("SIb");
            setGDiesis("SI");
            setABemolle("SI");
            setA("DO");
            setADiesis("DO#")
            setBBemolle("MIb");
            setB("MI");
        }
          if(ton === "2") {
              setC("MI");
              setCDiesis("FA");
              setDBemolle("FA");
              setD("FA#");
              setDDiesis("SOL")
              setEBemolle("SOL");
              setE("LAb");
              setF("LA");
              setFDiesis("LA#");
              setGBemolle("SIb")
              setG("SI");
              setGDiesis("DO")
              setABemolle("DO");
              setA("DO#");
              setADiesis("RE")
              setBBemolle("RE");
              setB("MIb");
          }
          if(ton === "2.5") {
            setC("FA");
            setCDiesis("FA#");
            setDBemolle("SOLb");
            setD("SOL");
            setDDiesis("SOL#")
            setEBemolle("LAb");
            setE("LA");
            setF("SIb");
            setFDiesis("SI");
            setGBemolle("SI")
            setG("DO");
            setGDiesis("DO#")
            setABemolle("REb");
            setA("RE");
            setADiesis("RE#")
            setBBemolle("MIb");
            setB("MI");
        }
          if(ton == "3") {
            setC("FA#");
            setCDiesis("SOL");
            setDBemolle("SOL");
            setD("LAb");
            setDDiesis("LA")
            setEBemolle("LA");
            setE("SIb");
            setF("SI");
            setFDiesis("DO");
            setGBemolle("DO")
            setG("DO#");
            setGDiesis("RE")
            setABemolle("RE");
            setA("MIb");
            setADiesis("MI")
            setBBemolle("MI");
            setB("FA");
          }
      }

      //questa funzione mi serve per cambiare il nome al label, in base alla chiave attuale
      const cmbTn = (key) => {
        if(key == "REb") {
          setMenoTre("SOL");
          setMenoDueMenz("LAb");
          setMenoDue("LA");
          setMenoUnoMenz("SIb");
          setMenoUno("SI");
          setMenoZeroMenz("DO");
          setZero("REb");
          setPiuZeroMenz("RE");
          setPiuUno("MIb");
          setPiuUnoMenz("MI");
          setpiuDue("FA");
          setPiuDueMenz("SOLb");
          setpiuTre("SOL");
      }

        if(key == "RE") {
          setMenoTre("SOL#");
          setMenoDueMenz("LA");
          setMenoDue("LA#");
          setMenoUnoMenz("SI");
          setMenoUno("DO");
          setMenoZeroMenz("DO#");
          setZero("RE");
          setPiuZeroMenz("RE#");
          setPiuUno("MI");
          setPiuUnoMenz("FA");
          setpiuDue("FA#");
          setPiuDueMenz("SOL");
          setpiuTre("SOL#");
      }
      if(key == "RE#") {
        setMenoTre("LA");
        setMenoDueMenz("LA#");
        setMenoDue("SI");
        setMenoUnoMenz("DO");
        setMenoUno("DO#");
        setMenoZeroMenz("RE");
        setZero("RE#");
        setPiuZeroMenz("MI");
        setPiuUno("FA");
        setPiuUnoMenz("FA#");
        setpiuDue("SOL");
        setPiuDueMenz("SOL#");
        setpiuTre("LA");
    }
      if(key == "MIb") {
        setMenoTre("LA");
        setMenoDueMenz("LA#");
        setMenoDue("SI");
        setMenoUnoMenz("DO");
        setMenoUno("DO#");
        setMenoZeroMenz("RE");
        setZero("MIb");
        setPiuZeroMenz("MI");
        setPiuUno("FA");
        setPiuUnoMenz("FA#");
        setpiuDue("SOL");
        setPiuDueMenz("SOL#");
        setpiuTre("LA");
    }
      if(key == "MI") {
        setMenoTre("SIb");
        setMenoDueMenz("SI");
        setMenoDue("DO");
        setMenoUnoMenz("REb");
        setMenoUno("RE");
        setMenoZeroMenz("MIb");
        setZero("MI");
        setPiuZeroMenz("FA");
        setPiuUno("SOLb");
        setPiuUnoMenz("SOL");
        setpiuDue("LAb");
        setPiuDueMenz("LA");
        setpiuTre("SIb");
    }
      if(key == "FA") {
      setMenoTre("SI");
      setMenoDueMenz("DO");
      setMenoDue("DO#");
      setMenoUnoMenz("RE");
      setMenoUno("MIb");
      setMenoZeroMenz("MI");
      setZero("FA");
      setPiuZeroMenz("FA#");
      setPiuUno("SOL");
      setPiuUnoMenz("SOL#");
      setpiuDue("LA");
      setPiuDueMenz("LA#");
      setpiuTre("SI");
    }
    if(key == "FA#") {
      setMenoTre("DO");
      setMenoDueMenz("DO#");
      setMenoDue("RE");
      setMenoUnoMenz("MIb");
      setMenoUno("MI");
      setMenoZeroMenz("FA");
      setZero("FA#");
      setPiuZeroMenz("SOL");
      setPiuUno("LAb");
      setPiuUnoMenz("LA");
      setpiuDue("SIb");
      setPiuDueMenz("SI");
      setpiuTre("DO");
  }
  if(key == "SOLb") {
    setMenoTre("DO");
    setMenoDueMenz("REb");
    setMenoDue("RE");
    setMenoUnoMenz("MIb");
    setMenoUno("MI");
    setMenoZeroMenz("FA");
    setZero("SOLb");
    setPiuZeroMenz("SOL");
    setPiuUno("LAb");
    setPiuUnoMenz("LA");
    setpiuDue("SIb");
    setPiuDueMenz("SI");
    setpiuTre("DO");
}
    if(key == "SOL") {
      setMenoTre("DO#");
      setMenoDueMenz("RE");
      setMenoDue("MIb");
      setMenoUnoMenz("MI");
      setMenoUno("FA");
      setMenoZeroMenz("FA#");
      setZero("SOL");
      setPiuZeroMenz("LAb");
      setPiuUno("LA");
      setPiuUnoMenz("SIb");
      setpiuDue("SI");
      setPiuDueMenz("DO");
      setpiuTre("DO#");
  }  
  if(key == "SOL#") {
    setMenoTre("RE");
    setMenoDueMenz("RE#");
    setMenoDue("MI");
    setMenoUnoMenz("FA");
    setMenoUno("FA#");
    setMenoZeroMenz("SOL");
    setZero("SOL#");
    setPiuZeroMenz("LA");
    setPiuUno("LA#");
    setPiuUnoMenz("SI");
    setpiuDue("DO");
    setPiuDueMenz("DO#");
    setpiuTre("RE");
  }
  if(key == "LAb") {
    setMenoTre("RE");
    setMenoDueMenz("MIb");
    setMenoDue("MI");
    setMenoUnoMenz("FA");
    setMenoUno("FA#");
    setMenoZeroMenz("SOL");
    setZero("LAb");
    setPiuZeroMenz("LA");
    setPiuUno("SIb");
    setPiuUnoMenz("SI");
    setpiuDue("DO");
    setPiuDueMenz("DO#");
    setpiuTre("RE");
  }
  if(key == "LA") {
    setMenoTre("MIb");
    setMenoDueMenz("MI");
    setMenoDue("FA");
    setMenoUnoMenz("SOLb");
    setMenoUno("SOL");
    setMenoZeroMenz("LAb");
    setZero("LA");
    setPiuZeroMenz("SIb");
    setPiuUno("SI");
    setPiuUnoMenz("DO");
    setpiuDue("DO#");
    setPiuDueMenz("RE");
    setpiuTre("MIb");
  }
  if(key == "LA#") {
    setMenoTre("MI");
    setMenoDueMenz("FA");
    setMenoDue("FA#");
    setMenoUnoMenz("SOL");
    setMenoUno("SOL#");
    setMenoZeroMenz("LA");
    setZero("LA#");
    setPiuZeroMenz("SI");
    setPiuUno("DO");
    setPiuUnoMenz("DO#");
    setpiuDue("RE");
    setPiuDueMenz("RE#");
    setpiuTre("MI");
  }
  if(key == "SIb") {
    setMenoTre("MI");
    setMenoDueMenz("FA");
    setMenoDue("SOLb");
    setMenoUnoMenz("SOL");
    setMenoUno("LAb");
    setMenoZeroMenz("LA");
    setZero("SIb");
    setPiuZeroMenz("SI");
    setPiuUno("DO");
    setPiuUnoMenz("REb");
    setpiuDue("RE");
    setPiuDueMenz("MIb");
    setpiuTre("MI");
  }
  if(key == "SI") {
    setMenoTre("FA");
    setMenoDueMenz("FA#");
    setMenoDue("SOL");
    setMenoUnoMenz("LAb");
    setMenoUno("LA");
    setMenoZeroMenz("SIb");
    setZero("SI");
    setPiuZeroMenz("DO");
    setPiuUno("DO#");
    setPiuUnoMenz("RE");
    setpiuDue("MIb");
    setPiuDueMenz("MI");
    setpiuTre("FA");
  }
  if(key == "DO") {
    setMenoTre("FA#");
    setMenoDueMenz("SOL");
    setMenoDue("LAb");
    setMenoUnoMenz("LA");
    setMenoUno("SIb");
    setMenoZeroMenz("SI");
    setZero("DO");
    setPiuZeroMenz("DO#");
    setPiuUno("RE");
    setPiuUnoMenz("MIb");
    setpiuDue("MI");
    setPiuDueMenz("FA");
    setpiuTre("FA#");
  }
  if(key == "DO#") {
    setMenoTre("SOL");
    setMenoDueMenz("LAb");
    setMenoDue("LA");
    setMenoUnoMenz("SIb");
    setMenoUno("SI");
    setMenoZeroMenz("DO");
    setZero("DO#");
    setPiuZeroMenz("RE");
    setPiuUno("MIb");
    setPiuUnoMenz("MI");
    setpiuDue("FA");
    setPiuDueMenz("FA#");
    setpiuTre("SOL");
  }


  if(key == "REb-") {
    setMenoTre("SOL-");
    setMenoDueMenz("LAb-");
    setMenoDue("LA-");
    setMenoUnoMenz("SIb-");
    setMenoUno("SI-");
    setMenoZeroMenz("DO-");
    setZero("REb-");
    setPiuZeroMenz("RE-");
    setPiuUno("MIb-");
    setPiuUnoMenz("MI-");
    setpiuDue("FA-");
    setPiuDueMenz("SOLb-");
    setpiuTre("SOL-");
}
  if(key == "RE-") {
    setMenoTre("SOL#-");
    setMenoDueMenz("LA-");
    setMenoDue("LA#-");
    setMenoUnoMenz("SI-");
    setMenoUno("DO-");
    setMenoZeroMenz("DO#-");
    setZero("RE-");
    setPiuZeroMenz("RE#-");
    setPiuUno("MI-");
    setPiuUnoMenz("FA-");
    setpiuDue("FA#-");
    setPiuDueMenz("SOL-");
    setpiuTre("SOL#-");
}
if(key == "RE#-") {
  setMenoTre("LA");
  setMenoDueMenz("LA#-");
  setMenoDue("SI-");
  setMenoUnoMenz("DO-");
  setMenoUno("DO#-");
  setMenoZeroMenz("RE-");
  setZero("RE#-");
  setPiuZeroMenz("MI-");
  setPiuUno("FA-");
  setPiuUnoMenz("FA#-");
  setpiuDue("SOL-");
  setPiuDueMenz("SOL#-");
  setpiuTre("LA-");
}
if(key == "MIb-") {
  setMenoTre("LA-");
  setMenoDueMenz("LA#-");
  setMenoDue("SI-");
  setMenoUnoMenz("DO-");
  setMenoUno("DO#-");
  setMenoZeroMenz("RE-");
  setZero("MIb-");
  setPiuZeroMenz("MI-");
  setPiuUno("FA-");
  setPiuUnoMenz("FA#-");
  setpiuDue("SOL-");
  setPiuDueMenz("SOL#-");
  setpiuTre("LA-");
}
if(key == "MI-") {
  setMenoTre("SIb-");
  setMenoDueMenz("SI-");
  setMenoDue("DO-");
  setMenoUnoMenz("REb-");
  setMenoUno("RE-");
  setMenoZeroMenz("MIb-");
  setZero("MI-");
  setPiuZeroMenz("FA-");
  setPiuUno("SOLb-");
  setPiuUnoMenz("SOL-");
  setpiuDue("LAb-");
  setPiuDueMenz("LA-");
  setpiuTre("SIb-");
}
if(key == "FA-") {
setMenoTre("SI-");
setMenoDueMenz("DO-");
setMenoDue("DO#-");
setMenoUnoMenz("RE-");
setMenoUno("MIb-");
setMenoZeroMenz("MI-");
setZero("FA-");
setPiuZeroMenz("FA#-");
setPiuUno("SOL-");
setPiuUnoMenz("SOL#-");
setpiuDue("LA-");
setPiuDueMenz("LA#-");
setpiuTre("SI-");
}
if(key == "FA#-") {
setMenoTre("DO-");
setMenoDueMenz("DO#-");
setMenoDue("RE-");
setMenoUnoMenz("MIb-");
setMenoUno("MI-");
setMenoZeroMenz("FA-");
setZero("FA#-");
setPiuZeroMenz("SOL-");
setPiuUno("LAb-");
setPiuUnoMenz("LA-");
setpiuDue("SIb-");
setPiuDueMenz("SI-");
setpiuTre("DO-");
}
if(key == "SOLb-") {
setMenoTre("DO-");
setMenoDueMenz("REb-");
setMenoDue("RE-");
setMenoUnoMenz("MIb-");
setMenoUno("MI-");
setMenoZeroMenz("FA-");
setZero("SOLb-");
setPiuZeroMenz("SOL-");
setPiuUno("LAb-");
setPiuUnoMenz("LA-");
setpiuDue("SIb-");
setPiuDueMenz("SI-");
setpiuTre("DO-");
}
if(key == "SOL-") {
setMenoTre("DO#-");
setMenoDueMenz("RE-");
setMenoDue("MIb-");
setMenoUnoMenz("MI-");
setMenoUno("FA-");
setMenoZeroMenz("FA#-");
setZero("SOL-");
setPiuZeroMenz("LAb-");
setPiuUno("LA-");
setPiuUnoMenz("SIb-");
setpiuDue("SI-");
setPiuDueMenz("DO-");
setpiuTre("DO#-");
}  
if(key == "SOL#-") {
setMenoTre("RE-");
setMenoDueMenz("RE#-");
setMenoDue("MI-");
setMenoUnoMenz("FA-");
setMenoUno("FA#-");
setMenoZeroMenz("SOL-");
setZero("SOL#-");
setPiuZeroMenz("LA-");
setPiuUno("LA#-");
setPiuUnoMenz("SI-");
setpiuDue("DO-");
setPiuDueMenz("DO#-");
setpiuTre("RE-");
}
if(key == "LAb-") {
setMenoTre("RE-");
setMenoDueMenz("MIb-");
setMenoDue("MI-");
setMenoUnoMenz("FA-");
setMenoUno("FA#-");
setMenoZeroMenz("SOL-");
setZero("LAb-");
setPiuZeroMenz("LA-");
setPiuUno("SIb-");
setPiuUnoMenz("SI-");
setpiuDue("DO-");
setPiuDueMenz("DO#-");
setpiuTre("RE-");
}
if(key == "LA-") {
setMenoTre("MIb-");
setMenoDueMenz("MI-");
setMenoDue("FA-");
setMenoUnoMenz("SOLb-");
setMenoUno("SOL-");
setMenoZeroMenz("LAb-");
setZero("LA-");
setPiuZeroMenz("SIb-");
setPiuUno("SI-");
setPiuUnoMenz("DO-");
setpiuDue("DO#-");
setPiuDueMenz("RE-");
setpiuTre("MIb-");
}
if(key == "LA#-") {
setMenoTre("MI-");
setMenoDueMenz("FA-");
setMenoDue("FA#-");
setMenoUnoMenz("SOL-");
setMenoUno("SOL#-");
setMenoZeroMenz("LA-");
setZero("LA#-");
setPiuZeroMenz("SI-");
setPiuUno("DO-");
setPiuUnoMenz("DO#-");
setpiuDue("RE-");
setPiuDueMenz("RE#-");
setpiuTre("MI-");
}
if(key == "SIb-") {
setMenoTre("MI-");
setMenoDueMenz("FA-");
setMenoDue("SOLb-");
setMenoUnoMenz("SOL-");
setMenoUno("LAb-");
setMenoZeroMenz("LA-");
setZero("SIb-");
setPiuZeroMenz("SI-");
setPiuUno("DO-");
setPiuUnoMenz("REb-");
setpiuDue("RE-");
setPiuDueMenz("MIb-");
setpiuTre("M-I");
}
if(key == "SI-") {
setMenoTre("FA-");
setMenoDueMenz("FA#-");
setMenoDue("SOL-");
setMenoUnoMenz("LAb-");
setMenoUno("LA-");
setMenoZeroMenz("SIb-");
setZero("SI-");
setPiuZeroMenz("DO-");
setPiuUno("DO#-");
setPiuUnoMenz("RE-");
setpiuDue("MIb-");
setPiuDueMenz("MI-");
setpiuTre("FA-");
}
if(key == "DO-") {
setMenoTre("FA#-");
setMenoDueMenz("SOL-");
setMenoDue("LAb-");
setMenoUnoMenz("LA-");
setMenoUno("SIb-");
setMenoZeroMenz("SI-");
setZero("DO-");
setPiuZeroMenz("DO#-");
setPiuUno("RE-");
setPiuUnoMenz("MIb-");
setpiuDue("MI-");
setPiuDueMenz("FA-");
setpiuTre("FA#-");
}
if(key == "DO#-") {
setMenoTre("SOL-");
setMenoDueMenz("LAb-");
setMenoDue("LA-");
setMenoUnoMenz("SIb-");
setMenoUno("SI-");
setMenoZeroMenz("DO-");
setZero("DO#-");
setPiuZeroMenz("RE-");
setPiuUno("MIb-");
setPiuUnoMenz("MI-");
setpiuDue("FA-");
setPiuDueMenz("FA#-");
setpiuTre("SOL-");
}
      }


      
//***************************************************************************** */
//mi permette di salvare lo stato dello strumento selezionato, quando esco dalla pagina  (salvataggio in locale)
useEffect(() => {
  AsyncStorage.getItem('globalState').then((value) => {
    if (value) {
      setAccordiStru(value);
    }
  });
}, []);

//settaggio, si attiva quando cambio lo strumento
const setGlobalAccor = async (value) => {
  setAccordiStru(value)
  await AsyncStorage.setItem('globalState', value);
};

//***************************************************************************** */
//Funzioni che mi permettono di salvare la chiave di quel cantico
//prende lo stato della chiave precedentemente modificata e salvata. Si attiva solo la prima volta che viene cambiato cantico
useEffect(() => {
  AsyncStorage.getItem(title).then((value) => {
    if (value) {  //verifica se è vuoto
      setFlagSaveKey(value);
      setCurrentValue(value);
    } else{
      setFlagSaveKey("0");
      setCurrentValue("0");
    }
  });
}, []);

//settaggio, si attiva quando premo il pulsante salva. Salva il valore come chiave ha il titolo del cantico
const handleSaveStateKey = async (value) => {
  setFlagSaveKey(value);
  setCurrentValue(value)
  await AsyncStorage.setItem(title, value);
};
//***************************************************************************** */
      useEffect(() => {  //Si attiva ogni qual volta che cambia il currentValue, in questo modo cambia la tonalità a tutti gli accordi
        cambiaTona(currentValue);}, [currentValue])
    
      useEffect(() => {  //Si attiva solo la prima volta che passa a questa pagina. Serve per dare un nome ai numeri che stanno nel drop in base alla tonalità
        cmbTn(key);}, [key])


//Lettore Audio-----------------------------------------------------------------------------------------------------
const [sound, setSound] = useState();
const [playView, setPlayView] = useState(false);
const [playViewYT, setPlayViewYT] = useState(false);
const [playViewYTIta, setPlayViewYTIta] = useState(false);
const [isPlaying, setIsPlaying] = useState(false);
const [position, setPosition] = useState(0);
const [duration, setDuration] = useState(0);


const handlePlayPause = async () => {
  if (sound) {
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  }
};

const handleStop = async () => {
  if (sound) {
    await sound.stopAsync();
  }
};


const handleSliderChange = (value) => {
  if (sound) {
    sound.setPositionAsync(value);
  }
};

const formatTime = (milliseconds) => {
  const totalSeconds = milliseconds / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
//:::::::::::::::::::::::::::::::::::::
useEffect(() => {
  const loadSound = async (audioFile) => {
    const { sound } = await Audio.Sound.createAsync(
      audioFile
    );
    setSound(sound);

    sound.setOnPlaybackStatusUpdate((status) => {
      setIsPlaying(status.isPlaying);
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
    });
  };

  // Sostituisci 'tuoInput' con il parametro in input che determina quale file audio caricare
  const audioFile = determineAudioFile(props.route.params.titolo);

  loadSound(audioFile);

  return () => {
    if (sound) {
      sound.unloadAsync();
    }
  };
}, [props.route.params.titolo]);

// Funzione di esempio per determinare il file audio in base al parametro in input
const determineAudioFile = (parametroInput) => {
  // Logica per determinare quale file audio caricare in base al parametro in input
  if (parametroInput === 'Meraviglioso sei') {
    return require('../assets/Meraviglioso_sei.mp3');
  } else {
    // Se nessuna delle condizioni corrisponde, restituisci un valore di default o gestisci il caso secondo necessità
    return require('../assets/tuo_file.wav');
  }
};

const handlePlayViewYT = async () => {
  if(interstitialLoaded) {
    interstitial.show();
  }
  setPlayView(false)
  setPlayViewYTIta(false)
    setPlayViewYT(!playViewYT)
    setIsDropdownMenuSound(false)
};

const handlePlayViewYTIta = async () => {
  if(interstitialLoaded) {
    interstitial.show();
  }
    setPlayView(false)
    setPlayViewYT(false)
    setPlayViewYTIta(!playViewYTIta)
    setIsDropdownMenuSound(false)
};

const handleCloseYt = async () => {
    setPlayView(false)
    setPlayViewYT(false)
    setPlayViewYTIta(false)
    setPlayViewYT(false)
    setIsDropdownMenuSound(false)
};

const handlePlayView = async () => {
  setPlayViewYT(false)
  setPlayViewYTIta(false)
  setPlayView(!playView)
  setIsDropdownMenuSound(false)
};


    return (
        <>
      
            <View style={globalStyles.containerStackCantico}>

      
{/*********************HANDLER********************************************************* */}
            <View style={ globalStyles.headerCantico}>
                <View style={styles.leftColumn}>
                <TouchableOpacity onPress={() => {props.navigation.goBack(); }}>
                    <Ionicons style={{ marginLeft:0, marginTop:2 }} name="arrow-back" size={24} color= {colorIconBottom} />
                </TouchableOpacity>
                </View>

                <View style={styles.centerColumn}>

                </View>
                        
                <View style={styles.rightColumn}>
                </View>
            </View> 


            <View style={styles.rightView}>

{/*********************DROP MENU********************************************************* */}
            <DropDownPicker 
                    items={keyTona}
                    open={isOpen}
                    setOpen={openDropdown}
                    containerStyle={{ width: 93, alignItems:"flex-end", marginLeft: 5}}
                    style={{ backgroundColor: 'transparent',
                    borderColor:  colorIconBottom,// Cambia il colore del bordo
                        borderWidth: 2, // Cambia la larghezza del bordo
                        borderRadius: 10, // Cambia il raggio del bordo 
                        }} 
                    itemStyle={{
                    justifyContent: 'flex-start',
                    backgroundColor: '#1C1D1F', // Cambia il colore di sfondo del menu a discesa
                    }}
                    value={currentValue}
                    setValue={(val) => setCurrentValue(val)}
                    maxHeight={550}
                    placeholder= {key}
                    dropDownContainerStyle={{ 
                        elevation: 24,
                        backgroundColor: "#2F2F2F",
                        borderColor:  'black',// Cambia il colore del bordo
                        borderWidth: 1, // Cambia la larghezza del bordo
                        borderRadius: 10, // Cambia il raggio del bordo 
                        }}
                    placeholderStyle={{ color: colorIconBottom }}
                    labelStyle={{ color: colorIconBottom }}
                    textStyle= {{ color: "white" }}
                    arrowIconStyle= {{ tintColor: colorIconBottom }}
                    onOpen={onFocus} // Chiamato quando il componente è aperto
                    onClose={onBlur} // Chiamato quando il componente è chiuso
                    />
            
{/*********************MENU  STRUMENTI********************************************************* */}
            <View>
              <View style={{ width: 45 }}>
              <TouchableOpacity style={globalStyles.dropdownHeader} onPress={toggleDropdown}>
              {accordiStru === "Piano" &&             
               <MaterialCommunityIcons name="piano" size={24} color={colorIconBottom} />
              }
              {accordiStru === "Chitarra" &&
              <FontAwesome5 name="guitar" size={25} color={colorIconBottom} />
              } 
              {accordiStru === "Elettrica" &&
              <Image style={styles.imageBassMenu}  source={require("../images/eletric.png")}/>
              } 
              {accordiStru === "Basso" &&
              <Image style={styles.imageBassMenu}  source={require("../images/bass-guitar.png")}/>
              } 
              {accordiStru === "Batteria" &&
              <FontAwesome5 name="drum" size={25} color={colorIconBottom} />
              } 
              {accordiStru === "Testo" &&
              <AntDesign name="filetext1" size={23} color={colorIconBottom} />
              } 
              </TouchableOpacity>
              </View>

              {isDropdownOpen && (
                <View style={globalStyles.dropdownMenu}>
                  {/* Contenuto del menu a discesa */}
                  <TouchableOpacity onPress={changePiano}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                      <MaterialCommunityIcons name="piano" size={20} color= "white" />
                      <Text style={globalStyles.textMenu}> Piano</Text>
                    </View>
                  </TouchableOpacity>

                    <View style={{ marginTop: 20 }}></View>

                  <TouchableOpacity onPress={changeChitarra}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                    <FontAwesome5 name="guitar" size={20} color= "white" />
                      <Text style={globalStyles.textMenu}>Chitarra</Text>
                    </View>
                  </TouchableOpacity>

                   <View style={{ marginTop: 20 }}></View>

                  <TouchableOpacity onPress={changeElettrica}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                    <Image style={globalStyles.imageBass}  source={require("../images/eletric.png")}/>
                      <Text style={globalStyles.textMenu}>Elettrica</Text>
                    </View>
                  </TouchableOpacity>

                  <View style={{ marginTop: 20 }}></View>

                  <TouchableOpacity onPress={changeBasso}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                      <Image style={globalStyles.imageBass}  source={require("../images/bass-guitar.png")}/>
                      <Text style={globalStyles.textMenu}>Basso</Text>
                    </View>
                  </TouchableOpacity>

                  <View style={{ marginTop: 20 }}></View>

                  <TouchableOpacity onPress={changeBatteria}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                    <FontAwesome5 name="drum" size={20} color= "white" />
                      <Text style={globalStyles.textMenu}> Batteria</Text>
                    </View>
                  </TouchableOpacity>
                  
                  <View style={{ marginTop: 20 }}></View>

                <TouchableOpacity onPress={changeTesto}>
                  <View style={{ flexDirection: "row", height: 30 }}>
                  <AntDesign name="filetext1" size={20} color= "white" />
                    <Text style={globalStyles.textMenu}> Testo</Text>
                  </View>
                </TouchableOpacity>

                </View>
              )}
            </View>

{/*********************MENU  DOWNLOAD********************************************************* */}
            <View>
              <TouchableOpacity style={globalStyles.dropdownHeader} onPress={toggleDropdownDown}>
              <Feather name="download" size={24} color={colorIconBottom} />
              </TouchableOpacity>

              {isDropdownOpenDown && (
                <View style={globalStyles.dropdownMenu}>
                  {/* Contenuto del menu a discesa */}
                  <TouchableOpacity  onPress={async () => {
                      const imageUri = await captureImage();
                      const documentUri = await createPrintDocument(imageUri);
                      await printDocument(documentUri);
                    }}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                    <AntDesign name="pdffile1" size={20} color= "white" />
                      <Text style={globalStyles.textMenu}> PDF</Text>
                    </View>
                  </TouchableOpacity>

                    <View style={{ marginTop: 20 }}></View>

                  <TouchableOpacity onPress={""}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                    <Icon name="presentation" size={20} color= "white" />
                      <Text style={globalStyles.textMenu}> PPT</Text>
                    </View>
                  </TouchableOpacity>

                </View>
              )}
            </View>
{/*********************SHARE********************************************************* */}
            <View>
              <TouchableOpacity style={globalStyles.dropdownHeader} onPress={snapshotShare}>
              <Entypo name="share" size={24} color={colorIconBottom} />
              </TouchableOpacity>
            </View>

{/*********************MENU  SUONI********************************************************* */}
<View>
              <TouchableOpacity style={globalStyles.dropdownHeader} onPress={toggleDropdownDownMenuSound}>
              <AntDesign name="sound" size={25} color={colorIconBottom} />
              </TouchableOpacity>

              {isDropdownMenuSound && (
                <View style={globalStyles.dropdownMenu}>
                  {/* Contenuto del menu a discesa */}
                  <TouchableOpacity  onPress={async () => {
                      handlePlayView()
                    }}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                      <Text style={globalStyles.textMenu}> Base </Text>
                    </View>
                  </TouchableOpacity>

                    <View style={{ marginTop: 20 }}></View>

                  <TouchableOpacity onPress={handlePlayViewYT}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                      <Text style={globalStyles.textMenu}> Originale </Text>
                    </View>
                  </TouchableOpacity>

                  <View style={{ marginTop: 20 }}></View>

                  <TouchableOpacity onPress={handlePlayViewYTIta}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                      <Text style={globalStyles.textMenu}> Vers. Ita. </Text>
                    </View>
                  </TouchableOpacity>

                </View>
              )}
            </View>

            </View>
            
 {/*********************CANTICI********************************************************* */}       
    <View style={{flex:1, marginTop: 0, }}>
        <ScrollView  style={{ height: "100%", marginTop : 5}}>
        <View style={{ minHeight: '100%', paddingBottom: 10, }}>
        <TouchableWithoutFeedback onPress={() => {closeDropdown()}} >

        <Animated.View  
        //entering={FadeInLeft.duration(500).delay(100)}
         ref={viewToSnapshotRef} style={globalStyles.contCanticoScroll}> 

        <Text   style={globalStyles.titleCantico}> {props.route.params.num}. {props.route.params.titolo} </Text>

          <CanticiAgg
          titolo={props.route.params.titolo} 
          accordiStru={accordiStru}
          c={c}
          cDiesis={cDiesis}
          dBemolle={dBemolle}
          d={d}
          dDiesis={dDiesis}
          eBemolle={eBemolle}
          e={e}
          f={f}
          fDiesis={fDiesis}
          gBemolle={gBemolle}
          g={g}
          gDiesis={gDiesis}
          aBemolle={aBemolle}
          a={a}
          aDiesis={aDiesis}
          bBemolle={bBemolle}
          b={b}
        />
            
            </Animated.View>
        </TouchableWithoutFeedback>
        </View>
        {playView && <View style={{ marginTop: 70 }}></View>}
        {playViewYT && <View style={{ marginTop: 170 }}></View>}
        {playViewYTIta && <View style={{ marginTop: 170 }}></View>}
        </ScrollView>
    </View>

{/*************************LETTORE YOUTUBE Original************************************************************* */}
<Animatable.View
  animation={playViewYT ? 'slideInUp' : 'slideOutDown'}
  duration={500}
  style={{
    position: 'absolute',
    bottom: playViewYT ? 1 : -80,
    paddingRight: 2,
    elevation:  5,
    width: '100%',
    justifyContent: "center",
    alignItems: "flex-end",
  }}
>
<View style={{ paddingRight: 10 }}>
{playViewYT &&
<TouchableOpacity style={{ right: 5 }} onPress={handleCloseYt} >
<AntDesign name="down" size={24} color={primary} />
</TouchableOpacity>
}
</View>

<View style= {{ width: 300, height: 169,   overflow: "hidden", borderRadius: 12,  }}>
      <YoutubePlayer
        height={250}
        play={playing}
        style={{ borderRadius: 12 }}
        videoId={idVideo}
        onChangeState={onStateChange}
      />
</View>

</Animatable.View>

{/*************************LETTORE YOUTUBE Ita************************************************************* */}
<Animatable.View
  animation={playViewYTIta ? 'slideInUp' : 'slideOutDown'}
  duration={500}
  style={{
    position: 'absolute',
    bottom: playViewYTIta ? 1 : -85,
    paddingRight: 2,
    elevation:  5,
    width: '100%',
    justifyContent: "center",
    alignItems: "flex-end",
  }}
>
<View style={{ paddingRight: 10 }}>
{playViewYTIta &&
<TouchableOpacity style={{ right: 5 }} onPress={handleCloseYt} >
<AntDesign name="down" size={24} color={primary} />
</TouchableOpacity>
}
</View>

<View style= {{ width: 300, height: 169,   overflow: "hidden", borderRadius: 12,  }}>
      <YoutubePlayer
        height={250}
        play={playing}
        style={{ borderRadius: 12 }}
        videoId={idVideoIta}
        onChangeState={onStateChange}
      />
</View>

</Animatable.View>


{/******************LETTORE AUDIO**************************** */}
<Animatable.View
  animation={playView ? 'slideInUp' : 'slideOutDown'}
  duration={300}
  style={{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
  }}
>

<View style={{ backgroundColor: "#282C34", flexDirection: "column", width: "98%", height: 70, borderRadius: 10 }}>

<Text style= {{ textAlign: "center", top: 2, color: "white" }}> Key: {key} </Text>

<View style= {{ flexDirection: "row", justifyContent: "center", alignItems: 'center', top:2}}>
  <TouchableOpacity style={{ right: 15 }} onPress={handlePlayPause} disabled={!sound}>
    {!isPlaying ? <Entypo name="controller-play" size={40} color="white" /> :
      <AntDesign name="pause" size={40} color="white" />
    }
  </TouchableOpacity>
  <Text style={{ color: "white" }}>{`${formatTime(position)}`}</Text>
  <Slider
    style={{ width: 200, height: 40 }}
    minimumValue={0}
    maximumValue={duration}
    value={position}
    onSlidingComplete={(value) => handleSliderChange(value)}
    disabled={!sound}
    minimumTrackTintColor="white"
    maximumTrackTintColor="white"
    thumbTintColor="white"
  />
  <Text style={{ color: "white" }}>{`${formatTime(duration)}`}</Text>
  <TouchableOpacity onPress={handleStop} disabled={!sound}>
  </TouchableOpacity>
  </View>
</View>
</Animatable.View>



{/**************************BUTTON SAVE********************************************************************** */}
        {(isOpen === true && flagSaveKey != currentValue) &&
        <View style={{ flexDirection: "row-reverse", position: "absolute", bottom: 70, right: 15,}}>
        <View style={{ position:"absolute", flexDirection: "row", alignItems: "flex-end", justifyContent: 'flex-end', paddingRight: 0,}}>
          <TouchableOpacity onPress={ () => {handleSaveStateKey(currentValue)}}>
            <View style={{flexDirection:"row", backgroundColor: '#04457E', paddingTop: 13, paddingBottom: 10, paddingLeft: 6, paddingRight: 5, borderRadius: 10, width: 84, height: 50,}}>
            <Entypo name="save" size={24} color="white"/>
            <Text style={{ color: "white" }}> Salva</Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>
        }

{/*********************FINISH********************************************************* */}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    leftColumn: {
      flex: 1, 
      alignItems: 'flex-start', // Allineamento orizzontale a sinistra
    },
    centerColumn: {
      flex: 5, 
      alignItems: 'flex-start', // Allineamento orizzontale al centro
    },
    rightColumn: {
      flex: 3, 
      alignItems: 'flex-end', // Allineamento orizzontale a destra
    },
    rightView: { 
      zIndex:2,
      flexDirection: "row-reverse",
      position: "absolute",
        top: 38,
        right: 15,
        paddingRight: 10,
      },
      imageBassMenu: {
        bottom: 4,
        left: 4,
        width: 30, // Larghezza dell'immagine PNG
        height: 30, // Altezza dell'immagine PNG
        tintColor: colorIconBottom
      },
      imageEletricMenu: {
        bottom: 4,
        left: 4,
        width: 30, // Larghezza dell'immagine PNG
        height: 30, // Altezza dell'immagine PNG
        tintColor: colorIconBottom
      },
  });