import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function TiLodero ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1. </Text> Quando </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>per la prima</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> vo</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>lta t’incon</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>trai Gesù</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Ho sen</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tito la T</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ua gioia nel </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mio cuor</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Sussur</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rasti dolcemente: I</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>o ti amo</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Vogli</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>o vivere pe</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>r sempre de</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ntro te.</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2. </Text> Contemplando il Tuo splendore mi fermai
                    Osservai la Tua bellezza e poi pregai
                    Tu stendesti la Tua mano, mi hai toccato
                    Perdonato e lavato fu il mio cuor.</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro:</Text> Ti lod</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>erò, Ti l</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oderò</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>co</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>n gli ange</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>li del cielo,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Le mie lodi </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>canterò</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>solo a Te mio Signo</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>r<Text style={globalStyles.textCanticoColo}></Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

<View style={globalStyles.righeCantico}>
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: "</Text> Ti lod</Text>
    {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>  }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>erò, Ti l</Text>
    {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>  }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oderò</Text>
</View>

<View style={globalStyles.righeCantico}>
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>co</Text>
    {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>  }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>n gli ange</Text>
    {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>  }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>li del cielo,</Text>
</View>

<View style={globalStyles.righeCantico}>
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
    {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>  }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Le mie lodi </Text>
    {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>  }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>canterò</Text>
</View>

<View style={globalStyles.righeCantico}>
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
    {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>solo a Te </Text>
    {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mio Signo</Text>
    {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>  }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>r<Text style={globalStyles.textCanticoColo}></Text></Text>
</View>


        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>3. </Text> Cosa posso dirTi ancora mio Signore
                Sento la Tua pace dentro me
                Mi dai forza mi sostieni con amore
                Tu dai senso alla mia vita oh Signor.</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: .. (Bis) </Text></Text>
        </View>

    </View>
    
    </>
    )
}