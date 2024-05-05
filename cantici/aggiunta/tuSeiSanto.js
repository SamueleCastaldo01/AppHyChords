import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function TuSeiSanto ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, dBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>"</Text></Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Tu sei </Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {bBemolle}- {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Santo, </Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {a}7 {d}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Santo,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>n</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>essuno è c</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ome </Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {eBemolle} {c}/{e}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Tu sei </Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}- {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Santo, S</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}7 {d}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>anto,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>gloria ed on</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ore a </Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te<Text style={globalStyles.textCanticoColo}>" (Bis)</Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: "</Text>Io canter</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}/{f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ò le Tue lo</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {bBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>di</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {g}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sempre Ti a</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {bBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>dorer</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ò</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Davanti al Tr</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}/{eBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ono io m</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {bBemolle}/{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>i prostrer</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {bBemolle}-/{dBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ò,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}4</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Perché appart</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>engo a T</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}> {f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e<Text style={globalStyles.textCanticoColo}>" (Bis)</Text></Text>
        </View>

    </View>
    
    </>
    )
}