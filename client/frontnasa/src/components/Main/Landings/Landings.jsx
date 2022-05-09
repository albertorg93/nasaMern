import React , {useEffect} from "react";
import axios from 'axios';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
// import { EditControl } from 'react-leaflet-draw';
import 'leaflet-draw';

const Landings = () => {
  useEffect(() => {
   const fetchData = async () => {
       const res = await axios.get('http://localhost:5000/api/astronomy/landings/mass/2000')
       const data = res.data
       console.log(data);
   }
  fetchData()
  }, [])
  
  return (
  <div className="maplanding">
   <MapContainer
            center={[37.8189, -122.4786]}
            zoom={0}
            style={{ height: '80vh' }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
  </div>
  )
 
};

export default Landings;
