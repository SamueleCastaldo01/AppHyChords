import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function MiFaiRiposare ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {d}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Mi fai ripos</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {g}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>are in verdi p</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {c}7</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ascoli</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e di </Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nulla mi fai m</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {d}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ancare,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tu mi </Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {eBemolle} </Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sazi con il </Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>miele della tua,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {d}- {c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>dolce par</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {d}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ola!</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Mi fai ador</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {g}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>are, dav</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {c}7</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>anti a te,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e ti l</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oderò, e ti a</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {d}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>merò,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sei il mio Pas</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {eBemolle} </Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tore,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> sei il mio G</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>esù, sei il mio Sig</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {d}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nor,</Text>
        </View>


    </View>
    
    </>
    )
}