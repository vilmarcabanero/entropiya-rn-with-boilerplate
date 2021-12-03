/*
 * combines all th existing reducers
 */
import * as loginReducer from 'app/features/Login/reducers';
import * as taskReducer from 'app/features/Task/task.reducers';
export default Object.assign({}, loginReducer, taskReducer);
