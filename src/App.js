import {useState,useEffect} from 'react'
import Map from './Components/Map'
import Loading from './Components/Loading';
import Header from './Components/Header';

function App() {

  const [eventData, setEventData] = useState([])
  const [loading,setloading] = useState(false)


  useEffect(() =>{

    const fetchEvents =  async () =>{
 
      setloading(true)
    
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')

      const {events } = await res.json()

      setEventData(events)
      setloading(false)



    }

    fetchEvents()
    console.log(eventData,'data')


  },[])


  return (
    <div >
     <Header />
     {!loading ? <Map eventData={eventData} /> : <Loading /> }
 
    </div>
  );
}

export default App;
