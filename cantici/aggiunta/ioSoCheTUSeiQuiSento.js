import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function IoSoCheTuSeiQuiSento ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>" </Text></Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Io so che Tu sei qui </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sento il Tuo cammin</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ar,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Ti muovi tra il Tuo po</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>polo</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>portando liber</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tà<Text style={globalStyles.textCanticoColo}>" (Bis)</Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>C</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>on la fe</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>de arriver</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ò</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>con la </Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>fede Ti tocche</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rò,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>La Tua unz</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ione ricevo</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> or,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> e so</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> che trasform</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ato i sa</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rò</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>   {b}</Text></View> }
        </View>

        <View style={globalStyles.SpazioCantico}></View>

<View style={globalStyles.righeCantico}>
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>C</Text>
      {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}></Text></View> }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>on la fe</Text>
      {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View> }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>de arriver</Text>
      {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View> }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ò</Text>
</View>

<View style={globalStyles.righeCantico}>
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>con la </Text>
      {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View> }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>fede Ti tocche</Text>
      {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View> }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rò,</Text>
</View>

<View style={globalStyles.righeCantico}>
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
      {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View> }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>La Tua unz</Text>
      {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View> }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ione ricevo</Text>
      {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View> }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> or,</Text>
</View>

<View style={globalStyles.righeCantico}>
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e so</Text>
      {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View> }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> che trasform</Text>
      {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View> }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ato i sa</Text>
      {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View> }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rò</Text>
</View>

<View style={globalStyles.righeCantico}>
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e so</Text>
      {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View> }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> che trasform</Text>
      {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View> }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ato i sa</Text>
      {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View> }
    <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rò</Text>
</View>


    </View>
    
    </>
    )
}