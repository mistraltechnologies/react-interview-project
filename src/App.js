import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar/NavBar';
import User from './User/User';
import Panel from './Panel/Panel';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import MessagePanel from './MessagePanel/MessagePanel';
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
          <MuiThemeProvider theme={this.theme}>
            <Router>
              <div>
                <NavBar></NavBar>
                <Route path="/" exact render={() => <MessagePanel title="Select User">
                  No user selected - search for a GitHub user using the search bar above</MessagePanel>}/>
                <Route path="/:user" component={User}/>
              </div>
            </Router>
          </MuiThemeProvider>
        </Fragment>
    );
  }
}

export default App;
