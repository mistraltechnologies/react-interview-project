import Card from "@material-ui/core/Card/Card";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  title: {
    textAlign: 'center'
  },
  card: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: theme.spacing.unit * 40,
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    backgroundColor: theme.palette.secondary.A700,
    color: theme.palette.getContrastText(theme.palette.secondary.A700)
  },
  cardTitle: {
    textAlign: 'center'
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

function Repos(props) {
  const {classes, repos} = props;

  return (
      <div>
        <Typography className={classes.title} variant="h5" component="h3"
                    color="textSecondary">Repositories</Typography>
        <div className={classes.grid}>
          {repos.map(repo =>
              <Card className={classes.card} elevation={1} key={repo.name}>
                <Typography className={classes.cardTitle} variant="h6" component="h3"
                            color="inherit">{repo.name}</Typography>
              </Card>
          )}
        </div>
      </div>
  );
}

export default withStyles(styles)(Repos);