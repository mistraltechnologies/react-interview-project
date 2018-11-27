import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Spinner from "./Spinner";

const styles = theme => ({
  message: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3
  },
  spinner: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3
  }
});

class Waiting extends React.Component {
  render() {
    const { classes, title, children, ...other } = this.props;

    return (
        <Dialog aria-labelledby="simple-dialog-title" open {...other}>
          <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
          <div className={classes.message}>{children}</div>
          <div className={classes.spinner}><Spinner /></div>
        </Dialog>
    );
  }
}

Waiting.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
};

export default withStyles(styles)(Waiting);