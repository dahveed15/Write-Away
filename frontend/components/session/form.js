import React from 'react';


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    // execute some action
    const user = this.state;
    this.props.processForm({user});
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Email:<input type="text" onChange={this.update('email')}></input>
          Password:<input type="password" onChange={this.update('password')}></input>
          <br/>
          <input type="submit" name="" value="Submit"></input>
        </form>
      </div>
    );
  }

}

export default Login;
