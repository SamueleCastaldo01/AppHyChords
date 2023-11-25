import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function CaroPadre ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1. </Text>C</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>aro </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Padre, Solo T</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>u ci d</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ai la p</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ace,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Dio n</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ostro Solo T</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>u ci d</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ai la q</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uiete,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Poiché ogni no</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>stra o</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>pera Tu la c</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ompi</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>per n</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oi.</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>" </Text>Sei Tu </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>caro </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Padre c</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>he</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tutto hai </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>fatto </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>per n</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oi<Text style={globalStyles.textCanticoColo}>" (Bis)</Text></Text>
        </View>

        
        <View style={globalStyles.SpazioCantico}></View>


        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2. </Text> Caro Padre quando a Te noi ritorniamo,</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>Dio nostro noi entriam nel Tuo riposo.</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>Nella calma e nella fede noi,</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>Troveremo la forza,</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>" </Text>Troverem salvezza se</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>Noi restiamo con Te<Text style={globalStyles.textCanticoColo}>" (Bis)</Text></Text>
        </View>

    </View>
    
    </>
    )
}