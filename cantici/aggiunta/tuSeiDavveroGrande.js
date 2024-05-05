import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function TuSeiDavveroGrande ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1. </Text> </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Tu sei davvero g</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}/{b}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rande</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> o Sig</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nore o E</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{f}      {g}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>terno,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Tu sei davvero g</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}/{b}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rande</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> o Sig</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nore o E</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>terno,</Text>
        </View>


        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Ness</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uno è pari a </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>te</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e non c'è </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>altro Dio fuori di t</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Tu sei l’</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>alfa e l’ om</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ega il re dei r</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e!</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2. </Text> Noi diamo a te la gloria o ...</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2. </Text> Noi ci prostiamo davanti a te o ...</Text>
        </View>


    </View>
    
    </>
    )
}