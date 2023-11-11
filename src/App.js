import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { Loading } from './components/Loading';
import { Tours } from './components/Tours';

const url = 'https://course-api.com/react-tours-project'
  
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  
  const fetchTourList = async () => {
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      data.reverse();
      setTours(data);
    } catch (error) {
      setLoading(false);
        throw new Error("Couldn't load the tours list :(")
    }
  };
  
  useEffect(() => {
    fetchTourList();
  }, []);

  if(loading){
    return( <Loading />)
  }
  return (
    <main>
      <Tours tours={tours}/>
    </main>
  );
}

export default App;
