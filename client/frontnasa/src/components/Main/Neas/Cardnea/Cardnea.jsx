import React from "react";
import axios from 'axios';
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
import neas1 from "../../../../assets/neas/neas1.png";
import neas2 from "../../../../assets/neas/neas2.png";
import neas3 from "../../../../assets/neas/neas3.png";
import neas4 from "../../../../assets/neas/neas4.png";
import neas5 from "../../../../assets/neas/neas5.png";

const Cardnea = (props) => {
  const info = props.data

  const pictures = [neas1,neas2,neas3,neas4,neas5];
  const randomizeImages = pictures.sort((a, b) => 0.5 - Math.random());

 

  const updateNea = () =>  {
    console.log(info)
    let valor = info
   // axios.delete('http://localhost:5000/api/astronomy/neas/delete', info);
    axios.delete('http://localhost:5000/api/astronomy/neas/delete',{ data: info})

  }

  const removeNea = () =>  {
    console.log(info)
    let valor = info
   // axios.delete('http://localhost:5000/api/astronomy/neas/delete', info);
    axios.delete('http://localhost:5000/api/astronomy/neas/delete',{ data: info})

  }

 return            <Card sx={{ maxWidth: 325, margin: 2,minHeight: 400, minWidth:325, borderRadius: 5}}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={randomizeImages[0]}
                      alt="neas picture"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" fontSize={26}>
                      Designation: {info.designation}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" fontWeight='bold' fontSize={20}>
                      Discovery date: {info.discovery_date.slice(0,10)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" fontWeight='bold' fontSize={20}>
                      Orbit class: {info.orbit_class}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={updateNea}>Update</Button>
                      <Button size="small" onClick={removeNea}>Delete</Button>
                    </CardActions>
                    </Card>
               
              
};

export default Cardnea;
