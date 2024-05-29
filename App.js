import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputFunction from './src/components/input';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/home';
import BootomNavigation from "./src/components/navigation"
import Index from './src/components/Login.jsx';
const Stack = createNativeStackNavigator()



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Index" component={Index}/>
        <Stack.Screen name = "Login" component={InputFunction} options={{title:"Login"}}  />
        <Stack.Screen name = "Home" component={Home} options={{title:"Home Page"}}/>
        <Stack.Screen name = "BootomNavigation" component={BootomNavigation} options={{title:"Dashboard"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
