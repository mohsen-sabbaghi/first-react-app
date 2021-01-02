import React from 'react';
import {Grid} from "@material-ui/core";
import MyStepper from '../components/MyStepper'
import useStyle from "./home.styles";

export default function Home() {
    const classes = useStyle()
    return (
        <Grid container direction={"column"}>

            <Grid container direction={"column"}>
                <div className={classes.root}>
                    test
                </div>
                <MyStepper/>
            </Grid>
        </Grid>
    )
}

// <Grid container direction={"row"}>
//     <Grid item lg={4} style={{backgroundColor: '#00f'}}> 1</Grid>
//     <Grid item lg={4} style={{backgroundColor: '#0ff'}}> 2</Grid>
//     <Grid item lg={4} style={{backgroundColor: '#f0f'}}> 3</Grid>
// </Grid>

//<Helmet>
//   <title> Home page </title>
//   <meta name="description" content="this is my Home page description"/>
//</Helmet>
// <HasChildren>
//     <ul>
//         <li>item1</li>
//         <li>item2</li>
//     </ul>
// </HasChildren>
//
// <div style={{margin: 30}}>
//     <Button variant="contained" color="primary">Login</Button>
// </div>
// <Typography variant={"body1"} color={"primary"}>
//     this is a text
// </Typography>