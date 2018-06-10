import React from 'react';

class Profile extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    let user = this.props.currentUser ? this.props.currentUser : null;

    return (
      <div>
        <p>Hello {user}! Welcome to Write Away!</p>
      </div>
    );

  }



}

export default Profile;