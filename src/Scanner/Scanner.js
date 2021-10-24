import React, { useRef } from "react";
import { View } from "react-native";
import ScannerStyle from "./ScannerStyle";
import { RNCamera } from "react-native-camera";

const Scanner = ({ navigation }) => {
  const ref = useRef();

  const scanBarcode = async (barcode) => {
    navigation.push("Result", {
      barcode: barcode.data.substring(1),
    });
  };

  return (
    <View style={ScannerStyle.container}>
      <RNCamera
        ref={ref}
        style={ScannerStyle.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        permissionDialogTitle={"Permission to use camera"}
        permissionDialogMessage={
          "We need your permission to use your camera phone"
        }
        onBarCodeRead={(barcode) => {
          scanBarcode(barcode);
        }}
      />
    </View>
  );
};

export default Scanner;
