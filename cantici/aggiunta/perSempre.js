import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function PerSempre ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, dBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Intro: </Text>{aBemolle} |{eBemolle} |{bBemolle}-7 |{bBemolle}</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}></Text></Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{aBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Il cielo si oscu</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rò, Il velo si squarc</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>iò</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Gesù il Salvat</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{dBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>or moriva</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{aBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Il sangue Suo ver</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sò, il corpo Suo don</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ò</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>per cancellare i mi</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{dBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ei peccati</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Stacco musicale: </Text>{aBemolle} |{eBemolle} |{f}- |{dBemolle} |{aBemolle}</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}></Text>Con l’ultimo resp</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>iro, tutto compiuto </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>fu</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Gesù la morte v</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{dBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>inse in croc</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{aBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Le tenebre affront</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ò, sul nemico trion</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>fò </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Le nostre vite h</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{dBemolle}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ai riscattato</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{aBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>La pietra rotol</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ò, ma Lui non era </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>lì</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>la tomba non ha </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{dBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>trattenuto il R</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{aBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>O morte il dardo t</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uo, spezzato fu per </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> me</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Cristo è risorto e vi</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{dBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ve</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text>Per se</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{aBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mpre diamo g</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>loria a Te</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>per s</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>empre innalz</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{dBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ato Sei</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>per s</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{aBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>empre Gesù </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>vivi</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>risorto S</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ei, vivente S</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{dBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ei</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Ponte: </Text></Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{aBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Cantiamo allel</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uia, cantiamo allel</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uia</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>cantiamo allel</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{dBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uia, L’Agnello ha v</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{aBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>into</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro... </Text></Text>
        </View>

    </View>
    
    </>
    )
}