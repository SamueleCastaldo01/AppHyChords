import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import YoutubePlayer, {YoutubeIframeRef} from "react-native-youtube-iframe";
import { InterstitialAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { StyleSheet, View, Text, Button, TouchableOpacity, ScrollView, Image, Animated, Dimensions, ActivityIndicator, FlatList, ImageBackground  } from "react-native";
import { globalStyles } from "../styles/global";
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import POPOLARI from '../canticiAsco/popolari.json'
import ADORAZIONE1 from '../canticiAsco/adorazione1.json'
import ADORAZIONE2 from '../canticiAsco/adorazione2.json'
import ADORAZIONE3 from '../canticiAsco/adorazione3.json'
import ADORAZIONE4 from '../canticiAsco/adorazione4.json'
import ADORAZIONE5 from '../canticiAsco/adorazione5.json'
import ADORAZIONE6 from '../canticiAsco/adorazione6.json'
import ADORAZIONE7 from '../canticiAsco/adorazione7.json'
import ADORAZIONE8 from '../canticiAsco/adorazione8.json'
import facciaAFaccia from '../canticiAsco/facciaAFaccia.json'
import ilLuogoSegreto from '../canticiAsco/ilLuogoSegreto.json'
import ilSuonoDellaLode from '../canticiAsco/ilSuonoDellaLode.json'
import cuorePuro from '../canticiAsco/cuorePuro.json'
import apriICieli from '../canticiAsco/apriICieli.json'
import seIlCieloSiCopre from '../canticiAsco/seIlCieloSiCopre.json'
import voglioEssereVero from '../canticiAsco/voglioEssereVero.json'
import ioCantoAncora from '../canticiAsco/ioCantoAncora.json'
import aCasa from '../canticiAsco/aCasa.json'
import cieloDentroMe from '../canticiAsco/cieloDentroMe.json'
import piuVicino from '../canticiAsco/piuVicino.json'
import unMondoDiMondi from '../canticiAsco/unMondoDiMondi.json'
import isolaDiGrazia from '../canticiAsco/isolaDiGrazia.json'
import pietraAngolare from '../canticiAsco/pietraAngolare.json'
import gesuVive from '../canticiAsco/gesuVive.json'
import yerushalayim from '../canticiAsco/yerushalayim.json'
import leoneDellaTribuDiGiuda from '../canticiAsco/leoneDellaTribuDiGiuda.json'
import spandiIlTuoSpirito from '../canticiAsco/spandiIlTuoSpirito.json'
import comeUnaRosa from '../canticiAsco/comeUnaRosa.json'
import piuDiTe from '../canticiAsco/piuDiTe.json'
import tuSeiConMe from '../canticiAsco/tuSeiConMe.json'

const primary = "#013241"
const back = "#EFEFEF"
const colorText = "white"
const gray = "#939292"

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-8550341729584646/3475759278';
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'],
});

export default function Ascolta(props) {

//data flatList______________________________________________________
useEffect(() => {
  if(title == "Adorazione 1") {
    setCurrentData(ADORAZIONE1)
  }
  if(title == "Adorazione 2") {
    setCurrentData(ADORAZIONE2)
  }
  if(title == "Adorazione 3") {
    setCurrentData(ADORAZIONE3)
  }
  if(title == "Adorazione 4") {
    setCurrentData(ADORAZIONE4)
  }
  if(title == "Adorazione 5") {
    setCurrentData(ADORAZIONE5)
  }
  if(title == "Adorazione 6") {
    setCurrentData(ADORAZIONE6)
  }
  if(title == "Adorazione 7") {
    setCurrentData(ADORAZIONE7)
  }
  if(title == "Adorazione 8") {
    setCurrentData(ADORAZIONE8)
  }
  if(title == "Faccia a Faccia") {
    setCurrentData(facciaAFaccia)
  }
  if(title == "Il luogo segreto") {
    setCurrentData(ilLuogoSegreto)
  }
  if(title == "Il suono della lode") {
    setCurrentData(ilSuonoDellaLode)
  }
  if(title == "Cuore Puro") {
    setCurrentData(cuorePuro)
  }
  if(title == "Apri i cieli") {
    setCurrentData(apriICieli)
  }
  if(title == "Se il cielo si copre") {
    setCurrentData(seIlCieloSiCopre)
  }
  if(title == "Voglio essere vero") {
    setCurrentData(voglioEssereVero)
  }
  if(title == "Io canto ancora") {
    setCurrentData(ioCantoAncora)
  }
  if(title == "A casa") {
    setCurrentData(aCasa)
  }
  if(title == "Cielo dentro me") {
    setCurrentData(cieloDentroMe)
  }
  if(title == "Più vicino") {
    setCurrentData(piuVicino)
  }
  if(title == "Un mondo di mondi") {
    setCurrentData(unMondoDiMondi)
  }
  if(title == "Isola di grazia") {
    setCurrentData(isolaDiGrazia)
  }
  if(title == "Pietra angolare") {
    setCurrentData(pietraAngolare)
  }
  if(title == "Gesù vive") {
    setCurrentData(gesuVive)
  }
  if(title == "Yerushalayim") {
    setCurrentData(yerushalayim)
  }
  if(title == "Leone della tribù di giuda") {
    setCurrentData(leoneDellaTribuDiGiuda)
  }
  if(title == "Spandi il Tuo Spirito") {
    setCurrentData(spandiIlTuoSpirito)
  }
  if(title == "Come una rosa") {
    setCurrentData(comeUnaRosa)
  }
  if(title == "Più di Te") {
    setCurrentData(piuDiTe)
  }
  if(title == "Tu sei con me") {
    setCurrentData(tuSeiConMe)
  }
}, [title]); // Re-run useEffect when totalDuration changes


  const [interstitialLoaded, setInterstitialLoaded] = useState(false);
  const [flagPubbli, setFlagPubbli] = useState(0);


//Player Youtube___________________________________________________________________________
const [playing, setPlaying] = useState(false);
const [flagRandom, setFlagRandom] = useState(false);
const [playedItems, setPlayedItems] = useState([]);
const [currentData, setCurrentData] = useState(null);
const [playListId, setPlayListId] = useState(props.route.params.id);
const [title, setTitle] = useState(props.route.params.title);
const [album, setAlbum] = useState(props.route.params.album);
const [videoId, setVideoId] = useState("");
const [totDur, setTotDur] = useState(0);
const [selectedItem, setSelectedItem] = useState(null);


//gestione lettore youtube------------------------------------------------------------------------
const onStateChange = (event) => {
  if (event === 'ended') {
    if (flagRandom) {
      // Se la riproduzione casuale è attiva, cerca un nuovo elemento casuale
  const remainingItems = currentData.filter((item) => !playedItems.includes(item));
  
  if (remainingItems.length > 0) {
    const randomIndex = Math.floor(Math.random() * remainingItems.length);
    const randomItem = remainingItems[randomIndex];

    // Imposta il nuovo elemento casuale
    setVideoId(randomItem.linkYt);
    setTotDur(timeStringToSeconds(randomItem.durata));
    setSelectedItem(randomItem);

    // Aggiorna l'elenco degli elementi riprodotti
    setPlayedItems((prevPlayedItems) => [...prevPlayedItems, randomItem]);
    handleSwitchVideo(randomItem.linkYt, randomItem.durata, randomItem);
  }  else {
        // Tutti gli elementi sono stati riprodotti, reimposta l'elenco degli elementi riprodotti
        setPlayedItems([]);
      }
    } else {   //se sta disattivato flagRandom
        // Il video è terminato, passa all'elemento successivo nella FlatList
        if (selectedItem) {
          const currentIndex = currentData.findIndex((item) => item === selectedItem);
          if (currentIndex < currentData.length - 1) {
            const nextItem = currentData[currentIndex + 1];
            handleSwitchVideo(nextItem.linkYt, nextItem.durata, nextItem);
          }
        }
      
    }
  }

  // Controlla lo stato del lettore YouTube e aggiorna lo stato di riproduzione locale
  if (event === 'playing') {
    setPlaying(true);
  } else if (event === 'paused' || event === 'ended') {
    setPlaying(false);
  }
};

const togglePlaying = useCallback(() => {
  setPlaying((prev) => !prev);
}, []);


const handleSwitchVideo = async (link, dur, item) => {
  if(interstitialLoaded == true && flagPubbli >= 2) {
    interstitial.show();
  }

  setSelectedItem(item);
  setVideoId(link)
  setTotDur(timeStringToSeconds(dur))
  setTimeout(async () => {
    setPlaying(true)
  }, 1000); // 1000 millisecondi = 1 secondo

if(flagPubbli >= 2) {
  setFlagPubbli(0)
} else {
  setFlagPubbli(flagPubbli+1)
}
  
  console.log(flagPubbli)
}


const playerRef = useRef();
const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);
const [elapsed, setElapsed] = useState(0);
const [totalDuration, setTotalDuration] = useState(0);



useEffect(() => {
  const interval = setInterval(async () => {
    const elapsed_sec = await playerRef.current.getCurrentTime();

    // Set elapsed time
    setElapsed(elapsed_sec);
  }, 100);

  return () => {
    clearInterval(interval);
  };
}, [totalDuration]); // Re-run useEffect when totalDuration changes


const handleSeek = (value) => {
  if (playerRef.current) {
    playerRef.current.seekTo(value, true);
  }

  setTimeout(() => {
    setElapsed(value);
  }, 100);
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

//Conversione secondi in minuti_____________________________________________
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
};

const timeStringToSeconds = (timeString) => {
  const [minutes, seconds] = timeString.split(':').map(Number);
  return minutes * 60 + seconds;
};

    return (
<>
    <LinearGradient 
    style={globalStyles.containerHome}
    colors={[back, primary]}
    start={{x:0, y:0}} end={{x:0, y:0.5}}>
        

    {/*******************   HEADER***************************************************** */}     
    <View style={{flexDirection: "row", marginTop: 45, alignContent: "center", justifyContent: "space-between"}}>
            <View >
                <TouchableOpacity onPress={() => {props.navigation.goBack(); }}>
                    <Ionicons style={{ marginLeft:18}} name="arrow-back" size={33} color= {primary} />
                </TouchableOpacity>
            </View>
          <View style={{ justifyContent: "center", alignContent: "center" }}>
          {title == "Adorazione 1" &&
            <Image source={require('../assets/imageAlbum/adorazione1.png')} style={styles.image} />
          }
          {title == "Adorazione 2" &&
            <Image source={require('../assets/imageAlbum/adorazione2.png')} style={styles.image} />
          }
          {title == "Adorazione 3" &&
            <Image source={require('../assets/imageAlbum/adorazione3.png')} style={styles.image} />
          }
          {title == "Adorazione 4" &&
            <Image source={require('../assets/imageAlbum/adorazione4.png')} style={styles.image} />
          }
          {title == "Adorazione 5" &&
            <Image source={require('../assets/imageAlbum/adorazione5.png')} style={styles.image} />
          }
          {title == "Adorazione 6" &&
            <Image source={require('../assets/imageAlbum/adorazione6.png')} style={styles.image} />
          }
          {title == "Adorazione 7" &&
            <Image source={require('../assets/imageAlbum/adorazione7.png')} style={styles.image} />
          }
          {title == "Adorazione 8" &&
            <Image source={require('../assets/imageAlbum/adorazione8.png')} style={styles.image} />
          }
          {title == "Faccia a Faccia" &&
            <Image source={require('../assets/imageAlbum/facciaAFaccia.png')} style={styles.image} />
          }
          {title == "Il luogo segreto" &&
            <Image source={require('../assets/imageAlbum/ilLuogoSegreto.png')} style={styles.image} />
          }
          {title == "Il suono della lode" &&
            <Image source={require('../assets/imageAlbum/ilSunoDellaLode.png')} style={styles.image} />
          }
          {title == "Cuore Puro" &&
            <Image source={require('../assets/imageAlbum/cuorePuro.png')} style={styles.image} />
          }
          {title == "Apri i cieli" &&
            <Image source={require('../assets/imageAlbum/apriICieli.png')} style={styles.image} />
          }
          {title == "Se il cielo si copre" &&
            <Image source={require('../assets/imageAlbum/seIlCieloSiCopre.png')} style={styles.image} />
          }
          {title == "Voglio essere vero" &&
            <Image source={require('../assets/imageAlbum/voglioEssereVero.png')} style={styles.image} />
          }
          {title == "Io canto ancora" &&
            <Image source={require('../assets/imageAlbum/ioCantoAncora.png')} style={styles.image} />
          }
          {title == "A casa" &&
            <Image source={require('../assets/imageAlbum/aCasa.png')} style={styles.image} />
          }
          {title == "Cielo dentro me" &&
            <Image source={require('../assets/imageAlbum/cieloDentroMe.png')} style={styles.image} />
          }
          {title == "Più vicino" &&
            <Image source={require('../assets/imageAlbum/piuVicino.png')} style={styles.image} />
          }
          {title == "Un mondo di mondi" &&
            <Image source={require('../assets/imageAlbum/unMondoDiMondi.png')} style={styles.image} />
          }
          {title == "Isola di grazia" &&
            <Image source={require('../assets/imageAlbum/isolaDiGrazia.png')} style={styles.image} />
          }
          {title == "Pietra angolare" &&
            <Image source={require('../assets/imageAlbum/pietraAngolare.png')} style={styles.image} />
          }
          {title == "Yerushalayim" &&
            <Image source={require('../assets/imageAlbum/yerushalayim.png')} style={styles.image} />
          }
          {title == "Leone della tribù di giuda" &&
            <Image source={require('../assets/imageAlbum/leoneDellaTribuDiGiuda.png')} style={styles.image} />
          }
          {title == "Spandi il Tuo Spirito" &&
            <Image source={require('../assets/imageAlbum/spandiIlTuoSpirito.png')} style={styles.image} />
          }
          {title == "Come una rosa" &&
            <Image source={require('../assets/imageAlbum/comeUnaRosa.png')} style={styles.image} />
          }
          {title == "Gesù vive" &&
            <Image source={require('../assets/imageAlbum/gesuVive.png')} style={styles.image} />
          }
          {title == "Più di Te" &&
            <Image source={require('../assets/imageAlbum/piuDiTe.png')} style={styles.image} />
          }
          {title == "Tu sei con me" &&
            <Image source={require('../assets/imageAlbum/tuSeiConMe.png')} style={styles.image} />
          }
          </View>
          <View><Text style={{ marginRight:18, width: 30}}>        </Text></View>
    </View>



{/**********NICE MAN********************************************** */}
  <View  style= {{flex: 1, paddingLeft: 10, paddingRight: 10}}> 
<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom:10 }}>
  <View style={{ flexDirection: "column" }}>
    <Text style={{ fontSize: 26, marginTop: 10, fontFamily: "Newsreader_600SemiBold", color: colorText}}>{title} </Text>
    <Text style={{ fontSize: 12, color: colorText }}> {album} </Text>
  </View>

  <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 5 }}>
  {!flagRandom ? 
    <TouchableOpacity onPress={()=> { setFlagRandom(true) }}>
    <FontAwesome name="random" size={30} color={gray} style={{paddingRight: 15 }}/>
    </TouchableOpacity>
  :
  <TouchableOpacity onPress={()=> { setFlagRandom(false) }}>
  <FontAwesome name="random" size={30} color="white" style={{paddingRight: 15 }}/>
  </TouchableOpacity>
  }
  
  {!playing ? 
  <TouchableOpacity onPress={togglePlaying}>
    <AntDesign name="play" size={45} color={colorText} style={{elevation: 5}}/>
  </TouchableOpacity>
  :
  <TouchableOpacity onPress={togglePlaying}>
    <AntDesign name="pausecircle" size={45} color={colorText} style={{elevation: 5}}/>
  </TouchableOpacity> }
  </View>
  
</View>


{/*********Slider********************** */}
<View style = {{ flexDirection:"row", justifyContent: "center", paddingBottom: 10 }}>
  <Text style={{ color: colorText }}>{formatTime(elapsed)} </Text>
  <Slider
    style={{ width: '70%' }}
    minimumValue={0}
    maximumValue={totDur}
    value={elapsed}
    onValueChange={(value) => setElapsed(value)}
    onSlidingComplete={(value) => handleSeek(value)}
    minimumTrackTintColor= {colorText}
    maximumTrackTintColor="gray"
    thumbTintColor= {colorText}  // Cambia il colore del puntatore
  />
   
    <Text style={{ color: colorText }}>{formatTime(totDur)}</Text>
</View>
 
 <FlatList
  keyboardShouldPersistTaps={'handled'}
  numColumns={1}
  data={currentData}
  renderItem={({ item }) => (
    <TouchableOpacity onPress={() => handleSwitchVideo(item.linkYt, item.durata, item)}>
      <View style={[styles.containerElenco, { backgroundColor: selectedItem === item ? 'lightblue' : 'transparent' }]}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontFamily: "Newsreader_600SemiBold", fontSize: 18, color: selectedItem === item ? primary : colorText }}> {item.titolo} </Text>
          <Text style={{ fontFamily: "Newsreader_400Regular", fontSize: 12, color: gray}}> {item.creato} </Text>
        </View>
        <View style={globalStyles.centerColumnElenco}>
          <Text style={globalStyles.titleElenco}> </Text>
        </View>
          <Text style={{fontFamily: "Newsreader_400Regular", fontSize: 12, color: selectedItem === item ? primary : colorText}}> Testo </Text>
      </View>
    </TouchableOpacity>
  )}/>


    <View style= {{ width: "100%", height: 0,   overflow: "hidden", borderRadius: 12, position:"absolute" }}>
      <YoutubePlayer
       ref={playerRef}
        height={0}
        play={playing}
        style={{ borderRadius: 12 }}
        playList={playListId}
        videoId={videoId}
        onChangeState={onStateChange}
      />
</View>


  </View>

        </LinearGradient>
    </>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  image: {
    width: 200, // Sostituisci con la larghezza desiderata
    height: 200, // Sostituisci con l'altezza desiderata
    borderRadius: 10,
  },
  containerElenco: {
    width: "100%",
    flexDirection: 'row', // Disposizione a riga
    alignItems: 'center', // Allineamento verticale al centro
    paddingHorizontal: 10, // Spazio interno orizzontale
    backgroundColor: "transparent",
    padding: 10,
    paddingLeft: 0,
    paddingRight:30,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  });