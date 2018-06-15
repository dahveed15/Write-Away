import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    console.log('handleSubmit');
    e.preventDefault();
    const user = Object.assign({}, this.state);
    let journal = { title: 'DailyJournal' };
    this.props.processForm(user)
      .then(() => {
        let journal = { title: 'myDailyJournal', image_url: '' };
        return this.props.createJournal(journal);
      }, err => (console.log(err))
    )
      .then(() => {
        console.log('helo there');
        window.location.reload();
      });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form-container">
            <div>
              <h1 className="signup-text">Welcome to Write Away!</h1>
            </div>
            <div className="signup-form">
              <h1 className="signup-text">Sign Up?!</h1>
              {this.renderErrors()}
              <div>
                <br/>
                <label>
                  <input type="text"
                    value={this.state.name}
                    onChange={this.update('name')}
                    placeholder="First Name"
                    autoFocus
                    />
                </label>
                <br/>
                <label>
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="Email"
                  />
                </label>
                <br/>
                <label>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                  />
                </label>
                <br/>
                <input className="session-submit" type="submit" value="Sign Up" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
