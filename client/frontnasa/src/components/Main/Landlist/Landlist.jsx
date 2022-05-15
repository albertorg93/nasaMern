import React,{ useState, useEffect } from "react";
import axios from 'axios';
import 'leaflet/dist/leaflet.css';  
import "./Landlist.css";
import Card from './Cardland'
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import { Link } from "react-router-dom";

const override = css`
  display: block;
  margin-top: 100px;
  margin-left: 50%;
  border-color: lime;
`;


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

  
  
  if(listLandings){return (
    <>
    <Link to="/createlanding"><button>Add new landing</button></Link>
    <div className="cardcontainer">
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

         </>
    )} else {
      return(
        <>
      <RingLoader color={"orange"} loading={true} css={override} size={80} speedMultiplier={1} margin={2}/>
        </>
       
      )
    }
  
 
};

export default Landlist;
