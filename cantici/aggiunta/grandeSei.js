import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function GrandeSei ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Grande </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{aBemolle}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sei oh mio Si</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}- {b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>gnor,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> R</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e in et</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{aBemolle}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>erno rester</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}- {b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ai,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>L’anima </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mia rip</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{cDiesis}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>osa solo in </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Che mi per</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>don</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>i e mi cons</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oli.</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>


        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Con </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te voglio </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{aBemolle}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>abitare oh </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}- {b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Re, Con </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>che s</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{aBemolle}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>iedi su nel</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}- {b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> ciel, con Te che </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>hai </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>t</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{cDiesis}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>utto ai piedi </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}- {b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Tuoi, Tu sei l’A</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>more, </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}</Text></View> }
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Tu sei Ge</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sù, il R</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e.</Text>
        </View>

    </View>
    
    </>
    )
}