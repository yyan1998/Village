import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import Carousel from "react-native-snap-carousel"; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from "../utils/animations";


const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

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

  onPress = (item) => {
    // console.log(`Item${item}`);
    this.props.navigation.navigate("PlaygroundStack", { screen: `Item${item}` });
  };

  _renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => this.onPress(item)}
        // navigation={this.props.navigation}
      >
        <Text style={styles.itemLabel}>{`Item ${item}`}</Text>
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
    marginTop: 80,
    height: 300
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue"
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
  }
});
