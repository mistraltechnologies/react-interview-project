import {SEARCH, USER_AND_ORGS_LOADED, USER_LOADING, USER_REPOS_LOADED} from "./actionTypes";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return state;

    case USER_LOADING: {
      console.log("loading user " + action.login);

      return Object.assign({}, state, {
        user: null,
        orgs: null,
        repos: null,
        targetUser: action.login
      });
    }

    case USER_AND_ORGS_LOADED: {
      const {login, response} = action;
      const {user, orgs} = response;

      console.log("loaded user " + login);

      if (login === state.targetUser) {
        return Object.assign({}, state, {
          user: user,
          orgs: orgs
        });
      } else {
        // this is not the droid you're looking for
        console.log("ignoring loaded user " + user.name);
        return state;
      }
    }

    case USER_REPOS_LOADED: {
      const {login, response: repos} = action;

      console.log("loaded repos for user " + login);

      if (login === state.targetUser) {
        return Object.assign({}, state, {
          repos: repos
        });
      } else {
        // this is not the droid you're looking for
        console.log("ignoring repos for user " + login);
        return state;
      }
    }

    default:
      return state;
  }
};

export default rootReducer;