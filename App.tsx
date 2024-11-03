import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ItemsListScreen from './screens/ItemsListScreen';
import ItemsTableScreen from './screens/ItemsTableScreen';

const Tab = createMaterialTopTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarStyle: { backgroundColor: 'royalblue' },
                    tabBarIndicatorStyle: { backgroundColor: 'white' },
                }}
            >
                <Tab.Screen name="ItemsList" component={ItemsListScreen} options={{ title: 'AMOUNTS' }} />
                <Tab.Screen name="ItemsTable" component={ItemsTableScreen} options={{ title: 'GRID' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
