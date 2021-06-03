import React, { Component } from "react";
import { render } from "react-dom";
import { FontAwesome } from '@expo/vector-icons'; 

import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import { SafeAreaView } from "react-native";

export default class Masonry extends Component {
  constructor(props) {
    super(props);
    this.pageSize = this.props.pageSize | 50;
    this.ScrollViewHeight = 0;
    this.vpHeight = Dimensions.get("window").height;
    this.state = {
      data: [],
    };
  }
  generateData() {
    const data = this.props.itemsProvider(this.pageSize);
    this.setState({
      data: [...this.state.data, ...data],
    });
  }
  componentDidMount() {
    this.generateData();
  }

  handleScroll(e) {
    const { y } = e.nativeEvent.contentOffset;
    const height = this.scrollViewHeight;
    const lastScreenOffset = height - this.vpHeight * 3;
    if (y >= lastScreenOffset) {
      this.generateData();
    }
  }

  render() {
    const data = this.state.data;
    return (
    <SafeAreaView style={styles.layout}>

    <FontAwesome name="search" size={24} color="black"  style={{ position: 'absolute', top: 45, right:10}}/>
    <FontAwesome name="cloud-upload" size={24} color="black" style={{ position: 'absolute', top: 45, left:10}}/>
    <ScrollView
        onScroll={this.handleScroll}
        onContentSizeChange={(width, height) => {
            this.scrollViewHeight = height;
          }}
        style = {styles.scroll}
      >
        <View style={styles.container}>
          <View>
            
            {data.length ? 
              data.slice(0, data.length / 2).map((di, i) => {
                return this.props.renderImageItem(di, i);
              })
             : (
              <></>
            )}

          </View>
          <View>
            {data.length ? 
              data.slice(data.length / 2, data.length).map((di, i) => {
                return this.props.renderImageItem(di, i);
              })
             : (
              <></>
            )}

          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
  },
  layout : {
    marginBottom: 70

  },
  scroll :{
      top: 70,
  },
  icon: {
    top : 0
  }
});
