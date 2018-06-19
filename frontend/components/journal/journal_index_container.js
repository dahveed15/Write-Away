import { connect } from 'react-redux';
import JournalIndex from './journal_index';
import { fetchJournals, deleteJournal } from '../../actions/journal_actions';

const mapStateToProps = (state) => {
  //give me an array of the current user's journals

  return {
    journals: Object.values(state.entities.journals),
    currentUser: state.session.currentUser.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJournals: () => dispatch(fetchJournals()),
    deleteJournal: (id) => dispatch(deleteJournal(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JournalIndex);
