import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Result from "./Result/Result";
import Scanner from "./Scanner/Scanner";
import Restrictions from "./Restrictions/Restrictions";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Restrictions"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Restrictions" component={Restrictions} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
