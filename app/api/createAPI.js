import config from 'app/utils/config';
import AsyncStorage from '@react-native-community/async-storage';

import WebServices from './WebServices';

export default function* createAPI() {
  const api = WebServices(config.API.SERVER.WEBSERVICES.OPTIONS);
  const token = yield AsyncStorage.getItem('authToken');
  api.setHeader('Authorization', `Bearer ${token}`);
  return api;
}
