import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import { screenHeight, screenWidth } from "../../config/dimensions";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: colors.purple,
    alignItems: "center",
    minHeight: screenHeight,
    paddingBottom: screenHeight * 0.025,
  },
  image: {
    resizeMode: "contain",
    width: screenWidth * 0.65,
    height: screenHeight * 0.325,
    marginTop: screenHeight * 0.05,
    marginBottom: screenHeight * 0.025,
  },
  iconStyle: {
    marginBottom: screenHeight * 0.045,
  },
  resultContainer: {
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: screenWidth * 0.025,
    paddingVertical: screenHeight * 0.015,
    width: screenWidth * 0.9,
  },
  backButton: {
    backgroundColor: colors.white,
    borderRadius: screenHeight * 0.1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: screenWidth * 0.075,
    paddingVertical: screenHeight * 0.015,
    marginTop: screenHeight * 0.075,
  },
});
