import * as JournalApiUtil from '../util/journal_api_util';

export const RECEIVE_ALL_JOURNALS = "RECEIVE_ALL_JOURNALS";
export const RECEIVE_JOURNAL = "RECEIVE_JOURNAL";
export const REMOVE_JOURNAL = "REMOVE_JOURNAL";


const receiveAllJournals = journals => {
  return {
    type: RECEIVE_ALL_JOURNALS,
    journals
  };
};

const receiveJournal = journal => ({
  type: RECEIVE_JOURNAL,
  journal
});

const removeJournal = journalId => ({
  type: REMOVE_JOURNAL,
  journalId
});

export const fetchJournals = () => dispatch => {
  return JournalApiUtil.fetchJournals().then((journals) => dispatch(receiveAllJournals(journals)));
};

export const fetchJournal = (id) => dispatch => {
  return JournalApiUtil.fetchJournal(id).then((journal) => dispatch(receiveJournal(journal)));
};

export const createJournal = (journal) => dispatch => {
  return JournalApiUtil.createJournal(journal).then((createdJournal) => dispatch(receiveJournal(createdJournal)));
};

export const updateJournal = (journal) => dispatch => {
  return JournalApiUtil.updateJournal(journal).then((updatedJournal) => dispatch(receiveJournal(updatedJournal)));
};

export const deleteJournal = (journalId) => dispatch => {
  return JournalApiUtil.deleteJournal(journalId).then(() => dispatch(removeJournal(journalId)));
};
