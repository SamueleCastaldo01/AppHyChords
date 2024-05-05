import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function CambiaIlCuorMio ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>"</Text>C</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ambia il cuore m</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}- {g}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>io, fa che sia sin</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}7+</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>cer</Text>
        </View>

        <View style={globalStyles.righeCantico}>
        {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>   {a}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Cambia il </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}></Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>cuore </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}-7 {g}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mio, che sia come </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te<Text style={globalStyles.textCanticoColo}>"</Text></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>(Bis)</Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text>Tu sei il Va</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>saio,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{f} {g}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>l'argilla </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c} {e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>io, di modell</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}- {g}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>armi,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}/{fDiesis}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>io ti prego oh </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Dio! C</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}7+</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ambia il cuore </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}- {g}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mio,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>fa che sia sin</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>cer</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>, cambia il c</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}></Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uore m</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}- {g}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>io,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>che sia come </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te!</Text>
        </View>



    </View>
    
    </>
    )
}