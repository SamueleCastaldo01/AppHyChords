import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function ICieliNarrano ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1. </Text></Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a} {cDiesis}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>I cieli </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>narran</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}4</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>o, la gl</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oria del ris</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>orto r</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>chi è p</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{cDiesis}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ari a l</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d} {e}4</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ui in bell</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ezza e </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>santit</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>à?</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text>per s</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{cDiesis}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>empre regner</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d} {e}/{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>à,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Gesù l’agnel di D</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{cDiesis}- {fDiesis}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>io, Mi dono tutto </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{b}-{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Adoro solo l</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ui</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2. </Text>Proclamerò la gloria del risorto re</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>Che incroci andò Per riportare l’uomo</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>a Dio</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: ... </Text></Text>
        </View>

    </View>
    
    </>
    )
}