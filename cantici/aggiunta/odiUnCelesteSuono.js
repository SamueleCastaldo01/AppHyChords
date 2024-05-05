import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function OdiUnCelesteSuono ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1. </Text>O</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {bBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>di un celeste suono,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>come quello di tante acque, </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>è il suono della, lode che vien dal </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {c}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tron;</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>è il </Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {eBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>grido d’a</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>dorazi</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {bBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>one,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>di uo</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {eBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mini </Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>d’ogni naz</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {bBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ione,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>che v</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {g}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ogliono </Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {g}-7</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>far cono</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>scer la sua </Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>gloria,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>can</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {7}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tando:</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text></Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {bBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Santo, santo, </Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {d}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>santo sei Sig</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {eBemolle} {c}- {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nor,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>santo, santo, s</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> 7</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>anto sei Sig</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {bBemolle}- {f} {bBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nor,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>gli a</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {eBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ngeli si prostra</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>no, i re</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>denti t'ador</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {g}- {f} {eBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ano</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>santo, santo, s</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>anto s</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> 7</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ei Sign</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {bBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>or,</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {g}</Text></View> }
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2. </Text>Puoi ud</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ire un celeste suono,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>come quello di tante acque, </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>è il suono della, lode che vien dal </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {d}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tron;</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {g}</Text></View> }
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>è il </Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>grido d’a</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>dorazi</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>one,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>di uo</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mini </Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>d’ogni naz</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ione,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>che v</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {a}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ogliono </Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> -7+</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>far cono</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>scer la sua </Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>gloria,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>can</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {7}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tando:</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: "</Text></Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Santo, santo, </Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>santo sei Sig</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f} {d}- {g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nor,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>santo, santo, s</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> 7</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>anto sei Sig</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {c}- {g} {c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nor,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>gli a</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ngeli si prostra</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>no, i re</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {e}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>denti t'ador</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {a}- {g} {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ano</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>santo, santo, s</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>anto s</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> 7</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ei Sign</Text>
                     {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>or<Text style={globalStyles.textCanticoColo}>" (Bis)</Text></Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> ({f} {g})</Text></View> }
        </View>

    </View>
    
    </>
    )
}