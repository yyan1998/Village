import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {PetViewer} from './../scripts/petViewer.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Pet</Text>
      <PetViewer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
