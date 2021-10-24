import React, { useState, useEffect } from "react";
import RestrictionsStyle from "./RestrictionsStyle";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { lifestyles, allRestrictions } from "../../config/restrictions";
import fontStyles from "../../config/fontStyles";
import CheckBox from "@react-native-community/checkbox";
import { createRestrictions, getRestrictions } from "../../api";
import Spinner from "react-native-loading-spinner-overlay";

const Restrictions = ({ navigation }) => {
  const [showAllergy, setShowAllergy] = useState(false);
  const [showLifestyle, setShowLifestyle] = useState(false);
  const [selectedAllergies, setSelectedAllergies] = useState({});
  const [selectedLifestyle, setSelectedLifestyle] = useState({});
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRestrictions();
    };
    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={RestrictionsStyle.container}>
      <View style={RestrictionsStyle.titles}>
        <Text style={[fontStyles.white, fontStyles.bigTextStyle]}>
          What should we look out for?
        </Text>
      </View>
      <TouchableOpacity
        style={RestrictionsStyle.row}
        onPress={() => setShowAllergy(!showAllergy)}
      >
        <Text style={[fontStyles.black, fontStyles.biggerTextStyle]}>
          Allergies
        </Text>
        <Text style={[fontStyles.black, fontStyles.biggerTextStyle]}>
          {showAllergy ? "v" : ">"}
        </Text>
      </TouchableOpacity>
      {showAllergy ? (
        <View style={RestrictionsStyle.listContainer}>
          {allRestrictions.map((eachItem, index) => (
            <View style={RestrictionsStyle.listItem} key={index}>
              <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>
                {eachItem}
              </Text>
              <CheckBox
                disabled={false}
                value={
                  eachItem.toLowerCase() in selectedAllergies
                    ? selectedAllergies[eachItem.toLowerCase()]
                    : false
                }
                onValueChange={(value) => {
                  const oldAllergies = selectedAllergies;
                  oldAllergies[eachItem.toLowerCase()] = value;
                  setSelectedAllergies(oldAllergies);
                  setShouldUpdate(!shouldUpdate);
                }}
              />
            </View>
          ))}
        </View>
      ) : (
        <View />
      )}
      <TouchableOpacity
        style={RestrictionsStyle.row}
        onPress={() => setShowLifestyle(!showLifestyle)}
      >
        <Text style={[fontStyles.black, fontStyles.biggerTextStyle]}>
          Lifestyle
        </Text>
        <Text style={[fontStyles.black, fontStyles.biggerTextStyle]}>
          {showAllergy ? "v" : ">"}
        </Text>
      </TouchableOpacity>
      {showLifestyle ? (
        <View style={RestrictionsStyle.listContainer}>
          {Object.keys(lifestyles).map((eachItem, index) => (
            <View style={RestrictionsStyle.listItem} key={index}>
              <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>
                {eachItem}
              </Text>
              <CheckBox
                disabled={false}
                value={
                  eachItem.toLowerCase() in selectedLifestyle
                    ? selectedLifestyle[eachItem.toLowerCase()]
                    : false
                }
                onValueChange={(value) => {
                  const oldLifestyle = selectedLifestyle;
                  oldLifestyle[eachItem.toLowerCase()] = value;
                  setSelectedLifestyle(oldLifestyle);
                  setShouldUpdate(!shouldUpdate);
                }}
              />
            </View>
          ))}
        </View>
      ) : (
        <View />
      )}
      {isLoading ? (
        <Spinner visible={isLoading} />
      ) : (
        <TouchableOpacity
          style={RestrictionsStyle.finishButton}
          onPress={async () => {
            setIsLoading(true);
            await createRestrictions(
              Object.keys(selectedAllergies).filter(
                (eachObject) => selectedAllergies[eachObject] === true
              ),
              Object.keys(selectedLifestyle).filter(
                (eachObject) => selectedLifestyle[eachObject] === true
              )
            );
            setIsLoading(false);
            navigation.push("Scanner");
          }}
        >
          <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>
            Finish
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default Restrictions;
