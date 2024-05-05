import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function UnPianoPerTe ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1. </Text></Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Dio sa il tuo nome ti con</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>osce sai</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>E dal primo giorno che sei </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nato,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>lui ve</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>de cosa f</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ai.</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2. </Text>e pensando a te lui si domanda,</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>se l’impegnerò Cosa risponderà?</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>Ti vorrei al mio servizio!</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text>Dio h</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>a un piano per t</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}-{b}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Non far fal</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>lire il piano per t</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Lui ti </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ama, manderà </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>te.</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2. </Text> tu che sei lì nella comunità</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>E forse canti pure in mezzo ai giovani</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>Non sei stanco li nel banco?</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text>Dio ha un piano per te..</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Finale: </Text> rispondi o</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ra: manda M</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}-{b}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e!</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>al Tuo ser</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>vizio ci sarò </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>io,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>io ti a</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mo Signore m</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>io</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Manda m</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e, sì manda m</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e.</Text>
        </View>

    </View>
    
    </>
    )
}