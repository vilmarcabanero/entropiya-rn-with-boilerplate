import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from 'app/features/Login';
import Home from 'app/features/Home';

const Stack = createStackNavigator();

function App() {
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

  const titleOptions = {
    title: 'Entropiya',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTintColor: '#1A73E8',
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={Home} options={titleOptions} />
        ) : (
          <Stack.Screen name="Login" component={Login} options={titleOptions} />
        )}
        {/* <Stack.Screen name="Home" component={Home} options={homeOptions} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
