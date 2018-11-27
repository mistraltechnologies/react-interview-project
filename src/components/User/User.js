import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField/TextField";
import Orgs from "./Orgs";
import Repos from "./Repos";
import Divider from "@material-ui/core/Divider/Divider";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.unit * 2
  },
  title: {
    textAlign: 'center'
  },
  titleUserName: {
    display: 'inline'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
  hr: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  }
});

function User(props) {
  const {classes, user, orgs, repos} = props;

  return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <div>
            <Typography className={classes.title} variant="h5" component="h3">
              <Typography className={classes.titleUserName} component="span" variant="h5" color="textSecondary">User:</Typography> {user.login}
            </Typography>
          </div>
          <TextField
              id="user-name"
              label="Name"
              className={classes.textField}
              value={user.name}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
          />
          <TextField
              id="company"
              label="Company"
              className={classes.textField}
              value={user.company ? user.company : 'n/a'}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
          />
          <Divider className={classes.hr}/>
          <Orgs orgs={orgs}/>
          <Divider className={classes.hr}/>
          <Repos repos={repos}/>
        </Paper>
      </div>
  );
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(User);