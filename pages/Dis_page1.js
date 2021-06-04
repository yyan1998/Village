import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

const screen_width = Dimensions.get("window").width;
const screen_height = Dimensions.get("window").height;

export default class Dis_page1 extends React.Component {
  static navigationOptions = {
    title: "Dispage1",
  };
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress = () => {
    this.props.navigation.navigate("DiscoverStack", { screen: "Discover" });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <View style={styles.back}>
            <Text style ={{fontSize:20, fontWeight:"bold", left:20}}>Back</Text>
          </View>
        </TouchableOpacity>

        <Image
          source={require("../assets/image/discovery_1.jpeg")}
          style={styles.image}
        />
        <Text style={{fontSize : 30, fontWeight:"bold", marginLeft: 20, marginRight:20, marginTop: 10, marginBottom:20}}>
          Looking for Authentic Chinese Food? A Guide to Chinese Restaurants in
          NYC
        </Text>
        <Text style={{fontSize: 22,marginLeft: 20, marginRight:20}}>
          If Orange Chicken from Panda Express first comes into your mind when
          thinking of Chinese food, then please continue reading this.
          Unfortunately, you probably would not find such dish in most
          restaurants in China. In this guide, we list top Chinese restaurants
        </Text >
        <View style={styles.icons}>
        <Feather name="heart" size={40} color="black" style={{marginRight:10}} />
        <MaterialCommunityIcons name="comment-outline" size={40} color="black" />
        </View>
      </SafeAreaView>
    );
  }
}
Dis_page1.navigationOptions = {
  header: null,
  tabBarVisible: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: 20,
    width: screen_width,
    height: screen_height * 0.3,
  },
  back: {
    marginTop: 40,
    textAlign: "left",
  },
  icons :{
      marginTop:10,
      flexDirection:"row",
      justifyContent:"flex-end",
      marginRight:20,
      
  }
});
