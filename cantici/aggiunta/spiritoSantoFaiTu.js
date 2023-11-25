import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function SpiritoSantoFaiTu ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1. </Text>La vita m</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ia per Te</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> spendere vorr</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ei</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>il tempo m</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>io a Te</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> dare io vorr</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> ei </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ma </Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>poi no</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>n ci riesco s</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Tu</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> non sei con </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>me</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Più in alto n</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>o, sal</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}7+</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ire io non </Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>so!</Text>
        </View>


        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2 Parte.. </Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text>Spirito S</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}7+</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>anto fai T</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d} {b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>u</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>prendi Tu il co</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mand</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}7+</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>o se mi guidi </Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Tu</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>non sarò delu</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>so,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>dammi la </Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}7+</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mano e far</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d} {b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ò</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>quello che mi c</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>hiedi</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}7+</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>viaggerò con T</Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e ed avrò la </Text>
                 {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>pace.</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>3 Parte.. </Text></Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text>Spirito Santo fai Tu…</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Finale: </Text>Viaggerò con te ed avrò la pace</Text>
        </View>


    </View>
    
    </>
    )
}