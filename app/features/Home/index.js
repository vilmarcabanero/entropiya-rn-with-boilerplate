/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux';
import styles from './home.styles';
import * as Actions from '../Login/login.actions';
import { getUser } from '../User/user.actions';

export default function Home() {
  const dispatch = useDispatch();
  const { logout } = Actions;
  const { isLoading } = useSelector(state => state.loginReducer);
  const { userDetails } = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <View style={styles.container}>
      <Text>I'm {userDetails.firstName}</Text>
      <Button
        icon="login"
        mode="contained"
        uppercase={false}
        dark={true}
        loading={isLoading}
        onPress={() => dispatch(logout())}>
        Logout
      </Button>
    </View>
  );
}
