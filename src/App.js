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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Landing from './screens/Landing';

enableScreens();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { Text, View, SafeAreaView } from 'react-native';

const Feed = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
};

function Home() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
        name="Feed"
        component={Feed}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Chart',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="insert-chart" color={color} size={size} />
          ),
        }}
        name="Chart"
        component={Feed}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="watch-later" color={color} size={size} />
          ),
        }}
        name="History"
        component={Feed}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="menu" color={color} size={size} />
          ),
        }}
        name="Menu"
        component={Feed}
      />
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
      <Stack.Screen name="Home" component={Home} />
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
