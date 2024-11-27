import React, { useEffect, useRef, useState } from 'react'; 
import './TitleCards.css';
import {Link} from 'react-router-dom'

const TitleCards = ({title, category}) => {

  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);
  const scrollSpeed = 2; // Define scroll speed to control how fast the scroll happens

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2Y4OTg5MjUwMjUzZGE2MTZmZGE3ZjA2MWFkZTI5MyIsIm5iZiI6MTczMjI5OTkzNS43ODIyNzc4LCJzdWIiOiI2NzQwY2FkNzRkZmEwNmI1ZGY5MzAyNzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.hVuPR9B07hoyFaqIAsOtGh4xTi5fpDXctR2DgT7qLFk'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault(); // Prevent default scroll behavior
    // Adjust scroll speed and direction based on deltaY
    cardsRef.current.scrollLeft += event.deltaY * scrollSpeed;
  };

  useEffect(() => {
    // Fetch data from TMDb API
    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));

    // Attach the wheel event listener
    const ref = cardsRef.current;
    ref.addEventListener('wheel', handleWheel);

    // Cleanup the event listener on component unmount
    return () => {
      ref.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="titlecards">
      <h2>{title || "Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`}className="card" key={index}>
            <img 
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.original_title} 
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
