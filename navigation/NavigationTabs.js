import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import homeScreen from "../views/HomeScreen"
import GifScreen from "../views/GifScreen"
import RecentScreen from "../views/RecentScreen"
import FavoritesScreen from "../views/FavoritesScreen"
const Tab = createMaterialBottomTabNavigator();
const iconSize = 26;


const NavigationTabs = () => {
    return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen
        name="Memes"
        component={homeScreen}
        options={{
          tabBarLabel: "Memes",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="image-search"
              color={color}
              size={iconSize}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Gifs"
        component={GifScreen}
        options={{
          tabBarLabel: "Gifs",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gif" color={color} size={iconSize} />
          ),
        }}
      />

      <Tab.Screen
        name="Recent"
        component={RecentScreen}
        options={{
          tabBarLabel: "Recent",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="history"
              color={color}
              size={iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="heart"
              color={color}
              size={iconSize}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavigationTabs
