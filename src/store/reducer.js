import {API_ERROR, SEARCH, USER_AND_ORGS_LOADED, USER_LOADING, USER_REPOS_LOADED} from "./actionTypes";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return state;

    case USER_LOADING: {
      console.log(`Loading user '${action.login}`);

      return Object.assign({}, state, {
        user: null,
        orgs: null,
        repos: null,
        targetUser: action.login,
        error: null
      });
    }

    case USER_AND_ORGS_LOADED: {
      const {login, response} = action;
      const {user, orgs} = response;

      console.log(`Loaded user '${login}'`);

      if (login === state.targetUser) {
        return Object.assign({}, state, {
          user: user,
          orgs: orgs
        });
      } else {
        // this is not the droid you're looking for
        console.log(`Ignoring loaded user '${user.name}'`);
        return state;
      }
    }

    case USER_REPOS_LOADED: {
      const {login, response: repos} = action;

      console.log(`Loaded repos for user '${login}'`);

      if (login === state.targetUser) {
        return Object.assign({}, state, {
          repos: repos
        });
      } else {
        // this is not the droid you're looking for
        console.log(`Ignoring repos for user '${login}'`);
        return state;
      }
    }

    case API_ERROR:
      const {error} = action;

      console.log("API error:");
      console.log(error);

      return Object.assign({}, state, {
        error: "error"
      });

    default:
      return state;
  }
};

export default rootReducer;