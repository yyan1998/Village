import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Card from '../component/Card'

export default class Item1 extends React.Component {
  state = {
    cardSymbols: [
      '😊', '😂' , '❤' , '✔', '✨' , '🐟' , '🧓' , '🧨',
    ],
    cardSymbolsInRand: [],
    isOpen: [],
    firstPickedIndex: null,
    secondPickedIndex: null,
    steps:0,
    isEnded: false,
  }

  componentDidMount(){
    this.initGame()
  }

  initGame = () => {
    let newCardsSymbols = [...this.state.cardSymbols,...this.state.cardSymbols]
    let cardSymbolsInRand = this.shuffleArray(newCardsSymbols)

    let isOpen = []
    for (let i=0; i < newCardsSymbols.length; i++){
      isOpen.push(false)
    }

    this.setState({
      cardSymbolsInRand,
      isOpen,
    })  
  }

  shuffleArray = (arr) => {
    const newArr = arr.slice()
    for (let i= newArr.length - 1; i>0; i--){
      const rand= Math.floor(Math.random() * (i+1));
      [newArr[i], newArr[rand]] = [newArr[rand],newArr[i]]
    }
    return newArr
  }
  static navigationOptions = {
    title: "Item1"
  };
  constructor(props) {
    super(props);
    this.onPressBack = this.onPressBack.bind(this);
  }

  cardPressHandler = (index)=> {
    let isOpen = [...this.state.isOpen]
    isOpen[index]=true



    if (this.state.firstPickedIndex == null && this.state.secondPickedIndex ==null){
      this.setState({
        isOpen,
        firstPickedIndex: index,
      })
    }
    else if (this.state.firstPickedIndex != null && this.state.secondPickedIndex == null){
      this.setState({
        isOpen,
        secondPickedIndex: index,
      })
    }

    this.setState({
      steps: this.state.steps + 1,
    })
  }
  calculateGameResult = () =>{
    if (this.state.firstPickedIndex != null && this.state.secondPickedIndex != null){
      
      if (this.state.cardSymbolsInRand.length>0){
        let totalOpens = this.state.isOpen.filter((isOpen)=> isOpen)
        if (totalOpens.length === this.state.cardSymbolsInRand.length){
          this.setState({
            isEnded: true,
          })
          return 
        }
      }
      
      let firstSymbol = this.state.cardSymbolsInRand[this.state.firstPickedIndex]
      let secondSymbol = this.state.cardSymbolsInRand[this.state.secondPickedIndex]

      if (firstSymbol != secondSymbol){
        setTimeout(()=>{
          let isOpen = [...this.state.isOpen]
          isOpen[this.state.firstPickedIndex] = false
          isOpen[this.state.secondPickedIndex] = false

          this.setState({
            firstPickedIndex: null,
            secondPickedIndex: null,
            isOpen,
          })

        }, 1000)
      }
      else{
        this.setState({
          firstPickedIndex: null,
          secondPickedIndex: null,
        })
      }
    }
  }

  componentDidUpdate(prevProps,prevState) {
    if (prevState.secondPickedIndex != this.state.secondPickedIndex){
      this.calculateGameResult()
    }
  }

  resetGame = () => {
    this.initGame()

    this.setState({
      firstPickedIndex: null,
      secondPickedIndex: null,
      steps:0,
      isEnded: false,
    })
  }


  onPressBack = () => {
    this.props.navigation.navigate("PlaygroundStack", { screen: "Playground" });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.back}>
          <Button title="Back" onPress={this.onPressBack} />
        </View>
        <View style={styles.header1}>
          <Text style={styles.heading1}> Matching Game</Text>
        </View>
        <View style={styles.mainBoard}>
          <View style={styles.gameBoard}>
            {this.state.cardSymbolsInRand.map((symbol,index) =>
              <Card key={index} onPress={() => this.cardPressHandler(index) } style= {styles.button} fontSize={30} title={symbol} cover="❓" isShow={this.state.isOpen[index]}></Card>
            )}
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={ styles.footerText}>{
            this.state.isEnded 
            ? `Congrats! You have completed in ${this.state.steps} steps.`
            : `You have tried ${this.state.steps} time(s).`
          }
          </Text>
          {this.state.isEnded ?
            <TouchableOpacity onPress={ this.resetGame } style= {styles.tryAgainButton }>
              <Text style={styles.tryAgainButtonText} >Try Again</Text>
            </TouchableOpacity>
            : null}
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
    flex: 1
  },
  back: {
    fontSize: 24,
    textAlign: "left",
    width: 80
  },
  test: {
    fontSize: 24,
    textAlign: "left",
    backgroundColor: "#000",
    width: 80,
    height: 80
  },
  header1: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center"
  },
  heading1: {
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center"
  },
  mainBoard: {
    flex: 3,
    backgroundColor: "#fff"
  },
  footer: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center"
  },
  footerText: {
    fontSize: 20,
    textAlign: 'center',
  },
  gameBoard: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  button: {
    backgroundColor: "#ccc",
    borderRadius: 8,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    margin: (Dimensions.get('window').width - (48*4)) / (5*2),
  },
  tryAgainButton: {
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 8,
    marginTop: 20,
  },
  tryAgainButtonText:{
    fontSize: 18,
  }
});

