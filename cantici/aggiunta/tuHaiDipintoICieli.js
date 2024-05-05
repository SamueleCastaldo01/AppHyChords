import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function TuHaiDipintoICieli ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1. </Text>Tu </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>hai dipinto i </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>cieli,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ed hai fatto il m</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ar,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oh </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mio Creator, mi hai fa</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tto come </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te!</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Aiut</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ami a scopr</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ire,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>la ric</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>chezza che c’è in </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>te,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>il t</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uo amor, la </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}-/{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tua fedel</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tà.</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text> a T</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>E Sign</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>or, la </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mia preghiera </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>va,</Text>
        </View>
        
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sol</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>o il mio cuor espri</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>merla potr</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>à;</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>la l</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ode a te</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>, com</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e un profumo </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>è,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ad</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oro te per c</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}- {d} {g}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>hi tu sei!</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2. </Text>Tu hai dipinto i cieli, ed hai fatto il mar,</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>il volto tuo un giorno io vedrò,</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>da sempre ti ho cercato,</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}> finalmente ti ho trovato,</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>per sempre ti amerò con tutto il cuor!</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro...</Text></Text>
        </View>


    </View>
    
    </>
    )
}