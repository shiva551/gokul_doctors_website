import React from "react";
import {
     Grid,
    Typography,
    Button,
    Card,
    CardActions,
    CardContent,

 } from '@material-ui/core';
 import './styles.scss';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import imagehome1 from '../images/image-home1.png';
import spinImage from '../images/spin-image.png';


export default function HomePage1() {

    
    return(
        <Grid container direction="row" lg={12} md={12} xs={12} spacing={2} className='Homepage1'>
            <Typography>Hi HomePage1</Typography>
            <Grid  item lg={6} md={6} xs={6} spacing={4}  className='Hompage1-Text'>
                <Typography style={{color:'blue'}}>Smarter Service Care</Typography><br/>
                <Typography variant='h3' style={{}}><strong>We are Committed </strong> </Typography><br/>
                <Typography variant='h3' style={{}}><strong>to Your Best Health</strong> </Typography><br/>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
                     tempor incididunt ut labore et dolore magna aliqua gravida. Risus commodo.</Typography><br/>
                <Button 
                color='blue'
                variant='contained'

                >
                    Book an Appointment
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                color='blue'
                variant='contained'
                >Play Now</Button>
            </Grid>
            <Grid  item lg={6} md={6} xs={6} className='Homepage1-img'>
            <img style={{width: "auto", height: "800px"}} src={imagehome1} alt={imagehome1}/>
            <img
             style={{
                 animation: `spin 25s linear infinite`,
                position: 'unset',
                width: "auto", 
                height: '700px',
                marginTop: "-100%",
                opacity: 0.5
                }} 
                src={spinImage} 
                alt="img"
                />
            </Grid>
            <Grid container direction='row' spacing={3} >
            <Card className='Homepage1-card' style={{marginTop: '10px',marginLeft: '30px', }}>
                <CardContent >
                
                    <Typography variant='h5' className='Homepage-card-title' gutterBottom>
                    <LocalHospitalIcon/><strong>Special Service</strong>
                    </Typography>
                    <Typography className='Homepage1-card-pos' color="textSecondary">
                    Lorem ipsum dolor sit amet,<br/>
                     consectetur adipiscing elit, sed do
                    </Typography>
                </CardContent>
                
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
                </Card>
                <Card className='Homepage1-card' style={{marginTop: '10px',marginLeft: '30px',}}>
                <CardContent >
                   <Typography variant='h5' className='Homepage-card-title' gutterBottom>
                    <AirportShuttleIcon/><strong>24/7 Advanced Care</strong>
                    </Typography>
                    <Typography className='Homepage1-card-pos' color="textSecondary">
                    Lorem ipsum dolor sit amet,<br/>
                     consectetur adipiscing elit, sed do
                    </Typography>
                </CardContent>
                
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
                </Card>
                <Card className='Homepage1-card' style={{marginTop: '10px',marginLeft: '30px',}}>
                <CardContent>
                    <Typography variant='h5' className='Homepage-card-title' gutterBottom>
                    <BeenhereIcon/><strong>Get Result Online</strong>
                    </Typography>
                    <Typography className='Homepage1-card-pos' color="textSecondary">
                    Lorem ipsum dolor sit amet,<br/>
                     consectetur adipiscing elit, sed do
                    </Typography>
                </CardContent>
                
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
                </Card>
            </Grid>
        </Grid>
    );
}