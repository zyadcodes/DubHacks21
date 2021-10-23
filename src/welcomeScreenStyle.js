
import colors from "../config/colors"; 
import { StyleSheet } from "react-native";
import fontStyles from "../config/fontStyles";
import {screenWidth, screenHeight} from '../config/dimensions'

export default StyleSheet.create({
    Body:{
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: colors.darkPurple,
        width:'100%',
        flex:1,
    },

    Button:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: screenHeight * 0.025,
        paddingTop: screenHeight * 0.05,
        width: screenWidth,
        marginLeft: screenWidth * 0.1,
        marginBottom: screenHeight * 0.05,
    },
})
