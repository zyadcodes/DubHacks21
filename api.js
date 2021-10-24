// File contains the connection to the food API and returns the json.
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lifestyles } from "./config/restrictions.js";

const scanFood = async (barcode) => {
  const response = await fetch(
    "https://fr.openfoodfacts.org/api/v0/product/" + barcode + ".json"
  );

  const json = await response.json();

  return json;
};

const createRestrictions = async (userAllergies, userLifestyle) => {
  let finalArr = userAllergies;

  for (let i = 0; i < userLifestyle.length; i++) {
    let lifestyle = userLifestyle[i];
    let lifestyleVals = lifestyles[lifestyle];
    finalArr = finalArr.concat(lifestyleVals);
  }

  await AsyncStorage.setItem("user", JSON.stringify(finalArr));

  return;
};

const getRestrictions = async () => {
  const response = JSON.parse(await AsyncStorage.getItem("user"));
  return response;
};

// Returns true/false based on if this is valid
const compareRestrictions = async (scannedFood) => {
  const ingredients = scannedFood.product.ingredients.map(
    (eachIngredient) => eachIngredient.text
  );
  const restrictions = await getRestrictions();
  for (const restriction of restrictions) {
    const index = ingredients.findIndex((eachIngredient) => {
      return eachIngredient.toLowerCase().includes(restriction);
    });
    if (index > -1)
      return { isValid: false, invalidIngredient: ingredients[index] };
  }
  return { isValid: true, invalidIngredient: "" };
};

export { createRestrictions, scanFood, getRestrictions, compareRestrictions };
