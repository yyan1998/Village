import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  Modal,
  Animated
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ModalPopup = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] }
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const ModalPopupF = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] }
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default class Item3 extends React.Component {
  static navigationOptions = {
    title: "Item3"
  };
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.state = {
      visible: false,
      visibleF: false
    };
  }

  onPress = () => {
    this.props.navigation.navigate("PlaygroundStack", { screen: "Playground" });
  };

  render() {
    // const [visible, setVisible] = React.useState(false);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.back}>
          <Button title="Back" onPress={this.onPress} />
        </View>
        <ModalPopup visible={this.state.visible}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => this.setState({ visible: false })}
              >
                <Image
                  source={require("../assets/image/false.png")}
                  style={{ height: 30, width: 30 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/image/right.png")}
              style={{ height: 150, width: 150, marginVertical: 10 }}
            />
          </View>

          <Text
            style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}
          >
            Correct! You got 10 points.
          </Text>
        </ModalPopup>
        <ModalPopupF visible={this.state.visibleF}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => this.setState({ visibleF: false })}
              >
                <Image
                  source={require("../assets/image/false.png")}
                  style={{ height: 30, width: 30 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/image/false.png")}
              style={{ height: 150, width: 150, marginVertical: 10 }}
            />
          </View>

          <Text
            style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}
          >
            <Text>Wrong! Answer is </Text>
            <Text style={{ fontWeight: "bold" }}>Mogao Caves.</Text>
          </Text>
        </ModalPopupF>
        <View style={styles.content}>
          <View style={styles.img_container}>
            <Image
              style={styles.img}
              source={require("../assets/image/concept-of-website-recovery.png")}
            />
          </View>
          <View style={styles.question_container}>
            <Text style={styles.question}>
              Q: What is Dunhuang, a city in northwestern China, famous for?
            </Text>
          </View>
          <View style={styles.answer_container}>
            <View style={styles.answer}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ visibleF: true });
                }}
              >
                <Text style={styles.answerText}>Forbidden City</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.answer}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ visible: true });
                }}
              >
                <Text style={styles.answerText}>Mogao Caves</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.answer}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ visibleF: true });
                }}
              >
                <Text style={styles.answerText}>Temple of Heaven</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.answer}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ visibleF: true });
                }}
              >
                <Text style={styles.answerText}>Summer Palace</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}
Item3.navigationOptions = {
  header: null,
  tabBarVisible: false
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20
  },
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },
  back: {
    fontSize: 24,
    textAlign: "left",
    width: 80
  },
  img: {
    resizeMode: "contain",
    width: "90%",
    height: "100%"
  },
  img_container: {
    width: 350,
    height: 280,
    alignItems: "center",
    backgroundColor: "#499fd4",
    borderRadius: 20,
    marginVertical: 20
  },
  question: {
    fontSize: 20
  },
  question_container: {
    alignItems: "center",
    marginVertical: 20
    // backgroundColor: "#499fd4",
  },
  answerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    margin: "auto"
  },
  answer_container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },
  answer: {
    // alignItems: "flex-start",
    textAlignVertical: "center",
    justifyContent: "center",
    marginVertical: 5,
    paddingLeft: 10,
    width: 350,
    height: 50,
    backgroundColor: "#499fd4",
    borderRadius: 10
  }
});
