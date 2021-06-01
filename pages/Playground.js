import Slider from "../component/Slider";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView,ScrollView,TouchableOpacity} from "react-native";
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
    this.props.navigation.navigate("PlaygroundStack",   { screen: "Wiki1" } );
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
            <View>
              <TouchableOpacity
                style={styles.itemContainer}
                 onPress={() => this.onPressWiki()}
                // navigation={this.props.navigation}
              >
                <Text>WikiPage</Text>
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
    flexWrap: "wrap",
    height:20
  },
  wiki_header: {
    fontSize: 28,
    fontWeight: "bold"
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
});
