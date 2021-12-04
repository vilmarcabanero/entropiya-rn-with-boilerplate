import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from 'app/features/Login';
import Home from 'app/features/Home';

const Stack = createStackNavigator();

const titleOptions = {
  title: 'Entropiya',
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#1A73E8',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function App() {
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

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
