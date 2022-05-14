import React,{ useState, useEffect } from "react";
import axios from 'axios';
import 'leaflet/dist/leaflet.css';  
import "./Landlist.css";
import Card from './Cardland'


const ITEMS_PER_PAGE = 10;
const Landlist = () => {

  const [listLandings, setlistLandings] = useState("");
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
 
  const nextPage = () => {
    const totalElements = listLandings.length;
    const nextPage = currentPage + 1;
    const firstIndexOfNextPage = nextPage * ITEMS_PER_PAGE;
    if (firstIndexOfNextPage === totalElements) return;
    setItems([...listLandings].splice(firstIndexOfNextPage, ITEMS_PER_PAGE));
    setCurrentPage(nextPage);
  };

  const prevPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const firstIndexOfPrevPage = prevPage * ITEMS_PER_PAGE;
    setItems([...listLandings].splice(firstIndexOfPrevPage, ITEMS_PER_PAGE));
    setCurrentPage(prevPage);
  };

  useEffect(() => {
   const fetchData = async () => {
       const res = await axios.get('http://localhost:5000/api/astronomy/landings/all')
       const data = await res.data.slice(0,100)
       setlistLandings(data) 
       setItems([...data].slice(0, ITEMS_PER_PAGE))  
   }
  fetchData()
  }, [])

  
  
  if(items){return (
    <div>
    <div>
          {items.map((datos, i) =>
                datos.geolocation && datos.year? (
                  <Card key={i} data={datos}/>
           ) : null )}
    </div>
           <div className="paginacion">
              <button onClick={prevPage}> Prev </button>
              <button onClick={nextPage}> Next </button>
              <h1 className="current"> Page {currentPage} </h1>
         </div>
          </div>
    )} else {
      console.log("no entra aqui");
    }
  
 
};

export default Landlist;
