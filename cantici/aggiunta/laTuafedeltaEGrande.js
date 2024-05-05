import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function LaTuaFedeltaEGrande ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>La tua fedelt</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>à, è g</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rand</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e, la tua fedel</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>7</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tà,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> è inc</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}4</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>omparab</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ile </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>niuno è come te, </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> ben</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>igno Dio, </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>grande è </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>7</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>la tua fedel</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tà</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}> Ripetere alzando di un tono</Text></Text>
        </View>

    </View>
    
    </>
    )
}