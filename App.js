import React, { useRef } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { RNCamera } from "react-native-camera";

const App = () => {
  const ref = useRef();

  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        permissionDialogTitle={"Permission to use camera"}
        permissionDialogMessage={
          "We need your permission to use your camera phone"
        }
        onBarCodeRead={(barcode) => {
          console.log(barcode);
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  loadingContainer: {
    marginTop: 250,
    marginBottom: 250,
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20,
  },
  defaultText: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    fontSize: 15,
    color: "#00C378",
    textAlign: "center",
  },
  toolbox: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    margin: 5,
  },
});
