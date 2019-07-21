import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Item from "./ListItem";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        marginTop: "10px",
        backgroundColor: theme.palette.background.paper,
    },
    quantityInput: {
        width: '30px;',
        display: 'inline-block'
    }
}));

const CheckboxList = (props) => {

    const { items, onChange, onDelete } = props;
    const classes = useStyles();

    const handleChange = (itemId, property, value) => {
        onChange(itemId, property, value)
    };

    const handleDelete = (id) => {
        onDelete(id)
    };

    return (
        <div>
            <List >
                {items.map(item => {
                    return (
                        <Item key={item.id}
                            item={item}
                            onChange={handleChange}
                            onDelete={handleDelete}
                            role={undefined}
                            dense
                            button />
                    );
                })}
            </List>
        </div>
    );
}

export default CheckboxList;