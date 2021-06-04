import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

import Carousel from "react-native-snap-carousel"; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from "../utils/animations";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 4) / 4);

const DATA = [];
for (let i = 1; i < 6; i++) {
  DATA.push(i);
}

export default class Slider extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onPress = item => {
    this.props.navigation.navigate("PlaygroundStack", {
      screen: `Item${item}`
    });
  };

  _renderItem({ item }) {
    var imgList = [
      require("../assets/image/game1.jpeg"),
      require("../assets/image/game2.jpeg"),
      require("../assets/image/concept-of-website-recovery.png"),
      require("../assets/image/subscribe.png"),
      require("../assets/image/lady-working-on-desk.png")
    ];
    var titleList = [
      "Play Memory Card Game",
      "Place Window Flower in AR",
      "Culture Quiz",
      "Language Quiz",
      "Invite a Friend"
    ];
    var tmp = parseInt(item) - 1;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => this.onPress(item)}
        // navigation={this.props.navigation}
      >
        <View style={styles.img_container}>
          <Image style={styles.img} source={imgList[tmp]} />
        </View>
        <Text style={styles.itemLabel}>{`${titleList[tmp]}`}</Text>
        <View style={styles.ptn_container}>
          <Text style={styles.ptn}>10 pts</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View>
        <Carousel
          ref={c => (this.carousel = c)}
          data={DATA}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={index => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 20,
    height: 320
    // backgroundColor: "red"
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6091",
    borderRadius: 20
  },
  itemLabel: {
    color: "white",
    fontSize: 24
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  img: {
    resizeMode: "cover",
    width: "100%",
    height: "100%"
  },
  img_container: {
    width: 250,
    height: 180,
    alignItems: "center",
    backgroundColor: "#499fd4",
    borderRadius: 20,
    // marginVertical: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  ptn_container: {
    width: 65,
    height: 25,
    marginRight: 20,
    marginVertical: 10,
    textAlignVertical: "center",
    alignSelf: "flex-end",
    backgroundColor: "#52B69A",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  ptn: {
    textAlignVertical: "center",
    color: "#99D98C",
    fontWeight: "bold"
  }
});
