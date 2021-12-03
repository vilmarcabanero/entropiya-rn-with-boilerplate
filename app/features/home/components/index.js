import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';

export default function Home(props) {
  const { defaultProp } = props;

  return (
    <View style={styles.container}>
      <Button icon="logout" mode="outlined">
        Logout {defaultProp}
      </Button>
    </View>
  );
}
