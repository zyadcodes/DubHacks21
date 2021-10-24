import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import ResultStyle from "../Result/ResultStyle";
import { scanFood, compareRestrictions } from "../../api";
import Spinner from "react-native-loading-spinner-overlay";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import fontStyles from "../../config/fontStyles";

const Result = ({ navigation, route }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await scanFood(route.params.barcode);
      const checkFood = await compareRestrictions(fetchedData);
      setData(fetchedData);
      setIsValid(checkFood);
      setIngredients(
        fetchedData.product.ingredients.map(
          (eachIngredient) => eachIngredient.text
        )
      );
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={ResultStyle.container}>
        <Spinner visible={true} />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={ResultStyle.container}>
      <Image
        style={ResultStyle.image}
        source={{ uri: data.product.image_url }}
      />
      <View style={ResultStyle.iconStyle}>
        {isValid.isValid ? (
          <FontAwesomeIcon icon={faCheckCircle} color={"#00FF00"} size={75} />
        ) : (
          <FontAwesomeIcon icon={faTimesCircle} color={"#FF0000"} size={75} />
        )}
      </View>
      <View style={ResultStyle.resultContainer}>
        {isValid.isValid ? (
          <Text style={[fontStyles.bigTextStyle, fontStyles.black]}>
            You're good to go! This food doesn't contain anything that you can't
            eat. It only contains{" "}
            {ingredients.map((eachIngredient, index) =>
              index === ingredients.length - 1
                ? " and " + eachIngredient.toLowerCase() + "."
                : eachIngredient.toLowerCase() + ", "
            )}
          </Text>
        ) : (
          <Text style={[fontStyles.bigTextStyle, fontStyles.black]}>
            You can't eat this! It contains{" "}
            {isValid.invalidIngredient.toLowerCase()}.
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={ResultStyle.backButton}
        onPress={async () => {
          navigation.goBack();
        }}
      >
        <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>Finish</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Result;
