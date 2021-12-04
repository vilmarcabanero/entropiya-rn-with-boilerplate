/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux';
import styles from './login.styles';
import * as Actions from './login.actions';
import * as UserActions from '../User/user.actions';
import * as AsyncStorage from 'app/utils/asyncStorage';

export default function Login() {
  const dispatch = useDispatch();
  const { login } = Actions;
  const { getUser } = UserActions;
  const { isLoading } = useSelector(state => state.loginReducer);
  const { userDetails, userDetailsState } = useSelector(
    state => state.userReducer,
  );

  const authToken = AsyncStorage.getItem('authToken');

  const [loginPayload, setLoginPayload] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    dispatch(getUser());
  }, [userDetailsState]);

  return (
    <View style={styles.container}>
      <Text style={styles.title} color="primary">
        Login
        {!userDetails.firstName ? '' : userDetails.firstName}
      </Text>
      <TextInput
        style={styles.email}
        label="Email"
        mode="outlined"
        value={loginPayload.email}
        onChangeText={text => setLoginPayload({ ...loginPayload, email: text })}
      />
      <TextInput
        type="password"
        style={styles.password}
        label="Password"
        mode="outlined"
        keyboardType="visible-password"
        value={loginPayload.password}
        onChangeText={text =>
          setLoginPayload({ ...loginPayload, password: text })
        }
      />
      <Button
        style={styles.submit}
        icon="login"
        mode="contained"
        uppercase={false}
        dark={true}
        loading={isLoading}
        onPress={() => dispatch(login(loginPayload))}>
        Login
      </Button>
    </View>
  );
}
