import "react-native-gesture-handler";

import * as React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Discover from "./pages/Discover";
import Pet from "./pages/Pet";
import Playground from "./pages/Playground";
import Item1 from "./pages/Item1";
import Item2 from "./pages/Item2";
import Item3 from "./pages/Item3";
import Item4 from "./pages/Item4";
import Item5 from "./pages/Item5";
import Wiki1 from "./pages/Wiki1";
import Dis_page1 from "./pages/Dis_page1"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DiscoverStack() {
  return (
    <Stack.Navigator
      initialRouteName="Discover"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Discover"
        component={Discover}
        options={{ title: "Discover" }}
      />
      <Stack.Screen
      name="Dis_page1"
      component={Dis_page1}
      options={{title:"Dis1"}} />
    </Stack.Navigator>
  );
}

function PetStack() {
  return (
    <Stack.Navigator
      initialRouteName="Pet"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Pet" component={Pet} options={{ title: "Pet" }} />
    </Stack.Navigator>
  );
}

function PlaygroundStack() {
  return (
    <Stack.Navigator
      initialRouteName="Playground"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Playground"
        component={Playground}
        options={{ title: "Playground" }}
      />
      <Stack.Screen
        name="Item1"
        component={Item1}
        options={{ title: "Item1" }}
      />
      <Stack.Screen
        name="Item2"
        component={Item2}
        options={{ title: "Item2" }}
      />
      <Stack.Screen
        name="Item3"
        component={Item3}
        options={{ title: "Item3" }}
      />
      <Stack.Screen
        name="Item4"
        component={Item4}
        options={{ title: "Item4" }}
      />
      <Stack.Screen
        name="Item5"
        component={Item5}
        options={{ title: "Item5" }}
      />
      <Stack.Screen
        name="Wiki1"
        component={Wiki1}
        options={{ title: "Wiki1" }}
      />
    
    </Stack.Navigator>
  );
}
PlaygroundStack.navigationOptions = ({ navigation }) => {
  return {
    // tabBarVisible: navigation.state.index === 0,
    // tabBarLabel: "Home",
    // tabBarIcon: ({ focused }) => (
    //   <TabBarIcon
    //     focused={focused}
    //     name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    //   />
    // )
  };
};
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="PetStack"
        tabBarOptions={{
          activeTintColor: "#42f44b",
          inactiveTintColor: "#000000",
          style: {
            backgroundColor: "#F4F08D",
          },
        }}
      >
        <Tab.Screen
          name="DiscoverStack"
          component={DiscoverStack}
          options={{
            tabBarLabel: "Discover",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="lighthouse-on"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="PetStack"
          component={PetStack}
          options={{
            tabBarLabel: "Pet",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="paw" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="PlaygroundStack"
          component={PlaygroundStack}
          options={{
            tabBarLabel: "Playground",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="owl" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
