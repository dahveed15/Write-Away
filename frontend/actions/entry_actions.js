import * as EntryApiUtil from '../util/entry_api_util';

export const RECEIVE_ALL_ENTRIES = 'RECEIVE_ALL_ENTRIES';
export const RECEIVE_ENTRY = 'RECEIVE_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';


const receiveAllEntries = entries => {
  return {
    type: RECEIVE_ALL_ENTRIES,
    entries
  };
};

const receiveEntry = entry => ({
  type: RECEIVE_JOURNAL,
  entry
});

const removeEntry = entryId => ({
  type: REMOVE_JOURNAL,
  entryId
});

export const fetchEntries = () => dispatch => {
  return EntryApiUtil.fetchEntries().then((entries) => dispatch(receiveAllEntries(entries)));
};

export const fetchEntry = (id) => dispatch => {
  return EntryApiUtil.fetchEntry(id).then((entry) => dispatch(receiveEntry(entry)));
};

export const createEntry = (entry) => dispatch => {
  return EntryApiUtil.createEntry(entry).then((createdEntry) => dispatch(receiveEntry(createdEntry)));
};

export const updateEntry = (entry) => dispatch => {
  return EntryApiUtil.updateEntry(entry).then((updatedEntry) => dispatch(receiveEntry(updatedEntry)));
};

export const deleteEntry = (entryId) => dispatch => {
  return EntryApiUtil.deleteEntry(entryId).then(() => dispatch(removeEntry(entryId)));
};
