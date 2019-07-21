import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from './List';
import NewItem from "./NewItem";
import Details from './Details';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        padding: theme.spacing(3, 2),
    },
}));

const ListManager = () => {

    const [items, setItems] = React.useState(
        JSON.parse(localStorage.getItem('items')) || []
    );

    const handleChange = (id, property, newValue) => {
        // min max validation on input will not defend from typing.
        // create usable
        // further validation is required:
        if (property === 'quantity' && newValue > 99) {
            newValue = 99;
        } else if (property === 'quantity' && newValue < 1) {
            newValue = 1;
        }

        let newItems = [...items].map(item => {
            if (item.id === id) {
                item[property] = newValue
            }
            return item
        })
        setItems(newItems)
        localStorage.setItem('items', JSON.stringify(newItems));
    }

    const handleNewItem = (newItem) => {
        let newItems = [...items];
        newItem['id'] = newItems.length + 1;
        newItems.push(newItem);
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
    }

    const handleDelete = (id) => {
        let newItems = [...items].filter(item => {
            return item.id !== id;
        })
        setItems(newItems)
        localStorage.setItem('items', JSON.stringify(newItems));
    }

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
                                <NewItem onSubmit={handleNewItem} />
                            </Grid>
                            <Grid item xs>
                                <List className={classes.list} items={items} onChange={handleChange} onDelete={handleDelete} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default ListManager;