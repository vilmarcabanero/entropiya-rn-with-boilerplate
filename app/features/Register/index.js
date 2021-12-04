import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux';
import styles from './register.styles';
import * as Actions from './register.actions';

export default function Register() {
  const dispatch = useDispatch();
  const { getRegister } = Actions;
  const { data } = useSelector(state => state.registerReducer);

  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
    </View>
  );
}
