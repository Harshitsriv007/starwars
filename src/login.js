import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import axios from 'axios';

function Login() {
  const [datas, setDatas] = useState({});
  const [querydata, setQuerydata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToPlanet = () => {
      const { username, password } = datas;

      if (username && password) {
        const query = username;
        axios.get(`https://swapi.dev/api/people/?search=${query}`)
          .then((data) => {
            if (data.data.count !== 0) {
              const dataset = data.data.results;
              setQuerydata(dataset);
            } else {
                window.alert('Data Not found');
            }
          })
          .catch((error) => console.error(error));
      }
    };

    redirectToPlanet();
  }, [datas]);

  const GetData = (e) => {
    setDatas((prevData) => ({ ...prevData, [e.name]: e.value }));
  };

  const redirectToPlanet = () => {
    const DOB = datas.password;
    querydata.forEach((index) => {
      if (index['birth_year'] === DOB) {
        navigate('/planet', { state: index });
      } else {
        window.alert('Wrong Password');
      }
    });
  };

  return (
    <div style={{textAlign:"center"}}>
      <div style={{color:"Black",fontWeight:"Bolder"}}>
        Star Wars
        </div>
      <div>
        <input type="text" name="username" onChange={(e) => GetData(e.target)} />  
      </div>
      <div>
         <input type="password" name="password" onChange={(e) => GetData(e.target)} />
      </div>
      <div>
        <Button onClick={redirectToPlanet}>PLANET</Button>
      </div>
    </div>
  );
}

export default Login;
