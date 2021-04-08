import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { startUploadImage } from '../actions/utilActions';
import { AppState } from '../reducers';
import Header from '../Components/Header/index';
const Homepage = () => {
  const dispatch = useDispatch();
  const StateImage = useSelector((state: AppState) => state.util.image);
  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      paddingTop: '50px',
    },
    image: {
      height: 300,
      width: 300,
    },
  }));
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg" className={classes.root}>
        <Grid container justify="center" alignItems="center" direction="column">
          <Typography variant="h2">Upload your image</Typography>
          <TextField
            type="file"
            id="image-input"
            variant="outlined"
            onChange={(event: any) => {
              event.target.files[0] &&
                dispatch(
                  startUploadImage(URL.createObjectURL(event.target.files[0]))
                );
            }}
          />
        </Grid>

        <Grid
          item
          container
          justify="center"
          style={{ marginTop: '50px' }}
          direction="column"
        >
          <img
            src={StateImage}
            alt=""
            id="my-image"
            className={classes.image}
            hidden
          />
          <canvas id="canvas" width="400px" height="200px" />
          {StateImage !== '' && (
            <Button variant="contained">
              <a href={StateImage} download>
                Download
              </a>
            </Button>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Homepage;
