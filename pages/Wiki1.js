import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  Modal,
  Animated
} from "react-native";
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
    // const [visible, setVisible] = React.useState(false);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.back}>
          <Button title="Back" onPress={this.onPress} />
        </View>
        <View style={styles.content}>
          <View style={styles.question_container}>
            <Text style={styles.question}>
              Chinese New Year -- Origin and History
            </Text>
            <Text style={styles.question2}>Written by Anonymous</Text>
          </View>
          <View style={styles.img_container}>
            <Image
              style={styles.img}
              source={require("../assets/image/newyear.png")}
            />
          </View>
          <View style={styles.answer_container}>
            <Text style={styles.answer}>
              For all of us, Chinese New year is the most important festival.
              All family members get together on New Year's Eve to have a big
              meal. At the same time, everyone celebrates to each other. After
              dinner, we often watch the performances on CCTV-1. At about
              twelve, children like to go out and watch the fireworks. Some
              parents light crakers. On the first early morning of one year,
              many old people get up early and they stick the reversed Fu or
              hang couplets on the front door.Some houses' windows are sticked
              on red paper cutlings. The Chinese New Year lasts fifteen days. So
              during the fifteen days, we always visit our relatives from door
              to door. At that time, children are the happiest. Because they can
              get a few red packets from their grandparents, uncles, aunts and
              so on. The last day of the Chinese New Year is another festival,
              it is called Lantern Festival. So the Chinese New Year comes to
              the end.
            </Text>
          </View>
        </View>

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
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20
  },
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },
  back: {
    fontSize: 24,
    textAlign: "left",
    width: 80
  },
  img: {
    resizeMode: "contain",
    width: "100%",
    height: "100%"
  },
  img_container: {
    width: "100%",
    height: 280,
    alignItems: "center",
    // backgroundColor: "#499fd4",
    // borderRadius: 20,
    marginVertical: 20
  },
  question: {
    fontSize: 24,
    fontWeight: "bold"
  },
  question2: {
    fontSize: 16,
    marginTop: 10,
    alignSelf: "flex-start",
    justifyContent: "flex-start"
  },
  question_container: {
    // alignItems: "center",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: 380,
    textAlign: "left",
    marginVertical: 20
    // backgroundColor: "#499fd4"
  },
  answer: {
    fontSize: 18
  },
  answer_container: {
    alignItems: "center",
    marginVertical: 20,
    width: 380,
    textAlign: "justify"
    // backgroundColor: "#499fd4",
  }
});
