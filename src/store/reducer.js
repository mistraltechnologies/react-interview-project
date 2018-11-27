import {SEARCH, USER_LOADED, USER_LOADING} from "./actionTypes";

const initialState = {
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return state;

    case USER_LOADING:
      console.log("loading user " + action.login);

      return Object.assign({}, state, {
        user: null,
        targetUser: action.login
      });

    case USER_LOADED:
      console.log("loaded user " + action.user.name);

      if (action.user.login === state.targetUser) {
        return Object.assign({}, state, {
          user: action.user
        });
      } else {
        // this is not the droid you're looking for
        console.log("ignoring loaded user " + action.user.name);
        return state;
      }

    default:
      return state;
  }
};

export default rootReducer;