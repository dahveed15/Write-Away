import { connect } from 'react-redux';
import JournalShow from './journal_show';
import { fetchEntries } from '../../actions/entry_actions';

const mapStateToProps = (state) => {
  return {
    entries: Object.values(state.entities.entries),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEntries: () => dispatch(fetchEntries()),
    deleteEntry: (id) => dispatch(deleteJournal(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JournalShow);
