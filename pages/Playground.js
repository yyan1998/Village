import Slider from "../component/Slider";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView,ScrollView} from "react-native";
import Item1 from "./Item1";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CardList } from 'react-native-card-list';

const Stack = createStackNavigator();


const cards = [
  {
    id: "0",
    title: "11111111",
  },
  {
    id: "1",
    title: "222222222",
  },
  {
    id: "2",
    title: "33333333333",
  }
]

export default class Playground extends React.Component {
  static navigationOptions = {
    title: "Playground"
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.mission}>
            <Text style={styles.mission_header}>Today's Mission</Text>
            
            <Slider navigation={this.props.navigation} />
        
          </View>
          <View style={styles.wiki}>          
              <Text style={styles.wiki_header}>Wiki</Text>
              <View style={styles.cards}>
                <CardList cards={cards} />
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
    margin: 20,
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#fff",
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
  },
  wiki: {
    flex: 1,
    flexDirection: "column",
  },
  wiki_header: {
    fontSize: 28,
    fontWeight: "bold"
  },
  cards: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
});
