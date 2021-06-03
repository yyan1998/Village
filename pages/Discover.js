import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions } from "react-native";

import Masonry from "./Masonry";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Masonry
        itemsProvider={dataItemProvider}
        renderImageItem={ImageItem}
        pageSize={4}
      />
    </SafeAreaView>
  );
}

const vpWidth = Dimensions.get("window").width;

function ImageItem(dataItem, key) {
  return (
    <View
      key={key}
      style={{
        ...styles.card,
        height: dataItem.height,
      }}
    >
      <Image style={styles.img} source={{ uri: dataItem.image_url }} />
      <Text style={styles.text}>{dataItem.title}</Text>

    </View>
  );
}


function dataItemProvider(pageSize = 4) {
  return [...Array(pageSize).keys()].map((i) => {
    return {
      image_url: `https://picsum.photos/300/400`,
      height: parseInt(0.7 * vpWidth),
      key: i,
      title: 'Title',
    };
  });
}

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
  },
  img: {
    borderRadius: 10,
    flex: 1,
  },
  text: {
    textAlignVertical: "center",
    textAlign: "center",
  },
});
