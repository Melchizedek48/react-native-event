import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeMainScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.titleText}>International Potato Day</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeMainScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});


