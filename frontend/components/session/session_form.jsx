import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
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
            <div className="signup-form">
              Welcome to Write Away!
            </div>
            <div className="signup-form">
              Sign Up!
              {this.renderErrors()}
              <div>
                <br/>
                <label>Name:
                  <input type="text"
                    value={this.state.name}
                    onChange={this.update('name')}
                    />
                </label>
                <br/>
                <label>Email:
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                  />
                </label>
                <br/>
                <label>Password:
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                  />
                </label>
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
