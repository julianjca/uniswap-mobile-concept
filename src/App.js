/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Landing from './screens/Landing';

enableScreens();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { Text, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const Feed = () => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="LoggedInPage" component={Home} />
    </Stack.Navigator>
  );
}

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <NavigationContainer>
//         <MyStack />
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// };

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
