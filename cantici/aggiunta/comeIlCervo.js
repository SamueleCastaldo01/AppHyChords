import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function ComeIlCervo ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, gDiesis, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Come il </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-{gDiesis}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>cervo a</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nela</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>all’acq</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ua l’alma m</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ia brama</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>s</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>olo </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d} {a} {d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te, sei tu s</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ol ciò che il</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>c</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uor mio </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>brama e voglio</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> ador</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>are </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te; </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}</Text></View>  }
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Da te so</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>l prendo f</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>orza o D</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>io,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>in te s</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>7+/{fDiesis}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ol posso r</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ipos</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ar!</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> S</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ei tu </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}/{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sol ciò che il c</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}/{b}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uor mio b</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-/{bBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rama e</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>voglio </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}4</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ador</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>are </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te!</Text>
        </View>


    </View>
    
    </>
    )
}