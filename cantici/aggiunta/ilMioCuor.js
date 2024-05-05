import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function IlMioCuor ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>I</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>l mio c</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uor </Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>apro a Te Sig</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nor</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oh mio Ge</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sù tras</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>formalo per </Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>fé,</Text>
        </View>
        
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>T</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>i segui</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rò col tuo </Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>aiut</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>o</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Ti seguir</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ò per la </Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>fé!</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text>A T</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}7+</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e m’arrenderò q</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uando verrò m</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>eno,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}7-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sei Re che ad</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oro Sign</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>or</Text>
        </View>
        
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>T</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>i segui</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rò, T</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{cDiesis}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>i servir</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ò,</Text>
        </View>
        
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Ti ubbidi</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rò, Ge</Text>
                {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sù</Text>
        </View>
    </View>
    
    </>
    )
}