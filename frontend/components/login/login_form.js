import React from 'react';
import { Alert, Button, Jumbotron,  Form } from 'reactstrap';
import TextInput from './text_input';
import DjangoCSRFToken from './djangoToken';
// import Cookies from 'js-cookie';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target,
          value = target.type === 'checkbox' ? target.checked : target.value,
          name = target.name;
    if (name === "email"){
      this.setState({
        [name]: value,
        "username": value
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.email, this.state.username, this.state.password);
  }

  render() {
    console.log('state', this.state);
    const errors = this.props.errors || {};
    return (
      <Jumbotron className="container">
        <Form onSubmit={this.onSubmit}>
          <h1>Authentication</h1>
          <TextInput name="email" label="Email"
                     error={errors.email}
                     onChange={this.handleInputChange} />
          <TextInput name="password" label="Password"
                     error={errors.password} type="password"
                     onChange={this.handleInputChange} />
          <Button type="submit" color="primary" size="lg">
              Log In
          </Button>
        </Form>
      </Jumbotron>
    );
  }
}

export default LoginForm;



// {
//   errors.non_field_errors?
//   <Alert color="danger">
//   {errors.non_field_errors}
//   </Alert>:""
// }
