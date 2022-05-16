import React , {useEffect, useState} from "react";
import logospace from '../../../assets/spacestation.png'
import axios from 'axios';
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";


const override = css`
  display: block;
  margin-top: 100px;
  margin-left: 50%;
  border-color: lime;
`;

const apiKey = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [apod, setApod] = useState(""); // Para guardar los posts

  useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        const data = res.data
        setApod(data.url)
    }
   fetchData()
   }, [])

  


  if(apod) {return <>
  <div className='inicio'>
    <img className='logoinicial' src={logospace} alt="logopokemon" style={{width : 160}}/>
    <h1 className='welcome'> WELCOME TO THE NASA APP MERN</h1>
    </div>    
     <h1 className="home">Enjoy the Nasa APOD</h1>
      <div className="picture">
         <img src={apod} alt="apod" />
      </div>
 

  </>
  ;

} else {
  return(
    <>
  <RingLoader color={"lime"} loading={true} css={override} size={80} speedMultiplier={1} margin={2}/>
    </>
   
  )
}
};

export default Home;
