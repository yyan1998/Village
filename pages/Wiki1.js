import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Wiki1 extends React.Component {
  static navigationOptions = {
    title: "Wiki1"
  };
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress = () => {
    this.props.navigation.navigate("PlaygroundStack", { screen: "Playground" });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button title="Back" onPress={this.onPress} />
        <TouchableOpacity onPress={this.onPress}>
          <Text>Wiki1</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}
Wiki1.navigationOptions = {
  header: null,
  tabBarVisible: false
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});