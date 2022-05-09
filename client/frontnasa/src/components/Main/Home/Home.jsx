import React , {useEffect, useState} from "react";
import logospace from '../../../assets/spacestation.png'
import axios from 'axios';

const Home = () => {
  const [apod, setApod] = useState(""); // Para guardar los posts
  // const [unico, setUnico] = useState({});
  // const [input, setInput] = useState("");
  // const [debouncedInput] = useDebounce(input, 1500);

  useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=a6pr6VJqLS4ouecsjsPLFABxKrNzBc9gzL5shM2r')
        const data = res.data
        setApod(data.url)
    }
   fetchData()
   }, [])



  return <>
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

};

export default Home;
