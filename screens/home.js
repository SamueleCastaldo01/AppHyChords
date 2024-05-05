import React from "react";
import { useState, useEffect, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Text, Button, TouchableOpacity, TextInput, ScrollView, Image, Animated} from "react-native";
import { globalStyles } from "../styles/global";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from '@expo/vector-icons';
import JSONDATA from '../dbCantici.json'

const primary = "#013241"
const back = "#EFEFEF"

export default function Home(props) {
// Animazione pagina***************************************************************************** */
    const fadeAnim = useRef(new Animated.Value(0)).current;
      const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }).start();
      };

      const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start();
      };
    
      useFocusEffect(
        React.useCallback(() => {
          // Esegui l'animazione quando la schermata riceve il focus
          fadeIn()
          return () => {
            // Azioni di pulizia (opzionale) quando la schermata perde il focus
            fadeOut()
          };
        }, [])
      );

    return (
<>
    <LinearGradient style={globalStyles.containerHome} colors={[ back, primary ]} start={{x: 0, y: 0.1}}
  end={{x: 0, y: 1}}
  locations={[0, 2]}>
  
        <View  style={ styles.header}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1 }}>
          <Text style={globalStyles.titleHeader}> HyChords  </Text>
          </View>
          <View style={{ flex: 1 }}></View>
            
        </View>


    <Animated.View  style= {{flex: 1, opacity: fadeAnim, paddingLeft: 10,}}> 
    <ScrollView>


    {/**Adi media *********************************************************************/}
    <View style={{ flex:1, paddingBottom: 30 }}>
    <View style={{ flexDirection: "row", paddingBottom: 10 }}>
      <Image source={require('../assets/icons/adiLogo.jpeg')} style={styles.imageLogo} />
        <Text style={globalStyles.textHome}>Adi Media </Text>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.imageContainer}
    >
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5kbVrkSz13mrmUHt3kXPLx",
                                  title: "Adorazione 1",
                                  album: ""  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/adorazione1.png')} style={styles.image} />
        <Text style={styles.description}>Adorazione 1</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "OLAK5uy_mlj_NH7WJdVhz3oKXnJz_CP38NUUdo3BY",
                                  title: "Adorazione 2",
                                  album: "album -2019"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/adorazione2.png')} style={styles.image} />
        <Text style={styles.description}>Adorazione 2</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "2pZYIPiWqyNRIYTJYIrQiJ",
                                  title: "Adorazione 3",
                                  album: ""  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/adorazione3.png')} style={styles.image} />
        <Text style={styles.description}>Adorazione 3</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "4dGJRnFPnswzhxn2WMkWa1",
                                  title: "Adorazione 4",
                                  album: ""  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/adorazione4.png')} style={styles.image} />
        <Text style={styles.description}>Adorazione 4</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "6q9japigWqFuVSHG7PMjID",
                                  title: "Adorazione 5",
                                  album: ""  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/adorazione5.png')} style={styles.image} />
        <Text style={styles.description}>Adorazione 5</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "4dGJRnFPnswzhxn2WMkWa1",
                                  title: "Adorazione 6",
                                  album: ""  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/adorazione6.png')} style={styles.image} />
        <Text style={styles.description}>Adorazione 6</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "4S790Ap3P36lZEPDF9i1Ho",
                                  title: "Adorazione 7",
                                  album: ""  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/adorazione7.png')} style={styles.image} />
        <Text style={styles.description}>Adorazione 7</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "4aAp69Km96rbmZnkZfM7kx",
                                  title: "Adorazione 8",
                                  album: ""  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/adorazione8.png')} style={styles.image} />
        <Text style={styles.description}>Adorazione 8</Text>
      </View>
    </TouchableOpacity> 
    </ScrollView>
    </View>


 {/**Corale Di palmi *********************************************************************/}
 <View style={{ flex:1, paddingBottom: 30 }}>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
      <Image source={require('../assets/icons/palmiLogo.png')} style={styles.imageLogo} />
        <Text style={globalStyles.textHome}>Corale Di Palmi </Text>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.imageContainer}
    >
     <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "162JpkoDVC2fowwp1pQ912",
                                  title: "Yerushalayim",
                                  album: "album-2023" }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/yerushalayim.png')} style={styles.image} />
        <Text style={styles.description}>Yerushalayim</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "Leone della tribù di giuda",
                                  album: "album-2009"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/leoneDellaTribuDiGiuda.png')} style={styles.image} />
        <Text style={styles.description}>Leone della Tribù di Giuda</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "Spandi il Tuo Spirito",
                                  album: "album-2006"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/spandiIlTuoSpirito.png')} style={styles.image} />
        <Text style={styles.description}>Spandi il Tuo Spirito</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "Come una rosa",
                                  album: "album-2001"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/comeUnaRosa.png')} style={styles.image} />
        <Text style={styles.description}>Come una rosa</Text>
      </View>
    </TouchableOpacity> 
   
      {/* Aggiungi altre immagini qui */}
    </ScrollView>
    </View>

 {/**SDV Worship *********************************************************************/}
 <View style={{ flex:1, paddingBottom: 30 }}>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
      <Image source={require('../assets/icons/sdvLogo.jpeg')} style={styles.imageLogo} />
        <Text style={globalStyles.textHome}>SDV Worship </Text>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.imageContainer}
    >
     <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "162JpkoDVC2fowwp1pQ912",
                                  title: "Il suono della lode",
                                  album: "album-2023" }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/ilSunoDellaLode.png')} style={styles.image} />
        <Text style={styles.description}>Il Suono della lode</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "Cuore Puro",
                                  album: "album-2021"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/cuorePuro.png')} style={styles.image} />
        <Text style={styles.description}>Cuore Puro</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "Apri i cieli",
                                  album: "album-2018"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/apriICieli.png')} style={styles.image} />
        <Text style={styles.description}>Apri i cieli</Text>
      </View>
    </TouchableOpacity> 
   
      {/* Aggiungi altre immagini qui */}
    </ScrollView>
    </View>


 {/**Davide Di Lecce *********************************************************************/}
 <View style={{ flex:1, paddingBottom: 30 }}>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
      <Image source={require('../assets/icons/lecceLogo.jpg')} style={styles.imageLogo} />
        <Text style={globalStyles.textHome}>Davide Di Lecce</Text>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.imageContainer}
    >
     <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "162JpkoDVC2fowwp1pQ912",
                                  title: "Più di Te",
                                  album: "album-2017" }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/piuDiTe.png')} style={styles.image} />
        <Text style={styles.description}>Più di Te</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "Tu sei con me",
                                  album: "album-2015"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/tuSeiConMe.png')} style={styles.image} />
        <Text style={styles.description}>Tu sei con me</Text>
      </View>
    </TouchableOpacity> 
   
      {/* Aggiungi altre immagini qui */}
    </ScrollView>
    </View>

 {/**Dario De Marco *********************************************************************/}
 <View style={{ flex:1, paddingBottom: 30 }}>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
      <Image source={require('../assets/icons/darioDeMarcoLogo.jpg')} style={styles.imageLogo} />
        <Text style={globalStyles.textHome}>Dario De Marco</Text>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.imageContainer}
    >
     <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "162JpkoDVC2fowwp1pQ912",
                                  title: "Voglio essere vero",
                                  album: "album-2018" }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/voglioEssereVero.png')} style={styles.image} />
        <Text style={styles.description}>Voglio essere vero</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "Se il cielo si copre",
                                  album: "album-2015"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/seIlCieloSiCopre.png')} style={styles.image} />
        <Text style={styles.description}>Se il cielo si copre</Text>
      </View>
    </TouchableOpacity> 
   
      {/* Aggiungi altre immagini qui */}
    </ScrollView>
    </View>


 {/**Nico Battaglia *********************************************************************/}
 <View style={{ flex:1, paddingBottom: 30 }}>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
      <Image source={require('../assets/icons/darioDeMarcoLogo.jpg')} style={styles.imageLogo} />
        <Text style={globalStyles.textHome}>Nico Battaglia</Text>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.imageContainer}
    >
     <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "162JpkoDVC2fowwp1pQ912",
                                  title: "Io canto ancora",
                                  album: "album-2020" }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/ioCantoAncora.png')} style={styles.image} />
        <Text style={styles.description}>Io canto ancora</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "A casa",
                                  album: "album-2016"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/aCasa.png')} style={styles.image} />
        <Text style={styles.description}>A casa</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "Cielo dentro me",
                                  album: "album-2012"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/cieloDentroMe.png')} style={styles.image} />
        <Text style={styles.description}>Cielo dentro me</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "Più vicino",
                                  album: "album-2008"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/piuVicino.png')} style={styles.image} />
        <Text style={styles.description}>Più vicino</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "Un mondo di mondi",
                                  album: "album-2006"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/unMondoDiMondi.png')} style={styles.image} />
        <Text style={styles.description}>Un mondo di mondi</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "Isola di grazia",
                                  album: "album-2003"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/isolaDiGrazia.png')} style={styles.image} />
        <Text style={styles.description}>Isola di grazia</Text>
      </View>
    </TouchableOpacity> 
   
      {/* Aggiungi altre immagini qui */}
    </ScrollView>
    </View>

    {/**Mirko&Giorgia *********************************************************************/}
    <View style={{ flex:1, paddingBottom: 30 }}>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
      <Image source={require('../assets/icons/mirkoLogo.jpeg')} style={styles.imageLogo} />
        <Text style={globalStyles.textHome}>Mirko&Giorgia </Text>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.imageContainer}
    >
     <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "162JpkoDVC2fowwp1pQ912",
                                  title: "Il luogo segreto",
                                  album: "album-2019" }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/ilLuogoSegreto.png')} style={styles.image} />
        <Text style={styles.description}>Il luogo segreto</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "Faccia a Faccia",
                                  album: "album-2022"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/facciaAFaccia.png')} style={styles.image} />
        <Text style={styles.description}>Faccia a Faccia</Text>
      </View>
    </TouchableOpacity> 
   
      {/* Aggiungi altre immagini qui */}
    </ScrollView>
    </View>

 {/**Eman *********************************************************************/}
 <View style={{ flex:1, paddingBottom: 30 }}>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
      <Image source={require('../assets/icons/emanLogo.png')} style={styles.imageLogo} />
        <Text style={globalStyles.textHome}>Eman</Text>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.imageContainer}
    >
     <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "162JpkoDVC2fowwp1pQ912",
                                  title: "Pietra angolare",
                                  album: "album-2016" }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/pietraAngolare.png')} style={styles.image} />
        <Text style={styles.description}>Pietra Angolare</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "Gesù vive",
                                  album: "album-2014"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/gesuVive.png')} style={styles.image} />
        <Text style={styles.description}>Gesù vive</Text>
      </View>
    </TouchableOpacity> 
   
      {/* Aggiungi altre immagini qui */}
    </ScrollView>
    </View>


{/**Hillsong *********************************************************************/}
<View style={{ flex:1, paddingBottom: 30 }}>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
      <Image source={require('../assets/icons/hillsongLogo.png')} style={styles.imageLogo} />
        <Text style={globalStyles.textHome}>Hillsong Worship </Text>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.imageContainer}
    >
     <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "162JpkoDVC2fowwp1pQ912",
                                  title: "",
                                  album: "" }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/hillsong2022.png')} style={styles.image} />
        <Text style={styles.description}>Album 2022</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "",
                                  album: ""  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/hillsong2016.png')} style={styles.image} />
        <Text style={styles.description}>Album 2016</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "3LgQ3r4AhZU06tIU2c6CKb",
                                  title: "",
                                  album: ""  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/hillsong2015.png')} style={styles.image} />
        <Text style={styles.description}>Album 2015</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5YqUhoHu6qOt80LARPhtJD",
                                  title: "",
                                  album: ""  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/hillsong2014.png')} style={styles.image} />
        <Text style={styles.description}>Album 2014</Text>
      </View>
    </TouchableOpacity> 

      {/* Aggiungi altre immagini qui */}
    </ScrollView>
    </View>


    {/**Lauren Daigle *********************************************************************/}
    <View style={{ flex:1, paddingBottom: 30 }}>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
      <Image source={require('../assets/icons/laurenLogo.jpg')} style={styles.imageLogo} />
        <Text style={globalStyles.textHome}>Lauren Daigle </Text>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.imageContainer}
    >
     <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "162JpkoDVC2fowwp1pQ912",
                                  title: "Look Up Child",
                                  album: "album -2018" }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/lookUp.png')} style={styles.image} />
        <Text style={styles.description}>Look Up Child</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5afUmwQPcIv6g6Yi5DW7VB",
                                  title: "How Can It Be",
                                  album: "album-2015"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/howCanIt.png')} style={styles.image} />
        <Text style={styles.description}>How Can It Be</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "3LgQ3r4AhZU06tIU2c6CKb",
                                  title: "Lauren Daigle",
                                  album: "album-2023"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/lauren.png')} style={styles.image} />
        <Text style={styles.description}>Lauren Daigle</Text>
      </View>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{ props.navigation.navigate("Ascolta", {
                                  id: "5YqUhoHu6qOt80LARPhtJD",
                                  title: "Behold",
                                  album: "album-2016"  }); }}>
      <View style={styles.imageWithDescription}>
        <Image source={require('../assets/imageAlbum/behold.png')} style={styles.image} />
        <Text style={styles.description}>Behold</Text>
      </View>
    </TouchableOpacity> 
      {/* Aggiungi altre immagini qui */}
    </ScrollView>
    </View>

  </ScrollView>
  </Animated.View>

        </LinearGradient>
    </>
    )
}


const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
  },
  imageWithDescription: {
    marginRight: 10, // Modifica questo valore per regolare la distanza tra le immagini
  },
  image: {
    width: 160, // Sostituisci con la larghezza desiderata
    height: 160, // Sostituisci con l'altezza desiderata
    borderRadius: 15,
  },
  imageLogo: {
    width: 50, // Sostituisci con la larghezza desiderata
    height: 50, // Sostituisci con l'altezza desiderata
    borderRadius: 30,
  },
  description: {
    color: "white",
    marginTop: 5, // Spazio tra l'immagine e la descrizione
    textAlign: 'center',
  },
  header: {
    flexDirection: "row",
    height: 90,
    position: "float",
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0,
    borderColor: "#d8d8d8",
    paddingTop: 38,
},  
  });