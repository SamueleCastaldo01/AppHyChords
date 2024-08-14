import { StyleSheet } from "react-native";
import { useFonts, Newsreader_400Regular, Newsreader_600SemiBold } from "@expo-google-fonts/newsreader";
import { RFValue } from "react-native-responsive-fontsize";
import { screenWidth } from "./ScreenDimensions";

const exPrimary = "#04457E"

const backGrigio = "#EEEEEE"
const backElenco = "#EEEEEE"
const back = "#EFEFEF"
const primary = "#013241"
const colorText = "black"
const backCantico = "#EFEFEF"
const colorHeader = "#EFEFEF"


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: back,
        padding: 0,
        overflow: "hidden"
    },
    containerHome: {
        flex: 1,
        backgroundColor: back,
        padding: 0,
        overflow: "hidden"
    },
    containerRicerca: {
      flex: 1,
      backgroundColor: primary,
      padding: 0,
      overflow: "hidden"
  },
    containerStackCantico: {
        flex: 1,
        backgroundColor: backCantico,
        padding: 0,
        overflow: "hidden"
    },
    contCanticoScroll: {
      zIndex: -1,
        flex:1,
        backgroundColor: backCantico,
        },
    containerCantico: {
        flex:1,
        flexDirection:  "column",
        paddingLeft: 15,
        paddingRight: 15,
        },
    righeCantico: {
        position: "relative",
        flexDirection:  "row",
        margin: 0,
        marginBottom: -5,
        padding: 0,
        },
    textHome: {
          fontSize: RFValue(22),
          fontFamily: "Newsreader_600SemiBold",
          color: "black",
          paddingBottom: 10,
          paddingLeft: 10
      },
    textCantico: {
        position: "relative",
        marginTop: screenWidth < 500 ? 20 : 27,
        fontSize: RFValue(14),
        fontFamily: "Newsreader_400Regular",
        color: colorText
    },
    textCanticoMel: {
      position: "relative",
      marginTop: screenWidth < 500 ? 30 : 37,
      fontSize: RFValue(14),
      fontFamily: "Newsreader_400Regular",
      color: colorText
  },
    text: {
      fontSize: RFValue(13.5),
      fontFamily: "Newsreader_400Regular_Italic",
      color: "white"
  },
    textCanticoNo: {
        position: "relative",
        marginTop: 5,
        fontSize: RFValue(14),
        fontFamily: "Newsreader_400Regular",
        color: colorText
    },
    textCanticoColo: {
        color: exPrimary,
        fontWeight: "bold",
    },
    AccordoCantico: {
        position: "absolute",
        top: screenWidth < 500 ? 8 : 8,
        left: -3,
        fontSize: RFValue(10),
        fontFamily: "Newsreader_600SemiBold",
        color: exPrimary,
        fontWeight: "bold",
    },
    AccordoCanticoMel: {
      position: "absolute",
      top: screenWidth < 500 ? 21 : 25,
      left: -3,
      fontSize: RFValue(10),
      fontFamily: "Newsreader_600SemiBold",
      color: "green",
      fontWeight: "bold",
  },
    SpazioCantico: {
        marginTop: screenWidth <500 ? 20 : 25,
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
      header: {
        backgroundColor: back,
        flexDirection: "row",
        height: 90,
        position: "float",
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0,
        borderColor: "#d8d8d8",
        paddingTop: 38,
    },  
    titleHeader: {
        textAlign: "center",
        color: primary,
        fontSize: 20,
        fontFamily: "Newsreader_600SemiBold",
    },
    headerCantico: {
        height: 95,
        position: "float",
        borderBottomWidth: 0,
        borderColor: "#d8d8d8",
        flexDirection:  "row",
        paddingTop: 38,
        backgroundColor: colorHeader,
        paddingLeft: 15,
        paddingRight: 15,
        elevation: 4,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },  
    titleCantico: {
        paddingLeft: 8,
        textAlign: "left",
        color: exPrimary,
        fontSize: RFValue(20),
        fontFamily: "Newsreader_600SemiBold",
    },
    titleHeaderCantico: {
        textAlign: "left",
        color: "#fff",
        fontSize: RFValue(20),
        fontFamily: "Newsreader_600SemiBold",
    },
    buttonHeader: {
        textAlign: "center",
        color: "#fff",
        fontSize: RFValue(20),
        fontWeight: "bold",
    },
    input: {
        width: "80%",
        marginRight: 5,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        paddingVertical: 4,
        paddingLeft: 7,
      },
      dropdownHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 4,
        padding: 10,
      },
      dropdownMenu: {
        position: "absolute",
        alignItems: 'left', 
        width: 103,
        zIndex: 1,
        right: -24,
        borderWidth: 0,
        borderRadius: 10,
        top: 55,
        paddingTop: 15,
        paddingLeft:10,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: "#2F2F2F",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
      },
      textMenu: {
        color: "white",
        marginLeft: 3,
        fontSize: 16,
        fontFamily: "Newsreader_400Regular"
      },
      imageBass: {
        width: 24, // Larghezza dell'immagine PNG
        height: 24, // Altezza dell'immagine PNG
        tintColor: "white"
      },
      imageSearch: {
        width: 24, // Larghezza dell'immagine PNG
        height: 24, // Altezza dell'immagine PNG
        tintColor: "white"
      },
      iconNavBar: {
        width: 24, // Larghezza dell'immagine PNG
        height: 24, // Altezza dell'immagine PNG
        tintColor: "white"
      },

      //Autocomplete_________________________________________________________________
      containerElenco: {
        width: "100%",
        flexDirection: 'row', // Disposizione a riga
        alignItems: 'center', // Allineamento verticale al centro
        paddingHorizontal: 10, // Spazio interno orizzontale
        borderBottomWidth: 1, // Spessore del bordo
        borderColor: '#7F8082', // Colore del bordo
        backgroundColor: back,
        padding: 20,
        paddingLeft: 10,
        paddingRight:30,
      },
      leftColumnElenco: {
        flex: 1, 
        alignItems: 'center', // Allineamento orizzontale a sinistra
      },
      centerColumnElenco: {
        flex: 4, 
        alignItems: 'flex-start', // Allineamento orizzontale al centro
      },
      rightColumnElenco: {
        flex: 1, 
        alignItems: 'flex-end', // Allineamento orizzontale a destra
      },    
      numberElenco: {
        color: primary,
        fontSize: 18,
        fontFamily: "Newsreader_600SemiBold_Italic",
      },
      titleElenco: {
        color: colorText,
        fontSize: 18,
        textAlign: 'left', // Allineamento del testo a sinistra
        fontFamily: "Newsreader_400Regular",
      },
      containerAutoComplete: {
        flexDirection: 'row', // Disposizione a riga
        alignItems: 'center', // Allineamento verticale al centro
        width: 300,
        height: 35,
        textAlign: "left",
        paddingHorizontal: 0, // Spazio interno orizzontale
        borderBottomWidth: 0, // Spessore del bordo
        backgroundColor: "#2F2F2F",
        padding: 0,
      },
      titleAutoComplete: {
        color: "white",
        fontSize: 18,
        textAlign: 'left', // Allineamento del testo a sinistra
        fontFamily: "Newsreader_400Regular",
      },
  });