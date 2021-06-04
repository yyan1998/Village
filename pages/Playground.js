import Slider from "../component/Slider";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Item1 from "./Item1";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class Playground extends React.Component {
  static navigationOptions = {
    title: "Playground"
  };

  constructor(props) {
    super(props);
    this.onPressWiki = this.onPressWiki.bind(this);
  }

  onPressWiki = () => {
    this.props.navigation.navigate("PlaygroundStack", { screen: "Wiki1" });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.mission}>
            <Text style={styles.mission_header}>Today's Mission</Text>

            <Slider navigation={this.props.navigation} />
          </View>
          <View style={styles.wiki}>
            <View style={styles.wiki_bar}>
              <Text style={styles.wiki_header}>Wiki</Text>
              <MaterialCommunityIcons
                style={{ marginRight: 5, marginTop: 4 }}
                name="magnify"
                color="black"
                size={28}
              />
            </View>

            <View>
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => this.onPressWiki()}
                // navigation={this.props.navigation}
              >
                <ImageBackground
                  style={styles.theImage}
                  source={require("../assets/image/newyear.png")}
                >
                  <Text style={styles.theText}>Chinese New Year</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => this.onPressWiki()}
                // navigation={this.props.navigation}
              >
                <ImageBackground
                  style={styles.theImage}
                  source={require("../assets/image/cave.jpeg")}
                >
                  <Text style={styles.theText}>Mogao Caves</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => this.onPressWiki()}
                // navigation={this.props.navigation}
              >
                <ImageBackground
                  style={styles.theImage}
                  source={require("../assets/image/kimono.jpg")}
                >
                  <Text style={styles.theText}>Kimono Culture of Japan</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
    flexWrap: "wrap",
    // backgroundColor: "#fff",
    justifyContent: "center"
  },
  mission: {
    flex: 1,
    flexDirection: "column",
    marginTop: 80,
    height: 400
  },
  mission_header: {
    fontSize: 28,
    fontWeight: "bold"
  },
  wiki: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: 10
  },
  wiki_bar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  wiki_header: {
    fontSize: 28,
    fontWeight: "bold"
  },
  scrollView: {
    // backgroundColor: "red",
    width: "100%"
  },
  itemContainer: {
    backgroundColor: "yellow",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    height: 80,
    width: 350,
    overflow: "hidden"
  },
  theImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10
  },
  theText: {
    marginTop: 20,
    marginLeft: 15,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});
