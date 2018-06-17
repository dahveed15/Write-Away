import { RECEIVE_ALL_ENTRIES,
         RECEIVE_ENTRY,
         REMOVE_ENTRY } from '../actions/entry_actions';
import merge from 'lodash/merge';

const EntriesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_ENTRIES:
      return merge({}, action.entries);
    case RECEIVE_ENTRY:
      return merge({}, oldState, { [action.entry.id]: action.entry });
    case REMOVE_ENTRY:
      let newState = merge({}, oldState);
      delete newState[action.entryId];
      return newState;
    default:
      return oldState;
  }
};

export default EntriesReducer;
