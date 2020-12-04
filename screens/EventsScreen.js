import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from '@react-navigation/native';

function EventsHomeScreen( {navigation} ) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to my event!</Text>
      <Button
        onPress={() => navigation.navigate("EventsSecond")}
        title= "Second Screen"
      ></Button>
      <Button
        onPress={() => navigation.navigate("EventsThird")}
        title= "Third Screen"
      ></Button>
      
    </View>
  );
}

function EventsSecondScreen( {navigation} ) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events Second Page!</Text>
    </View>
  );
}

function EventsThirdScreen( {navigation} ) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events Third Page!</Text>

      <Button
       onPress={() => navigation.popToTop()}
       title="Back to top"
     ></Button>
    </View>
  );
}

const Stack = createStackNavigator();


export default function EventsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsHomeScreen} />
      <Stack.Screen name="EventsSecond" component={EventsSecondScreen} />
      <Stack.Screen name="EventsThird" component={EventsThirdScreen} />
    </Stack.Navigator>
  );
}