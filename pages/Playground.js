import Slider from "../component/Slider";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Item1 from "./Item1";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default class Playground extends React.Component {
  static navigationOptions = {
    title: "Playground"
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mission}>
          <Text style={styles.mission_header}>Today's Mission</Text>
          <Slider navigation={this.props.navigation} />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mission: {
    flex: 1,
    flexDirection: "column",
    marginTop: 80,
    height: 500
  },
  mission_header: {
    fontSize: 28,
    fontWeight: "bold"
  }
});
