import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';



export default function ShalomAdonai ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, gBemolle, aBemolle, bBemolle, accordiStru }) {



    return (
        <>

        <View style={globalStyles.containerCantico}>

            <View style={globalStyles.righeCantico}>
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text  style={globalStyles.textCanticoColo}>1.</Text> Shal</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-/{gBemolle}</Text></View>    }
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>om Adonai shal</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>om, shal</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>om Adonai</Text>
            </View>

            <View style={globalStyles.righeCantico}>
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>shal</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>om, shal</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>om Adon</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ai, shal</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>om Adon</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ai, </Text>
            </View>

            <View style={globalStyles.righeCantico}>
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>shal</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-/{e}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>om Adon</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ai shalo</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>m!</Text>
            </View>

            <View style={globalStyles.SpazioCantico}></View>

            <View style={globalStyles.righeCantico}>
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text  style={globalStyles.textCanticoColo}>2.</Text> La p</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-/{gBemolle}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ace del Signor la p</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ace, la </Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>pace del </Text>
            </View>

            <View style={globalStyles.righeCantico}>
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Signor la p</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ace, la p</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ace del Sig</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nor, la pac</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e</Text>
            </View>

            <View style={globalStyles.righeCantico}>
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>del Sign</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-/{e}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>or, la pa</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ce del Signor la pace!</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>}
            </View>


        </View>
 
            
    </>
    )
}
