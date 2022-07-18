import { useState, useEffect } from "react";
import Character from "./Character";
import Navpage from "./Navpage";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await response.json();
    setLoading(false);
    setCharacters(data.results);
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="container ">
      <Navpage page={page} setPage={setPage}/>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} key={character.id} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CharacterList;
