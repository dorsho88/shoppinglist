import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from './List';
import NewItem from "./NewItem";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        padding: theme.spacing(3, 2),
    },
}));

const ListManager = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container
                direction="row"
                alignItems="center"
                justify="center">
                <Grid item xs={3}>
                    <Paper className={classes.root} >
                        <Grid container direction="column">
                            <Grid item xs>
                                <NewItem />
                            </Grid>
                            <Grid item xs>
                                <List className={classes.list} /*items={items} onChange={handleChange} onDelete={handleDelete}*/ />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default ListManager;