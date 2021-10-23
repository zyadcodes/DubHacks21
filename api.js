// File contains the connection to the food API and returns the json.

import { lifestyles, allRestrictions } from "config/restrictions.js";

const scanFood = async (barcode) => {
  const response = await fetch(
    "https://fr.openfoodfacts.org/api/v0/product/" + barcode + ".json"
  );
  console.log(response);
};

function finalArr(userAllergies, userLifestyle) {
  let finalArr = userAllergies;

  for (let i = 0; i < userLifestyle.length; i++) {
    let lifestyle = userLifestyle[i];
    let lifestyleVals = lifestyles[lifestyle];
    finalArr.push(lifestyleVals);
  }

  return finalArr;
}
