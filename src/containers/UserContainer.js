import React, {Component} from 'react';
import {connect} from 'react-redux';
import User from '../components/User/User';
import Waiting from "../components/Waiting/Waiting";
import {bindActionCreators} from "redux";
import loadUser from "../store/loadUserAction";
import MessagePanel from "../components/MessagePanel/MessagePanel";

class UserContainer extends Component {

  render() {
    console.log(this.props);

    if (this.isError()) {
      return this.renderError();
    } else if (this.isUserLoaded()) {
      return this.renderUser();
    } else {
      return this.renderWaiting();
    }
  }

  isError() {
    return this.props.error;
  }

  isUserLoaded() {
    const {user, orgs, repos} = this.props;
    return user != null && orgs != null && repos != null;
  }

  renderError() {
    const login = this.props.match.params.user;
    return <MessagePanel type="error" title="User unavailable">User '{login}' does not exist or cannot be accessed</MessagePanel>
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

  componentDidUpdate(prevProps, prevState) {
    const login = this.props.match.params.user;
    const targetUser = this.props.targetUser;
    if (login !== targetUser) {
      this.props.loadUser(login);
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    orgs: state.orgs,
    repos: state.repos,
    targetUser: state.targetUser,
    error: state.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: bindActionCreators(loadUser, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);