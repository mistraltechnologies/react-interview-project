import {USER_LOADED, USER_LOADING} from "./actionTypes";

const loadUser = (login) => {
  return (dispatch) => {
    console.log("github call started");

    dispatch({
      type: USER_LOADING,
      login: login
    });

    setTimeout(() => {
      console.log("response received");

      dispatch({
        type: USER_LOADED,
        user: {
          login: "richardjwilson",
          name: "Richard Wilson",
          company: "Mistral Technologies",
        }
      });
    }, 3000);
  }
};

export default loadUser;