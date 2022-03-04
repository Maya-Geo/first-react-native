import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OnlineShop from "../Components/OnlineShop";
import PaymentSuccessful from "../Components/PaymentSucessfull";
import AddToCart from "../Components/AddToCart";

const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnilneShop" component={OnlineShop} />

        <Stack.Screen
          name="Payment Successfull"
          component={PaymentSuccessful}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Add To Cart"
          component={AddToCart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
