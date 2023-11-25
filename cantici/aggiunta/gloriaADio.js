import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';



export default function GloriaADio ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {



    return (
        <>

        <View style={globalStyles.containerCantico}>

            <View style={globalStyles.righeCantico}>
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text  style={globalStyles.textCanticoColo}>1. “</Text>Gloria a D</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>io nell’alto dei c</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ieli </Text>
            </View>

            <View style={globalStyles.righeCantico}>
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Sia fatta in te</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g} {e}-</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rra la Sua volon</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d} {a}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tà<Text style={globalStyles.textCanticoColo}>” (Bis)</Text></Text>
            </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text  style={globalStyles.textCanticoColo}>Coro: “</Text>A</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}  {d}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>lleluia, All</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}  {d}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>eluia, A-A-A-</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>A!</Text>
        </View>

        <View style={globalStyles.righeCantico}>
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Allelu</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ia, Allelu</Text>
                {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
                <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ia (Alleluia)<Text style={globalStyles.textCanticoColo}>”(Bis)</Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>
        
        <View style={globalStyles.righeCantico}>
                <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2. “</Text>Questa gioia, che sento nel cuore</Text>
        </View>
        <View style={globalStyles.righeCantico}>
                <Text style={globalStyles.textCanticoNo}>È la gioia, che il mondo non dà<Text style={globalStyles.textCanticoColo}>” (Bis)</Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
                <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro.. (Bis)</Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
                <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>3. “</Text>Questa pace, che sento nel cuore</Text>
        </View>
        <View style={globalStyles.righeCantico}>
                <Text style={globalStyles.textCanticoNo}>È La pace che Cristo mi dà<Text style={globalStyles.textCanticoColo}>” (Bis)</Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
                <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro.. (Bis)</Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
                <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>4. “</Text>Se vuoi pace, e gioia nel cuore, </Text>
        </View>
        <View style={globalStyles.righeCantico}>
                <Text style={globalStyles.textCanticoNo}>Sappi che, sol Gesù te la dà<Text style={globalStyles.textCanticoColo}>” (Bis)</Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
                <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro.. (Bis)</Text></Text>
        </View>

        </View>
 
            
    </>
    )
}