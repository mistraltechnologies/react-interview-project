import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '80%',
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.unit * 2
  },
  info: {
    color: theme.palette.primary.dark
  },
  error: {
    color: theme.palette.error.dark
  }
});

function messagePanel(props) {
  const { classes, type } = props;
  const typeClass = type === 'info' ? classes.info : classes.error;

  return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3" className={typeClass}>
            {props.title}
          </Typography>
          <Typography component="p">
            {props.children}
          </Typography>
        </Paper>
      </div>
  );
}

messagePanel.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['error', 'info']).isRequired,
};

export default withStyles(styles)(messagePanel);