import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function UnVasoNuovo ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, gBemolle, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1.</Text>O</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>h Signor Tu mi sal</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>vasti, </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View> }
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>dal mondo dove viv</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>evo,</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View> }
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Mi co</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}/{eBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>pristi col Tuo s</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>angue, </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View> }
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mi riempisti della Tua </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>vita.</Text>
        </View>


        <View style={globalStyles.SpazioCantico}></View>


        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2.</Text>Vita eterna Tu mi hai dato,</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>alla croce dove moristi </Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>Quella croce sul Calvario</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>dove Tu desti la vita.</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-7</Text></View> }
        </View>


        <View style={globalStyles.SpazioCantico}></View>


        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro:</Text></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>“</Text>Fai di </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}/{gBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>me un vaso </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}7</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nuovo </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}/{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>dove gli altri </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>possano </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{gBemolle}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>bere</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}- {b}  {b}/{eBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>, bere la tua acqua </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>viva,</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View> }
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>acqua che toglie la </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sete.<Text style={globalStyles.textCanticoColo}>”(BIS)</Text></Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-7</Text></View> }
        </View>

    </View>
    
            
    </>
    )
}