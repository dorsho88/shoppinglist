import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditButton from '@material-ui/icons/Edit';
import DeleteButton from '@material-ui/icons/Delete';
import ForwardButton from '@material-ui/icons/Forward';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { ItemsContext } from '../contexts/ItemsContext';

const Item = (props) => {
  const { item } = props;
  const { handleChange, handleDelete } = React.useContext(ItemsContext);
  const [editMode, setEditMode] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(!!item.checked);

  const handleChecked = () => () => {
    setIsChecked(!isChecked);
    handleChange(item.id, 'checked', !isChecked);
  };

  const handleSave = property => (event) => {
    handleChange(item.id, property, event.target.value);
  };

  const handleDeletion = () => () => {
    handleDelete(item.id);
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
          onChange={handleChecked()}
        />
      </ListItemIcon>
      {
        editMode
          ? (
            <form>
              <TextField
                id="name"
                value={item.name}
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{ maxLength: '99' }}
                autoFocus
                margin="normal"
                onChange={handleSave('name')}
                required

              />
              <TextField
                id="description"
                value={item.description}
                type="textarea"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                onChange={handleSave('description')}
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
          )

          : (
            <ListItemText
              id={item.id}
              primary={item.name}
              secondary={item.quantity > 1 ? `X ${item.quantity}` : null}
            />
          )}
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="Edit" onClick={() => setEditMode(!editMode)}>
          <EditButton />
        </IconButton>
        <Link to={{ pathname: `/details/${item.id}`, customProps: { details: item, onChange: handleChecked } }}>
          <IconButton edge="end" aria-label="Details">
            <ForwardButton />
          </IconButton>
        </Link>
        <IconButton edge="end" aria-label="Delete" onClick={handleDeletion()}>
          <DeleteButton />
        </IconButton>
      </ListItemSecondaryAction>

    </ListItem>

  );
};

export default Item;
