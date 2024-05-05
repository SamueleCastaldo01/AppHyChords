import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function QuelliCheSperano ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>"</Text>Quelli che s</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>perano che sperano in Ges</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}/{cDiesis}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ù,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Quelli che sperano che sperano in Ge</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sù,<Text style={globalStyles.textCanticoColo}>"</Text></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>(Bis)</Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Come le </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}- {c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>aquile, come le </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{f} {d}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>aquile in v</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>olo</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>si lever</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}- {d}/{fDiesis}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>an, Come le a</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}- {c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>quile, come le a</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{f}/{d}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>quile</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>in </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>volo si lever</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>an;</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Cammina</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>no e non si stanca</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>no corro</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>no </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e non si affatican</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}- {d}/{fDiesis}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>o,</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>"</Text>E nuove </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>forze avra</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>n, e nuove </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>forze avra</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>n</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Quelli che sp</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>erano che sp</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>7</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>erano in Ges</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>} 
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ù<Text style={globalStyles.textCanticoColo}>"</Text></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>(Bis)</Text></Text>
        </View>

    </View>
    
    </>
    )
}