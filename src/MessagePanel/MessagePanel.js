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
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.unit * 2
  },
});

function messagePanel(props) {
  const { classes } = props;

  return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
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
};

export default withStyles(styles)(messagePanel);