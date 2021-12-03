import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../actions';
import styles from './styles';

import { navigate } from 'app/navigation/NavigationService';

function Login(props) {
  const id = useSelector(state => state.loginReducer.id);
  const { dispatch } = props;
  // const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));

  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login Status : {id}</Text>
      <Button icon="login" mode="outlined" onPress={onLogin}>
        Login
      </Button>
      <Button icon="" mode="outlined" onPress={() => navigate('Task')}>
        Go to Task Page
      </Button>
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
