/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import {
  Button,
  Text,
  TextInput,
  useTheme,
  IconButton,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSelector, useDispatch } from 'react-redux';
import styles from './login.styles';
import * as Actions from './login.actions';

export default function Login() {
  const {
    isLoading,
    emailError,
    passwordError,
    passwordTextIsShown,
  } = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();

  const { colors } = useTheme();

  const [loginPayload, setLoginPayload] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    dispatch(Actions.togglePasswordVisibility(true));
    dispatch(Actions.loginErrorEmail(''));
    dispatch(Actions.loginErrorPassword(''));
  }, []);

  function handleLogin() {
    dispatch(Actions.login(loginPayload));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Icon name="account-lock" style={styles.loginIcon} size={30} /> Login
      </Text>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.email}
          label="Email"
          error={emailError}
          value={loginPayload.email}
          onChangeText={text =>
            setLoginPayload({ ...loginPayload, email: text })
          }
        />
        <Text style={styles.error}>{emailError}</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.password}
          label="Password"
          error={passwordError}
          value={loginPayload.password}
          secureTextEntry={passwordTextIsShown}
          onChangeText={text =>
            setLoginPayload({ ...loginPayload, password: text })
          }
        />
        <Text style={styles.error}>{passwordError}</Text>
        <IconButton
          icon={passwordTextIsShown ? 'eye-off' : 'eye'}
          style={styles.eyeIcon}
          size={20}
          onPress={() =>
            dispatch(Actions.togglePasswordVisibility(!passwordTextIsShown))
          }
        />
      </View>
      <Button
        style={styles.forgotPassword}
        color={colors.text}
        uppercase={false}
        onPress={() => Alert.alert()}>
        Forgot password?
      </Button>
      <Button
        style={styles.submit}
        icon="login"
        mode="contained"
        uppercase={false}
        dark={true}
        loading={isLoading}
        onPress={handleLogin}>
        Login
      </Button>
      <Button
        style={styles.notRegistered}
        color={colors.text}
        uppercase={false}
        onPress={() => Alert.alert()}>
        Not yet registered?
      </Button>
    </View>
  );
}
