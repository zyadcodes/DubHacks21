import colors from "./colors";
import { StyleSheet, Platform, PixelRatio } from "react-native";

//Gets the correct font based on either iOS or Android

//Sets the font size
let baseFontSize = Platform.OS === "android" ? 20 : 18;
const pixelRatio = PixelRatio.get();
if (pixelRatio < 3) {
  baseFontSize = Platform.OS === "android" ? 16 : 14.4;
}

const bigFontSize = baseFontSize * 1.2;
const biggerFontSize = baseFontSize * 1.5;
const smallTextFontSize = baseFontSize * 0.6;
const subTextFontSize = baseFontSize * 0.9;
const subTitleFontSize = baseFontSize * 2.2;
const bigTitleFontSize = baseFontSize * 4.4;

export default StyleSheet.create({
  //The style for all bigger text style
  biggerTextStyle: {
    fontSize: biggerFontSize,
  },

  //The style for all big text style
  bigTextStyle: {
    fontSize: bigFontSize,
  },

  //The style for all small text style
  smallTextStyle: {
    fontSize: smallTextFontSize,
  },

  //The style for all sub text style
  subTextStyle: {
    fontSize: subTextFontSize,
  },

  //The style for all the main text style
  mainTextStyle: {
    fontSize: baseFontSize,
  },

  //The style for all the big subtitle text style
  bigSubTitleStyle: {
    fontSize: subTitleFontSize,
  },

  //The style for all the big title text style
  bigTitleStyle: {
    fontSize: bigTitleFontSize,
  },

  /* The colors for all the different fonts*/
  lightGray: {
    color: colors.lightGray,
  },

  white: {
    color: colors.white,
  },

  lightBlue: {
    color: colors.lightBlue,
  },

  darkBlue: {
    color: colors.darkBlue,
  },

  blue: {
    color: colors.blue,
  },

  black: {
    color: colors.black,
  },

  red: {
    color: colors.red,
  },

  gray: {
    color: colors.gray,
  },

  green: {
    color: colors.green,
  },

  /*The different font stylings*/
  bold: {
    fontWeight: "bold",
  },
});
