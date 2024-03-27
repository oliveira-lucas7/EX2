import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import Home from "./src/home"
import Agenda from './src/Agenda';
import Itens from './src/Itens';
import Contatos from './src/Contatos';
// import Local from './src/Local'
import TelaCamera from './src/TelaCamera'


const Tab = createBottomTabNavigator();


//const Drawer = createDrawerNavigator();


//const Stack = createNativeStackNavigator();

/*export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Local" component={Local} />
        <Drawer.Screen name="Itens" component={Itens} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}*/



export default function App()
{
  return(
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
            />
          <Tab.Screen 
            name="Agenda" 
            component={Agenda} 
            options={{
              tabBarLabel: 'Agenda',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="calendar-month-outline" color={color} size={size} />
              ),
            }}
            />
          <Tab.Screen 
            name="Itens" 
            component={Itens} 
            options={{
              tabBarLabel: 'Itens',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="shopping-outline" color={color} size={size} />
              ),
            }}
            />
          <Tab.Screen 
            name="Contatos" 
            component={Contatos} 
            options={{
              tabBarLabel: 'Contatos',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }}
            />
          {/* <Tab.Screen 
            name="Local" 
            component={Local} 
            options={{
              tabBarLabel: 'Local',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="google-maps" color={color} size={size} />
              ),
            }}
            /> */}
            <Tab.Screen 
              name="Camera" 
              component={TelaCamera} 
              options={{
                tabBarLabel: 'Camera',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="camera-outline" color={color} size={size} />
              ),
            }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}



