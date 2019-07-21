import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useForm from './useForm';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    submitBtn: {
        marginTop: '30px;'
    }

}));


const NewItem = (props) => {
    const classes = useStyles();
    const { onSubmit } = props;
    const { values, handleChange, handleSubmit } = useForm(onSubmit);


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <form className={classes.container} onSubmit={handleSubmit} autoComplete="off">
                        <Grid item xs={8}>
                            <TextField
                                id="standard-name"
                                label="Name"
                                value={values.name}
                                onChange={handleChange}
                                margin="normal"
                                name="name"
                                autoFocus
                                inputProps={{ maxLength: "99" }}
                                required
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                id="standard-number"
                                label="Quantity"
                                name="quantity"
                                value={values.quantity}
                                onChange={handleChange}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{ min: "0", max: "99", step: "1" }}
                                margin="normal"
                            />
                        </Grid>

                        <Grid item xs={8}>
                            <TextField
                                id="standard-textarea"
                                label="Description"
                                name="description"
                                placeholder=""
                                onChange={handleChange}
                                multiline
                                margin="normal"
                                value={values.description}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button className={classes.submitBtn} variant="contained" type="submit">
                                Save
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default NewItem;