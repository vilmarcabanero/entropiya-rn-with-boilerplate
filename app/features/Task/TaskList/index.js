import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

// import { useSelector, useDispatch } from 'react-redux';
import styles from './task-list.styles';
// import * as Actions from '../task.actions';

export default function TaskList() {
  // const dispatch = useDispatch();
  // const { getTaskList } = Actions;
  // const { data } = useSelector(state => state.taskListReducer);

  return (
    <View style={styles.container}>
      <Text>TaskList Screen</Text>
    </View>
  );
}
