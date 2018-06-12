import React from 'react';
import { Link } from 'react-router-dom';

class JournalIndex extends React.Component {

  constructor(props) {
    super(props);
  }

    componentDidMount() {
      this.props.fetchJournals();
    }


  render() {
    // <li className="journal-number">Journal {idx + 1}</li>
    return (
      <div>
        <h1 className="journal-list-title">My Journals</h1>
        <ul className="journal-list">
          {this.props.journals.map((journal, idx) =>
            <div className="journal-titles" key={idx}>
              <Link to={`journals/${journal.id}`}>{journal.name}</Link>
              <div className="journal-delete-button">
                <button onClick={() => this.props.deleteJournal(journal.id)}>Delete Journal</button>
              </div>
            </div>)}
        </ul>
        <div className="create-new-journal-link">
          <Link to="/journals/new">Create a New Journal</Link>
        </div>
      </div>
    );
  }

}

export default JournalIndex;
