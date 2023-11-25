import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function DegnoELAgnel ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1. </Text></Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Grazie per la cr</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d} {d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oce,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Gr</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>azie per il </Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>prez</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>zo </Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>che,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Hai pagato al p</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>osto mio,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Che </Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>grande Amor, </Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>grazia </Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mi do</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nò.</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

    <View style={globalStyles.righeCantico}>
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text></Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Degno è l’Agn</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>el,</Text>
    </View>
    
    <View style={globalStyles.righeCantico}>
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>s</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>iede su</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>l Suo T</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rono,</Text>
    </View>

    <View style={globalStyles.righeCantico}>
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Di g</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>loria una cor</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ona </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ha,</Text>
    </View>

    <View style={globalStyles.righeCantico}>
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Reg</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>na in vit</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>toria,</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
    </View>

    <View style={globalStyles.righeCantico}>
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>i</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nnalziam Ges</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d} {a}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ù, Il Figli</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uol di </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Dio</Text>
    </View>

    <View style={globalStyles.righeCantico}>
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>col</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ui che crocifi</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sso </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c} {d}4</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>fu,</Text>
    </View>

    <View style={globalStyles.righeCantico}>
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Degno è l’Ag</Text>
        {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}- {g} {d}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nel!</Text>
    </View>

    <View style={globalStyles.righeCantico}>
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Degno è l’A</Text>
        {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}- {g} {d}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>gnel!</Text>
    </View>

    <View style={globalStyles.righeCantico}>
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>(Ripetere tutto a capo + coro bis)</Text></Text>
    </View>

    <View style={globalStyles.righeCantico}>
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Finale: </Text>Degno è l’Agn</Text>
        {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
        <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>el!</Text>
    </View>

    </View>
    
    </>
    )
}