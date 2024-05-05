import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function Guidami ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>
    { accordiStru != "Chitarra" &&
<>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1.</Text>Guidam</Text>
                  {(accordiStru != "Testo" && accordiStru != "Chitarra") &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>i, Spirito S</Text>
                  {(accordiStru != "Testo" && accordiStru != "Chitarra") &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>anto,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> inonda</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mi, riempi il mio </Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}      {b}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>cuor</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>guida</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mi, Spirito S</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>anto,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oh Sig</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nor, di te ho bis</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ogno</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>!</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
        {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text>Senza Te non v</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oglio star,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>s</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>enza te non v</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ivo p</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>iù</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>n</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>el mio cuor ho bis</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ogno di Te,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>vieni e prendimi per </Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>man</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>  {g}</Text></View>  }
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Ripetere a capo (Coro bis)</Text></Text>
        </View>
        </>
      }

{/**  CHItarra MElodia         */}
{ accordiStru == "Chitarra" &&
<>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1.</Text>G</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>               {e}-</Text></View>  }
                  {accordiStru == "Chitarra" &&<View><Text style={globalStyles.AccordoCanticoMel}>3       2     1      6     7        1 1    4</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>uidami, Spirito S</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>anto,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}> i</Text>
            {accordiStru == "Chitarra" &&<View><Text style={globalStyles.AccordoCanticoMel}>4     1     2    7       5           6        7      3</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>nonda</Text>   
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>mi, riempi il mio </Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}      {b}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>cuor</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>g</Text>
                  {accordiStru == "Chitarra" &&<View><Text style={globalStyles.AccordoCanticoMel}>3       2     1      6     7        1 1    4</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>uida</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>mi, Spirito S</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>anto,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>o</Text>
                  {accordiStru == "Chitarra" &&<View><Text style={globalStyles.AccordoCanticoMel}>1      2        7      7   1             2  2       1         1 2 3</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>h Sig</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>nor, di te ho bis</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>ogno</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>!</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
        {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text>Senza Te non v</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>oglio star,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>s</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>enza te non v</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>ivo p</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>iù</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>n</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>el mio cuor ho bis</Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>ogno di Te,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}></Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>vieni e prendimi per </Text>
                  {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>man</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>  {g}</Text></View>  }
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Ripetere a capo (Coro bis)</Text></Text>
        </View>
        </>
      }

    </View>
    
    </>
    )
}