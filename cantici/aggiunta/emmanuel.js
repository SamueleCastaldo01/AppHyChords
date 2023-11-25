import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function Emmanuel ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Em</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>manue</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}  {f}/{eBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>l,               Emmanu</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-7</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>el,</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>      {g}-</Text></View> }

        </View>


        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> Il n</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}/{b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>om</Text>

            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e   </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Suo,</Text>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>   Emma</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nuel.</Text>
        </View>


        <View style={globalStyles.righeCantico}>

            <Text style={globalStyles.textCanticoNo}> Dio con n</Text>
            <Text style={globalStyles.textCanticoNo}>oi, </Text>
            <Text style={globalStyles.textCanticoNo}>den</Text>
            <Text style={globalStyles.textCanticoNo}>tro di </Text>
            <Text style={globalStyles.textCanticoNo}>noi</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}> </Text>
            <Text style={globalStyles.textCanticoNo}>ll no</Text>
            <Text style={globalStyles.textCanticoNo}>me S</Text>
            <Text style={globalStyles.textCanticoNo}>uo, </Text>
            <Text style={globalStyles.textCanticoNo}>Emman</Text>
            <Text style={globalStyles.textCanticoNo}>uel!</Text>
        </View>


        <View style={globalStyles.SpazioCantico}></View>


        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Ripetere: Alzare di un tono</Text></Text>
    </View>

    </View>
    
    </>
    )
}