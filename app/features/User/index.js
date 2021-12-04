import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

// import { useSelector, useDispatch } from 'react-redux';
import styles from './user.styles';
// import * as Actions from './user.actions';

export default function User() {
  // const dispatch = useDispatch();
  // const { getUser } = Actions;
  // const { data } = useSelector(state => state.userReducer);

  return (
    <View style={styles.container}>
      <Text>User Screen</Text>
    </View>
  );
}
