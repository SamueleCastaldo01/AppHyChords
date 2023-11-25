import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function AllaDolcePresenza ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>"</Text>Alla d</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>olce, presenza t</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ua Signor,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>il n</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ome Tuo </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>7</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>santo ador</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}     {c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>iam<Text style={globalStyles.textCanticoColo}>" (Bis)</Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>"</Text>Il Tuo </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nome G</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>esù</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>il </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nome che pa</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>7</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ri non </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f} {c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ha!<Text style={globalStyles.textCanticoColo}>" (Bis)</Text></Text>
        </View>

    </View>
    
    </>
    )
}