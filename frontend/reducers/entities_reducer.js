import { combineReducers } from 'redux';

import users from './users_reducer';
import journals from './journal_reducer';
import entries from './entries_reducer';

export default combineReducers({
  users,
  journals,
  entries,
});
