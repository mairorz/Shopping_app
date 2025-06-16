import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

const MainStackNavigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeTabs" component={BottomTabNavigator} options={{headerShown:false}} />
                <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default MainStackNavigator;