import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User/User';

const UserContainer = (props) => {
  console.log(props);

  return (
      <User
          name={props.user ? props.user.name : ""}
      />
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps)(UserContainer);