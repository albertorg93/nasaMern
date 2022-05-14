import React from "react";
// import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import logo from '../../../../assets/asteroid.png'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import nea1 from "../../../../assets/neas/nea1.png";
import nea2 from "../../../../assets/neas/nea2.png";
import nea3 from "../../../../assets/neas/nea3.png";

const Cardnea = (props) => {
  const info = props.data

  const pictures = [nea1,nea2,nea3];
  const randomizeImages = pictures.sort((a, b) => 0.5 - Math.random());

  const removeLanding = () =>  {
    console.log(info)
    // let valor = info
   // axios.delete('http://localhost:5000/api/astronomy/neas/delete', info);
    // axios.delete('http://localhost:5000/api/astronomy/neas/delete',{ data: info})

  }

 return            <Card sx={{ maxWidth: 325, margin: 2,minHeight: 325, minWidth:325, borderRadius: 5 }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={randomizeImages[0]}
                      alt="neas picture"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      Designation: {info.designation}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Discovery date: {info.discovery_date.slice(0,10)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Orbit class: {info.orbit_class}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Update</Button>
                      <Button size="small">Delete</Button>
                    </CardActions>
                    </Card>
               
              
};

export default Cardnea;
