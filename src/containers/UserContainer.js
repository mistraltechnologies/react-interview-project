import React, {Component} from 'react';
import {connect} from 'react-redux';
import User from '../components/User/User';
import Waiting from "../components/Waiting/Waiting";
import {bindActionCreators} from "redux";
import loadUser from "../store/loadUserAction";

class UserContainer extends Component {

  render() {
    console.log(this.props);

    return this.isUserLoaded() ? this.renderUser() : this.renderWaiting();
  }

  isUserLoaded() {
    const {user, orgs, repos} = this.props;
    return user != null && orgs != null && repos != null;
  }

  renderUser() {
    const {user, orgs, repos} = this.props;
    return <User user={user} orgs={orgs} repos={repos}/>
  }

  renderWaiting() {
    const login = this.props.match.params.user;
    return <Waiting title="Accessing User">Reading GitHub details for user '{login}'</Waiting>
  }

  componentDidMount() {
    if (!this.isUserLoaded()) {
      const login = this.props.match.params.user;
      this.props.loadUser(login);
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    orgs: state.orgs,
    repos: state.repos
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: bindActionCreators(loadUser, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);