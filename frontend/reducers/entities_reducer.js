import { combineReducers } from 'redux';

import users from './users_reducer';
import journals from './journal_reducer';

export default combineReducers({
  users,
  journals,
});
