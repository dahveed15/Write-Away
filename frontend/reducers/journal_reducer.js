import { RECEIVE_ALL_JOURNALS,
         RECEIVE_JOURNAL,
         REMOVE_JOURNAL } from '../actions/journal_actions';
import merge from 'lodash/merge';

const JournalsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_JOURNALS:
      return merge({}, action.journals);
    case RECEIVE_JOURNAL:
      return merge({}, oldState, {[action.journal.id]: action.journal});
    case REMOVE_JOURNAL:
      let newState = merge({}, oldState);
      delete newState[action.journalId];
      return newState;
    default:
      return oldState;
  }
};

export default JournalsReducer;
