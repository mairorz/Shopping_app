import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

//screens]
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";


const Tab = createBottomTabNavigator();


const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Cart" component={CartScreen}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;