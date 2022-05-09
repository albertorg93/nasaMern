import React,{ useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';  
import "./Landings.css";
import L from "leaflet"

const Landings = () => {

  const [asteroid, setAsteroid] = useState("");

  const Icon = new L.Icon({
    iconUrl: require('../../../assets/asteroid.png'),
    popupAnchor: [0, -10],
    iconSize: new L.Point(60, 60)
  });


  useEffect(() => {
   const fetchData = async () => {
       const res = await axios.get('http://localhost:5000/api/astronomy/landings/all')
       const data = await res.data.slice(0,20)
       setAsteroid(data)
       
   }
  fetchData()
  }, [])
  console.log(asteroid)
  if(asteroid){return (
    <div>
     <MapContainer
              center={[40.4689, -3.7786]}
              zoom={3}
              style={{ height: '80vh' }}>
              <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              />
              {asteroid.map((data, i) =>
                data.geolocation ? (
              <Marker
                key={i}
                position={[data.geolocation.latitude, data.geolocation.longitude]}
                icon={Icon}
              >
              </Marker>) : null )}
              
              {/* // <Marker position={[41.66, -4.71]} draggable='false' icon={Icon}></Marker> */}
              {/* L.marker([41.66, -4.71],{draggable: true}).addTo(map); */}
          </MapContainer>
    </div>
    )} else {
      console.log("no entra aqui");
    }
  
 
};

export default Landings;
