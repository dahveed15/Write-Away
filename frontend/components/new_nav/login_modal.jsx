import React from 'react';
// import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import LoginForm from '../session/login_form_container';

class Login extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <div
          className="login-button"
          onClick={this.handleOpenModal}>LOGIN</div>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
        >
          <LoginForm />
          <div onClick={this.handleCloseModal}>Close Modal</div>
        </ReactModal>
      </div>
    );
  }
}

const props = {};


export default Login;
// ReactDOM.render(<Login {...props} />, document.getElementById('login'))
