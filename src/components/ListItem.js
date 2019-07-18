import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Li from '@material-ui/core/ListItem';
import LiIcon from '@material-ui/core/ListItemIcon';
import LiItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import LiItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export default function ListItem(props) {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const labelId = `checkbox-list-label-${props.item}`;
    return (
        <Li>
            <LiIcon>
                <Checkbox
                    edge="start"
                    checked={checked.indexOf(props.item) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </LiIcon>
            <LiItemText id={labelId} primary={`Line item ${props.item + 1}`} />
            <LiItemSecondaryAction>
                <IconButton edge="end" aria-label="Comments">
                    <EditIcon />
                </IconButton>

            </LiItemSecondaryAction>
        </Li>
    )
}