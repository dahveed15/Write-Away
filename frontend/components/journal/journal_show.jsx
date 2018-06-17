import React from 'react';
import { Link } from 'react-router-dom';

class JournalShow extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //    this.props.fetchEntries();
  // }

  render() {
    return (
      <div className="journal-entries">
        <h1>Journal Entries</h1>
      </div>
    );
  }

}

export default JournalShow;
