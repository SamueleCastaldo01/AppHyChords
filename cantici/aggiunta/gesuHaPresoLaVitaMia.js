import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function GesuHaPresoLaVitaMia ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1.</Text>Gesù</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> ha preso la vita mia</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e non vuole lasciar</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}7</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mi</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Gesù </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-7</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>è entrato nel cuore mio</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}7</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Per consolar</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mi</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Ero tri</Text>
                        {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}7</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ste ma </Text>
                        {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ora son feli</Text>
                        {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ce</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Gesù</Text>
                        {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> ha perso </Text>
                        {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}-7</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>la vita mia</Text>
                        {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-7</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e non v</Text>
                        {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}7</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uole lasciar</Text>
                        {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mi</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

    {accordiStru !="Testo" &&
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2Parte</Text></Text>
        </View>
    }

    {accordiStru == "Testo" &&
    <>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2.</Text>Gesù vuole la vita tua</Text>
        </View>
            <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>e non vuole lasciarti</Text>
            </View>
            <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>Gesù vuole il cuore tuo</Text>
            </View>
            <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>per consolarti</Text>
            </View>
            <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>Se ti senti triste</Text>
            </View>
            <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>Con Lui sarai felice</Text>
            </View>
            <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>Gesù vuole la vita tua</Text>
            </View>
            <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}>e non vuole lasciarti</Text>
            </View>
        
    </>
    }


    </View>
    
    </>
    )
}