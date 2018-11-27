import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import {bindActionCreators} from "redux";
import search from '../store/searchAction';
import {withRouter} from "react-router";

const NavBarContainer = (props) => {

  const { history, search } = props;

  return (
      <NavBar
          searchHandler={(term) => search(term, history)}
      />
  );
};

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
    search: bindActionCreators(search, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBarContainer));