import { connect } from 'react-redux';
import JournalShow from './journal_show';
// import { fetchEntries } from '../../actions/entry_actions';

const mapStateToProps = (state) => {
  return {
    journals: Object.values(state.entities.journals)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEntries: () => dispatch(fetchJournals()),
    deleteEntry: (id) => dispatch(deleteJournal(id))
  };
};

export default connect(null, null)(JournalShow);
