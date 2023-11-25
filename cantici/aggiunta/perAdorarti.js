import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function PerAdorarti ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1.</Text> Quando v</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}7+</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>edo la Tua Santi</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}7+</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tà,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Quando am</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}7+</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>miro la Tua bel</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}7+</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tà,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Quel che in</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>torno a me diventa o</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mbra</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nella luce </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Tua (Sig</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}4 {g}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nor)</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2.</Text>Quando ho trovato la via al tuo cuore</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>Tu mi hai dato gioia e vero amore</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>Ed io scopro la vera ragione</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>perché io vivo.</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: "</Text>Per ador</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}7+</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>arti Sig</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}/{f}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nor per ador</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>arti</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Sig</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nor, la ra</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>gione per cui vivo</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>  }
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>E’ adorarti Sig</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nor<Text style={globalStyles.textCanticoColo}>" (Bis)</Text></Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>7</Text></View>  }
        </View>

    </View>
    
    </>
    )
}