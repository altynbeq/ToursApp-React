// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { Loading } from './components/Loading';
import { Tours } from './components/Tours';

// holds json data for the tours
const url = 'https://course-api.com/react-tours-project'
  
function App() {
  // control states for loader and list of tours
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  
  // onRemoveTour action handler
  const removeTour = (id) => {
    const newTour = tours.filter( tour => tour.id !== id);
    setTours(newTour);
  }
  // get list of tours, and setState
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
  // if still loading, display loader
  if(loading){
    return( <Loading />)
  }
  // if all tours are deleted, display message
  if(tours.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button className="btn" onClick={() => fetchTourList()}>Refresh</button>
        </div>
      </main>)
  }
  return (
    <main>
      <Tours tours={tours} removeTour = {removeTour}/>
    </main>
  );
}

export default App;
