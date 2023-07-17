import React,{useState} from "react";
import { useNavigate } from "react-router";
// import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Planet = () =>
{
    const [querydata, setQuerydata] = useState([]);
    const [flag,setFlag] = useState(false);
    const Navigate = useNavigate();
    // const location = useLocation();
    // const data = location.state;
    const RedirectToBack = () =>
    {
        Navigate("/starwars");
    }
    const datafetch = (e) =>
    {
        axios.get(`https://swapi.dev/api/people/?search=${e.value}`)
        .then((data) => {
          if (data.data.count !== 0) {
            const dataset = data.data.results;
            setQuerydata(dataset);
            setFlag(true);
          } else {
              console.error('Data Not found');
          }
        })
    }
 

  // Now you can use the data in the component
    return<div className="Planets" >
        <div>
            <button onClick={()=>(RedirectToBack())}>Back</button>
        </div>
        <div style={{textAlign:"center"}}>
            <div style={{color:"Black",fontWeight:"Bolder"}}>
                Star Wars
            </div>
            <div>
                <input type="text" onChange={(e)=>(datafetch(e.target))} />
            </div>
        </div>
        <div style={{textAlign:"center"}}>
            {(flag)?querydata.map((index,key)=>{return(<div key={key}>{index.name}</div>)}):<div></div>}
        </div>
    </div>;
}

export default Planet;