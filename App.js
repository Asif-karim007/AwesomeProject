import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homeButton from "./src/homeButton";
import newAddress from "./src/Screens/newAddress";
import upgradePlan from "./src/Screens/upgradePlan";
import Plan from "./src/Components/Plan";
import NewCard from "./src/Screens/NewCard";
import BillingHistory from "./src/Components/BillingHistory";




const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Profile" component={homeButton} />
                <Stack.Screen name="Address" component={newAddress} />
                <Stack.Screen name="Plan" component={upgradePlan} />
                <Stack.Screen name="AddCard" component={NewCard} />
                <Stack.Screen name="bill-list" component={BillingHistory} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;