import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AddToCart from "./Components/AddToCart";
import Navigator from "./Navigator/Navigator";

const App = () => {
  return <Navigator />;
};

export default App;

const styles = StyleSheet.create({
  flex: 1,
  paddingHorizontal: 16,
});
