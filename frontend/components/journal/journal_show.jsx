import React from 'react';
import { Link } from 'react-router-dom';

class JournalShow extends React.Component {
  constructor(props) {
    super(props);
    let date = new Date();
    date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    this.state = {
      title: '',
      body: '',
      date: date,
      journal_id: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchEntries().then(() => {
      this.setState({ journal_id: this.props.entries[0].journal_id });
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit() {
    let entry = this.state;
    this.props.createEntry(entry);
    window.location.reload();
  }

  render() {
    return (
      <div className="journal-entries-outer">
        <div className='new-entry-outer'>
          <h1>Create a New Journal Entry</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text"
                value={this.state.title}
                onChange={this.update('title')}
                placeholder="Title"
                autoFocus
                />
            </label>
                  <br/>
            <label>
              <input type="text"
                value={this.state.body}
                onChange={this.update('body')}
                placeholder="Body"
                />
            </label>
            <br/>
            <input className="session-submit" type="submit" value="Create entry" />

          </form>
        </div>
        <div className='journal-entries'>
          <h1 className='journal-title'>Your Journal Entries</h1>
          <ul className="entry-list">
          {this.props.entries.map((entry, idx) =>
            <div key={idx} className='journal-entry-item'>
              <div className='entry-title'>
                <div>
                  <h2>{ entry.title }</h2>
                </div>
                <div>
                  <h2>{ entry.date }</h2>
                </div>
              </div>
              <div className='entry-body'>
                <div></div>
                <div></div>
                <h2>{ entry.body }</h2>
              </div>
            </div>
          )}
          </ul>
        </div>
      </div>
    );
  }

}

export default JournalShow;
