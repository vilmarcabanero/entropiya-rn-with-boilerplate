
import AsyncStorage from '@react-native-community/async-storage';

export const removeItem  = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error)
  }
}

export const getItem  = async (key) => {
  try {
    await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error)
  }
}
