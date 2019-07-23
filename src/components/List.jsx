import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Item from "./ListItem";
import { ItemsContext } from '../contexts/ItemsContext';

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

    const { items } = React.useContext(ItemsContext);
    const classes = useStyles();

    return (
        <div>
            <List >
                {items.map(item => {
                    return (
                        <Item key={item.id}
                            item={item}
                            /*
                            onChange={handleChange}
                            onDelete={handleDelete}
                            */
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