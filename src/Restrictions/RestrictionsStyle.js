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
  titles: {
    marginTop: screenHeight * 0.125,
  },
  row: {
    backgroundColor: colors.white,
    marginTop: screenHeight * 0.05,
    paddingHorizontal: screenWidth * 0.025,
    paddingVertical: screenHeight * 0.005,
    borderRadius: 10,
    width: screenWidth * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },
  listContainer: {
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    width: screenWidth * 0.9,
    paddingHorizontal: screenWidth * 0.025,
    paddingBottom: screenHeight * 0.025,
    marginTop: screenHeight * 0.025,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  listItem: {
    marginTop: screenHeight * 0.025,
    paddingHorizontal: screenWidth * 0.025,
    paddingVertical: screenHeight * 0.005,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  finishButton: {
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
