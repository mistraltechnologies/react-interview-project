import {API_ERROR, USER_AND_ORGS_LOADED, USER_LOADING, USER_REPOS_LOADED} from "./actionTypes";
import {getRepos, getUserData} from '../github-api';

const loadUser = (login) => {
  return (dispatch) => {
    console.log("github call started");

    dispatch({
      type: USER_LOADING,
      login: login
    });

    getUserData(login).then(
        response =>
            dispatch({
              type: USER_AND_ORGS_LOADED,
              login: login,
              response: response
            }),
        error =>
            dispatch({
              type: API_ERROR,
              code: error
            })
    );

    getRepos(login).then(
        response =>
            dispatch({
              type: USER_REPOS_LOADED,
              login: login,
              response: response
            }),
        error =>
            dispatch({
              type: API_ERROR,
              code: error
            }));
  }
};

export default loadUser;