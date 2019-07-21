import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel'


const Details = (props) => {


    const [item, setItem] = React.useState(
        JSON.parse(localStorage.getItem('items')).filter(item => {
            return item.id === parseInt(props.match.params.id);
        })
    );

    let i = item[0];
    const [isChecked, setIsChecked] = React.useState(!!item[0].checked);

    const handleChecked = () => event => {
        setIsChecked(!isChecked);
    };



    return (

        <div>
            <Grid container
                direction="row"
                alignItems="center"
                justify="center">
                <Grid item xs={3}>
                    <Paper>
                        <AppBar position="static" color="default">
                            <Toolbar>

                                <Grid container
                                    direction="row"
                                    justify="space-between">



                                    <Typography variant="h6" color="inherit">
                                        {i.name}
                                    </Typography>

                                    <FormControlLabel
                                        control={
                                            <Checkbox edge="end"
                                                checked={isChecked}
                                                inputProps={{
                                                    'aria-label': 'primary checkbox',
                                                }}
                                                onChange={handleChecked()}


                                            />
                                        }
                                        label={i.checked ? 'Allready baught!' : 'Need to buy'} />


                                </Grid>
                            </Toolbar>


                        </AppBar>
                        <div>{i.quantity}</div>
                        <div>{i.description}</div>

                    </Paper>
                </Grid>
            </Grid>
        </div >

    )
}

export default Details;