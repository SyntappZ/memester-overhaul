import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer  } from "@react-navigation/native";

import NavigationTabs from "./navigation/NavigationTabs";
const url = "https://api.imgur.com/3/tags";
const clientId = "Client-ID 7711bc539737c6e";

const App = () => {
  useEffect(() => {});
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#c8b3ff" />
      <NavigationContainer>
        <NavigationTabs />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
