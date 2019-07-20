import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Item from "./ListItem";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    quantityInput: {
        width: '30px;',
        display: 'inline-block'
    }
}));

const defaultItems = [
    { id: 1, name: 'Lego', description: 'A game', quantity: 1, checked: false },
    { id: 2, name: 'Football', description: 'A Sport', quantity: 6, checked: false },
    { id: 3, name: 'Batman', description: 'Action figure', quantity: 2, checked: false },
];

const CheckboxList = (props) => {

    const classes = useStyles();
    const [items, setItems] = React.useState(
        JSON.parse(localStorage.getItem('items')) || defaultItems
    );
    const handleChange = (id, property, newValue) => {
        let newItems = items.map(item => {
            if (item.id === id) {
                item[property] = newValue
            }
            return item
        })
        setItems(newItems)
        localStorage.setItem('items', JSON.stringify(items));
    }

    return (
        <List className={classes.root}>
            {items.map(item => {
                const labelId = `checkbox-list-label-${item}`;
                return (
                    <Item key={item.id}
                        item={item}
                        onChange={handleChange}
                        role={undefined}
                        dense
                        button />
                );
            })}

        </List>
    );
}

export default CheckboxList;