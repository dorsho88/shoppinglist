import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ItemsContext } from '../contexts/ItemsContext';

const Details = (props) => {

  const { items, handleChange } = React.useContext(ItemsContext);
  const item = items.find(item => item.id === parseInt(props.match.params.id, 10));
  const [isChecked, setIsChecked] = React.useState(!!item.checked);

  const toggleChecked = () => event => {
    setIsChecked(!isChecked);
    handleChange(item.id, 'checked', !isChecked);
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={3}>
          <Paper>
            <AppBar position="static" color="default">
              <Toolbar>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                >
                  <Typography variant="h6" color="inherit">
                    {item.name}
                  </Typography>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        edge="end"
                        checked={isChecked}
                        inputProps={{
                          'aria-label': 'primary checkbox',
                        }}
                        onChange={toggleChecked()}
                      />
                    )}
                    label={item.checked ? 'Allready baught!' : 'Need to buy'}
                  />
                </Grid>
              </Toolbar>
            </AppBar>
            <div>{item.quantity}</div>
            <div>{item.description}</div>
          </Paper>
        </Grid>
      </Grid>
    </div>

  );
};

export default Details;
