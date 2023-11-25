import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function GesuStaAscoltando ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Gesù sta ascoltando d</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>7</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>igli ciò che vuoi,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> G</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>esù sta ascoltando </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}></Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>digli ciò che v</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}></Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uoi,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> G</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>esù sta ascoltando </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}></Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>digli ciò che v</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{cDiesis}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uoi,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> Ge</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sù sta ascolt</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ando </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>te, e a</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>llora:</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro:</Text></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>C</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>hiamalo, chiamalo, D</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>7</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>igli ciò che vuoi,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Chiamalo, chiamalo, </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}></Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Digli ciò che </Text>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>vuoi,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Chiamalo, chiamalo, Digli ciò che </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{cDiesis}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>vuoi,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Ge</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sù sta asco</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ltando t</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e!</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2.</Text> Se vuoi salvezza.. <Text style={globalStyles.textCanticoColo}>Coro:</Text></Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2.</Text> Se vuoi il Suo Spirito.. <Text style={globalStyles.textCanticoColo}>Coro:</Text></Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2.</Text> Se vuoi guarigione.. <Text style={globalStyles.textCanticoColo}>Coro:</Text></Text>
        </View>

    </View>
    
    </>
    )
}