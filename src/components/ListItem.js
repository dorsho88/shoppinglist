import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditButton from '@material-ui/icons/Edit';
import ForwardButton from '@material-ui/icons/Forward';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";


const Item = (props) => {

    const { item, onChange } = props;
    const [editMode, setEditMode] = React.useState(false);
    const [isChecked, setIsChecked] = React.useState(!!item.checked);
    // // work on each item.properties individualy?
    // const [name, setName] = React.useState(item.name || 'item');
    // const [quantity, setQuantity] = React.useState(item.quantity || 1);
    // // or use item object like so? this seems way better

    const handleChecked = () => event => {
        setIsChecked(!isChecked);
        onChange(item.id, 'checked', !isChecked)
    };

    const handleSave = (property) => event => {
        onChange(item.id, property, event.target.value)
    };

    return (

        <ListItem>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={isChecked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': item.id }}
                    onChange={handleChecked('checked')}
                />
            </ListItemIcon>
            {
                editMode ?
                    <form >
                        <TextField
                            id="name"
                            value={item.name}
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            autoFocus={true}
                            margin="normal"
                            onChange={handleSave('name')}

                        />
                        <TextField
                            id="number"
                            value={item.quantity}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            onChange={handleSave('quantity')}
                        />
                    </form>

                    :

                    <ListItemText id={item.id}
                        primary={item.name}
                        secondary={item.quantity > 1 ? `X ${item.quantity}` : null}
                    />
            }
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Comments" onClick={() => setEditMode(!editMode)}>
                    <EditButton />
                </IconButton>
                <Link to={"/details/" + (item.id)}>
                    <IconButton edge="end" aria-label="Comments" >
                        <ForwardButton />
                    </IconButton>
                </Link>
            </ListItemSecondaryAction>

        </ListItem>

    );
}

export default Item;