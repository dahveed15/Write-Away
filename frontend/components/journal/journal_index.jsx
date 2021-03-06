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
    let user = this.props.currentUser ? this.props.currentUser : null;
    return (
      <div className="journal-outer">
        <div className='profile-container'>
          <p>Hello {user}! Welcome to Write Away!</p>
        </div>
        <div className='journal'>
          <ul className="journal-list">
            {this.props.journals.map((journal, idx) =>
              <div className="journal-titles" key={idx}>
                <Link className="gotojournal"
                  to={`journal/${journal.id}/entries`}>Go To My Journal</Link>
              </div>)}
          </ul>
        </div>
      </div>
    );
  }

}

export default JournalIndex;

// <div className="journal-delete-button">
// <button onClick={() => this.props.deleteJournal(journal.id)}>Delete Journal</button>
// </div>
// <div className="create-new-journal-link">
// <Link to="/journals/new">Create a New Journal</Link>
// </div>
