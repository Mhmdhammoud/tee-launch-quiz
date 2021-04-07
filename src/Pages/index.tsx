import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Grid } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
const Homepage = () => {
    const useStyles = makeStyles((theme) => ({
        root:{
            minHeight:'100vh'
        }
	}));
    const classes=useStyles()
    return (
        <Grid container justify='center' alignItems='center' className={classes.root}>
            <h2>Hello world</h2>
        </Grid>
    )
}

export default Homepage
