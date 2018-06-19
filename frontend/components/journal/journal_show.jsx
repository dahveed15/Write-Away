import React from 'react';
import { Link } from 'react-router-dom';

class JournalShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEntries();
  }

  render() {
    console.log('props');
    console.log(this.props);
    return (
      <div className="journal-entries">
        <h1>Journal Entries</h1>
        ?
        <ul className="entry-list">
          {this.props.entries.map((entry, idx) =>
            <div key={idx}>
              <h1>{ entry.date }</h1>
              <h1>{ entry.body }</h1>
            </div>)}
        </ul>
      </div>
    );
  }

}

export default JournalShow;
