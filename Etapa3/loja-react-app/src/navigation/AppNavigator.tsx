import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, TabParamList } from "./types";


import FontAwesome from '@expo/vector-icons/FontAwesome';
// Telas do app.
import HomeScreen from "../screens/HomeScreen";
// importar depois que implementar: DetailsScreen, SettingsScreen
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import CartScreen from "../screens/cart/CartScreen";

const AppStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

import CatalogScreen from "../screens/catalog/CatalogScreen";

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;

          if (route.name === "Cart") {
            iconName = focused ? "shopping-cart" : "shopping-cart";
          }
          
          if (route.name === "Catalog") {
            iconName = focused ? "tags" : "tags";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >

      <Tab.Screen name="Catalog" 
      component={CatalogScreen}
      options={{title: 'Menu'}}/>

    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{ title: 'Seu Carrinho' }}
    />

      <Tab.Screen name="Settings" component={HomeScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
    );
  }
  
  function StackNavigator() {
    return (
      <AppStack.Navigator>
        <AppStack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      <AppStack.Screen
        name="Details"
        component={HomeScreen}
        options={{ title: "Detalhes" }}
      />
      <AppStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Acessar" }}
      />
    </AppStack.Navigator>
  );
}

export default function AppNavigator() {
    return (
      
        <StackNavigator />
      
    );
  }
  