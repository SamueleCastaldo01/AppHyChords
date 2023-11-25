import React from "react";
import { useState, useEffect, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, View, Text, Button, TouchableOpacity, TextInput, ScrollView, Image, Animated, } from "react-native";
import { globalStyles } from "../styles/global";
import { Entypo } from '@expo/vector-icons';
import JSONDATA from '../dbCantici.json'


export default function Home(props) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
      //***************************************************************************** */

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
        
        <View  style={ globalStyles.header}>
            <Text style={globalStyles.titleHeader}> HyChords  </Text>
        </View>


    <Animated.View  style= {{flex: 1, opacity: fadeAnim}}>  
 <ScrollView>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
    <Image style={styles.imageHome}  source={require("../images/ciao.png")}/>
    </View>
    {JSONDATA.map((item) =>  (
        <View key={item.titolo}>
        { item.raccolta === "A" &&  
        <TouchableOpacity onPress={() =>{ props.navigation.navigate("CanticoScreen", {
                        num: item.num,
                        titolo: item.titolo,
                        keyTona: item.keyTona,
                    }); }}>
          <View style={globalStyles.containerElenco}>
            <View style={globalStyles.leftColumnElenco}>
                <Text style={globalStyles.numberElenco}> {item.num} </Text>
            </View>
            <View style={globalStyles.centerColumnElenco}>
                <Text style={globalStyles.titleElenco}> {item.titolo} </Text>
            </View>
            <View style={globalStyles.rightColumnElenco}>
            <Entypo  name="chevron-right" size={24} color="#04457E" />
            </View>
            
          </View>
          </TouchableOpacity>
        }
        </View>
        )
      )}
</ScrollView> 
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