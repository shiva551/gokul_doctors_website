import React from "react";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {
    Grid,
   Typography,
   Button,
   Card,
   CardActions,
   CardContent,

} from '@material-ui/core';

export default function HomePage3() {
    return(
        <Grid>
            <Grid className="Homepage3-heading"> 
            <Typography>Hi HomePage3</Typography>  
            </Grid>
        <Grid item container direction="row" lg={12} md={12} xs={12} spacing={2} className="Homepage3">
             
             
            <Grid lg={4} md={4} xs={12}>

            <Card className='Homepage3-card' style={{marginTop: '10px',marginLeft: '30px', }}>
                <CardContent >
                    <Grid className="Homepage-imagelove">
                    <img src="https://corf-react.envytheme.com/img/services-card-shape.png"/>
                    </Grid>
                    <Grid className="Homepage-icon">
                    <AccessTimeIcon/>
                    </Grid>
                    <Typography variant='h5' className='Homepage-card-title' gutterBottom>
                    <strong>Special Service</strong>
                    </Typography>
                    <Typography className='Homepage3-card-pos' color="textSecondary">
                    Lorem ipsum dolor sit amet,<br/>
                     consectetur adipiscing elit, sed do
                    </Typography>
                </CardContent>
                
                {<CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> }

                </Card>
                </Grid>
                <Grid lg={4} md={4} xs={12}>

<Card className='Homepage3-card' style={{marginTop: '10px',marginLeft: '30px', }}>
    <CardContent >
    <Grid className="Homepage-imagelove2">
                    <img src="https://corf-react.envytheme.com/img/services-card-shape.png"/>
                    </Grid>
                    <Grid className="Homepage-icon">
                    <AccessTimeIcon/>
                    </Grid>
        <Typography variant='h5' className='Homepage-card-title' gutterBottom>
        <strong>Special Service</strong>
        </Typography>
        <Typography className='Homepage3-card-pos' color="textSecondary">
        Lorem ipsum dolor sit amet,<br/>
         consectetur adipiscing elit, sed do
        </Typography>
    </CardContent>
    
    {<CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> }

    </Card>
    </Grid>
    <Grid lg={4} md={4} xs={12}>

<Card className='Homepage3-card' style={{marginTop: '10px',marginLeft: '30px', }}>
    <CardContent >
    <Grid className="Homepage-imagelove3">
                    <img src="https://corf-react.envytheme.com/img/services-card-shape.png"/>
                    </Grid>
                    <Grid className="Homepage-icon">
                    <AccessTimeIcon/>
                    </Grid>
        <Typography variant='h5' className='Homepage-card-title' gutterBottom>
        <strong>Special Service</strong>
        </Typography>
        <Typography className='Homepage3-card-pos' color="textSecondary">
        Lorem ipsum dolor sit amet,<br/>
         consectetur adipiscing elit, sed do
        </Typography>
    </CardContent>
    
    {<CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> }

    </Card>
    </Grid>
    <Grid lg={4} md={4} xs={12}>

<Card className='Homepage3-card' style={{marginTop: '10px',marginLeft: '30px', }}>
    <CardContent >
    <Grid className="Homepage-imagelove">
                    <img src="https://corf-react.envytheme.com/img/services-card-shape.png"/>
                    </Grid>
                    <Grid className="Homepage-icon">
                    <AccessTimeIcon/>
                    </Grid>
        <Typography variant='h5' className='Homepage-card-title' gutterBottom>
        <strong>Special Service</strong>
        </Typography>
        <Typography className='Homepage3-card-pos' color="textSecondary">
        Lorem ipsum dolor sit amet,<br/>
         consectetur adipiscing elit, sed do
        </Typography>
    </CardContent>
    
    {<CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> }

    </Card>
    </Grid>
    <Grid lg={4} md={4} xs={12}>

<Card className='Homepage3-card' style={{marginTop: '10px',marginLeft: '30px', }}>
    <CardContent >
    <Grid className="Homepage-imagelove5">
                    <img src="https://corf-react.envytheme.com/img/services-card-shape.png"/>
                    </Grid>
                    <Grid className="Homepage-icon">
                    <AccessTimeIcon/>
                    </Grid>
        <Typography variant='h5' className='Homepage-card-title' gutterBottom>
        <strong>Special Service</strong>
        </Typography>
        <Typography className='Homepage3-card-pos' color="textSecondary">
        Lorem ipsum dolor sit amet,<br/>
         consectetur adipiscing elit, sed do
        </Typography>
    </CardContent>
    
    {<CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> }

    </Card>
    </Grid>
    <Grid lg={4} md={4} xs={12}>

<Card className='Homepage3-card' style={{marginTop: '10px',marginLeft: '30px', }}>
    <CardContent >
    <Grid className="Homepage-imagelove6">
                    <img src="https://corf-react.envytheme.com/img/services-card-shape.png"/>
                    </Grid>
                    <Grid className="Homepage-icon">
                    <AccessTimeIcon/>
                    </Grid>
        <Typography variant='h5' className='Homepage-card-title' gutterBottom>
        <strong>Special Service</strong>
        </Typography>
        <Typography className='Homepage3-card-pos' color="textSecondary">
        Lorem ipsum dolor sit amet,<br/>
         consectetur adipiscing elit, sed do
        </Typography>
    </CardContent>
    
    {<CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> }

    </Card>
    </Grid>
        </Grid>
        </Grid>
    );
}