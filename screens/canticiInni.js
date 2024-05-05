import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';
import ImageZoom from 'react-native-image-pan-zoom';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { Value, cond, eq, set } from 'react-native-reanimated';
import { globalStyles } from "../styles/global";
import INNIDATA from '../dbInni.json'

const colorIconBottom = "#04457E"

const PdfViewer = (props) => {

    const [num, setNum] =useState(props.route.params.num);
    
    const [flagView, setFlagView] = useState(false);
    const [currentValue, setCurrentValue] = useState(props.route.params.keyTona);
    const [title, setTitle] =useState(props.route.params.titolo);
    const [perco, setPerco] =useState(props.route.params.percorsoPdf);



  return (
    <View style={globalStyles.container}>

    {/*******************   HEADER***************************************************** */}     
    <View style={ globalStyles.header}>
        <View style= {{ flexDirection:  "row", alignItems: "flex-start", justifyContent: "space-between"}}>
            <View>
                <TouchableOpacity onPress={() => {props.navigation.goBack(); }}>
                    <Ionicons style={{ marginLeft:18, }} name="arrow-back" size={24} color= {colorIconBottom} />
                </TouchableOpacity>
            </View>
            <View><Text style={globalStyles.titleHeader}> HyChords  </Text></View>
            <View style={{ width: 24 }} />
        </View>
            
        </View>


<View style={{ flex: 1, alignItems: "center", alignContent:"center" }}>



<ImageZoom  style={{ flex: 1, alignItems: "center", alignContent:"center" }}
 cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={500}
                       imageHeight={700}>
{num == "1" && 
        <Image
          source={require("../cantici/innarioJpg/1._SIAMO_PER_GRAZIA.jpg")}
          style={{flex: 1, width: "100%" }}
        />
}

{num == "2" && 
        <Image
          source={require("../cantici/innarioJpg/2.ONORIAMO_LA_PAROLA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "3" && 
        <Image
          source={require("../cantici/innarioJpg/3.ECCOCI_NEL_TUO_COSPETTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "4" && 
        <Image
          source={require("../cantici/innarioJpg/4._DIMENTICAR_GIAMMAI_POTRO'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "5" && 
        <Image
          source={require("../cantici/innarioJpg/5._OR_NELLA_FINE_SIAM.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "6" && 
        <Image
          source={require("../cantici/innarioJpg/6._LODE_ALL'ALTISSIMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "7" && 
        <Image
          source={require("../cantici/innarioJpg/7._O_BUON_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "8" && 
        <Image
          source={require("../cantici/innarioJpg/8._ALL'OMBRA_DEL_TUO_AMORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "9" && 
        <Image
          source={require("../cantici/innarioJpg/9._TOCCA_IL_MNIO_CUOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "10" && 
        <Image
          source={require("../cantici/innarioJpg/10._VO'_CANTAR_DEL_SALVATORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "11" && 
        <Image
          source={require("../cantici/innarioJpg/11._LOTTIAM_CON_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "12" && 
        <Image
          source={require("../cantici/innarioJpg/12._CHI_SARA'_SENTO_PICCHIAR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "13" && 
        <Image
          source={require("../cantici/innarioJpg/13._IL_SIGNOR_CHE_E',_CHE_ERA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "14" && 
        <Image
          source={require("../cantici/innarioJpg/14._PARLA,_PARLA_SIGNORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "15" && 
        <Image
          source={require("../cantici/innarioJpg/15._IL_SIGNORE,_VERA_PACE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "16" && 
        <Image
          source={require("../cantici/innarioJpg/16._L'ANIMA_MIA_T'ATTENDE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "17" && 
        <Image
          source={require("../cantici/innarioJpg/17._SONO_NATO_NEGLI_AFFANNI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "18" && 
        <Image
          source={require("../cantici/innarioJpg/18._O_PECCATOR,_VIENI_A_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "19" && 
        <Image
          source={require("../cantici/innarioJpg/19._A_DIO_SIA_LA_GLORIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "20" && 
        <Image
          source={require("../cantici/innarioJpg/20._O_DIO_D'AMOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "21" && 
        <Image
          source={require("../cantici/innarioJpg/21.ALZA,_ALZA_LA_BANDIERA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "22" && 
        <Image
          source={require("../cantici/innarioJpg/22._L'ETERNE_PROMESSE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "23" && 
        <Image
          source={require("../cantici/innarioJpg/23._SIGNORE_PER_FEDE_TI_SENTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "24" && 
        <Image
          source={require("../cantici/innarioJpg/24._VERSO_SION_MARCIAMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "25" && 
 <Text> Non esiste </Text>
}

{num == "26" && 
        <Image
          source={require("../cantici/innarioJpg/26._VIVA_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "27" && 
        <Image
          source={require("../cantici/innarioJpg/27._OH_CHE_GIOIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "28" && 
        <Image
          source={require("../cantici/innarioJpg/28._VENIAM_FRATELLI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "29" && 
        <Image
          source={require("../cantici/innarioJpg/29._DI_VITTORIA_S'ODE_UN_SUON.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "30" && 
        <Image
          source={require("../cantici/innarioJpg/30._IN_OGNI_TEMPO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "31" && 
        <Image
          source={require("../cantici/innarioJpg/31._O_RATELLI_GIUBILIAMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "32" && 
        <Image
          source={require("../cantici/innarioJpg/32._IL_CUOR_A_TE_S'INVOLA_(sulla_melodia_dell'inno_precedente).jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "33" && 
        <Image
          source={require("../cantici/innarioJpg/33._SIGNORE_IN_QUESTA_TERRA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "34" && 
        <Image
          source={require("../cantici/innarioJpg/34._ESALTIAMO_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "35" && 
        <Image
          source={require("../cantici/innarioJpg/35._PRESTO_LASSU'_NEL_CIEL_(sulla_melodia_del_cantico_seguente).jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "36" && 
        <Image
          source={require("../cantici/innarioJpg/36._NEL_TEMPIO_DEL_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "37" && 
        <Image
          source={require("../cantici/innarioJpg/37._VIENI_A_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "38" && 
        <Image
          source={require("../cantici/innarioJpg/38._GLORIOSO_NEL_MIO_CUOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "39" && 
        <Image
          source={require("../cantici/innarioJpg/39._QUANDO_A_DIO_GRIDIAMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "40" && 
        <Image
          source={require("../cantici/innarioJpg/40._MI_PROSTRO_A_TE_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "41" && 
        <Image
          source={require("../cantici/innarioJpg/41._O_SIGNORE,_MIA_ROCCA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "42" && 
        <Image
          source={require("../cantici/innarioJpg/42._IL_SIGNOR_DELLA_MIA_VITA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "43" && 
        <Image
          source={require("../cantici/innarioJpg/43._SOL_LA_STOPRIA_DEL_VANGELO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "44" && 
        <Image
          source={require("../cantici/innarioJpg/44._IL_SIGNORE_DOLCE_E_CLEMENTE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "45" && 
        <Image
          source={require("../cantici/innarioJpg/45._FA_OH_MIO_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "46" && 
        <Image
          source={require("../cantici/innarioJpg/46._PADRE_NOSTRO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "47" && 
        <Image
          source={require("../cantici/innarioJpg/47._GRATI_A_TE_PORGIAMO_OMAGGIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "48" && 
        <Image
          source={require("../cantici/innarioJpg/48._FAMMI_PIU'_PERSEVERANTE_+_49_TITOLO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "49" && 
        <Image
          source={require("../cantici/innarioJpg/48._FAMMI_PIU'_PERSEVERANTE_+_49_TITOLO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "50" && 
        <Image
          source={require("../cantici/innarioJpg/50._FRATELLI_RICERCHIAMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "51" && 
        <Image
          source={require("../cantici/innarioJpg/51._ECCOMI_DAVANTI_A_TE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "52" && 
        <Image
          source={require("../cantici/innarioJpg/52._O_GESU'_SALVATORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "53" && 
        <Image
          source={require("../cantici/innarioJpg/53._IO_SENTO_BUON_PAFRE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "54" && 
        <Image
          source={require("../cantici/innarioJpg/54._O_SIGNOR_DEI_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "55" && 
        <Image
          source={require("../cantici/innarioJpg/55._OH_CHE_GIOIA_E'_PREPARATA_IN_CIEL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "56" && 
        <Image
          source={require("../cantici/innarioJpg/56._QUEL_SANGUE_PREZIOSO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "57" && 
        <Image
          source={require("../cantici/innarioJpg/57._D'UN_SOL_CUORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "58" && 
        <Image
          source={require("../cantici/innarioJpg/58._VITTORIA_SEMPRE_NOI_S'AVRA'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "59" && 
        <Image
          source={require("../cantici/innarioJpg/59._AL_BUON_COMBATTIMENTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "60" && 
        <Image
          source={require("../cantici/innarioJpg/60._LA_NOSTRA_VITTORIA_(sulla_melodia_dell'inno_precedente).jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "61" && 
        <Image
          source={require("../cantici/innarioJpg/61._gloria_alleluia.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "62" && 
        <Image
          source={require("../cantici/innarioJpg/62._manda_la_tua_promessa.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "63" && 
        <Image
          source={require("../cantici/innarioJpg/63._DI_VALOR_IN_VALOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "64" && 
        <Image
          source={require("../cantici/innarioJpg/64._AMIAMOCI_GLI_UNI_GLI_ALTRI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "65" && 
        <Image
          source={require("../cantici/innarioJpg/65._DAL_TUO_TEMPIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "66" && 
        <Image
          source={require("../cantici/innarioJpg/66._SENZA_PENNA_E_SENZA_INCHIOSTRO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "67" && 
        <Image
          source={require("../cantici/innarioJpg/67._FRATELLI_RISCATTATI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "68" && 
        <Image
          source={require("../cantici/innarioJpg/68._SOMMO_IDDIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "69" && 
        <Image
          source={require("../cantici/innarioJpg/69._IN_TE_DILETTA_MIA_(sulla_melodia_dell'inno_seguente).jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "70" && 
        <Image
          source={require("../cantici/innarioJpg/70._IL_NOSTRO_NOME_E'_SCRITTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "71" && 
        <Image
          source={require("../cantici/innarioJpg/71._PIU'_GRATO_A_TE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "72" && 
        <Image
          source={require("../cantici/innarioJpg/72._SEMINA_AL_MATTINO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "73" && 
        <Image
          source={require("../cantici/innarioJpg/73._A_TE_LA_LODE_O_PADRE_D'AMOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "74" && 
        <Image
          source={require("../cantici/innarioJpg/74._QUI_NOI_SIAM_PER_ASCOLTARE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "75" && 
        <Image
          source={require("../cantici/innarioJpg/75._è_LA_VERITA'_CELESTE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "76" && 
        <Image
          source={require("../cantici/innarioJpg/76._L'AMATO_E_BUOIN_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "77" && 
        <Image
          source={require("../cantici/innarioJpg/77._INFINITO_AMORE+78._GLORIA_AL_SALVATORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "79" && 
        <Image
          source={require("../cantici/innarioJpg/79._VIENI_A_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "80" && 
        <Image
          source={require("../cantici/innarioJpg/80._ALLELUIA_IL_BUON_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "81" && 
        <Image
          source={require("../cantici/innarioJpg/81._IN_NOSTRO_SOCCORSO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "82" && 
        <Image
          source={require("../cantici/innarioJpg/82._QUI_SIAM_PELLEGRINI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "83" && 
        <Image
          source={require("../cantici/innarioJpg/83._GLORIA_E_LODE_AL_SANTO_AGNEL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "84" && 
        <Image
          source={require("../cantici/innarioJpg/84._INCOMPARABIL_SIGNORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "85" && 
        <Image
          source={require("../cantici/innarioJpg/85._SANTO_SEI_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "86" && 
        <Image
          source={require("../cantici/innarioJpg/86._O_SIGNOR_TU_RICOLMASTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "87" && 
        <Image
          source={require("../cantici/innarioJpg/87._ECCO_SONO_CON_VOI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "88" && 
        <Image
          source={require("../cantici/innarioJpg/88.TESTO_+_89_RIVELASTI_I_TUOI_TESORI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "89" && 
        <Image
           source={require("../cantici/innarioJpg/88.TESTO_+_89_RIVELASTI_I_TUOI_TESORI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "90" && 
        <Image
          source={require("../cantici/innarioJpg/90._A_PENTECOSTE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "91" && 
        <Image
          source={require("../cantici/innarioJpg/91._VIVER_SEMPRE_CON_TE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "92" && 
        <Image
          source={require("../cantici/innarioJpg/92._IL_NOME_DI_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "93" && 
        <Image
          source={require("../cantici/innarioJpg/93._TU_SEI_PER_ME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "94" && 
        <Image
            source={require("../cantici/innarioJpg/94._NOI_VIVIAMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "95" && 
        <Image
          source={require("../cantici/innarioJpg/95._OH_SUBLIME_AMOR_DIVINO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "96" && 
        <Image
          source={require("../cantici/innarioJpg/96._PERCHE'_UOMO_DI_DOLORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "97" && 
  <Text> Non esiste </Text>
}

{num == "98" && 
        <Image
          source={require("../cantici/innarioJpg/98._LAVAMI,_LAVAMI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "99" && 
        <Image
          source={require("../cantici/innarioJpg/99._CONFIDERO'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "100" && 
        <Image
          source={require("../cantici/innarioJpg/100._ECCOCI_UN'ALTRA_VOLTA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "101" && 
        <Image
          source={require("../cantici/innarioJpg/101._CHE_TI_DARO'_SIGNORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "102" && 
        <Image
          source={require("../cantici/innarioJpg/102._AVANTI_IO_VO'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "103" && 
        <Image
          source={require("../cantici/innarioJpg/103._O_FRATELLI_QUI_SIAM_GIUNTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "104" && 
        <Image
          source={require("../cantici/innarioJpg/104._QUANDO_INSIEM....jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "105" && 
        <Image
          source={require("../cantici/innarioJpg/105._IO_M'ARRENDO_OGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "106" && 
        <Image
          source={require("../cantici/innarioJpg/106._ROCCA_ETERNA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "107" && 
        <Image
          source={require("../cantici/innarioJpg/107._QUALE_GIOIA_QUAL_PIACER.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "108" && 
        <Image
          source={require("../cantici/innarioJpg/108._SACRA_BIBBIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "109" && 
        <Image
          source={require("../cantici/innarioJpg/109._BENEDIZIONI_DAL_CIELO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "110" && 
        <Image
          source={require("../cantici/innarioJpg/110._SOTTO_AL_TUO_SANGUE_OGNORA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "111" && 
        <Image
          source={require("../cantici/innarioJpg/111._NON_PIU'_TIMORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "112" && 
        <Image
          source={require("../cantici/innarioJpg/112._IL_SIGNORE_SIA_LODATO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "113" && 
        <Image
          source={require("../cantici/innarioJpg/113._NOI_SALVATI_DAL_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "114" && 
        <Image
          source={require("../cantici/innarioJpg/114._RAVVIVA_I_NOSTRI_CUORI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "115" && 
        <Image
          source={require("../cantici/innarioJpg/115._LA_FORTE_MIA_DIFESA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "116" && 
        <Image
          source={require("../cantici/innarioJpg/116._DELL'AMORE_DI_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "117" && 
        <Image
          source={require("../cantici/innarioJpg/117._IO_VOLGIO_LA_PREGHIERA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "118" && 
        <Image
          source={require("../cantici/innarioJpg/118._VIENI_TI_CERCA_L'ALMA_MIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "119" && 
        <Image
          source={require("../cantici/innarioJpg/119._VIENI_SIGNORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "120" && 
        <Image
          source={require("../cantici/innarioJpg/120._FRATELLI...VITTORIA_S'AVRA'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "121" && 
        <Image
          source={require("../cantici/innarioJpg/121._AMOR_DIVIN_MI_CHIAMA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "122" && 
        <Image
          source={require("../cantici/innarioJpg/122._ECCOMI_AI_PIEDI_TUOI_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "123" && 
        <Image
          source={require("../cantici/innarioJpg/123._QUAL_FARO_RISPLENDENTE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "124" && 
        <Image
          source={require("../cantici/innarioJpg/124._E_CHE_ALTRO_CERCAR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "125" && 
        <Image
          source={require("../cantici/innarioJpg/125._CANTIAM,_CANTIAMO_A_DIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "126" && 
        <Image
          source={require("../cantici/innarioJpg/126._DAI_PECCATI_CI_LAVO'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "127" && 
        <Image
          source={require("../cantici/innarioJpg/127._BEN_ACCOLTO_DAL_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "128" && 
        <Image
          source={require("../cantici/innarioJpg/128._VERSO_TE_LA_VOCE_ALZIAMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "129" && 
        <Image
          source={require("../cantici/innarioJpg/129._QUANTO_ANELO_ACCOSTARMI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "130" && 
        <Image
          source={require("../cantici/innarioJpg/130._ALLA_PORTA_DEL_TUO_CUORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "131" && 
        <Image
          source={require("../cantici/innarioJpg/131._RALLEGRA_QUESTO_CULTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "132" && 
        <Image
          source={require("../cantici/innarioJpg/132._MIO_SIGNORE_AMARE_TE_SOLO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "133" && 
        <Image
          source={require("../cantici/innarioJpg/133._PONI_IN_DIO_LA_TUA_FIDANZA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "134" && 
        <Image
          source={require("../cantici/innarioJpg/134._VIENI_ALLA_CROCE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "135" && 
        <Image
          source={require("../cantici/innarioJpg/135._QUAL_GRANDE_TESORO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "136" && 
        <Image
          source={require("../cantici/innarioJpg/136._MI_SENTO_OGNOR_CHIAMARE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "137" && 
        <Image
          source={require("../cantici/innarioJpg/137._IL_SIGNOR_CON_NOI_DIMORI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "138" && 
        <Image
          source={require("../cantici/innarioJpg/138._SICURA_IN_MAN_DI_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "139" && 
        <Image
          source={require("../cantici/innarioJpg/139._LA_MIA_RICCHEZZA_+_140._O_BENIGNO_REDENTORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "140" && 
        <Image
           source={require("../cantici/innarioJpg/139._LA_MIA_RICCHEZZA_+_140._O_BENIGNO_REDENTORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "141" && 
        <Image
          source={require("../cantici/innarioJpg/141._MIRABILE,_MIRABILE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "142" && 
        <Image
          source={require("../cantici/innarioJpg/142._PARLA_IN_QUESTO_CULTO_+_143._LIETA_CERTEZZA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "143" && 
        <Image
        source={require("../cantici/innarioJpg/142._PARLA_IN_QUESTO_CULTO_+_143._LIETA_CERTEZZA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "144" && 
        <Image
          source={require("../cantici/innarioJpg/144._CERCHI_IL_MONDO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "145" && 
        <Image
          source={require("../cantici/innarioJpg/145._GRANDE_SEI_TU.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "146" && 
        <Image
          source={require("../cantici/innarioJpg/146._LIETI_ANDIAMO_AVANTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "147" && 
        <Image
          source={require("../cantici/innarioJpg/147.OH_QUAL_PIACERE_IL_NOME+148._LAUDE_ALL'AGNEL_DI_DIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "148" && 
        <Image
           source={require("../cantici/innarioJpg/147.OH_QUAL_PIACERE_IL_NOME+148._LAUDE_ALL'AGNEL_DI_DIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "149" && 
        <Image
          source={require("../cantici/innarioJpg/149._A_TE_GESU'_SI_VOLGE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "150" && 
        <Image
          source={require("../cantici/innarioJpg/150._BIANCHEGGIAR_SI_VEDE_L'ALBA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "151" && 
        <Image
          source={require("../cantici/innarioJpg/151._CHI_POTRA'_DIR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "152" && 
        <Image
          source={require("../cantici/innarioJpg/152._IO_SENTO_LA_TUA_VOCE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "153" && 
        <Image
          source={require("../cantici/innarioJpg/153._CHI_VUOL_PRENDA_IN_DONO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "154" && 
        <Image
          source={require("../cantici/innarioJpg/154._SE_DI_CRISTO_IL_NOME_AMI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "155" && 
        <Image
          source={require("../cantici/innarioJpg/155._UNA_ROCCA_DI_DIMORA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "156" && 
        <Image
          source={require("../cantici/innarioJpg/156._CHE_PUO'_L'ALMA_MIA_LAVAR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "157" && 
        <Image
          source={require("../cantici/innarioJpg/157._DI_PACE_AL_PRINCIPE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "158" && 
        <Image
          source={require("../cantici/innarioJpg/158._SANTO,_SANTO,_SANTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "159" && 
        <Image
          source={require("../cantici/innarioJpg/159._COSPERSA_TIEN_QUEST'ALMA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "160" && 
        <Image
          source={require("../cantici/innarioJpg/160._BENEDIZIONI_ABBONDANTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "161" && 
        <Image
          source={require("../cantici/innarioJpg/161._O_DEVOTI_DI_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "162" && 
        <Image
          source={require("../cantici/innarioJpg/162._AMICO_NON_SAI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "163" && 
        <Image
          source={require("../cantici/innarioJpg/163._SIGNOR_CHE_COL_TUO_SANGUE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "164" && 
        <Image
          source={require("../cantici/innarioJpg/164._DIMMI_LA_STORIA_DI_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "165" && 
        <Image
          source={require("../cantici/innarioJpg/165._EI_CI_LAVO',_EI_CI_LAVO'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "166" && 
        <Image
          source={require("../cantici/innarioJpg/166._INONDAR_MI_SENTO_IL_CUORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "167" && 
        <Image
          source={require("../cantici/innarioJpg/167.MARCIAMO_FRATELLI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "168" && 
        <Image
          source={require("../cantici/innarioJpg/168._O_FRATELLI__A_DIO_DILETTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "169" && 
        <Image
          source={require("../cantici/innarioJpg/169._SALVATI_SIAM.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "170" && 
        <Image
          source={require("../cantici/innarioJpg/170._DOPO_IL_TRAMONTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "171" && 
        <Image
          source={require("../cantici/innarioJpg/171._SIGNORE_TU_SEI_BUONO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "172" && 
        <Image
          source={require("../cantici/innarioJpg/172._PAESE_BEATO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "173" && 
        <Image
          source={require("../cantici/innarioJpg/173._ESALTIAMO_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "174" && 
        <Image
          source={require("../cantici/innarioJpg/174._DI_GESU'_L'IMMENSO_AMOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "175" && 
        <Image
          source={require("../cantici/innarioJpg/175._VIENI_FRATELLO,_VIENI_A_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "176" && 
        <Image
          source={require("../cantici/innarioJpg/176._GESU'_MI_AMA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "177" && 
<Text> Non esiste </Text>
}

{num == "178" && 
        <Image
          source={require("../cantici/innarioJpg/178._TRA_LE_ONDE_OSCURE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "179" && 
        <Image
          source={require("../cantici/innarioJpg/179._IL_BUON_PASTORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "180" && 
        <Image
          source={require("../cantici/innarioJpg/180._CHE_AMOR_GESU'_CI_PORTA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "181" && 
        <Image
          source={require("../cantici/innarioJpg/181._IO_ERO_NEL_FANGO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "182" && 
        <Image
          source={require("../cantici/innarioJpg/182._GUARDA_IL_MIO_CUOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "183" && 
        <Image
          source={require("../cantici/innarioJpg/183._HO_UN_BUON_PASTORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "184" && 
        <Image
          source={require("../cantici/innarioJpg/184._GRAN_PACE_HO_TROVATO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "185" && 
        <Image
          source={require("../cantici/innarioJpg/185._GRANDI_TESORI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "186" && 
        <Image
          source={require("../cantici/innarioJpg/186._SE_PACE_QUAL_FIUME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "187" && 
        <Image
          source={require("../cantici/innarioJpg/187._IL_SANGUE_DI_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "188" && 
        <Image
          source={require("../cantici/innarioJpg/188._GIOIA_E_PACE_AL_CUORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "189" && 
        <Image
          source={require("../cantici/innarioJpg/189._DOVE_MI_GUIDA_IO_ANDRO'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "190" && 
        <Image
          source={require("../cantici/innarioJpg/190._AIUTAMI_SIGNORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "191" && 
        <Image
          source={require("../cantici/innarioJpg/191._GESU'_VOLGE_A_NOI_LA_VOCE_+_192.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "192" && 
        <Image
          source={require("../cantici/innarioJpg/191._GESU'_VOLGE_A_NOI_LA_VOCE_+_192.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "193" && 
        <Image
          source={require("../cantici/innarioJpg/193._IL_SIGNOR_CI_VUOLE_SANTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "194" && 
        <Image
          source={require("../cantici/innarioJpg/194._ECCOMI_AI_PIEDI_TUOI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "195" && 
        <Image
          source={require("../cantici/innarioJpg/195._GUARDA_ALL'AGNEL_DI_DIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "196" && 
        <Image
          source={require("../cantici/innarioJpg/196._LA_CHIESA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "197" && 
        <Image
          source={require("../cantici/innarioJpg/197._DELL'ARCANGELO_LA_VOCE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "198" && 
        <Image
          source={require("../cantici/innarioJpg/198._O_CRISTO_FA_CH'IO_T'AMI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "199" && 
        <Image
          source={require("../cantici/innarioJpg/199._CHI_CERCA_TROVA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "200" && 
        <Image
          source={require("../cantici/innarioJpg/200._LA_CORDA_UN_Dì_SI_SPEZZERA'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "201" && 
        <Image
          source={require("../cantici/innarioJpg/201._IL_MIO_DILETTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "202" && 
        <Image
          source={require("../cantici/innarioJpg/202._VINCITOR,_VINCITOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "203" && 
        <Image
          source={require("../cantici/innarioJpg/203._VIVER_BRAMO_NEL_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "204" && 
        <Image
          source={require("../cantici/innarioJpg/204._LA_TROMBA_SUONA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "205" && 
        <Image
          source={require("../cantici/innarioJpg/205._IL_SIGNORE_M'HA_SALVATO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "206" && 
        <Image
          source={require("../cantici/innarioJpg/206._SON_STRANIERO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "207" && 
        <Image
          source={require("../cantici/innarioJpg/207._RICONCILIATI_CON_DIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "208" && 
        <Image
          source={require("../cantici/innarioJpg/208._SUA_GRAZIA_ABBONDA_PIU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "209" && 
        <Image
          source={require("../cantici/innarioJpg/209._OH_BEATI_NEL_RIPOSO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "210" && 
        <Image
          source={require("../cantici/innarioJpg/210._FAMMI_SENTIRE_LA_TUA_VOCE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "211" && 
        <Image
          source={require("../cantici/innarioJpg/211._NULLA_MI_MANCHERA'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "212" && 
        <Image
          source={require("../cantici/innarioJpg/212._GLORIA_NEI_CIELI_ALTISSIMI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "213" && 
        <Image
          source={require("../cantici/innarioJpg/213._FONTE_D'AMORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "214" && 
        <Image
          source={require("../cantici/innarioJpg/214._O_GESU'_DEL_CIEL_LA_VIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "215" && 
        <Image
          source={require("../cantici/innarioJpg/215._LA_MIA_SPERANZA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "216" && 
        <Image
          source={require("../cantici/innarioJpg/216._NELLE_PROVE_DI_QUAGGIU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "217" && 
        <Image
          source={require("../cantici/innarioJpg/217._O_AMAR_DESIO_TE_SOL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "218" && 
        <Image
          source={require("../cantici/innarioJpg/218._GLORIA_GLORIA_DAI_FEDEL_+_219._ECCO_IL_SANTO_AGNEL_DI_DIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "219" && 
        <Image
          source={require("../cantici/innarioJpg/218._GLORIA_GLORIA_DAI_FEDEL_+_219._ECCO_IL_SANTO_AGNEL_DI_DIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "220" && 
        <Image
          source={require("../cantici/innarioJpg/220._NON_TEMERE_O_TU_CHIESA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "221" && 
        <Image
          source={require("../cantici/innarioJpg/221._GLORIA_ALLELUIA_MECO_E'_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "222" && 
        <Image
          source={require("../cantici/innarioJpg/222._ETERNA_GLORIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "223" && 
        <Image
          source={require("../cantici/innarioJpg/223._O_CARO_SALVATOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "224" && 
        <Image
          source={require("../cantici/innarioJpg/224._GUARDIAMO_AL_SIGNORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "225" && 
        <Image
          source={require("../cantici/innarioJpg/225._FRATELLI_NON_TEMIAMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "226" && 
        <Image
          source={require("../cantici/innarioJpg/226._EI_VUOL_DARTI_NUOVA_VITA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "227" && 
        <Image
          source={require("../cantici/innarioJpg/227._SENTO...UNA_DOLCE_VOCE_+_228._+229..jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "228" && 
        <Image
           source={require("../cantici/innarioJpg/227._SENTO...UNA_DOLCE_VOCE_+_228._+229..jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "229" && 
        <Image
           source={require("../cantici/innarioJpg/227._SENTO...UNA_DOLCE_VOCE_+_228._+229..jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "230" && 
        <Image
          source={require("../cantici/innarioJpg/230._RITORNERA',_RITORNERA'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "231" && 
        <Image
          source={require("../cantici/innarioJpg/231._IL_SALVATOR_PER_ME_MORI'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "232" && 
        <Image
          source={require("../cantici/innarioJpg/232._O_GESU'_VENGO_A_TE_+_233._MI_RALLEGRO_IN_TE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "233" && 
        <Image
           source={require("../cantici/innarioJpg/232._O_GESU'_VENGO_A_TE_+_233._MI_RALLEGRO_IN_TE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "234" && 
        <Image
          source={require("../cantici/innarioJpg/234._IO_SO_CHE_IN_CIEL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "235" && 
        <Image
          source={require("../cantici/innarioJpg/235._FORTE_ROCCA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "236" && 
        <Image
          source={require("../cantici/innarioJpg/236._O_SALVATOR,_TU_SEI_PER_ME_+_237._PAROLE_D'OR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "237" && 
        <Image
          source={require("../cantici/innarioJpg/236._O_SALVATOR,_TU_SEI_PER_ME_+_237._PAROLE_D'OR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "238" && 
        <Image
          source={require("../cantici/innarioJpg/238._QUANTO_BEL_FU_PER_ME_QUEL_DI'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "239" && 
        <Image
          source={require("../cantici/innarioJpg/239._FEDELI_E_FERVENTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "240" && 
        <Image
          source={require("../cantici/innarioJpg/240._O_RE_DEL_CIELO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "241" && 
        <Image
          source={require("../cantici/innarioJpg/241._LA_FEDE_UNA_VOLTA_INSEGNATA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "242" && 
        <Image
          source={require("../cantici/innarioJpg/242._IL_VASELLAIO_TU_SEI_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "243" && 
        <Image
          source={require("../cantici/innarioJpg/243._VOI_CHE_SIETE_ASSETATI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "244" && 
        <Image
          source={require("../cantici/innarioJpg/244._TU_SEI_FEDEL_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "245" && 
        <Image
          source={require("../cantici/innarioJpg/245._GESU'_SUPREMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "246" && 
        <Image
          source={require("../cantici/innarioJpg/246._IN_ME_DIMORA_PER_LA_FE'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "247" && 
        <Image
          source={require("../cantici/innarioJpg/247._FRATELLI_AVANTI_ANDIAM.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "248" && 
        <Image
          source={require("../cantici/innarioJpg/248._VENITE_A_ME_VOI_TUTTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "249" && 
        <Image
          source={require("../cantici/innarioJpg/249.GUSTIAMO_L'AMOR_DI_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "250" && 
        <Image
          source={require("../cantici/innarioJpg/250._IN_GESU'_TROVAI_L'AMICO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "251" && 
        <Image
          source={require("../cantici/innarioJpg/251._QUI_PRESENTE_E'_IL_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "252" && 
        <Image
          source={require("../cantici/innarioJpg/251._QUI_PRESENTE_E'_IL_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "253" && 
        <Image
          source={require("../cantici/innarioJpg/253._LA_FIN_DEL_Dì.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "254" && 
        <Image
          source={require("../cantici/innarioJpg/254._IO_VO_NARRAR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "255" && 
        <Image
          source={require("../cantici/innarioJpg/255.O_GUARDIANO_DEL_MIO_CUOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "256" && 
        <Image
          source={require("../cantici/innarioJpg/256._EI_MORI'_PER_ME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "257" && 
        <Image
          source={require("../cantici/innarioJpg/257._TRAVERSIAMO_QUESTO_MAR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "258" && 
        <Image
          source={require("../cantici/innarioJpg/258._NOI_SEGUACI_DEL_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "259" && 
        <Image
          source={require("../cantici/innarioJpg/259._SIGNOR_LA_TUA_SPOSA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "260" && 
        <Image
          source={require("../cantici/innarioJpg/260._L'AMOR_DI_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "261" && 
        <Image
          source={require("../cantici/innarioJpg/261._IL_TUO_DIR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "262" && 
        <Image
          source={require("../cantici/innarioJpg/262._L'UMANITA'_RICERCA_INVAN.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "263" && 
        <Image
          source={require("../cantici/innarioJpg/263._MINACCIOSA_S'AVANZA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "264" && 
        <Image
          source={require("../cantici/innarioJpg/264._NON_SI_TURBI_IL_VOSTRO_CUORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "265" && 
        <Image
          source={require("../cantici/innarioJpg/265._GESAU'_DAL_MONDO_CI_COMPRO'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "266" && 
        <Image
          source={require("../cantici/innarioJpg/266._LA_MIA_VITA_SPESI_IN_VANITA'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "267" && 
        <Image
          source={require("../cantici/innarioJpg/267._STELLA_DEL_MATTIN.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "268" && 
        <Image
          source={require("../cantici/innarioJpg/268._SII_BATTEZZATO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "269" && 
        <Image
          source={require("../cantici/innarioJpg/269._QUESTO_TUO_FEDEL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "270" && 
  <Text> Non esiste </Text>
}

{num == "271" && 
        <Image
          source={require("../cantici/innarioJpg/271._NEL_CAMMIN_CHE_IO_FARO'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "272" && 
        <Image
          source={require("../cantici/innarioJpg/272._HO_FERMA_CONFIDANZA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "273" && 
        <Image
          source={require("../cantici/innarioJpg/273._FRATELLI_SANTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "274" && 
        <Image
          source={require("../cantici/innarioJpg/274._O_QUAL_PIACER_CANTARE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "275" && 
        <Image
          source={require("../cantici/innarioJpg/275._SON_SOLO_LA_VITA_E_LA_VIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "276" && 
        <Image
          source={require("../cantici/innarioJpg/276._O_SIGNORE_TU_SOLO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "277" && 
        <Image
          source={require("../cantici/innarioJpg/277._MI_COMMUOVE_IL_TRAMONTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "278" && 
        <Image
          source={require("../cantici/innarioJpg/278._NEL_TUO_INFINITO_AMORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "279" && 
        <Image
          source={require("../cantici/innarioJpg/279._PER_LE_VIE_DEL_BEN.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "280" && 
        <Image
          source={require("../cantici/innarioJpg/280._CERCHIAM_COL_CUORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "281" && 
        <Image
          source={require("../cantici/innarioJpg/281._SIGNOR_MI_SON_PROPOSTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "282" && 
        <Image
          source={require("../cantici/innarioJpg/282._GLORIA_A_GESU'_ALLELUIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "283" && 
        <Image
          source={require("../cantici/innarioJpg/283._SOLE_DIVINO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "284" && 
        <Image
          source={require("../cantici/innarioJpg/284._O_PADRE_D'AMORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "285" && 
        <Image
          source={require("../cantici/innarioJpg/285._AL_GOLGOTA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "286" && 
        <Image
          source={require("../cantici/innarioJpg/286._TUA_VOLONTA'_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "287" && 
        <Image
          source={require("../cantici/innarioJpg/287._OH_QUAL_FONDAMENTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "288" && 
        <Image
          source={require("../cantici/innarioJpg/288._sorgente_di_speranza.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "289" && 
        <Image
          source={require("../cantici/innarioJpg/289._DI_CRISTO_CROCIFISSO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "290" && 
        <Image
          source={require("../cantici/innarioJpg/290._DELLA_VITA_I_BEI_DESIR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "291" && 
        <Image
          source={require("../cantici/innarioJpg/291._IN_CANAAN_NOI_ENTREREM.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "292" && 
        <Image
          source={require("../cantici/innarioJpg/292._PERCHE'_T'ABBATTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "293" && 
        <Image
          source={require("../cantici/innarioJpg/293._OH_QUANTO_E'_PREZIOSO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "294" && 
        <Image
          source={require("../cantici/innarioJpg/294._ATTENDIAMO_LA_PIENEZZA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "295" && 
        <Image
          source={require("../cantici/innarioJpg/295.NOVANTANOVE_NELL'OVIL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "296" && 
        <Image
          source={require("../cantici/innarioJpg/296._LUNGO_IL_MIO_CAMMINO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "297" && 
        <Image
          source={require("../cantici/innarioJpg/297._IN_CROCE_IO_VEGGO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "298" && 
        <Image
          source={require("../cantici/innarioJpg/298._CON_LA_CROCE_IN_SPALLA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "299" && 
  <Text> Non esiste </Text>
}

{num == "300" && 
        <Image
          source={require("../cantici/innarioJpg/300._VERRAN_DA_LONTAN_PAESE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "301" && 
        <Image
          source={require("../cantici/innarioJpg/301._TI_RISVEGLIA_E_RISORGI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "302" && 
        <Image
          source={require("../cantici/innarioJpg/302._DIMMI_COME_IL_SALVATORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "303" && 
        <Image
          source={require("../cantici/innarioJpg/303._FINCHE'_UN_BEL_Dì.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "304" && 
        <Image
          source={require("../cantici/innarioJpg/304._O_ALMA_DELUSA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "305" && 
        <Image
          source={require("../cantici/innarioJpg/305._NON_HAI_PACE_NEL_CUOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "306" && 
        <Image
          source={require("../cantici/innarioJpg/306._O_SIGNORE_ONNIPOTENTE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "307" && 
        <Image
          source={require("../cantici/innarioJpg/307._POTESSI_SOL_TOCCAR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "308" && 
        <Image
          source={require("../cantici/innarioJpg/308._SOLO_IN_LUI_SPERA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "309" && 
        <Image
          source={require("../cantici/innarioJpg/309._O_DOLCE_ORA_DEL_PREGAR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "310" && 
        <Image
          source={require("../cantici/innarioJpg/310._O_SPERANZA_D'ISRAELE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "311" && 
        <Image
          source={require("../cantici/innarioJpg/311._LO_SGUARDO_TUO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "312" && 
        <Image
          source={require("../cantici/innarioJpg/312._TU_CHE_DONI_LA_PACE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "313" && 
        <Image
          source={require("../cantici/innarioJpg/313._IL_SOSTEGNO_EDLLA_VITA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "314" && 
        <Image
          source={require("../cantici/innarioJpg/314._L'ALFA_E_L'OMEGA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "315" && 
        <Image
          source={require("../cantici/innarioJpg/315._MI_CONFIDO_NEL_SALVATORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "316" && 
        <Image
          source={require("../cantici/innarioJpg/316._GLORIA_AL_SANTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "317" && 
        <Image
          source={require("../cantici/innarioJpg/317._QUANTO_GLORIOSO_E'_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "318" && 
        <Image
          source={require("../cantici/innarioJpg/318._LA_FINE_D'OGNI_COSA_VIEN.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "319" && 
        <Image
          source={require("../cantici/innarioJpg/319._CAMMINIAMO_CON_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "320" && 
        <Image
          source={require("../cantici/innarioJpg/320._IO_VENGO_PRESTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "321" && 
        <Image
          source={require("../cantici/innarioJpg/321._MI_PARLA_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "322" && 
        <Image
          source={require("../cantici/innarioJpg/322.TRA_BREVE_IL_REDENTOR_+_323._IN_QUEST'ORA_SOLENNE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "323" && 
        <Image
           source={require("../cantici/innarioJpg/322.TRA_BREVE_IL_REDENTOR_+_323._IN_QUEST'ORA_SOLENNE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "324" && 
        <Image
          source={require("../cantici/innarioJpg/324.QUI_NEL_MONDO_V'è_DOLOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "325" && 
        <Image
          source={require("../cantici/innarioJpg/325._OH_L'ALMA_MIA_OPPRESSA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "326" && 
        <Image
          source={require("../cantici/innarioJpg/326._ORA_E'_IL_TEMPO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "327" && 
        <Image
          source={require("../cantici/innarioJpg/327._QUANTO_BRAMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "328" && 
        <Image
          source={require("../cantici/innarioJpg/328._COSI'_QUAL_SONO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "329" && 
        <Image
          source={require("../cantici/innarioJpg/329._OH_QUANTO_E'_BUONO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "330" && 
        <Image
          source={require("../cantici/innarioJpg/330._SII_FEDELE,_SII_FEDEL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "331" && 
        <Image
          source={require("../cantici/innarioJpg/331._SU_QUEL_COLLE_FATAL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "332" && 
        <Image
          source={require("../cantici/innarioJpg/332.NON_V'è_ALTRO_BEN.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "333" && 
        <Image
          source={require("../cantici/innarioJpg/333._QUI_NEL_DESERTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "334" && 
  <Text>Non esiste</Text>
}

{num == "335" && 
        <Image
          source={require("../cantici/innarioJpg/335._GESU'_E'_IL_VERO_AMICO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "336" && 
        <Image
          source={require("../cantici/innarioJpg/336._SENZA_IL_PADRE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "337" && 
        <Image
          source={require("../cantici/innarioJpg/337._A_TE_SIGNOR_S'INNALZINO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "338" && 
        <Image
          source={require("../cantici/innarioJpg/338._QUANTO_SONO_AMABILI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "339" && 
        <Image
          source={require("../cantici/innarioJpg/339._PECCATORI_REDENTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "340" && 
        <Image
          source={require("../cantici/innarioJpg/340._CHI_MUORE_CON_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "341" && 
        <Image
          source={require("../cantici/innarioJpg/341._COL_TUO_AIUTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "342" && 
        <Image
          source={require("../cantici/innarioJpg/342._HO_RINUNCIATO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "343" && 
        <Image
          source={require("../cantici/innarioJpg/343._AVANTI_VOLGO_IL_PASSO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "344" && 
        <Image
          source={require("../cantici/innarioJpg/344._LA_PERLA_DI_GRANDE_VALOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "345" && 
        <Image
          source={require("../cantici/innarioJpg/345._O_GESU'_TORNASTI_IN_CIELO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "346" && 
        <Image
          source={require("../cantici/innarioJpg/346._IO_T'AMO_INEFFABILE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "347" && 
        <Image
          source={require("../cantici/innarioJpg/347._+_348._+_349..jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "348" && 
        <Image
          source={require("../cantici/innarioJpg/347._+_348._+_349..jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "349" && 
        <Image
          source={require("../cantici/innarioJpg/347._+_348._+_349..jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "350" && 
        <Image
          source={require("../cantici/innarioJpg/350._LA_TUA_PRESENZA_BRAMA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "351" && 
        <Image
          source={require("../cantici/innarioJpg/351._OGNOR_DI_TE_BISOGNO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "352" && 
        <Image
          source={require("../cantici/innarioJpg/352._PIU'_PRESSO_A_TE_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "353" && 
        <Image
          source={require("../cantici/innarioJpg/353._GLORIA_A_TE,_GLORIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "354" && 
        <Image
          source={require("../cantici/innarioJpg/354._IL_SANTO_AGNEL_DI_DIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "355" && 
        <Image
          source={require("../cantici/innarioJpg/355._SOL_GESU',_SOL_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "356" && 
        <Image
          source={require("../cantici/innarioJpg/356._SUL_VERDE_COLLE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "357" && 
        <Image
          source={require("../cantici/innarioJpg/357._DEL_FORTE_DI_GIACOBBE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "358" && 
        <Image
          source={require("../cantici/innarioJpg/358._CHI_E'_QUI_PEL_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "359" && 
        <Image
          source={require("../cantici/innarioJpg/359._POSATO_SUL_TUO_CUORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "360" && 
        <Image
          source={require("../cantici/innarioJpg/360.FU_BELLO_IL_Dì.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "361" && 
        <Image
          source={require("../cantici/innarioJpg/361._LO_SGUARDO_ALZATE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "362" && 
        <Image
          source={require("../cantici/innarioJpg/362._IL_CUOR_TI_CHIEDE_+_363.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "363" && 
        <Image
          source={require("../cantici/innarioJpg/362._IL_CUOR_TI_CHIEDE_+_363.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "364" && 
        <Image
          source={require("../cantici/innarioJpg/364._UN_CANTO_DI_GLORIA_+_365..jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "365" && 
        <Image
         source={require("../cantici/innarioJpg/364._UN_CANTO_DI_GLORIA_+_365..jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "366" && 
        <Image
          source={require("../cantici/innarioJpg/366._VENITE_AL_SIGNORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "367" && 
        <Image
          source={require("../cantici/innarioJpg/367._SOLO_PER_GRAZIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "368" && 
        <Image
          source={require("../cantici/innarioJpg/368._DIO_E'_FEDFELE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "369" && 
        <Image
          source={require("../cantici/innarioJpg/369._NO_FOGLIE_NO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "370" && 
        <Image
          source={require("../cantici/innarioJpg/370._O_VOI_CHE_NEGLI_AFFANNI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "371" && 
        <Image
          source={require("../cantici/innarioJpg/371._CREDO_ALLE_PROMESSE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "372" && 
        <Image
          source={require("../cantici/innarioJpg/372._L'AMOR_SUBLIME_(sulla_melodia_dell'inno_383).jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "373" && 
  <Text> Non esiste </Text>
}

{num == "374" && 
        <Image
          source={require("../cantici/innarioJpg/374._PER_LA_SANTA_GUERRA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "375" && 
<Text> Non esiste </Text>
}

{num == "376" && 
<Text> Non esiste </Text>
}

{num == "377" && 
<Text> Non esiste </Text>
}

{num == "378" && 
        <Image
          source={require("../cantici/innarioJpg/378._T'APPARTENGO_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "379" && 
        <Image
          source={require("../cantici/innarioJpg/379._PRESE_IL_MIO_POSTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "380" && 
        <Image
          source={require("../cantici/innarioJpg/380._SUL_SANTO_AGNEL_DI_DIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "381" && 
        <Image
          source={require("../cantici/innarioJpg/381._ANCHE_LA_MORTE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "382" && 
        <Image
          source={require("../cantici/innarioJpg/382._TRA_LE_PAROLE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "383" && 
        <Image
          source={require("../cantici/innarioJpg/383._DECISO_ORMAI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "384" && 
        <Image
          source={require("../cantici/innarioJpg/384._IO_MI_DILETTO_NEL_SIGNORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "385" && 
        <Image
          source={require("../cantici/innarioJpg/385._CELESTE_SENTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "386" && 
        <Image
          source={require("../cantici/innarioJpg/386._QUANT'E'_PIACEVOLE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "387" && 
        <Image
          source={require("../cantici/innarioJpg/387._PRESTO_IO_VENGO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "388" && 
        <Image
          source={require("../cantici/innarioJpg/388._QUANDO_DI_NUVOLE_NERE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "389" && 
        <Image
          source={require("../cantici/innarioJpg/389._OH_SOL_POTESSI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "390" && 
        <Image
          source={require("../cantici/innarioJpg/390._O_REDENTOR_DIVINO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "391" && 
        <Image
          source={require("../cantici/innarioJpg/391._NEGLI_AFFANNI_DELLA_VITA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "392" && 
        <Image
          source={require("../cantici/innarioJpg/392._IL_TEMPO_VOLA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "393" && 
        <Image
          source={require("../cantici/innarioJpg/393._E'_DOLCE_AL_TUO_SERVIZIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "394" && 
        <Image
          source={require("../cantici/innarioJpg/394._QUALE_AMOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "395" && 
        <Image
          source={require("../cantici/innarioJpg/395._VEGLIA_IN_PREGHIERA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "396" && 
        <Image
          source={require("../cantici/innarioJpg/396._O_MONDO_INTER.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "397" && 
        <Image
          source={require("../cantici/innarioJpg/397._CHINASTI_IL_DOCE_VOLETO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "398" && 
        <Image
          source={require("../cantici/innarioJpg/398._O_GLORIA_AL_SIGNOR_+399._OH_AMO_CHE_MI_CERCASTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "399" && 
        <Image
            source={require("../cantici/innarioJpg/398._O_GLORIA_AL_SIGNOR_+399._OH_AMO_CHE_MI_CERCASTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "400" && 
        <Image
          source={require("../cantici/innarioJpg/400._V'è_UNA_PATRIA_PIù_BELLA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "401" && 
        <Image
          source={require("../cantici/innarioJpg/401._SANTO_SPIRITO_DEH_SCENDI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "402" && 
        <Image
          source={require("../cantici/innarioJpg/402._MI_PRENDI_PER__LA_MANO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "403" && 
        <Image
          source={require("../cantici/innarioJpg/403._IL_REGNO_TUO_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "404" && 
        <Image
          source={require("../cantici/innarioJpg/404._QUANDO_SARà_CHE_IN_CIELO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "405" && 
        <Image
          source={require("../cantici/innarioJpg/405._NELL'ASPRA_LANDA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "406" && 
        <Image
          source={require("../cantici/innarioJpg/406._IL_MIO_GESù_PER_ME_MORì.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "407" && 
        <Image
          source={require("../cantici/innarioJpg/407._LA_MIA_SALUTE_E_LUCE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "408" && 
        <Image
          source={require("../cantici/innarioJpg/408._PRESSO_LA_PORTA_DEL_TUO_CUORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "409" && 
        <Image
          source={require("../cantici/innarioJpg/409._DA_QUESTO_MONDO_RIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "410" && 
        <Image
          source={require("../cantici/innarioJpg/410._ATTRAVERSO_QUELLE_NUBI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "411" && 
        <Image
          source={require("../cantici/innarioJpg/411._COME_IL_CERVO_AGOGNA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "412" && 
        <Image
          source={require("../cantici/innarioJpg/412._LA_MIA_VITA_PRENDI_TU.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "413" && 
        <Image
          source={require("../cantici/innarioJpg/413._IN_BIANCA_VESTE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "414" && 
        <Image
          source={require("../cantici/innarioJpg/414._OH_QUANTO_è_BELLO_SERVIRE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "415" && 
        <Image
          source={require("../cantici/innarioJpg/415._SOL_CRISTO_E'_DELLA_CHIESA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "416" && 
        <Image
          source={require("../cantici/innarioJpg/416._E'_LA_CASA_UN_PARADISO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "417" && 
        <Image
          source={require("../cantici/innarioJpg/417._PACRE_BENIGNO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "418" && 
        <Image
          source={require("../cantici/innarioJpg/418._APRITE_AL_GAUDIO_L'ANIMA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "419" && 
        <Image
          source={require("../cantici/innarioJpg/419._SIGNOR_D'OGNI_GRAZIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "420" && 
        <Image
          source={require("../cantici/innarioJpg/420._O_PADRE_DELL'EDEN.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "421" && 
        <Image
          source={require("../cantici/innarioJpg/421._OGNI_LOR_GOIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "422" && 
        <Image
          source={require("../cantici/innarioJpg/422._PRESSO_LA_VIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "423" && 
        <Image
          source={require("../cantici/innarioJpg/423._SEI_NEL_DUOL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "424" && 
        <Image
          source={require("../cantici/innarioJpg/424._ORA_APPARTENGO_A_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "425" && 
        <Image
          source={require("../cantici/innarioJpg/425._TRAMONTA_IL_Dì.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "426" && 
        <Image
          source={require("../cantici/innarioJpg/426._AL_DI_LA'_DEL_SOL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "427" && 
        <Image
          source={require("../cantici/innarioJpg/427._VENITE_INFELICI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "428" && 
        <Image
          source={require("../cantici/innarioJpg/428._SENTO_PACE,_ALLEGREZZA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "429" && 
        <Image
          source={require("../cantici/innarioJpg/429._V'è_UN_SOAVE_NOME_IN_CIEL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "430" && 
        <Image
          source={require("../cantici/innarioJpg/430._SOTTO_LE_ALI_PATERNE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "431" && 
        <Image
          source={require("../cantici/innarioJpg/431._VIENI_MI_DISSE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "432" && 
        <Image
          source={require("../cantici/innarioJpg/432._GRANDE_è_IL_NOSTRO_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "433" && 
        <Image
          source={require("../cantici/innarioJpg/433._SON_SODDISFATTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "434" && 
        <Image
          source={require("../cantici/innarioJpg/434._VOGLIO_RACCONTARE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "435" && 
        <Image
          source={require("../cantici/innarioJpg/435.SPLENDIDO_DON_DI_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "436" && 
        <Image
          source={require("../cantici/innarioJpg/436._TI_VOGLIO_DIR_LA_STORIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "437" && 
        <Image
          source={require("../cantici/innarioJpg/437._ALLELUIA_AL_RE_DEI_RE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "438" && 
        <Image
          source={require("../cantici/innarioJpg/438._TI_VEGGO_SOFFRIR_+_439_QUI_NEL_MONDO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "439" && 
        <Image
            source={require("../cantici/innarioJpg/438._TI_VEGGO_SOFFRIR_+_439_QUI_NEL_MONDO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "440" && 
        <Image
          source={require("../cantici/innarioJpg/440._TU_CHE_SCENDESTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "441" && 
        <Image
          source={require("../cantici/innarioJpg/441._VIENI_DEH_TORNA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "442" && 
        <Image
          source={require("../cantici/innarioJpg/442._IL_MONDOI_è_NEL_DOLORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "443" && 
        <Image
          source={require("../cantici/innarioJpg/443._TROVAI_UN_GIORNO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "444" && 
        <Image
          source={require("../cantici/innarioJpg/444._SIGNORE_IO_T'AMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "445" && 
        <Image
          source={require("../cantici/innarioJpg/445._UN_CUORE_PIEN_D'ARDOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "446" && 
        <Image
          source={require("../cantici/innarioJpg/446._VIVER_SEMPRE_COL_SIGNORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "447" && 
        <Image
          source={require("../cantici/innarioJpg/447._MIRABILE_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "448" && 
        <Image
          source={require("../cantici/innarioJpg/448._VO_VENIRE_O_SALVATOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "449" && 
        <Image
          source={require("../cantici/innarioJpg/449._SOFFRì_PER_ME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "450" && 
        <Image
          source={require("../cantici/innarioJpg/450._VIVEVO_NEL_MAL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "451" && 
        <Image
          source={require("../cantici/innarioJpg/451._DI_GESù_L'AMICA_VOCE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "452" && 
        <Image
          source={require("../cantici/innarioJpg/452._LODA_ALMA_MIA_L'ETERNO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "453" && 
        <Image
          source={require("../cantici/innarioJpg/453._CHE_BEATO_QUEL_GIORNO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "454" && 
        <Image
          source={require("../cantici/innarioJpg/454.AI_PIE'_DELLA_TUA_CROCE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "455" && 
        <Image
          source={require("../cantici/innarioJpg/455._SIGNORE_IN_TE_V'è_RIFUGIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "456" && 
        <Image
          source={require("../cantici/innarioJpg/456._PRIGIONIERO_DEL_PECCATO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "457" && 
        <Image
          source={require("../cantici/innarioJpg/457._FORTE_SCHIERA_GIOVENTU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "458" && 
        <Image
          source={require("../cantici/innarioJpg/458._VENNE_GESù_DAL_CIEL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "459" && 
        <Image
          source={require("../cantici/innarioJpg/459._CAMMINANDO_SUL_SENTIERO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "460" && 
        <Image
          source={require("../cantici/innarioJpg/460._RIGUARDANDO_A_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "461" && 
        <Image
          source={require("../cantici/innarioJpg/461._IL_PECCATO_HO_LASCIATO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "462" && 
        <Image
          source={require("../cantici/innarioJpg/462._QUALCOSA_DI_NUOVO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "463" && 
        <Image
          source={require("../cantici/innarioJpg/463._PERDUTO_SAREI_SENZA_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "464" && 
        <Image
          source={require("../cantici/innarioJpg/464._OH_MILLE_VOCI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "465" && 
        <Image
          source={require("../cantici/innarioJpg/465._CANTO,_CANTO_DI_GIOIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "466" && 
        <Image
          source={require("../cantici/innarioJpg/466._GLORIOSO_E'_IL_NOME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "467" && 
        <Image
          source={require("../cantici/innarioJpg/467._BRAMIAMO_UDIRE_UN_NOM.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "468" && 
        <Image
          source={require("../cantici/innarioJpg/468._IMMENSA_SALVEZZA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "469" && 
        <Image
          source={require("../cantici/innarioJpg/469._OGNORA_IL_GOLGOTA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "470" && 
        <Image
          source={require("../cantici/innarioJpg/470._QUI_MIO_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "471" && 
        <Image
          source={require("../cantici/innarioJpg/471._L'ETERNO_REGNA_ANCOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "472" && 
        <Image
          source={require("../cantici/innarioJpg/472._TUTTO_A_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "473" && 
        <Image
          source={require("../cantici/innarioJpg/473._SANTO,_SANTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "474" && 
        <Image
          source={require("../cantici/innarioJpg/474._CERCATE_PRIMA_IL_REGNO_DI_DIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "475" && 
        <Image
          source={require("../cantici/innarioJpg/475._SON_FELICE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "476" && 
        <Image
          source={require("../cantici/innarioJpg/476._VOGLIO_VENIRE_A_TE_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "477" && 
        <Image
          source={require("../cantici/innarioJpg/477._UN_FUOCO_INIZIO_HA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "478" && 
        <Image
          source={require("../cantici/innarioJpg/478._IO_CREDO_IN_DIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "479" && 
        <Image
          source={require("../cantici/innarioJpg/479._MERAVIGLIOSO_SEI_TU_SOLO_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "480" && 
        <Image
          source={require("../cantici/innarioJpg/480._I_MIEI_ANNI_PIU'_BELLI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "481" && 
        <Image
          source={require("../cantici/innarioJpg/481._GESU'_NAZZARENO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "482" && 
        <Image
          source={require("../cantici/innarioJpg/482._PEDRE_CELESTE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "483" && 
        <Image
          source={require("../cantici/innarioJpg/483._QUANDO_MIO_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "484" && 
        <Image
          source={require("../cantici/innarioJpg/484._VIENI_A_ME_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "485" && 
        <Image
          source={require("../cantici/innarioJpg/485._DONA_TUTTO_A_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "486" && 
        <Image
          source={require("../cantici/innarioJpg/486._ORA_HO_TUTTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "487" && 
        <Image
          source={require("../cantici/innarioJpg/487._QUI_NEL_MONDO_SUL_TUO_SENTIER.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "488" && 
        <Image
          source={require("../cantici/innarioJpg/488._NELLE_VIE_DEL_MONDO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "489" && 
        <Image
          source={require("../cantici/innarioJpg/489._IL_TEMPIO_DI_DIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "490" && 
        <Image
          source={require("../cantici/innarioJpg/490._CANTIAM_ALLELUIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "491" && 
        <Image
          source={require("../cantici/innarioJpg/491._MA_VERRA'_IL_GIORNO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "492" && 
        <Image
          source={require("../cantici/innarioJpg/492._UN_GIORNO_DI_FESTA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "493" && 
        <Image
          source={require("../cantici/innarioJpg/493._GESU'_RITORNA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "494" && 
  <Text> Non esiste </Text>
}

{num == "495" && 
        <Image
          source={require("../cantici/innarioJpg/495._MENSA_PREPARATA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "496" && 
        <Image
          source={require("../cantici/innarioJpg/496._LA_COSA_PIU'_IMPORTANTE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "497" && 
        <Image
          source={require("../cantici/innarioJpg/497._E'_MATTINA_NEL_MIO_CUOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "498" && 
        <Image
          source={require("../cantici/innarioJpg/498.MENTRE_IL_TUO_SPIRITO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "499" && 
        <Image
          source={require("../cantici/innarioJpg/499._SULLA_CROCE_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "500" && 
        <Image
          source={require("../cantici/innarioJpg/500._ASFFIDARSI_A_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "501" && 
        <Image
          source={require("../cantici/innarioJpg/501._TRISTI_E_SOLITARI_DI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "502" && 
        <Image
          source={require("../cantici/innarioJpg/502._GESU'_DOLCE_MUSICA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "503" && 
<Text> Non esiste </Text>
}

{num == "504" && 
<Text> Non esiste </Text>
}

{num == "505" && 
        <Image
          source={require("../cantici/innarioJpg/505._STABILI_SON_LE_PROMESSE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "506" && 
        <Image
          source={require("../cantici/innarioJpg/506._ORSU'_TI_LEVA_GIOVENTU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "507" && 
<Text> Non esiste </Text>
}

{num == "508" && 
<Text> Non esiste </Text>
}

{num == "509" && 
        <Image
          source={require("../cantici/innarioJpg/509.SIAMO_STRAINIERI_QUI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "510" && 
        <Image
          source={require("../cantici/innarioJpg/510._L'UNICA_SPEME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "511" && 
        <Image
          source={require("../cantici/innarioJpg/511._IO_VOGLIO_STAR_VICINO_A_TE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "512" && 
        <Image
          source={require("../cantici/innarioJpg/512._NELLA_TUA_TENDA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "513" && 
        <Image
          source={require("../cantici/innarioJpg/513._CHI_PUO'_SPIEGAR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "514" && 
        <Image
          source={require("../cantici/innarioJpg/514._DAL_CIEL_GESU'_TORNERA'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "515" && 
        <Image
          source={require("../cantici/innarioJpg/515._VOLGI_LO_SGUARDO_A_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "516" && 
        <Image
          source={require("../cantici/innarioJpg/516._NON_TEMERE_CH'IO_TI_GUIDO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "517" && 
        <Image
          source={require("../cantici/innarioJpg/517._BEVO_ALLA_FONTE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "518" && 
        <Image
          source={require("../cantici/innarioJpg/518._TROVAI_LA_PERLA_DI_VALOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "519" && 
<Text> Non esiste </Text>
}

{num == "520" && 
<Text> Non esiste </Text>
}

{num == "521" && 
<Text> Non esiste </Text>
}

{num == "522" && 
<Text> Non esiste </Text>
}

{num == "523" && 
<Text> Non esiste </Text>
}

{num == "524" && 
<Text> Non esiste </Text>
}

{num == "525" && 
        <Image
          source={require("../cantici/innarioJpg/525._GESU'_HA_PRESO_LA_VITA_MIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "526" && 
        <Image
          source={require("../cantici/innarioJpg/526._AMORE_GRANDE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "527" && 
        <Image
          source={require("../cantici/innarioJpg/527._VERSO_LE_PORTE_DEL_CIELO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "528" && 
        <Image
          source={require("../cantici/innarioJpg/528._NULLA_SO_DEL_MIO_DOMANI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "529" && 
        <Image
          source={require("../cantici/innarioJpg/529._CARO_PADRE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "530" && 
        <Image
          source={require("../cantici/innarioJpg/530._DOPO_LA_BATTAGLIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "531" && 
        <Image
          source={require("../cantici/innarioJpg/531._CRISTO_SPEZZA_LE_CATENE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "532" && 
<Text> Non esiste </Text>
}

{num == "533" && 
        <Image
          source={require("../cantici/innarioJpg/533._C'E'_UN_NOME_NUOVO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "534" && 
        <Image
          source={require("../cantici/innarioJpg/534._GIOIA_COME_UN_FIUME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "535" && 
        <Image
          source={require("../cantici/innarioJpg/535._IO_VADO_IN_SION.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "536" && 
        <Image
          source={require("../cantici/innarioJpg/536._LUCE_NEL_MIO_CUOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "537" && 
        <Image
          source={require("../cantici/innarioJpg/537._HO_IL_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "538" && 
        <Image
          source={require("../cantici/innarioJpg/538._CANTERO'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "539" && 
        <Image
          source={require("../cantici/innarioJpg/539._NON_VOGLIO_RESTAR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "540" && 
        <Image
          source={require("../cantici/innarioJpg/540._NEI_GIORNI_ALL'ANTICA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "541" && 
        <Image
          source={require("../cantici/innarioJpg/541.QUANDO_SEI_AFFLITTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "542" && 
        <Image
          source={require("../cantici/innarioJpg/542._OH_CHE_GIOIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "543" && 
        <Image
          source={require("../cantici/innarioJpg/543._SONO_IO_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "544" && 
        <Image
          source={require("../cantici/innarioJpg/544._AL_MIO_SIGNOR_HO_DATO_IL_CUOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "545" && 
        <Image
          source={require("../cantici/innarioJpg/545.SALIRO',_SALIRO'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "546" && 
        <Image
          source={require("../cantici/innarioJpg/546._MERAVIGLIOSO_E'_IL_SUO_NOME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "547" && 
        <Image
          source={require("../cantici/innarioJpg/547._AL_DI_LA'_DEL_GIORDANO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "548" && 
        <Image
          source={require("../cantici/innarioJpg/548._D'ORO_E'_IL_SENTIERO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "549" && 
        <Image
          source={require("../cantici/innarioJpg/549._L'ANTICA_STORIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "550" && 
        <Image
          source={require("../cantici/innarioJpg/550._ABBIAM_TROVATO_IN_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "551" && 
        <Image
          source={require("../cantici/innarioJpg/551._QUANDO_SALIRO'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "552" && 
        <Image
          source={require("../cantici/innarioJpg/552._VO_INCONTRARTI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "553" && 
        <Image
          source={require("../cantici/innarioJpg/553._SE_LO_SPIRITO_DI_DIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "554" && 
<Text> Non esiste </Text>
}

{num == "555" && 
        <Image
          source={require("../cantici/innarioJpg/555._IL_MIO_NOME_E'_LASSU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "556" && 
        <Image
          source={require("../cantici/innarioJpg/556._TIENI_VIVA_LA_TUA_FIAMMA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "557" && 
        <Image
          source={require("../cantici/innarioJpg/557._VIENE_IL_GIORNO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "558" && 
        <Image
          source={require("../cantici/innarioJpg/558._SONO_UN_PELLEGRINO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "559" && 
        <Image
          source={require("../cantici/innarioJpg/559._CRISTO_E'_IL_POTENTE_SIGNORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "560" && 
        <Image
          source={require("../cantici/innarioJpg/560._CHI_VUOL_BENI,_CHI_TESOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "561" && 
        <Image
          source={require("../cantici/innarioJpg/561._ADORERAI_IL_SIGNOR_DIO_TUO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "562" && 
        <Image
          source={require("../cantici/innarioJpg/562._AGNEL_DIVIN.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "563" && 
        <Image
          source={require("../cantici/innarioJpg/563._ALLELUIA,_ALLELUIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "564" && 
<Text> Non esiste </Text>
}

{num == "565" && 
        <Image
          source={require("../cantici/innarioJpg/565._ALLELUIA_CRISTO_MI_SALVO'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "566" && 
        <Image
          source={require("../cantici/innarioJpg/566._ALLELUIA_TUTTO_NUOVO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "567" && 
        <Image
          source={require("../cantici/innarioJpg/567._ALLELUIA_VOGLIO_PROCLAMAR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "568" && 
        <Image
          source={require("../cantici/innarioJpg/568._ALTO_COME_IL_CIELO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "569" && 
        <Image
          source={require("../cantici/innarioJpg/569._ALZO_GLI_OCCHI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "570" && 
        <Image
          source={require("../cantici/innarioJpg/570._AMBASCIATORI_SIAM.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "571" && 
        <Image
          source={require("../cantici/innarioJpg/571._AMO_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "572" && 
        <Image
          source={require("../cantici/innarioJpg/572._APRI_IL_TUO_CUORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "573" && 
        <Image
          source={require("../cantici/innarioJpg/573._ASCOLTAR_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "574" && 
        <Image
          source={require("../cantici/innarioJpg/574._OGNI_DI_CON_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "575" && 
        <Image
          source={require("../cantici/innarioJpg/575._CELEBRIAMO_IL_SIGNORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "576" && 
        <Image
          source={require("../cantici/innarioJpg/576._CERTO_BENI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "577" && 
        <Image
          source={require("../cantici/innarioJpg/577._C'E'_GRANDE_GIOIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "578" && 
        <Image
          source={require("../cantici/innarioJpg/578._COME_IL_CERVO_ANELA_L'ACQUA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "579" && 
        <Image
          source={require("../cantici/innarioJpg/579._CON_IL_MIO_CUOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "580" && 
        <Image
          source={require("../cantici/innarioJpg/580._COME_MAI_PRIMA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "581" && 
        <Image
          source={require("../cantici/innarioJpg/581._CREDI_IN_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "582" && 
        <Image
          source={require("../cantici/innarioJpg/582._DIO_E'_QUI_CON_NOI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "583" && 
        <Image
          source={require("../cantici/innarioJpg/583._DIO_E'_VIVENTE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "584" && 
        <Image
          source={require("../cantici/innarioJpg/584._DIO_REGNA_DAL_CIEL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "585" && 
        <Image
          source={require("../cantici/innarioJpg/585._DISCENDI_SU_DI_ME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "586" && 
        <Image
          source={require("../cantici/innarioJpg/586._ECCO_AI_TUOI_PIE'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "587" && 
        <Image
          source={require("../cantici/innarioJpg/587._E'_IL_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "588" && 
        <Image
          source={require("../cantici/innarioJpg/588._EMMANUEL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "589" && 
        <Image
          source={require("../cantici/innarioJpg/589._M'HA_DATO_IL_SOL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "590" && 
        <Image
          source={require("../cantici/innarioJpg/590._OFFERTA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "591" && 
        <Image
          source={require("../cantici/innarioJpg/591._FA_CHE_IO_VENGA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "592" && 
        <Image
          source={require("../cantici/innarioJpg/592._FA_CHE_SI_SCORGA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "593" && 
        <Image
          source={require("../cantici/innarioJpg/593._FAMMI_PIU'_FEDELE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "594" && 
        <Image
          source={require("../cantici/innarioJpg/594._UN_COMANDAMENTO_NUOVO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "595" && 
        <Image
          source={require("../cantici/innarioJpg/595._GESU'_VIENI_A_RISTORAR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "596" && 
        <Image
          source={require("../cantici/innarioJpg/596._GESU'_E'_QUI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "597" && 
        <Image
          source={require("../cantici/innarioJpg/597._GESU'_NOI_T'AMIAMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "598" && 
        <Image
          source={require("../cantici/innarioJpg/598._QUANTO_AMABIL_SEI_TU.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "599" && 
        <Image
          source={require("../cantici/innarioJpg/599._NOME_CHE_PARI_NON_HA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "600" && 
        <Image
          source={require("../cantici/innarioJpg/600._NOME_AL_DI_SOPRA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "601" && 
        <Image
          source={require("../cantici/innarioJpg/601._GESU'_PER_ME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "602" && 
        <Image
          source={require("../cantici/innarioJpg/602._GIOIA_NEL_MIO_CUOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "603" && 
        <Image
          source={require("../cantici/innarioJpg/603._GESU'_T'ADORIAMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "604" && 
        <Image
          source={require("../cantici/innarioJpg/604._GIGLIO_DELLA_VALLE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "605" && 
        <Image
          source={require("../cantici/innarioJpg/605._NEGLI_ALTI_CIELI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "606" && 
        <Image
          source={require("../cantici/innarioJpg/606._GLORIA_A_GESU'_IL_REDENTOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "607" && 
        <Image
          source={require("../cantici/innarioJpg/607._GLORIA_A_TE_CELESTE_PADRE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "608" && 
        <Image
          source={require("../cantici/innarioJpg/608._GLORIA_E_POTENZA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "609" && 
        <Image
          source={require("../cantici/innarioJpg/609._GRAZIE_A_TE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "610" && 
        <Image
          source={require("../cantici/innarioJpg/610._UNA_MELODIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "611" && 
<Text> Non esiste </Text>
}

{num == "612" && 
        <Image
          source={require("../cantici/innarioJpg/612._IERI,_OGGI_E_IN_ETERNO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "613" && 
        <Image
          source={require("../cantici/innarioJpg/613._IL_FRUTTO_DELLO_SPIRITO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "614" && 
        <Image
          source={require("../cantici/innarioJpg/614._IL_MIO_PECCATO_E'_STATO_RIMOSSO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "615" && 
        <Image
          source={require("../cantici/innarioJpg/615._IL_MIO_RIFUGIO_SEI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "616" && 
        <Image
          source={require("../cantici/innarioJpg/616._IL_RISVERGLIO_SENTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "617" && 
        <Image
          source={require("../cantici/innarioJpg/617._IL_SIGNOR_DIMORA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "618" && 
        <Image
          source={require("../cantici/innarioJpg/618._NON_POTRO'_MAI_DIRE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "619" && 
        <Image
          source={require("../cantici/innarioJpg/619._LA_CITTA'_DEL_CIELO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "620" && 
        <Image
          source={require("../cantici/innarioJpg/620.IO_HO_UN_AMICO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "621" && 
        <Image
          source={require("../cantici/innarioJpg/621._LA_GIOIA_DEL_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "622" && 
        <Image
          source={require("../cantici/innarioJpg/622._L'AMOR_DI_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "623" && 
        <Image
          source={require("../cantici/innarioJpg/623._LA_MIA_COPPA_E'_RICOLMA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "624" && 
        <Image
          source={require("../cantici/innarioJpg/624._LA_MATTINA_LODO_IL_SIGNORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "625" && 
        <Image
          source={require("../cantici/innarioJpg/625._LA_MIA_COPPA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "626" && 
        <Image
          source={require("../cantici/innarioJpg/626._LA_NOSTRA_CASA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "627" && 
        <Image
          source={require("../cantici/innarioJpg/627._IO_VIVO_SOPRA_IL_MONTE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "628" && 
        <Image
          source={require("../cantici/innarioJpg/628.QUAL_LETIZIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "629" && 
        <Image
          source={require("../cantici/innarioJpg/629._LA_TEMPESTA_NON_TEMERE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "630" && 
        <Image
          source={require("../cantici/innarioJpg/630._LODO_IL_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "631" && 
        <Image
          source={require("../cantici/innarioJpg/631._LUNGO_I_RIVI_E_I_PASCHI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "632" && 
        <Image
          source={require("../cantici/innarioJpg/632._ABBI_FIDUCIA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "633" && 
        <Image
          source={require("../cantici/innarioJpg/633._MORI'_PER_ME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "634" && 
        <Image
          source={require("../cantici/innarioJpg/634._NELL'EVANGEL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "635" && 
        <Image
          source={require("../cantici/innarioJpg/635._NEI_SUOI_CORTILI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "636" && 
        <Image
          source={require("../cantici/innarioJpg/636._NOI_PREDICHIAMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "637" && 
        <Image
          source={require("../cantici/innarioJpg/637._NOI_TI_LODIAMO_O_DIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "638" && 
        <Image
          source={require("../cantici/innarioJpg/638._NOI_TI_RINGRAZIAMO_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "639" && 
        <Image
          source={require("../cantici/innarioJpg/639._NEL_MONDO_INTER.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "640" && 
        <Image
          source={require("../cantici/innarioJpg/640._OH,_GLORIA_ALL'AGNEL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "641" && 
        <Image
          source={require("../cantici/innarioJpg/641._O_DIO_CREA_IN_ME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "642" && 
        <Image
          source={require("../cantici/innarioJpg/642._OH_GESU'_GRAZIE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "643" && 
        <Image
          source={require("../cantici/innarioJpg/643._O_GESU'_SEI_PER_ME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "644" && 
        <Image
          source={require("../cantici/innarioJpg/644._O_SANTO_SPIRITO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "645" && 
        <Image
          source={require("../cantici/innarioJpg/645._OH,_QUAL_MIRABILE_AMOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "646" && 
        <Image
          source={require("../cantici/innarioJpg/646._OH_VINCITOR_IO_SONO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "647" && 
        <Image
          source={require("../cantici/innarioJpg/647._OH_PRENDIMI_QUAL_SON.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "648" && 
        <Image
          source={require("../cantici/innarioJpg/648._OVUNQUE_IO_SONO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "649" && 
        <Image
          source={require("../cantici/innarioJpg/649._PADRE_TI_ADORO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "650" && 
        <Image
          source={require("../cantici/innarioJpg/650._PARLIAM_DI_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "651" && 
        <Image
          source={require("../cantici/innarioJpg/651._POTENTE,_POTENTE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "652" && 
        <Image
          source={require("../cantici/innarioJpg/652._POICHE'_SEI_L'ECCELSO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "653" && 
        <Image
          source={require("../cantici/innarioJpg/653._PRESTO_IN_CIEL_SARO'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "654" && 
        <Image
          source={require("../cantici/innarioJpg/654._PRIA_CH'IO_SCORDI_IL_GOLGOTA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "655" && 
        <Image
          source={require("../cantici/innarioJpg/655._NON_POSSO_INDIETREGGIAR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "656" && 
        <Image
          source={require("../cantici/innarioJpg/656._SPLENDENTE_LO_VEDRO'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "657" && 
        <Image
          source={require("../cantici/innarioJpg/657._QUESTO_E'_IL_DI'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "658" && 
        <Image
          source={require("../cantici/innarioJpg/658._SIGNORE_MANDA_UN_RISVEGLIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "659" && 
        <Image
          source={require("../cantici/innarioJpg/659._SALIRO'_IN_ALTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "660" && 
        <Image
          source={require("../cantici/innarioJpg/660._SALVO_SON.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "661" && 
        <Image
          source={require("../cantici/innarioJpg/661._SANTO,_SANTO,_SANTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "662" && 
        <Image
          source={require("../cantici/innarioJpg/662._SCESE_DAL_GOLGOTA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "663" && 
        <Image
          source={require("../cantici/innarioJpg/663._SE_VUOI_GODERE_OGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "664" && 
        <Image
          source={require("../cantici/innarioJpg/664._SIAM_RIUNITI_TUTTI_QUI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "665" && 
        <Image
          source={require("../cantici/innarioJpg/665._SEMPRE_PIU'_VICINO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "666" && 
        <Image
          source={require("../cantici/innarioJpg/666._SIGNORE_AUMENTAMI_LA_FEDE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "667" && 
<Text> Non esiste </Text>
}

{num == "668" && 
        <Image
          source={require("../cantici/innarioJpg/668._SON_CONTENTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "669" && 
        <Image
          source={require("../cantici/innarioJpg/669._SON_DECISO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "670" && 
        <Image
          source={require("../cantici/innarioJpg/670._SON_FELICE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "671" && 
        <Image
          source={require("../cantici/innarioJpg/671._VERSO_IL_CIELO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "672" && 
        <Image
          source={require("../cantici/innarioJpg/672._SUL_CAMPO_NOVAL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "673" && 
        <Image
          source={require("../cantici/innarioJpg/673._TIENMI_SALDO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "674" && 
        <Image
          source={require("../cantici/innarioJpg/674._TI_LODERO'_SIGNOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "675" && 
        <Image
          source={require("../cantici/innarioJpg/675._TU_CONSERVI_LA_PACE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "676" && 
        <Image
          source={require("../cantici/innarioJpg/676._TUTTO_CI_PARLA_AL_CUOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "677" && 
        <Image
          source={require("../cantici/innarioJpg/677._TUTTI_DEBBONO_SAPER.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "678" && 
        <Image
          source={require("../cantici/innarioJpg/678._L'OPRA_DI_SUA_MAN_NEL_CIEL.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "679" && 
        <Image
          source={require("../cantici/innarioJpg/679._UN_MIRACOLO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "680" && 
        <Image
          source={require("../cantici/innarioJpg/680._UNA_NUOVA_VITA.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "681" && 
        <Image
          source={require("../cantici/innarioJpg/681._UNO_SGUARDO_DI_FE'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "682" && 
        <Image
          source={require("../cantici/innarioJpg/682._V'è_RIFUGIO_PER_ME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "683" && 
        <Image
          source={require("../cantici/innarioJpg/683._VICINO_A_TE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "684" && 
        <Image
          source={require("../cantici/innarioJpg/684._V'è_UN_FIUME_PURO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "685" && 
        <Image
          source={require("../cantici/innarioJpg/685._VIEN_NEL_MIO_CUOR.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "686" && 
        <Image
          source={require("../cantici/innarioJpg/686._VIENI_PER_ME.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "687" && 
        <Image
          source={require("../cantici/innarioJpg/687._VI_E'_VITA_IN_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "688" && 
        <Image
          source={require("../cantici/innarioJpg/688._VIENI_SPIRITO_DIVIN.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "689" && 
        <Image
          source={require("../cantici/innarioJpg/689._VOGLIO_CANTAR_LE_MIE_LODI.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "690" && 
        <Image
          source={require("../cantici/innarioJpg/690._GIUBILATE_NEL_SIGNORE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "691" && 
        <Image
          source={require("../cantici/innarioJpg/691._GESU'_MERAVIGLIOSO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "692" && 
<Text> Non esiste </Text>
}

{num == "693" && 
        <Image
          source={require("../cantici/innarioJpg/693._LODERO'_L'ETERNO_IN_OGNI_TEMPO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "694" && 
        <Image
          source={require("../cantici/innarioJpg/694._SU_NEL_CIELO_CON_GESU'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "695" && 
        <Image
          source={require("../cantici/innarioJpg/695._IDDIO_HA_TANTO_AMATO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "696" && 
        <Image
          source={require("../cantici/innarioJpg/696._NON_C'è_DIO_GRANDE_COME_TE.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "697" && 
        <Image
          source={require("../cantici/innarioJpg/697._M'HA_DETTO_CRISTO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "698" && 
        <Image
          source={require("../cantici/innarioJpg/698._FELICITA'.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "699" && 
        <Image
          source={require("../cantici/innarioJpg/699._SIGNORE_DA_CHI_ANDREMO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}

{num == "700" && 
        <Image
          source={require("../cantici/innarioJpg/700._IN_UN_MONDO_OSCURO_E_BUIO.jpg")}
          style={{flex: 1, width: "100%"}}
        />
}
      </ImageZoom>



 
  </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0
    },
    pdf: {
      flex: 1,
      alignSelf: "stretch"
    }
  });

export default PdfViewer;