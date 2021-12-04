/*
 * combines all th existing reducers
 */
import * as loginReducer from 'app/features/Login/login.reducers';
import * as homeReducer from 'app/features/Home/home.reducers';
import * as userReducer from 'app/features/User/user.reducers';
export default Object.assign({}, loginReducer, homeReducer, userReducer);
