import React , {useEffect} from "react";
import axios from 'axios';

const Landings = () => {
  useEffect(() => {
   const fetchData = async () => {
       const res = await axios.get('http://localhost:5000/api/astronomy/landings/mass/2000')
       const data = res.data
       console.log(data);
   }
  fetchData()
  }, [])
  
  return <div>Landings</div>;
};

export default Landings;
