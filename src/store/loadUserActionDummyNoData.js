import {USER_AND_ORGS_LOADED, USER_LOADING, USER_REPOS_LOADED} from "./actionTypes";

const loadUser = (login) => {
  return (dispatch) => {
    console.log("Simulating call to GitHub");

    dispatch({
      type: USER_LOADING,
      login: login
    });


    setTimeout(() => {
      console.log("Returning mock user/orgs response");

      dispatch({
        type: USER_AND_ORGS_LOADED,
        login: login,
        response: {
          user: {
            "login": "torvalds",
            "id": 1024025,
            "node_id": "MDQ6VXNlcjEwMjQwMjU=",
            "avatar_url": "https://avatars0.githubusercontent.com/u/1024025?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/torvalds",
            "html_url": "https://github.com/torvalds",
            "followers_url": "https://api.github.com/users/torvalds/followers",
            "following_url": "https://api.github.com/users/torvalds/following{/other_user}",
            "gists_url": "https://api.github.com/users/torvalds/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/torvalds/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/torvalds/subscriptions",
            "organizations_url": "https://api.github.com/users/torvalds/orgs",
            "repos_url": "https://api.github.com/users/torvalds/repos",
            "events_url": "https://api.github.com/users/torvalds/events{/privacy}",
            "received_events_url": "https://api.github.com/users/torvalds/received_events",
            "type": "User",
            "site_admin": false,
            "name": "Linus Torvalds",
            "company": null,
            "blog": "",
            "location": "Portland, OR",
            "email": null,
            "hireable": null,
            "bio": null,
            "public_repos": 6,
            "public_gists": 0,
            "followers": 84244,
            "following": 0,
            "created_at": "2011-09-03T15:26:22Z",
            "updated_at": "2018-11-19T18:14:58Z"
          },
          orgs: []
        }
      });
    }, 1000);

    setTimeout(() => {
      console.log("Returning mock repos response");

      dispatch({
        type: USER_REPOS_LOADED,
        login: login,
        response: []
      });
    }, 1000);
  }
};

export default loadUser;