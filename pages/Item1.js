import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Item1 extends React.Component {
  static navigationOptions = {
    title: "Item1"
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
        <TouchableOpacity  styles={styles.back} onPress={this.onPress}>
          <Text>Back</Text>
        </TouchableOpacity>
        {/* <View  ><Button title="Back" onPress={this.onPress} /></View> */}
        <View style={styles.header1}>
        <Text styles={styles.heading1}> Matching Game</Text>
        </View>
        <View style={styles.mainBoard}>
          <View style={styles.gameBoard}>
            <View styles={ styles.button}>
              <TouchableOpacity  >
              <Text style={ styles.buttonText }>😊</Text>
            </TouchableOpacity>
            </View>
            <View styles={ styles.button}>
              <TouchableOpacity  >
              <Text style={ styles.buttonText }>😊</Text>
            </TouchableOpacity>
            </View>
            <View styles={ styles.button}>
              <TouchableOpacity  >
              <Text style={ styles.buttonText }>😊</Text>
            </TouchableOpacity>
            </View>
            <View styles={ styles.button}>
              <TouchableOpacity  >
              <Text style={ styles.buttonText }>😊</Text>
            </TouchableOpacity>
            </View>
            <View styles={ styles.button}>
              <TouchableOpacity  >
              <Text style={ styles.buttonText }>😊</Text>
            </TouchableOpacity>
            </View>
            <View styles={ styles.button}>
              <TouchableOpacity  >
              <Text style={ styles.buttonText }>😊</Text>
            </TouchableOpacity>
            </View>
            <View styles={ styles.button}>
              <TouchableOpacity  >
              <Text style={ styles.buttonText }>😊</Text>
            </TouchableOpacity>
            </View>
            <View styles={ styles.button}>
              <TouchableOpacity  >
              <Text style={ styles.buttonText }>😊</Text>
            </TouchableOpacity>
            </View>
            <View styles={ styles.button}>
              <TouchableOpacity  >
              <Text style={ styles.buttonText }>😊</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text>footer text</Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
      
    );
  }
}
Item1.navigationOptions = {
  header: null,
  tabBarVisible: false
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection:"column"
  },
  back:{
    fontSize: 24,
    textAlign:"left",
    width: 80,
    backgroundColor: "#000"
  },
  header1: {
    flex:1,
    backgroundColor: "#eee",
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading1:{
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainBoard: {
    flex: 3,
    backgroundColor: "#fff",

  },
  footer:{
    flex: 1,
    backgroundColor: "#eee",
  },
  ganmeBoard: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor:'#ccc',
    borderRadius:8,
    width:80,
    height:80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  }

});
