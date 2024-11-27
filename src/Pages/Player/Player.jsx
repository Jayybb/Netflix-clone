import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({

    name:"",
    key:"",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2Y4OTg5MjUwMjUzZGE2MTZmZGE3ZjA2MWFkZTI5MyIsIm5iZiI6MTczMjYzMDMzMS41MDczNzc2LCJzdWIiOiI2NzQwY2FkNzRkZmEwNmI1ZGY5MzAyNzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dJMxBN8LdSdjN_iPvofx1m6IKkly34Q8EdrOVYLI87o'
    }
  };
  
  useEffect(()=>{


    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
},[])

  
return (
  <div className="player">
    <img src={back_arrow_icon} alt="Back" onClick={()=>{navigate(-2)}}/>
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title="trailer"
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <div className="player-info">
      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>
    </div>
  </div>
);
};
export default Player;