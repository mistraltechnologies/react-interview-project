import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider as StoreProvider } from 'react-redux';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBarContainer from './containers/NavBarContainer';
import UserContainer from './containers/UserContainer';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import MessagePanel from './components/MessagePanel/MessagePanel';
import blue from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';

class App extends Component {
  constructor(props) {
    super(props);

    this.theme = createMuiTheme({
      palette: {
        primary: blue,
        secondary: pink,
        error: red,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
      }
    });
  }

  render() {
    return (
        <Fragment>
          <CssBaseline/>
          <StoreProvider store={this.props.store}>
            <MuiThemeProvider theme={this.theme}>
              <Router>
                <div>
                  <NavBarContainer/>
                  <Route path="/" exact render={() => <MessagePanel type="info" title="Select User">
                    No user selected - search for a GitHub user using the search bar above</MessagePanel>}/>
                  <Route path="/user/:user" component={UserContainer}/>
                </div>
              </Router>
            </MuiThemeProvider>
          </StoreProvider>
        </Fragment>
    );
  }
}

export default App;
