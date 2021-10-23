// File contains the connection to the food API and returns the json.

const scanFood = async (barcode) => {
  const response = await fetch(
    "https://fr.openfoodfacts.org/api/v0/product/" + barcode + ".json"
  );

  const json = await response.json();

  return json;
};

export { scanFood };
