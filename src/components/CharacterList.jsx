import { useState, useEffect} from 'react'
import Character from './Character'

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  
  const fetchData = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();
    setCharacters(data.results);
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {
        characters.map(character => {
          return (
            <Character character={character} key={character.id}/>
          )
        })
      }
    </div>
  )
}

export default CharacterList