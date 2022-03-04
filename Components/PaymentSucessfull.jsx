import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const PaymentSucessfull = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.pay}>Payment successful</Text>
        <StatusBar style="auto" />

        <View style={styles.text}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
        <View style={styles.image}>
          <Image
            source={require("../assets/credit.png")}
            style={{ height: 300, width: 400 }}
          />
        </View>

        <View style={styles.previously}>
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.start}>Get Started</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view}>
          <View style={styles.swipe}></View>
          <View style={styles.wait}></View>
          <View style={styles.go}></View>
          <Text style={styles.prev}>Previous</Text>
          <Text style={styles.skip}>Skip</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentSucessfull;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  profile: {
    flex: 10,
  },

  pay: {
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 30,
  },

  text: {
    flex: 0.6,
    paddingLeft: 20,
  },

  previously: {
    flex: 1,
  },

  touch: {
    backgroundColor: "yellow",
    marginLeft: 70,
    marginRight: 70,
    padding: 10,
    marginTop: 50,
    borderRadius: 100,
  },

  start: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
  },

  view: {
    marginBottom: 5,
    flex: 0.2,
    position: "relative",
  },

  wait: {
    marginTop: 10,
    position: "absolute",
    height: 10,
    marginRight: 1,
    right: 205,
    width: 10,
    backgroundColor: "gray",
    borderRadius: 50,
  },

  swipe: {
    position: "absolute",
    height: 10,
    marginRight: 6,
    marginTop: 10,
    right: 220,
    width: 20,
    backgroundColor: "yellow",
    borderRadius: 50,
  },

  go: {
    marginTop: 10,
    position: "absolute",
    height: 10,
    right: 195,
    width: 10,
    backgroundColor: "gray",
    borderRadius: 50,
  },

  skip: {
    position: "absolute",
    marginLeft: 330,
    fontSize: 20,
    paddingTop: 1,
    color: "gray",
  },

  prev: {
    color: "gray",
    position: "absolute",
    fontSize: 20,
    paddingTop: 1,
    marginLeft: 22,
  },
});
