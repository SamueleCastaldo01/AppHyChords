import React, { useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Image, Linking, Button } from "react-native";
import Animated  from "react-native-reanimated";
import { FadeInLeft } from "react-native-reanimated";
import * as Animatable from 'react-native-animatable';
import { Shadow } from "react-native-shadow-2";
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { shareAsync } from "expo-sharing";
import * as Print from 'expo-print';
import { captureRef } from "react-native-view-shot";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Usa il set di icone desiderato
import { FontAwesome5 } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import { globalStyles } from "../styles/global";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DropDownPicker from "react-native-dropdown-picker";
import InsiemeATe from "../cantici/aggiunta/insiemeATe";
import ShalomAdonai from "../cantici/aggiunta/shalomAdonai";
import EntreroNelleSuePorte from "../cantici/aggiunta/entreroNelleSuePorte";
import ConLeManiAlzate from "../cantici/aggiunta/conLeManiAlzate";
import GrazieODio from "../cantici/aggiunta/grazieODio";
import DentroAlMioCuor from "../cantici/aggiunta/dentroAlMioCuor";
import UnTempioSanto from "../cantici/aggiunta/unTempioSanto";
import GloriaADio from "../cantici/aggiunta/gloriaADio";
import LaTuaFedelta from "../cantici/aggiunta/laTuaFedelta";
import OCheGranGiorno from "../cantici/aggiunta/oCheGranGio";
import ComeMaiPrima from "../cantici/aggiunta/comeMaiPrima";
import UnVasoNuovo from "../cantici/aggiunta/unVasoNuovo";
import TuPuoiNascereDiNuovo from "../cantici/aggiunta/tuPuoiNascereDi";
import IlMioRifugioSei from "../cantici/aggiunta/ilMioRifugioSei";
import GesuDolceMusica from "../cantici/aggiunta/gesuDolceMusica";
import SiamoRiunitiTuttiQui from "../cantici/aggiunta/siamRiunitiTuttiQui";
import TuHaiDatoAMe from "../cantici/aggiunta/tuHaiDatoAMe";
import IoMiRallegro from "../cantici/aggiunta/ioMIRallegro";
import CheProfondoE from "../cantici/aggiunta/cheProfondoE";
import UnaNuovaVita from "../cantici/aggiunta/unaNuovaVita";
import Emmanuel from "../cantici/aggiunta/emmanuel";
import CanteroCantero from "../cantici/aggiunta/canteroCantero";
import OhGesuGrazie from "../cantici/aggiunta/ohGesuGrazie";
import CaroPadre from "../cantici/aggiunta/caroPadre";
import EBuonoCelebrare from "../cantici/aggiunta/eBuonoCelebrare";
import SuNelCielo from "../cantici/aggiunta/suNelCielo";
import TuSeiIlRifugioMio from "../cantici/aggiunta/tuSeiIlRifugioMio";
import GesuTAdoriamo from "../cantici/aggiunta/gesuTAdoriamo";
import Salmo25 from "../cantici/aggiunta/salmo25";
import AlleluiaTuttoNuovo from "../cantici/aggiunta/alleluiaTuttoNuovo";
import PoicheSeiLeccelso from "../cantici/aggiunta/poicheSeiLEccelso";
import SuNelCiel from "../cantici/aggiunta/suNelCiel";
import IoNonVoglioPiu from "../cantici/aggiunta/ioNonVoglioPiu";
import UnMiracolo from "../cantici/aggiunta/unMiracolo";
import DioEVivente from "../cantici/aggiunta/dioEVivente";
import VoglioCantar from "../cantici/aggiunta/voglioCantar";
import NonSonoPiuLoStesso from "../cantici/aggiunta/nonSonoPiuLoStesso";
import DolceCaroAmico from "../cantici/aggiunta/dolceCaroAmico";
import SemprePiuInAlto from "../cantici/aggiunta/semprePiuInAlto";
import NellaTuaTenda from "../cantici/aggiunta/nellaTuaTenda";
import ComeIlCervo from "../cantici/aggiunta/comeIlCervo";
import MiSonDeciso from "../cantici/aggiunta/miSonDeciso";
import GrandeSei from "../cantici/aggiunta/grandeSei";
import IoPossoOgniCosa from "../cantici/aggiunta/ioPossoOgniCosa";
import AmoreGrande from "../cantici/aggiunta/amoreGrande";
import DioEQui from "../cantici/aggiunta/dioEQui";
import PerAdorarti from "../cantici/aggiunta/perAdorarti";
import IoSento from "../cantici/aggiunta/ioSento";
import GettaIlPesoTuo from "../cantici/aggiunta/gettaIlTuoPesoTuo";
import ManoNellaMano from "../cantici/aggiunta/manoNellaMano";
import GesuCristoETantoGrande from "../cantici/aggiunta/GesuCristoETantoGrande";
import HoTrovatoLaVitaInLui from "../cantici/aggiunta/hoTraovatoLaVita";
import NonSonoPiuIoCheVivo from "../cantici/aggiunta/nonSonoPiuIo";
import IoVoglioSempreAmar from "../cantici/aggiunta/ioVoglioSempreAmar";
import GesuStaAscoltando from "../cantici/aggiunta/gesuStaAscoltando";
import NonMiDispiace from "../cantici/aggiunta/nonMiDispiace";
import TieniVivaLaTuaFiamma from "../cantici/aggiunta/tieniVivaLaTuaFiamma";
import TiLodero from "../cantici/aggiunta/TILodero";
import VeniteALodare from "../cantici/aggiunta/veniteALodare";
import OsannaAllAltissimo from "../cantici/aggiunta/OsannaAllAltissimo";
import FaiDiMeUnoStrumento from "../cantici/aggiunta/faiDiMeUnoStrumento";
import CombattiamoLaBattaglia from "../cantici/aggiunta/combattiamoLaBattaglia";
import LoderoLEterno from "../cantici/aggiunta/loderoLEterno";
import DavantiAlRe from "../cantici/aggiunta/davantiAlRe";
import DiChiTemero from "../cantici/aggiunta/diChiTemero";
import AllaDolcePresenza from "../cantici/aggiunta/allaDolcePresenza";
import TuSeiDegno from "../cantici/aggiunta/tuSeiDegno";
import Magnifichiamo from "../cantici/aggiunta/magnifichiamo";
import VoitTuttiCheSieteAssetati from "../cantici/aggiunta/voiTuttiCheSieteAssetati";
import VieniSpiritoSanto from "../cantici/aggiunta/vieniSpiritoSanto";
import QunatoEMagnifico from "../cantici/aggiunta/quantoEMagnifico";
import SignoreFammi from "../cantici/aggiunta/signoreFammi";
import PrestoMoltoPresto from "../cantici/aggiunta/prestoMoltoPresto";
import AbbaPadre from "../cantici/aggiunta/abbaPadre";
import TuSeiDavveroGrande from "../cantici/aggiunta/tuSeiDavveroGrande";
import TuHaiDipintoICieli from "../cantici/aggiunta/tuHaiDipintoICieli";
import ICieliNarrano from "../cantici/aggiunta/iCieliNarrano";
import AmareTe from "../cantici/aggiunta/amareTe";
import UnPianoPerTe from "../cantici/aggiunta/unPianoPerTe";
import AdoroTeNessunoEComeTe from "../cantici/aggiunta/AdoroTeNessuno";
import AlzoLeMani from "../cantici/aggiunta/alzoLeMani";
import DegnoSeiDOnore from "../cantici/aggiunta/degnoSeiDOnore";
import AmaIlSignor from "../cantici/aggiunta/amaILSignor";
import QuelliCheSperano from "../cantici/aggiunta/quelliCheSperano";
import StringimiOhSignor from "../cantici/aggiunta/stringimiOhSignor";
import LaTuaFedeltaEGrande from "../cantici/aggiunta/laTuafedeltaEGrande";
import IlTuoNomeInnalzo from "../cantici/aggiunta/ilTuoNomeInnalzo";
import PadreCeleste from "../cantici/aggiunta/padreCeleste";
import AlzoGliOcchiAlCiel from "../cantici/aggiunta/alzoGliOcchiAlCiel";
import CambiaIlCuorMio from "../cantici/aggiunta/cambiaIlCuoreMio";
import ConCuoreGrato from "../cantici/aggiunta/conCuoreGrato";
import OhMioSignor from "../cantici/aggiunta/ohMioSignor";
import SignoreVengoATe from "../cantici/aggiunta/signoreVengoATe";
import ApriIMieiOcchi from "../cantici/aggiunta/apriIMieiOcchi";
import AlzoLeManiAlReDeiRe from "../cantici/aggiunta/alzoLeManiAlReDeiRe";
import ETiDicoGrazie from "../cantici/aggiunta/eTIDicoGrazie";
import SeNonAvessiTe from "../cantici/aggiunta/seNonAvessiTe";
import TuSeiRe from "../cantici/aggiunta/tuSeiRe";
import EiMori from "../cantici/aggiunta/eiMori";
import GridiamDiGioia from "../cantici/aggiunta/gridiamDiGioia";
import IlTuoAmor from "../cantici/aggiunta/ilTuoAmor";
import SpiritoSanto from "../cantici/aggiunta/spiritoSanto";
import TuVedrai from "../cantici/aggiunta/tuVedrai";
import UnVasoPerTe from "../cantici/aggiunta/unVasoPerTe";
import GiornoPerGiorno from "../cantici/aggiunta/giornoPerGiorno";
import SiamoQuiPerAdorarti from "../cantici/aggiunta/siamoQuiPerAdorarti";
import ScendeDolcemente from "../cantici/aggiunta/scendeDolcemente";
import SuQuellaCroce from "../cantici/aggiunta/suQuellaCroce";
import VieniInSuaPresenza from "../cantici/aggiunta/vieniInSuaPresenza";
import TiSeiDato from "../cantici/aggiunta/tiSeiDato";
import TiDonoSignor from "../cantici/aggiunta/tiDonoOhSignor";
import ChiCiSeparera from "../cantici/aggiunta/chiCiSeparerà";
import GuardareSoloTeSignor from "../cantici/aggiunta/guardareSoloTeSignor";
import BenediciOhAlmaMia from "../cantici/aggiunta/benediciOhAlmaMia";
import EraLi from "../cantici/aggiunta/EraLi";
import CeUnDioMoltoGrande from "../cantici/aggiunta/ceUnDioMoltoGrande";
import DavantiAlTuoTrono from "../cantici/aggiunta/davantiAlTuoTrono";
import TuMiPrendiPerMano from "../cantici/aggiunta/tuMiPrendiPerMano";
import InComunione from "../cantici/aggiunta/inComunione";
import IlMioAmico from "../cantici/aggiunta/ilMioAmicoMigliore";
import TiStoCercando from "../cantici/aggiunta/tiStoCercando";
import ChiDimora from "../cantici/aggiunta/chiDimora";
import UnaGraziaDellEterno from "../cantici/aggiunta/unaGraziaDellEterno";
import OgniDiOgniDi from "../cantici/aggiunta/ogniDiOgniDi";
import LodeAllEterno from "../cantici/aggiunta/lodeAllEterno";
import LeternoE from "../cantici/aggiunta/lEternoE";
import LodareDio from "../cantici/aggiunta/lodareDio";
import QuestoEIlDI from "../cantici/aggiunta/questoEIlDi";
import PiuAmorePiuForza from "../cantici/aggiunta/piuAmorePiuForza";
import Lodiam from "../cantici/aggiunta/lodiam";
import GesuSeiIlMioSignor from "../cantici/aggiunta/gesuSeilIlMioSignor";
import IGiorniDiElia from "../cantici/aggiunta/iGiorniDiElia";
import SeTuHaiFede from "../cantici/aggiunta/seTuHaiFede";
import AccendiUnaLuce from "../cantici/aggiunta/accendiUnaLuce";
import GesuHaMessoQuestoCanto from "../cantici/aggiunta/gesuHaMessoQuesto";
import TuSeiIlMioScudo from "../cantici/aggiunta/tuSeiIlMioScudo";
import StoCantandoAllegro from "../cantici/aggiunta/stoCantandoAllegro";
import PreziosoDio from "../cantici/aggiunta/preziosoDio";
import AmicoVieni from "../cantici/aggiunta/amicoVieni";
import QuandoAscolti from "../cantici/aggiunta/quandoAscolti";
import MiRialzerai from "../cantici/aggiunta/miRialzerai";
import SpiritoSantoFaiTu from "../cantici/aggiunta/spiritoSantoFaiTu";
import IoSoCheTuSeiQui from "../cantici/aggiunta/ioSoCheTuSeiQui";
import ConLeManiAlzateVerso from "../cantici/aggiunta/conLeManiAlzateVerso";
import NoiPredichiamoCristo from "../cantici/aggiunta/noiPredichiamoCristo";
import LUnzioneScendeSuNoi from "../cantici/aggiunta/LUnzioneScendeSuNoi";
import AiPiediDellaCroce from "../cantici/aggiunta/aiPiediDellaCroce";
import ColSignorMarciam from "../cantici/aggiunta/colSignorMarciam";
import UnitiNelSuoAmor from "../cantici/aggiunta/unitiNelSuoAmor";
import MiFaiRiposare from "../cantici/aggiunta/miFaiRiposare";
import QuandoPensoAlTuoAmore from "../cantici/aggiunta/quandoPensoAlTuoAmore";
import IoTiOffroMeStesso from "../cantici/aggiunta/ioTiOffroMeStesso";
import DioUnaviaFara from "../cantici/aggiunta/dioUnaViaFarà";
import TuSeiSanto from "../cantici/aggiunta/tuSeiSanto";
import BuonoE from "../cantici/aggiunta/buonoE";
import NellaTuaPresenza from "../cantici/aggiunta/nellaTuaPresenza";
import QuandoNonSentiro from "../cantici/aggiunta/quandoNonSentiro";
import ToccaIlMioCuorSignor from "../cantici/aggiunta/toccaIlMioCuorSignor";
import HaiRinunciatoAllaTuaMaesta from "../cantici/aggiunta/haiRinunciatoAllaTuaMaesta";
import AlSicuroInTe from "../cantici/aggiunta/alSicuroInTe";
import IoCredoInTe from "../cantici/aggiunta/ioCredoInTe";
import Fede from "../cantici/aggiunta/fede";
import TuttoEPossibile from "../cantici/aggiunta/tuttoEPossibile";
import AmamiPerche from "../cantici/aggiunta/amamiPerche";
import RitornoATe from "../cantici/aggiunta/ritornoATe";
import VoglioStareConTe from "../cantici/aggiunta/voglioStareConTe";
import SeIlMioPopolo from "../cantici/aggiunta/seIlMioPopoli";
import MeravigliosoSei from "../cantici/aggiunta/meravigliosoSei";
import ScendiSpiritoSanto from "../cantici/aggiunta/scendiSpiritoSanto";
import HoBisognoDiTe from "../cantici/aggiunta/hoBisognoDiTe";
import PrimoAmore from "../cantici/aggiunta/primoAmore";
import LodinoGliAngeli from "../cantici/aggiunta/lodinoGliAngeli";
import Nascondimi from "../cantici/aggiunta/nascondimi";
import LuceDelMondo from "../cantici/aggiunta/luceDelMondo";
import TuaMaesta from "../cantici/aggiunta/tuaMaesta";
import SiamoUnMomento from "../cantici/aggiunta/siamoUnMomento";
import CantiamAlSignore from "../cantici/aggiunta/cantiamAlSignor";
import DegnoELAgnel from "../cantici/aggiunta/DegnoELAgnel";
import AprimiGliOcchi from "../cantici/aggiunta/aprimiGliOcchi";
import EgliEDegno from "../cantici/aggiunta/egliEDegno";
import IoSoCheTuSeiQuiSento from "../cantici/aggiunta/ioSoCheTUSeiQuiSento";
import BenedettoSei from "../cantici/aggiunta/benedettoSei";

const colorIconBottom = "#04457E"
const primary = "#04457E"

export default function Cantico(props) {
    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [flagSaveKey, setFlagSaveKey] = useState();
    const [currentValue, setCurrentValue] = useState(props.route.params.keyTona);
    const [title, setTitle] =useState(props.route.params.titolo);
    const [key, setKey] =useState(props.route.params.keyTona);
    const [accordiStru, setAccordiStru] = useState("Piano");

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
      setIsOpen(false);
      setIsDropdownOpenDown(false);
    };

    const [isDropdownOpenDown, setIsDropdownOpenDown] = useState(false);
    const toggleDropdownDown = () => {
      setIsDropdownOpenDown(!isDropdownOpenDown);
      setIsOpen(false);
      setIsDropdownOpen(false);
    };


//****************************************************************************** */
    const openDropdown = () => {
      setIsOpen(true);
      setIsDropdownOpen(false);
      setIsDropdownOpenDown(false);
    };

    const closeDropdown = (e) => {
        setIsOpen(false);
        setIsDropdownOpen(false);
        setIsDropdownOpenDown(false);
      };

    const onFocus = () => {
        setIsFocused(true);
      };
    
      const onBlur = () => {
        setIsFocused(false);
      };

      const changeBasso = () => {
        setAccordiStru("Basso");
        setGlobalAccor("Basso");
        setIsDropdownOpen(false);
      };

      const changePiano = () => {
        setAccordiStru("Piano");
        setGlobalAccor("Piano");
        setIsDropdownOpen(false);
      };

      const changeChitarra = () => {
        setAccordiStru("Chitarra");
        setGlobalAccor("Chitarra");
        setIsDropdownOpen(false);
      };

      const changeBatteria = () => {
        setAccordiStru("Batteria");
        setGlobalAccor("Batteria");
        setIsDropdownOpen(false);
      };

      const changeTesto = () => {
        setAccordiStru("Testo");
        setGlobalAccor("Testo");
        setIsDropdownOpen(false);
      };

      const viewToSnapshotRef = useRef();

      //crea un immagine del cantico e lo condivide
        const snapshotShare = async () => {
          closeDropdown()
          const result = await captureRef(viewToSnapshotRef);
          await shareAsync(result);
        };
      
//******************CREATE PDF FILE PRINT******************************************** */
          const captureImage = async () => {
          const result = await captureRef(viewToSnapshotRef, { result: 'data-uri' });
          return result;
        };

        const createPrintDocument = async (imageUri) => {
          const nomeFile = "bho.pdf"
          const html = `
          <html>
            <body>
            <div style=" margin: 0 auto; padding: 5mm; background-color:#EFEFEF; ">
                <img src="${imageUri}" style="width: 155mm; height: auto; padding-top: 5mm;"/>
            </div>
            </body>
          </html>
        `;
          const { uri } = await Print.printToFileAsync({ html: html, base64: false, });
          return uri;
        };
      
        const printDocument = async (documentUri) => {
          const nomeFile = "bho.pdf"
          await Print.printAsync({ uri: documentUri});
        };
      
//********************************************************************************* */
        const openExternalURLPDF = () => {
          const url = 'https://drive.google.com/drive/folders/1wHM6-ii-VwpTEqKMiC-bKWUyrdSPdLLf?usp=sharing'; // Sostituisci con l'URL che vuoi aprire
          Linking.openURL(url).catch((err) => console.error('Errore nellapertura dell\'URL', err));
        };
      
      
//**************************************************************_________________________________________________________________________ */
    const [menoTre, setMenoTre] = useState("");
    const [menoDueMenz, setMenoDueMenz] = useState("");
    const [menoDue, setMenoDue] = useState("");
    const [menoUnoMenz, setMenoUnoMenz] = useState("");
    const [menoUno, setMenoUno] = useState("");
    const [menoZeroMenz, setMenoZeroMenz] = useState("");
    const [zero, setZero] = useState("");
    const [piuZeroMenz, setPiuZeroMenz] = useState("");
    const [piuUno, setPiuUno] = useState("");
    const [piuUnoMenz, setPiuUnoMenz] = useState("");
    const [piuDue, setpiuDue] = useState("");
    const [piuDueoMenz, setPiuDueMenz] = useState("");
    const [piuTre, setpiuTre] = useState("");

    const keyTona = [
        {label: menoTre, value: "-3"},
        {label: menoDueMenz, value: "-2.5"},
        {label: menoDue, value: "-2"},
        {label: menoUnoMenz, value: "-1.5"},
        {label: menoUno, value: "-1"},
        {label: menoZeroMenz, value: "-0.5"},
        {label: zero, value: "0"},
        {label: piuZeroMenz, value: "0.5"},
        {label: piuUno, value: "1"},
        {label: piuUnoMenz, value: "1.5"},
        {label: piuDue, value: "2"},
        {label: piuDueoMenz, value: "2.5"},
        {label: piuTre, value: "3"},     
    ]

    const [c, setC] = useState("DO");
    const [cDiesis, setCDiesis] = useState("DO#");
    const [dBemolle, setDBemolle] = useState("REb");
    const [d, setD] = useState("RE");
    const [dDiesis, setDDiesis] = useState("RE#");
    const [eBemolle, setEBemolle] = useState("MIb");
    const [e, setE] = useState("MI");
    const [f, setF] = useState("FA");
    const [fDiesis, setFDiesis] = useState("FA#");
    const [gBemolle, setGBemolle] = useState("SOLb");
    const [g, setG] = useState("SOL");
    const [gDiesis, setGDiesis] = useState("SOL#");
    const [aBemolle, setABemolle] = useState("LAb");
    const [a, setA] = useState("LA");
    const [aDiesis, setADiesis] = useState("LA#");
    const [bBemolle, setBBemolle] = useState("SIb");
    const [b, setB] = useState("SI");


    const cambiaTona = (ton) => {
        if(ton === "-0.5") {
          setC("SI");
          setCDiesis("DO");
          setDBemolle("DO");
          setD("DO#");
          setDDiesis("RE");
          setEBemolle("RE");
          setE("MIb");
          setF("MI");
          setFDiesis("FA");
          setGBemolle("FA")
          setG("FA#");
          setGDiesis("SOL")
          setABemolle("SOL");
          setA("LAb");
          setADiesis("LA")
          setBBemolle("LA");
          setB("SIb");
      }
          if(ton === "-1") {
              setC("SIb");
              setCDiesis("SI");
              setDBemolle("SI");
              setD("DO");
              setDDiesis("DO#");
              setEBemolle("REb");
              setE("RE");
              setF("MIb");
              setFDiesis("MI");
              setGBemolle("MI")
              setG("FA");
              setGDiesis("FA#")
              setABemolle("SOLb");
              setA("SOL");
              setADiesis("SOL#")
              setBBemolle("LAb");
              setB("LA");
          }
          if(ton === "-1.5") {
            setC("LA");
            setCDiesis("SIb");
            setDBemolle("SIb");
            setD("SI");
            setDDiesis("DO")
            setEBemolle("DO");
            setE("DO#");
            setF("RE");
            setFDiesis("RE#");
            setGBemolle("MIb")
            setG("MI");
            setGDiesis("FA")
            setABemolle("FA");
            setA("FA#");
            setADiesis("SOL")
            setBBemolle("SOL");
            setB("LAb");
        }
          if(ton === "-2") {
              setC("LAb");
              setCDiesis("LA");
              setDBemolle("LA");
              setD("SIb");
              setDDiesis("SI")
              setEBemolle("SI");
              setE("DO");
              setF("DO#");
              setFDiesis("RE");
              setGBemolle("RE")
              setG("MIb");
              setGDiesis("MI")
              setABemolle("MI");
              setA("FA");
              setADiesis("FA#")
              setBBemolle("SOLb");
              setB("SOL");
          }
          if(ton === "-2.5") {
            setC("SOL");
            setCDiesis("SOL#");
            setDBemolle("LAb");
            setD("LA");
            setDDiesis("LA#")
            setEBemolle("SIb");
            setE("SI");
            setF("DO");
            setFDiesis("DO#");
            setGBemolle("REb")
            setG("RE");
            setGDiesis("RE#")
            setABemolle("MIb");
            setA("MI");
            setADiesis("FA")
            setBBemolle("FA");
            setB("FA#");
        }
          if(ton === "-3") {
              setC("FA#");
              setCDiesis("SOL");
              setDBemolle("SOL");
              setD("LAb");
              setDDiesis("LA");
              setEBemolle("LA");
              setE("SIb");
              setF("SI");
              setFDiesis("DO");
              setGBemolle("DO")
              setG("DO#");
              setGDiesis("RE")
              setABemolle("RE");
              setA("MIb");
              setADiesis("MI")
              setBBemolle("MI");
              setB("FA");
          }
          if(ton === "0") {
              setC("DO");
              setCDiesis("DO#");
              setDBemolle("REb");
              setD("RE");
              setDDiesis("RE#")
              setEBemolle("MIb");
              setE("MI");
              setF("FA");
              setFDiesis("FA#");
              setGBemolle("SOLb")
              setG("SOL");
              setGDiesis("SOL#")
              setABemolle("LAb");
              setA("LA");
              setADiesis("LA#")
              setBBemolle("SIb");
              setB("SI");
          }
          if(ton === "0.5") {
            setC("DO#");
            setCDiesis("RE");
            setDBemolle("RE");
            setD("MIb");
            setDDiesis("MI")
            setEBemolle("MI");
            setE("FA");
            setF("FA#");
            setFDiesis("SOL");
            setGBemolle("SOL")
            setG("LAb");
            setGDiesis("LA")
            setABemolle("LA");
            setA("SIb");
            setADiesis("SI")
            setBBemolle("SI");
            setB("DO");
        }
          if(ton === "1") {
              setC("RE");
              setCDiesis("RE#");
              setDBemolle("MIb");
              setD("MI");
              setDDiesis("FA");
              setEBemolle("FA");
              setE("FA#");
              setF("SOL");
              setFDiesis("SOL#");
              setGBemolle("LAb")
              setG("LA");
              setGDiesis("LA#")
              setABemolle("SIb");
              setA("SI");
              setADiesis("DO")
              setBBemolle("DO");
              setB("DO#");
          }
          if(ton === "1.5") {
            setC("MIb");
            setCDiesis("MI");
            setDBemolle("MI");
            setD("FA");
            setDDiesis("FA#")
            setEBemolle("FA#");
            setE("SOL");
            setF("LAb");
            setFDiesis("LA");
            setGBemolle("LA")
            setG("SIb");
            setGDiesis("SI");
            setABemolle("SI");
            setA("DO");
            setADiesis("DO#")
            setBBemolle("MIb");
            setB("MI");
        }
          if(ton === "2") {
              setC("MI");
              setCDiesis("FA");
              setDBemolle("FA");
              setD("FA#");
              setDDiesis("SOL")
              setEBemolle("SOL");
              setE("LAb");
              setF("LA");
              setFDiesis("LA#");
              setGBemolle("SIb")
              setG("SI");
              setGDiesis("DO")
              setABemolle("DO");
              setA("DO#");
              setADiesis("RE")
              setBBemolle("RE");
              setB("MIb");
          }
          if(ton === "2.5") {
            setC("FA");
            setCDiesis("FA#");
            setDBemolle("SOLb");
            setD("SOL");
            setDDiesis("SOL#")
            setEBemolle("LAb");
            setE("LA");
            setF("SIb");
            setFDiesis("SI");
            setGBemolle("SI")
            setG("DO");
            setGDiesis("DO#")
            setABemolle("REb");
            setA("RE");
            setADiesis("RE#")
            setBBemolle("MIb");
            setB("MI");
        }
          if(ton == "3") {
            setC("FA#");
            setCDiesis("SOL");
            setDBemolle("SOL");
            setD("LAb");
            setDDiesis("LA")
            setEBemolle("LA");
            setE("SIb");
            setF("SI");
            setFDiesis("DO");
            setGBemolle("DO")
            setG("DO#");
            setGDiesis("RE")
            setABemolle("RE");
            setA("MIb");
            setADiesis("MI")
            setBBemolle("MI");
            setB("FA");
          }
      }

      //questa funzione mi serve per cambiare il nome al label, in base alla chiave attuale
      const cmbTn = (key) => {
        if(key == "REb") {
          setMenoTre("SOL");
          setMenoDueMenz("LAb");
          setMenoDue("LA");
          setMenoUnoMenz("SIb");
          setMenoUno("SI");
          setMenoZeroMenz("DO");
          setZero("REb");
          setPiuZeroMenz("RE");
          setPiuUno("MIb");
          setPiuUnoMenz("MI");
          setpiuDue("FA");
          setPiuDueMenz("SOLb");
          setpiuTre("SOL");
      }

        if(key == "RE") {
          setMenoTre("SOL#");
          setMenoDueMenz("LA");
          setMenoDue("LA#");
          setMenoUnoMenz("SI");
          setMenoUno("DO");
          setMenoZeroMenz("DO#");
          setZero("RE");
          setPiuZeroMenz("RE#");
          setPiuUno("MI");
          setPiuUnoMenz("FA");
          setpiuDue("FA#");
          setPiuDueMenz("SOL");
          setpiuTre("SOL#");
      }
      if(key == "RE#") {
        setMenoTre("LA");
        setMenoDueMenz("LA#");
        setMenoDue("SI");
        setMenoUnoMenz("DO");
        setMenoUno("DO#");
        setMenoZeroMenz("RE");
        setZero("RE#");
        setPiuZeroMenz("MI");
        setPiuUno("FA");
        setPiuUnoMenz("FA#");
        setpiuDue("SOL");
        setPiuDueMenz("SOL#");
        setpiuTre("LA");
    }
      if(key == "MIb") {
        setMenoTre("LA");
        setMenoDueMenz("LA#");
        setMenoDue("SI");
        setMenoUnoMenz("DO");
        setMenoUno("DO#");
        setMenoZeroMenz("RE");
        setZero("MIb");
        setPiuZeroMenz("MI");
        setPiuUno("FA");
        setPiuUnoMenz("FA#");
        setpiuDue("SOL");
        setPiuDueMenz("SOL#");
        setpiuTre("LA");
    }
      if(key == "MI") {
        setMenoTre("SIb");
        setMenoDueMenz("SI");
        setMenoDue("DO");
        setMenoUnoMenz("REb");
        setMenoUno("RE");
        setMenoZeroMenz("MIb");
        setZero("MI");
        setPiuZeroMenz("FA");
        setPiuUno("SOLb");
        setPiuUnoMenz("SOL");
        setpiuDue("LAb");
        setPiuDueMenz("LA");
        setpiuTre("SIb");
    }
      if(key == "FA") {
      setMenoTre("SI");
      setMenoDueMenz("DO");
      setMenoDue("DO#");
      setMenoUnoMenz("RE");
      setMenoUno("MIb");
      setMenoZeroMenz("MI");
      setZero("FA");
      setPiuZeroMenz("FA#");
      setPiuUno("SOL");
      setPiuUnoMenz("SOL#");
      setpiuDue("LA");
      setPiuDueMenz("LA#");
      setpiuTre("SI");
    }
    if(key == "FA#") {
      setMenoTre("DO");
      setMenoDueMenz("DO#");
      setMenoDue("RE");
      setMenoUnoMenz("MIb");
      setMenoUno("MI");
      setMenoZeroMenz("FA");
      setZero("FA#");
      setPiuZeroMenz("SOL");
      setPiuUno("LAb");
      setPiuUnoMenz("LA");
      setpiuDue("SIb");
      setPiuDueMenz("SI");
      setpiuTre("DO");
  }
  if(key == "SOLb") {
    setMenoTre("DO");
    setMenoDueMenz("REb");
    setMenoDue("RE");
    setMenoUnoMenz("MIb");
    setMenoUno("MI");
    setMenoZeroMenz("FA");
    setZero("SOLb");
    setPiuZeroMenz("SOL");
    setPiuUno("LAb");
    setPiuUnoMenz("LA");
    setpiuDue("SIb");
    setPiuDueMenz("SI");
    setpiuTre("DO");
}
    if(key == "SOL") {
      setMenoTre("DO#");
      setMenoDueMenz("RE");
      setMenoDue("MIb");
      setMenoUnoMenz("MI");
      setMenoUno("FA");
      setMenoZeroMenz("FA#");
      setZero("SOL");
      setPiuZeroMenz("LAb");
      setPiuUno("LA");
      setPiuUnoMenz("SIb");
      setpiuDue("SI");
      setPiuDueMenz("DO");
      setpiuTre("DO#");
  }  
  if(key == "SOL#") {
    setMenoTre("RE");
    setMenoDueMenz("RE#");
    setMenoDue("MI");
    setMenoUnoMenz("FA");
    setMenoUno("FA#");
    setMenoZeroMenz("SOL");
    setZero("SOL#");
    setPiuZeroMenz("LA");
    setPiuUno("LA#");
    setPiuUnoMenz("SI");
    setpiuDue("DO");
    setPiuDueMenz("DO#");
    setpiuTre("RE");
  }
  if(key == "LAb") {
    setMenoTre("RE");
    setMenoDueMenz("MIb");
    setMenoDue("MI");
    setMenoUnoMenz("FA");
    setMenoUno("FA#");
    setMenoZeroMenz("SOL");
    setZero("LAb");
    setPiuZeroMenz("LA");
    setPiuUno("SIb");
    setPiuUnoMenz("SI");
    setpiuDue("DO");
    setPiuDueMenz("DO#");
    setpiuTre("RE");
  }
  if(key == "LA") {
    setMenoTre("MIb");
    setMenoDueMenz("MI");
    setMenoDue("FA");
    setMenoUnoMenz("SOLb");
    setMenoUno("SOL");
    setMenoZeroMenz("LAb");
    setZero("LA");
    setPiuZeroMenz("SIb");
    setPiuUno("SI");
    setPiuUnoMenz("DO");
    setpiuDue("DO#");
    setPiuDueMenz("RE");
    setpiuTre("MIb");
  }
  if(key == "LA#") {
    setMenoTre("MI");
    setMenoDueMenz("FA");
    setMenoDue("FA#");
    setMenoUnoMenz("SOL");
    setMenoUno("SOL#");
    setMenoZeroMenz("LA");
    setZero("LA#");
    setPiuZeroMenz("SI");
    setPiuUno("DO");
    setPiuUnoMenz("DO#");
    setpiuDue("RE");
    setPiuDueMenz("RE#");
    setpiuTre("MI");
  }
  if(key == "SIb") {
    setMenoTre("MI");
    setMenoDueMenz("FA");
    setMenoDue("SOLb");
    setMenoUnoMenz("SOL");
    setMenoUno("LAb");
    setMenoZeroMenz("LA");
    setZero("SIb");
    setPiuZeroMenz("SI");
    setPiuUno("DO");
    setPiuUnoMenz("REb");
    setpiuDue("RE");
    setPiuDueMenz("MIb");
    setpiuTre("MI");
  }
  if(key == "SI") {
    setMenoTre("FA");
    setMenoDueMenz("FA#");
    setMenoDue("SOL");
    setMenoUnoMenz("LAb");
    setMenoUno("LA");
    setMenoZeroMenz("SIb");
    setZero("SI");
    setPiuZeroMenz("DO");
    setPiuUno("DO#");
    setPiuUnoMenz("RE");
    setpiuDue("MIb");
    setPiuDueMenz("MI");
    setpiuTre("FA");
  }
  if(key == "DO") {
    setMenoTre("FA#");
    setMenoDueMenz("SOL");
    setMenoDue("LAb");
    setMenoUnoMenz("LA");
    setMenoUno("SIb");
    setMenoZeroMenz("SI");
    setZero("DO");
    setPiuZeroMenz("DO#");
    setPiuUno("RE");
    setPiuUnoMenz("MIb");
    setpiuDue("MI");
    setPiuDueMenz("FA");
    setpiuTre("FA#");
  }
  if(key == "DO#") {
    setMenoTre("SOL");
    setMenoDueMenz("LAb");
    setMenoDue("LA");
    setMenoUnoMenz("SIb");
    setMenoUno("SI");
    setMenoZeroMenz("DO");
    setZero("DO#");
    setPiuZeroMenz("RE");
    setPiuUno("MIb");
    setPiuUnoMenz("MI");
    setpiuDue("FA");
    setPiuDueMenz("FA#");
    setpiuTre("SOL");
  }


  if(key == "REb-") {
    setMenoTre("SOL-");
    setMenoDueMenz("LAb-");
    setMenoDue("LA-");
    setMenoUnoMenz("SIb-");
    setMenoUno("SI-");
    setMenoZeroMenz("DO-");
    setZero("REb-");
    setPiuZeroMenz("RE-");
    setPiuUno("MIb-");
    setPiuUnoMenz("MI-");
    setpiuDue("FA-");
    setPiuDueMenz("SOLb-");
    setpiuTre("SOL-");
}
  if(key == "RE-") {
    setMenoTre("SOL#-");
    setMenoDueMenz("LA-");
    setMenoDue("LA#-");
    setMenoUnoMenz("SI-");
    setMenoUno("DO-");
    setMenoZeroMenz("DO#-");
    setZero("RE-");
    setPiuZeroMenz("RE#-");
    setPiuUno("MI-");
    setPiuUnoMenz("FA-");
    setpiuDue("FA#-");
    setPiuDueMenz("SOL-");
    setpiuTre("SOL#-");
}
if(key == "RE#-") {
  setMenoTre("LA");
  setMenoDueMenz("LA#-");
  setMenoDue("SI-");
  setMenoUnoMenz("DO-");
  setMenoUno("DO#-");
  setMenoZeroMenz("RE-");
  setZero("RE#-");
  setPiuZeroMenz("MI-");
  setPiuUno("FA-");
  setPiuUnoMenz("FA#-");
  setpiuDue("SOL-");
  setPiuDueMenz("SOL#-");
  setpiuTre("LA-");
}
if(key == "MIb-") {
  setMenoTre("LA-");
  setMenoDueMenz("LA#-");
  setMenoDue("SI-");
  setMenoUnoMenz("DO-");
  setMenoUno("DO#-");
  setMenoZeroMenz("RE-");
  setZero("MIb-");
  setPiuZeroMenz("MI-");
  setPiuUno("FA-");
  setPiuUnoMenz("FA#-");
  setpiuDue("SOL-");
  setPiuDueMenz("SOL#-");
  setpiuTre("LA-");
}
if(key == "MI-") {
  setMenoTre("SIb-");
  setMenoDueMenz("SI-");
  setMenoDue("DO-");
  setMenoUnoMenz("REb-");
  setMenoUno("RE-");
  setMenoZeroMenz("MIb-");
  setZero("MI-");
  setPiuZeroMenz("FA-");
  setPiuUno("SOLb-");
  setPiuUnoMenz("SOL-");
  setpiuDue("LAb-");
  setPiuDueMenz("LA-");
  setpiuTre("SIb-");
}
if(key == "FA-") {
setMenoTre("SI-");
setMenoDueMenz("DO-");
setMenoDue("DO#-");
setMenoUnoMenz("RE-");
setMenoUno("MIb-");
setMenoZeroMenz("MI-");
setZero("FA-");
setPiuZeroMenz("FA#-");
setPiuUno("SOL-");
setPiuUnoMenz("SOL#-");
setpiuDue("LA-");
setPiuDueMenz("LA#-");
setpiuTre("SI-");
}
if(key == "FA#-") {
setMenoTre("DO-");
setMenoDueMenz("DO#-");
setMenoDue("RE-");
setMenoUnoMenz("MIb-");
setMenoUno("MI-");
setMenoZeroMenz("FA-");
setZero("FA#-");
setPiuZeroMenz("SOL-");
setPiuUno("LAb-");
setPiuUnoMenz("LA-");
setpiuDue("SIb-");
setPiuDueMenz("SI-");
setpiuTre("DO-");
}
if(key == "SOLb-") {
setMenoTre("DO-");
setMenoDueMenz("REb-");
setMenoDue("RE-");
setMenoUnoMenz("MIb-");
setMenoUno("MI-");
setMenoZeroMenz("FA-");
setZero("SOLb-");
setPiuZeroMenz("SOL-");
setPiuUno("LAb-");
setPiuUnoMenz("LA-");
setpiuDue("SIb-");
setPiuDueMenz("SI-");
setpiuTre("DO-");
}
if(key == "SOL-") {
setMenoTre("DO#-");
setMenoDueMenz("RE-");
setMenoDue("MIb-");
setMenoUnoMenz("MI-");
setMenoUno("FA-");
setMenoZeroMenz("FA#-");
setZero("SOL-");
setPiuZeroMenz("LAb-");
setPiuUno("LA-");
setPiuUnoMenz("SIb-");
setpiuDue("SI-");
setPiuDueMenz("DO-");
setpiuTre("DO#-");
}  
if(key == "SOL#-") {
setMenoTre("RE-");
setMenoDueMenz("RE#-");
setMenoDue("MI-");
setMenoUnoMenz("FA-");
setMenoUno("FA#-");
setMenoZeroMenz("SOL-");
setZero("SOL#-");
setPiuZeroMenz("LA-");
setPiuUno("LA#-");
setPiuUnoMenz("SI-");
setpiuDue("DO-");
setPiuDueMenz("DO#-");
setpiuTre("RE-");
}
if(key == "LAb-") {
setMenoTre("RE-");
setMenoDueMenz("MIb-");
setMenoDue("MI-");
setMenoUnoMenz("FA-");
setMenoUno("FA#-");
setMenoZeroMenz("SOL-");
setZero("LAb-");
setPiuZeroMenz("LA-");
setPiuUno("SIb-");
setPiuUnoMenz("SI-");
setpiuDue("DO-");
setPiuDueMenz("DO#-");
setpiuTre("RE-");
}
if(key == "LA-") {
setMenoTre("MIb-");
setMenoDueMenz("MI-");
setMenoDue("FA-");
setMenoUnoMenz("SOLb-");
setMenoUno("SOL-");
setMenoZeroMenz("LAb-");
setZero("LA-");
setPiuZeroMenz("SIb-");
setPiuUno("SI-");
setPiuUnoMenz("DO-");
setpiuDue("DO#-");
setPiuDueMenz("RE-");
setpiuTre("MIb-");
}
if(key == "LA#-") {
setMenoTre("MI-");
setMenoDueMenz("FA-");
setMenoDue("FA#-");
setMenoUnoMenz("SOL-");
setMenoUno("SOL#-");
setMenoZeroMenz("LA-");
setZero("LA#-");
setPiuZeroMenz("SI-");
setPiuUno("DO-");
setPiuUnoMenz("DO#-");
setpiuDue("RE-");
setPiuDueMenz("RE#-");
setpiuTre("MI-");
}
if(key == "SIb-") {
setMenoTre("MI-");
setMenoDueMenz("FA-");
setMenoDue("SOLb-");
setMenoUnoMenz("SOL-");
setMenoUno("LAb-");
setMenoZeroMenz("LA-");
setZero("SIb-");
setPiuZeroMenz("SI-");
setPiuUno("DO-");
setPiuUnoMenz("REb-");
setpiuDue("RE-");
setPiuDueMenz("MIb-");
setpiuTre("M-I");
}
if(key == "SI-") {
setMenoTre("FA-");
setMenoDueMenz("FA#-");
setMenoDue("SOL-");
setMenoUnoMenz("LAb-");
setMenoUno("LA-");
setMenoZeroMenz("SIb-");
setZero("SI-");
setPiuZeroMenz("DO-");
setPiuUno("DO#-");
setPiuUnoMenz("RE-");
setpiuDue("MIb-");
setPiuDueMenz("MI-");
setpiuTre("FA-");
}
if(key == "DO-") {
setMenoTre("FA#-");
setMenoDueMenz("SOL-");
setMenoDue("LAb-");
setMenoUnoMenz("LA-");
setMenoUno("SIb-");
setMenoZeroMenz("SI-");
setZero("DO-");
setPiuZeroMenz("DO#-");
setPiuUno("RE-");
setPiuUnoMenz("MIb-");
setpiuDue("MI-");
setPiuDueMenz("FA-");
setpiuTre("FA#-");
}
if(key == "DO#-") {
setMenoTre("SOL-");
setMenoDueMenz("LAb-");
setMenoDue("LA-");
setMenoUnoMenz("SIb-");
setMenoUno("SI-");
setMenoZeroMenz("DO-");
setZero("DO#-");
setPiuZeroMenz("RE-");
setPiuUno("MIb-");
setPiuUnoMenz("MI-");
setpiuDue("FA-");
setPiuDueMenz("FA#-");
setpiuTre("SOL-");
}
      }


      
//***************************************************************************** */
//mi permette di salvare lo stato dello strumento selezionato, quando esco dalla pagina  (salvataggio in locale)
useEffect(() => {
  AsyncStorage.getItem('globalState').then((value) => {
    if (value) {
      setAccordiStru(value);
    }
  });
}, []);

//settaggio, si attiva quando cambio lo strumento
const setGlobalAccor = async (value) => {
  setAccordiStru(value)
  await AsyncStorage.setItem('globalState', value);
};

//***************************************************************************** */
//Funzioni che mi permettono di salvare la chiave di quel cantico
//prende lo stato della chiave precedentemente modificata e salvata. Si attiva solo la prima volta che viene cambiato cantico
useEffect(() => {
  AsyncStorage.getItem(title).then((value) => {
    if (value) {  //verifica se è vuoto
      setFlagSaveKey(value);
      setCurrentValue(value);
    } else{
      setFlagSaveKey("0");
      setCurrentValue("0");
    }
  });
}, []);

//settaggio, si attiva quando premo il pulsante salva. Salva il valore come chiave ha il titolo del cantico
const handleSaveStateKey = async (value) => {
  setFlagSaveKey(value);
  setCurrentValue(value)
  await AsyncStorage.setItem(title, value);
};
//***************************************************************************** */
      useEffect(() => {  //Si attiva ogni qual volta che cambia il currentValue, in questo modo cambia la tonalità a tutti gli accordi
        cambiaTona(currentValue);}, [currentValue])
    
      useEffect(() => {  //Si attiva solo la prima volta che passa a questa pagina. Serve per dare un nome ai numeri che stanno nel drop in base alla tonalità
        cmbTn(key);}, [key])


//Lettore Audio-----------------------------------------------------------------------------------------------------
const [sound, setSound] = useState();
const [playView, setPlayView] = useState(false);
const [isPlaying, setIsPlaying] = useState(false);
const [position, setPosition] = useState(0);
const [duration, setDuration] = useState(0);


const handlePlayPause = async () => {
  if (sound) {
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  }
};

const handleStop = async () => {
  if (sound) {
    await sound.stopAsync();
  }
};

const handlePlayView = async () => {
    setPlayView(!playView)
};

const handleSliderChange = (value) => {
  if (sound) {
    sound.setPositionAsync(value);
  }
};

const formatTime = (milliseconds) => {
  const totalSeconds = milliseconds / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
//:::::::::::::::::::::::::::::::::::::
useEffect(() => {
  const loadSound = async (audioFile) => {
    const { sound } = await Audio.Sound.createAsync(
      audioFile
    );
    setSound(sound);

    sound.setOnPlaybackStatusUpdate((status) => {
      setIsPlaying(status.isPlaying);
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
    });
  };

  // Sostituisci 'tuoInput' con il parametro in input che determina quale file audio caricare
  const audioFile = determineAudioFile(props.route.params.titolo);

  loadSound(audioFile);

  return () => {
    if (sound) {
      sound.unloadAsync();
    }
  };
}, [props.route.params.titolo]);

// Funzione di esempio per determinare il file audio in base al parametro in input
const determineAudioFile = (parametroInput) => {
  // Logica per determinare quale file audio caricare in base al parametro in input
  if (parametroInput === 'Meraviglioso sei') {
    return require('../assets/Meraviglioso_sei.mp3');
  } else {
    // Se nessuna delle condizioni corrisponde, restituisci un valore di default o gestisci il caso secondo necessità
    return require('../assets/tuo_file.wav');
  }
};

//End Lettore Audio_____________________________________________________________________________________________

    return (
        <>
      
            <View style={globalStyles.containerStackCantico}>
{/*********************HANDLER********************************************************* */}
            <View style={ globalStyles.headerCantico}>
                <View style={styles.leftColumn}>
                <TouchableOpacity onPress={() => {props.navigation.goBack(); }}>
                    <Ionicons style={{ marginLeft:0, marginTop:2 }} name="arrow-back" size={24} color= {colorIconBottom} />
                </TouchableOpacity>
                </View>

                <View style={styles.centerColumn}>

                </View>
                        
                <View style={styles.rightColumn}>
                </View>
            </View> 


            <View style={styles.rightView}>

{/*********************DROP MENU********************************************************* */}
            <DropDownPicker 
                    items={keyTona}
                    open={isOpen}
                    setOpen={openDropdown}
                    containerStyle={{ width: 93, alignItems:"flex-end", marginLeft: 5}}
                    style={{ backgroundColor: 'transparent',
                    borderColor:  primary,// Cambia il colore del bordo
                        borderWidth: 2, // Cambia la larghezza del bordo
                        borderRadius: 10, // Cambia il raggio del bordo 
                        }} 
                    itemStyle={{
                    justifyContent: 'flex-start',
                    backgroundColor: '#1C1D1F', // Cambia il colore di sfondo del menu a discesa
                    }}
                    value={currentValue}
                    setValue={(val) => setCurrentValue(val)}
                    maxHeight={550}
                    placeholder= {key}
                    dropDownContainerStyle={{ 
                        elevation: 24,
                        backgroundColor: "#2F2F2F",
                        borderColor:  'black',// Cambia il colore del bordo
                        borderWidth: 1, // Cambia la larghezza del bordo
                        borderRadius: 10, // Cambia il raggio del bordo 
                        }}
                    placeholderStyle={{ color: primary }}
                    labelStyle={{ color: primary }}
                    textStyle= {{ color: "white" }}
                    arrowIconStyle= {{ tintColor: primary }}
                    onOpen={onFocus} // Chiamato quando il componente è aperto
                    onClose={onBlur} // Chiamato quando il componente è chiuso
                    />
            
{/*********************MENU  STRUMENTI********************************************************* */}
            <View>
              <View style={{ width: 45 }}>
              <TouchableOpacity style={globalStyles.dropdownHeader} onPress={toggleDropdown}>
              {accordiStru === "Piano" &&             
               <MaterialCommunityIcons name="piano" size={24} color={colorIconBottom} />
              }
              {accordiStru === "Chitarra" &&
              <FontAwesome5 name="guitar" size={25} color={colorIconBottom} />
              } 
              {accordiStru === "Basso" &&
              <Image style={styles.imageBassMenu}  source={require("../images/bass-guitar.png")}/>
              } 
              {accordiStru === "Batteria" &&
              <FontAwesome5 name="drum" size={25} color={colorIconBottom} />
              } 
              {accordiStru === "Testo" &&
              <AntDesign name="filetext1" size={23} color={colorIconBottom} />
              } 
              </TouchableOpacity>
              </View>

              {isDropdownOpen && (
                <View style={globalStyles.dropdownMenu}>
                  {/* Contenuto del menu a discesa */}
                  <TouchableOpacity onPress={changePiano}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                      <MaterialCommunityIcons name="piano" size={20} color= "white" />
                      <Text style={globalStyles.textMenu}> Piano</Text>
                    </View>
                  </TouchableOpacity>

                    <View style={{ marginTop: 20 }}></View>

                  <TouchableOpacity onPress={changeChitarra}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                    <FontAwesome5 name="guitar" size={20} color= "white" />
                      <Text style={globalStyles.textMenu}>Chitarra</Text>
                    </View>
                  </TouchableOpacity>

                  <View style={{ marginTop: 20 }}></View>

                  <TouchableOpacity onPress={changeBasso}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                      <Image style={globalStyles.imageBass}  source={require("../images/bass-guitar.png")}/>
                      <Text style={globalStyles.textMenu}>Basso</Text>
                    </View>
                  </TouchableOpacity>

                  <View style={{ marginTop: 20 }}></View>

                  <TouchableOpacity onPress={changeBatteria}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                    <FontAwesome5 name="drum" size={20} color= "white" />
                      <Text style={globalStyles.textMenu}> Batteria</Text>
                    </View>
                  </TouchableOpacity>
                  
                  <View style={{ marginTop: 20 }}></View>

                <TouchableOpacity onPress={changeTesto}>
                  <View style={{ flexDirection: "row", height: 30 }}>
                  <AntDesign name="filetext1" size={20} color= "white" />
                    <Text style={globalStyles.textMenu}> Testo</Text>
                  </View>
                </TouchableOpacity>

                </View>
              )}
            </View>

{/*********************MENU  DOWNLOAD********************************************************* */}
            <View>
              <TouchableOpacity style={globalStyles.dropdownHeader} onPress={toggleDropdownDown}>
              <Feather name="download" size={24} color={colorIconBottom} />
              </TouchableOpacity>

              {isDropdownOpenDown && (
                <View style={globalStyles.dropdownMenu}>
                  {/* Contenuto del menu a discesa */}
                  <TouchableOpacity  onPress={async () => {
                      const imageUri = await captureImage();
                      const documentUri = await createPrintDocument(imageUri);
                      await printDocument(documentUri);
                    }}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                    <AntDesign name="pdffile1" size={20} color= "white" />
                      <Text style={globalStyles.textMenu}> PDF</Text>
                    </View>
                  </TouchableOpacity>

                    <View style={{ marginTop: 20 }}></View>

                  <TouchableOpacity onPress={""}>
                    <View style={{ flexDirection: "row", height: 30 }}>
                    <Icon name="presentation" size={20} color= "white" />
                      <Text style={globalStyles.textMenu}> PPT</Text>
                    </View>
                  </TouchableOpacity>

                </View>
              )}
            </View>
{/*********************SHARE********************************************************* */}
            <View>
              <TouchableOpacity style={globalStyles.dropdownHeader} onPress={snapshotShare}>
              <Entypo name="share" size={24} color={colorIconBottom} />
              </TouchableOpacity>
            </View>

{/*********************BUTTON LETTORE AUDIO********************************************************* */}
            <View>
              <TouchableOpacity style={globalStyles.dropdownHeader} onPress={handlePlayView}>
              <Entypo name="controller-play" size={24} color={colorIconBottom} />
              </TouchableOpacity>
            </View>


            </View>
            
 {/*********************CANTICI********************************************************* */}       
    <View style={{flex:1, marginTop: 0, }}>
        <ScrollView style={{ height: "100%", marginTop : 5}}>
        <View style={{ minHeight: '100%', paddingBottom: 10, }}>
        <TouchableWithoutFeedback onPress={closeDropdown} >

        <Animated.View entering={FadeInLeft.duration(500).delay(100)} ref={viewToSnapshotRef} style={globalStyles.contCanticoScroll}> 

        <Text   style={globalStyles.titleCantico}> {props.route.params.num}. {props.route.params.titolo} </Text>
            {/*   Tutti i cantici       */ }
            { props.route.params.titolo === "Insieme a te" &&
            <InsiemeATe accordiStru={accordiStru} c={c} cDiesis={cDiesis}  dBemolle={dBemolle}  d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Shalom Adonai" &&
            <ShalomAdonai accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Entrerò nelle sue porte" &&
            <EntreroNelleSuePorte accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Con le mani alzate" &&
            <ConLeManiAlzate accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Grazie oh Dio" &&
            <GrazieODio accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Dentro al mio cuor" &&
            <DentroAlMioCuor accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Un tempio santo" &&
            <UnTempioSanto accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Gloria a Dio" &&
            <GloriaADio accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "La tua fedeltà" &&
            <LaTuaFedelta accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Oh che gran giorno.." &&
            <OCheGranGiorno accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Come mai prima" &&
            <ComeMaiPrima accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Un vaso nuovo" &&
            <UnVasoNuovo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Tu puoi nascere di nuovo" &&
            <TuPuoiNascereDiNuovo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Il mio rifugio sei" &&
            <IlMioRifugioSei accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Gesù dolce musica" &&
            <GesuDolceMusica accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Siam riuniti tutti qui" &&
            <SiamoRiunitiTuttiQui accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Tu hai dato a me" &&
            <TuHaiDatoAMe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Io mi rallegro quando.." &&
            <IoMiRallegro accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Profondo è il suo amor" &&
            <CheProfondoE accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Una nuova vita" &&
            <UnaNuovaVita accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Emmanuel" &&
            <Emmanuel accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Canterò,canterò" &&
            <CanteroCantero accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Oh Gesù grazie" &&
            <OhGesuGrazie accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Caro Padre" &&
            <CaroPadre accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "E' buono celebrare" &&
            <EBuonoCelebrare accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Su nel cielo con Gesù" &&
            <SuNelCielo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Tu sei il rifugio mio" &&
            <TuSeiIlRifugioMio accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Gesù t'adoriamo" &&
            <GesuTAdoriamo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Salmo 25" &&
            <Salmo25 accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Alleluia tutto nuovo fa.." &&
            <AlleluiaTuttoNuovo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Noi innalziamo Te" &&
            <PoicheSeiLeccelso accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Su nel ciel" &&
            <SuNelCiel accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Io non voglio più" &&
            <IoNonVoglioPiu accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Un miracolo" &&
            <UnMiracolo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Dio è vivente" &&
            <DioEVivente accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Voglio cantar" &&
            <VoglioCantar accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Non sono più lo stesso" &&
            <NonSonoPiuLoStesso accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Dolce caro amico" &&
            <DolceCaroAmico accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Sempre più in alto" &&
            <SemprePiuInAlto accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Nella tua tenda" &&
            <NellaTuaTenda accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Come il cervo" &&
            <ComeIlCervo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Mi son deciso" &&
            <MiSonDeciso accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Grande sei oh mio.." &&
            <GrandeSei accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Io posso ogni cosa" &&
            <IoPossoOgniCosa accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Amore grande" &&
            <AmoreGrande accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Dio è qui con noi" &&
            <DioEQui accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Per adorarti" &&
            <PerAdorarti accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Cantiamo una lode" &&
            <IoSento accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Getta il peso tuo" &&
            <GettaIlPesoTuo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Mano nella mano" &&
            <ManoNellaMano accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Gesù Cristo è tanto..." &&
            <GesuCristoETantoGrande accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Ho trovato la vita in.." &&
            <HoTrovatoLaVitaInLui accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Non sono più io che..." &&
            <NonSonoPiuIoCheVivo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Io voglio sempre amar" &&
            <IoVoglioSempreAmar accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Gesù sta ascoltando" &&
            <GesuStaAscoltando accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Non mi dispiace" &&
            <NonMiDispiace accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Tieni viva la tua fiamma" &&
            <TieniVivaLaTuaFiamma accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Ti loderò" &&
            <TiLodero accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Venite a lodare" &&
            <VeniteALodare accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Osanna all'Altissimo" &&
            <OsannaAllAltissimo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Fai di me uno strumento" &&
            <FaiDiMeUnoStrumento accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Combattiamo la battaglia" &&
            <CombattiamoLaBattaglia accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Loderò L'Eterno in ogni tempo" &&
            <LoderoLEterno accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Davanti al Re" &&
            <DavantiAlRe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Di chi temerò" &&
            <DiChiTemero accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Alla dolce presenza Tua" &&
            <AllaDolcePresenza accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Tu sei degno" &&
            <TuSeiDegno accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Magnifichiamo il Signor" &&
            <Magnifichiamo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Voi tutti che siete assetati" &&
            <VoitTuttiCheSieteAssetati accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Vieni Spirito Santo" &&
            <VieniSpiritoSanto accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Quanto è magnifico" &&
            <QunatoEMagnifico accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Signore fammi" &&
            <SignoreFammi accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Presto molto presto" &&
            <PrestoMoltoPresto accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Abbà, Padre" &&
            <AbbaPadre accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Tu sei davvero grande" &&
            <TuSeiDavveroGrande accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "A te Signor" &&
            <TuHaiDipintoICieli accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "I cieli narrano" &&
            <ICieliNarrano accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Amare Te" &&
            <AmareTe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Un piano per te" &&
            <UnPianoPerTe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Adoro Te" &&
            <AdoroTeNessunoEComeTe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Alzo le mani" &&
            <AlzoLeMani accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Degno sei d'onore" &&
            <DegnoSeiDOnore accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Ama il Signor" &&
            <AmaIlSignor accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Quelli che sperano" &&
            <QuelliCheSperano accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Stringimi oh Signor" &&
            <StringimiOhSignor accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "La tua fedeltà è grande" &&
            <LaTuaFedeltaEGrande accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Il tuo nome innalzo oh Dio" &&
            <IlTuoNomeInnalzo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Padre celeste" &&
            <PadreCeleste accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "La benedizione" &&
            <AlzoGliOcchiAlCiel accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Cambia il cuore mio" &&
            <CambiaIlCuorMio accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Con cuore grato" &&
            <ConCuoreGrato accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Oh mio Signor" &&
            <OhMioSignor accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Signore vengo a te" &&
            <SignoreVengoATe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Apri i miei occhi" &&
            <ApriIMieiOcchi accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Alzo le mani al Re dei re" &&
            <AlzoLeManiAlReDeiRe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "E ti dico grazie" &&
            <ETiDicoGrazie accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Se non avessi Te" &&
            <SeNonAvessiTe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Tu sei re" &&
            <TuSeiRe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Ei morì" &&
            <EiMori accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Gridiam di gioia" &&
            <GridiamDiGioia accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Il tuo amor" &&
            <IlTuoAmor accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Spirito Santo, soffia su noi" &&
            <SpiritoSanto accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Tu vedrai" &&
            <TuVedrai accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Un vaso per te" &&
            <UnVasoPerTe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Giorno per giorno" &&
            <GiornoPerGiorno accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Siamo qui per adorarti" &&
            <SiamoQuiPerAdorarti accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Scende dolcemente" &&
            <ScendeDolcemente accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Su quella croce" &&
            <SuQuellaCroce accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Vieni in sua presenza" &&
            <VieniInSuaPresenza accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Ti sei dato" &&
            <TiSeiDato accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Ti dono oh Signor" &&
            <TiDonoSignor accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Chi ci separerà" &&
            <ChiCiSeparera accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Guardare solo te Signor" &&
            <GuardareSoloTeSignor accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Benedici oh alma mia, l'Eterno" &&
            <BenediciOhAlmaMia accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Era lì" &&
            <EraLi accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "C'è un Dio molto grande qui" &&
            <CeUnDioMoltoGrande accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Davanti al Tuo Trono" &&
            <DavantiAlTuoTrono accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Tu mi prendi per mano" &&
            <TuMiPrendiPerMano accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "In comunione" &&
            <InComunione accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Il mio amico migliore" &&
            <IlMioAmico accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Ti sto cercando" &&
            <TiStoCercando accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Chi dimora" &&
            <ChiDimora accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "E' una grazia dell'Eterno" &&
            <UnaGraziaDellEterno accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Ogni dì, ogni dì, ogni dì" &&
            <OgniDiOgniDi accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Lode all'Eterno" &&
            <LodeAllEterno accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "L'Eterno è" &&
            <LeternoE accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Lodare Dio" &&
            <LodareDio accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Questo è il dì" &&
            <QuestoEIlDI accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Più amore, più forza" &&
            <PiuAmorePiuForza accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Lodiam" &&
            <Lodiam accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Gesù, sei il mio Signor" &&
            <GesuSeiIlMioSignor accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "I giorni di Elia" &&
            <IGiorniDiElia accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Se tu hai fede" &&
            <SeTuHaiFede accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Accendi una luce" &&
            <AccendiUnaLuce accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Gesù ha messo questo canto" &&
            <GesuHaMessoQuestoCanto accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Tu sei il mio scudo" &&
            <TuSeiIlMioScudo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Sto cantando allegro" &&
            <StoCantandoAllegro accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Prezioso Dio" &&
            <PreziosoDio accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Amico vieni al Signor Gesù" &&
            <AmicoVieni accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Quando ascolti" &&
            <QuandoAscolti accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Mi rialzerai" &&
            <MiRialzerai accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Sprito santo fai tu" &&
            <SpiritoSantoFaiTu accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Benchè i miei occhi" &&
            <IoSoCheTuSeiQui accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Con le mie mani alzate" &&
            <ConLeManiAlzateVerso accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Noi predichiamo Cristo" &&
            <NoiPredichiamoCristo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "L'unzione scende su noi" &&
            <LUnzioneScendeSuNoi accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Ai piedi della croce" &&
            <AiPiediDellaCroce accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Col Signor marciam" &&
            <ColSignorMarciam accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Uniti nel suo amor" &&
            <UnitiNelSuoAmor accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Mi fai riposare" &&
            <MiFaiRiposare accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Quando penso al tuo amore" &&
            <QuandoPensoAlTuoAmore accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Io ti offro me stesso" &&
            <IoTiOffroMeStesso accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Dio una via farà" &&
            <DioUnaviaFara accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Tu sei Santo" &&
            <TuSeiSanto accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Buono è" &&
            <BuonoE accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Nella Tua presenza" &&
            <NellaTuaPresenza accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Quando non sentirò" &&
            <QuandoNonSentiro accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Tocca il mio cuor Signor" &&
            <ToccaIlMioCuorSignor accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Hai rinunciato alla tua maestà" &&
            <HaiRinunciatoAllaTuaMaesta accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Al sicuro in Te" &&
            <AlSicuroInTe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Io credo in Te" &&
            <IoCredoInTe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Fede" &&
            <Fede accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Tutto è possibile" &&
            <TuttoEPossibile accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Amami perchè" &&
            <AmamiPerche accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Ritorno a Te" &&
            <RitornoATe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Voglio stare con Te" &&
            <VoglioStareConTe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Se il mio popolo" &&
            <SeIlMioPopolo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Meraviglioso sei" &&
            <MeravigliosoSei accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Scendi Spirito Santo" &&
            <ScendiSpiritoSanto accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Ho bisogno di Te" &&
            <HoBisognoDiTe accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Primo amore" &&
            <PrimoAmore accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Lodino gli angeli" &&
            <LodinoGliAngeli accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Nascondimi" &&
            <Nascondimi accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Luce del mondo" &&
            <LuceDelMondo accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Tua maestà" &&
            <TuaMaesta accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Siamo un momento" &&
            <SiamoUnMomento accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Cantiam al Signor" &&
            <CantiamAlSignore accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Degno è l'Agnel" &&
            <DegnoELAgnel accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Aprimi gli occhi del cuore" &&
            <AprimiGliOcchi accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Mira la bellezza" &&
            <EgliEDegno accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Io so che tu sei qui" &&
            <IoSoCheTuSeiQuiSento accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }
            { props.route.params.titolo === "Benedetto sei" &&
            <BenedettoSei accordiStru={accordiStru} c={c} cDiesis={cDiesis} dBemolle={dBemolle} d={d}  dDiesis={dDiesis} eBemolle={eBemolle} e={e} f={f} fDiesis={fDiesis} gBemolle={gBemolle} g={g}  gDiesis={gDiesis} aBemolle={aBemolle} a={a}  aDiesis={aDiesis} bBemolle={bBemolle} b={b}/>
            }


            

            </Animated.View>
        </TouchableWithoutFeedback>
        </View>
        {playView && <View style={{ marginTop: 70 }}></View>}
        </ScrollView>
    </View>

{/*************************LETTORE AUDIO************************************************************* */}

<Animatable.View
  animation={playView ? 'slideInUp' : 'slideOutDown'}
  duration={300}
  style={{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
  }}
>
  <View style={{ backgroundColor: "#282C34", flexDirection: "row", width: "98%", height: 70, justifyContent: "center", alignItems: 'center', borderRadius: 10 }}>
    <TouchableOpacity style={{ right: 15 }} onPress={handlePlayPause} disabled={!sound}>
      {!isPlaying ? <Entypo name="controller-play" size={40} color="white" /> :
        <AntDesign name="pause" size={40} color="white" />
      }
    </TouchableOpacity>
    <Text style={{ color: "white" }}>{`${formatTime(position)}`}</Text>
    <Slider
      style={{ width: 200, height: 40 }}
      minimumValue={0}
      maximumValue={duration}
      value={position}
      onSlidingComplete={(value) => handleSliderChange(value)}
      disabled={!sound}
      minimumTrackTintColor="white"
      maximumTrackTintColor="white"
      thumbTintColor="white"
    />
    <Text style={{ color: "white" }}>{`${formatTime(duration)}`}</Text>
    <TouchableOpacity onPress={handleStop} disabled={!sound}>
    </TouchableOpacity>
  </View>
</Animatable.View>



{/**************************BUTTON SAVE********************************************************************** */}
        {(isOpen === true && flagSaveKey != currentValue) &&
        <View style={{ flexDirection: "row-reverse", position: "absolute", bottom: 70, right: 15,}}>
        <View style={{ position:"absolute", flexDirection: "row", alignItems: "flex-end", justifyContent: 'flex-end', paddingRight: 0,}}>
          <TouchableOpacity onPress={ () => {handleSaveStateKey(currentValue)}}>
            <View style={{flexDirection:"row", backgroundColor: '#04457E', paddingTop: 13, paddingBottom: 10, paddingLeft: 6, paddingRight: 5, borderRadius: 10, width: 84, height: 50,}}>
            <Entypo name="save" size={24} color="white"/>
            <Text style={{ color: "white" }}> Salva</Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>
        }

{/*********************FINISH********************************************************* */}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    leftColumn: {
      flex: 1, 
      alignItems: 'flex-start', // Allineamento orizzontale a sinistra
    },
    centerColumn: {
      flex: 5, 
      alignItems: 'flex-start', // Allineamento orizzontale al centro
    },
    rightColumn: {
      flex: 3, 
      alignItems: 'flex-end', // Allineamento orizzontale a destra
    },
    rightView: { 
      zIndex:2,
      flexDirection: "row-reverse",
      position: "absolute",
        top: 38,
        right: 15,
        paddingRight: 10,
      },
      imageBassMenu: {
        bottom: 4,
        left: 4,
        width: 30, // Larghezza dell'immagine PNG
        height: 30, // Altezza dell'immagine PNG
        tintColor: colorIconBottom
      },
  });