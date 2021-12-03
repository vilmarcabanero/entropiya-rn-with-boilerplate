import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

// import { useSelector, useDispatch } from 'react-redux';
import styles from './task.styles';
// import * as Actions from './task.actions';

export default function Task() {
  // const dispatch = useDispatch();
  // const { getTask } = Actions;
  // const { data } = useSelector(state => state.taskReducer);

  return (
    <View style={styles.container}>
      <Text>Task Screen</Text>
    </View>
  );
}
