import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function StringimiOhSignor ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, gDiesis, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Stringimi o Sig</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}/{a}  {e}/{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nor,    e non lasciarmi </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mai</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}/{gDiesis}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Io mi dono a </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te Gesù</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
        {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> a Te che vero a</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mico sei,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Nulla cerco </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}/{a} {e}/{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>più,    voglio solo </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a} {e}/{g}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>chi supplirti </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mai potrà</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>brucio al </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>fuoco de</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>l Tuo amor</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>M</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}/{cDiesis}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ostrami la v</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ia, ed </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}/{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>io Ti segui</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}     {e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rò!</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: "</Text></Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Io vo</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}9</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>glio </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>di T</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}9</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e ho un </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>gran biso</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>gno,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>I</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>o vo</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}9</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>glio T</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d} {b}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e, sì, vieni e </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>vivi in </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>me.<Text style={globalStyles.textCanticoColo}>" (Bis)</Text></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>"</Text></Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Si, vieni e vi</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>vi in </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>me<Text style={globalStyles.textCanticoColo}>" (Bis)</Text></Text>
        </View>
        
        

    </View>
    
    </>
    )
}