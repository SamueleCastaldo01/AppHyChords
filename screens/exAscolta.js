import React from "react";
import { useState, useEffect, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Button, TouchableOpacity, TextInput, ScrollView, Image, Animated, Dimensions, ActivityIndicator } from "react-native";
import { globalStyles } from "../styles/global";
import { Entypo } from '@expo/vector-icons';

const colorIconBottom = "#04457E"

export default function Ascolta(props) {
  const [loading, setLoading] = useState(true);

  const [titolo, setTitolo] = useState(props.route.params.titolo);
  const [nomeAlbum, setNomeAlbum] = useState(props.route.params.nomeAlbum);
  const [playlistId, setPlaylistId] = useState(props.route.params.id);
  const [album, setAlbum] = useState(props.route.params.album);
  const screenDimensions = Dimensions.get('window');

  const width = screenDimensions.width - 30;
  const widthIFrame = screenDimensions.width;
  const height = screenDimensions.height - 140;
  const heightIFrame = screenDimensions.height -175;

const embedCode = `
<html>
  <head>
    <style>
      body {
        overflow: hidden;
        touch-action: none;
        transform-origin: 0 0;
        transform: scale(4); /* Imposta uno zoom predefinito di 1.5x */
        background-color: #EFEFEF;
      }
    </style>
  </head>
  <body>
  <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/${playlistId}?utm_source=generator" width="42.3%" height="42.1%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </body>
</html>
`;
  
// Animazione pagina***************************************************************************** */
    const fadeAnim = useRef(new Animated.Value(0)).current;
      const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
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
    <View style={globalStyles.containerHome}>
        
    {/*******************   HEADER***************************************************** */}     
    <View style={ globalStyles.header}>
        <View style= {{ flexDirection:  "row", alignItems: "flex-start", justifyContent: "space-between"}}>
            <View>
                <TouchableOpacity onPress={() => {props.navigation.goBack(); }}>
                    <Ionicons style={{ marginLeft:18, }} name="arrow-back" size={24} color= {colorIconBottom} />
                </TouchableOpacity>
            </View>
            <View><Text style={globalStyles.titleHeader}> HyChords  </Text></View>
            <View style={{ width: 24 }} />
        </View>
            
        </View>


  <Animated.View  style= {{flex: 1, opacity: fadeAnim}}> 

 <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ flex: 1, width: '100%', elevation: 5 }}>
        {loading && (
          <ActivityIndicator
            style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
            size="large"
            color="#0000ff"
          />
        )}
        <WebView
          source={{ html: embedCode }}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
    </View>



</Animated.View>

        </View>
    </>
    )
}


const styles = StyleSheet.create({
    imageHome: {
      width:"200%",
      height: 220,
      marginBottom: 30,
    },
    image: {
        position: "absolute",
        left: "2.5%",
        width: 60, // Larghezza dell'immagine PNG
        height: 60, // Altezza dell'immagine PNG
      },
  });