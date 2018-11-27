# About GitHubber

This project aims to satisfy the requirements of the alanrubin/react-interview-project by providing
a Web UI for retrieving repositories and organisations associated with a GitHub user.

To search, type a user login name in the search field and press enter.

If the user exists and can be retrieved, the user's name and company is displayed along with a list
of organisations and repositories.

If the user does not exist or the api returns an error then a general
error message is displayed instead.

Searching for a user causes the URL to change. The search term is added to the URL in the form /user/:user,
where :user is the search term.

Searching can also be initiated by updating the URL or refreshing the browser. This allows search results
to be bookmarked and accessed directly as a deep link.

The application is responsive and works well on mobile as well as desktop devices.

## Bonus Points

The following items from the bonus section have been implemented:

- Use of ES6 syntax
- Using a spinner
- Dealing with errors
- Use of Material UI for components
- Use of React Router
- State management (through Redux only)
- Tools use (code formatting and linting through IntelliJ Idea, dockerization)

It saddens me to say that due to time constraints, unit and integration tests are not implemented, but will follow shortly.

## Hosting

The project is up and running in a docker container on a Digital Ocean droplet [here](http://206.189.245.148/).

---


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

All the usual npm commands apply.
