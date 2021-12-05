import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30%',
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    fontSize: 24,
  },
  loginIcon: {
    paddingRight: 10,
  },
  inputGroup: {
    position: 'relative',
    marginBottom: 15,
  },
  email: {
    backgroundColor: 'transparent',
  },
  password: {
    backgroundColor: 'transparent',
  },
  error: {
    position: 'absolute',
    bottom: -15,
    fontSize: 12,
    left: 13,
    color: '#AF0606',
  },
  eyeIcon: {
    right: 0,
    position: 'absolute',
    bottom: 0,
  },
  forgotPassword: {
    marginBottom: 5,
    left: -20,
    width: 200,
  },
  notRegistered: {
    right: -150,
    width: 200,
  },
  submit: { marginBottom: 10 },
});

export default styles;
