import React, { useEffect, useState } from "react";
import ResultStyle from "./ResultStyle";
import { View, Text } from "react-native";
import { scanFood } from "../../api";

const Result = ({ navigation, route }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await scanFood(route.params.barcode);
      console.log(fetchedData);
      setData(fetchedData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Done</Text>
    </View>
  );
};

export default Result;
