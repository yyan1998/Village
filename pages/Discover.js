import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Masonry from "../component/Masonry.js";

export default class Discovery extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.dataItemProvider = this.dataItemProvider.bind(this)
    this.ImageItem = this.ImageItem.bind(this)
  }

  onPress = item => {
    this.props.navigation.navigate("DiscoverStack", {
      screen: `Dis_page${item}`
    });
  };

  dataItemProvider(pageSize = 4) {
    return [
      {
        image_url: require("../assets/image/discovery_1.jpeg"),
        key: 0,
        title:
          "Looking for Authentic Chinese Food? A Guide to Chinese Restaurants in NYC",
      },
      {
        image_url: require("../assets/image/discovery_2.jpeg"),
        key: 1,
        title: "College Experience at USC as an Asian American Student",
      },
      {
        image_url: require("../assets/image/discovery_3.jpeg"),
        key: 2,
        title: "Yes. It is Racist to Say Asians are Good at Math. Here is Why.",
      },
      {
        image_url: require("../assets/image/discovery_4.jpg"),
        key: 3,
        title: "Japan Travel Guide: Architecture Style Explained",
      },
      {
        image_url: require("../assets/image/discovery_5.jpeg"),
        key: 4,
        title: "My first Kung Fu Tea Experience",
      },
    ];
  }
  

  ImageItem(dataItem, key) {
    return (
      <TouchableWithoutFeedback
       onPress={() => this.onPress(dataItem.key+1)}>
        <View
          key={dataItem.key}
          style={{
            ...styles.card,
          }}
        >
          <Image style={styles.img} source={dataItem.image_url} />
          <Text style={styles.text}>{dataItem.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Masonry
          itemsProvider={this.dataItemProvider}
          renderImageItem={this.ImageItem}
          pageSize={4}
        />
      </SafeAreaView>
    );
  }
}

const vpWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
  },
  card: {
    margin: 8,
    width: vpWidth * 0.5 - 15,
    shadowColor: "#0000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
    maxHeight: parseInt(0.9 * vpWidth),
  },
  img: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: parseInt(0.6 * vpWidth),
    width: vpWidth * 0.5 - 15,
  },
  text: {
    textAlignVertical: "center",
    textAlign: "center",
    margin: 10,
  },
});
