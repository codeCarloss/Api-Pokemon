import { useState, useEffect } from 'react'
import Card from "../Card.jsx"

export default function Squirtle() {
  const [nom, setNom] = useState();
  const [url, setUrl] = useState();
  const [habilitats, setHabilitats ]= useState([]);
  const [id, setId] = useState();


  useEffect(()=> {
    fetch("https://pokeapi.co/api/v2/pokemon/squirtle")
    .then(response => response.json())
    .then(data =>{
      setNom(data.name),
      setUrl(data.sprites.front_default),
      setHabilitats([
        data.abilities[0].ability.name,
        data.abilities[1].ability.name
      ])
      setId(data.id)
    })
    .catch(error => console.error('Error: ', error));
  },[]);

  return ( 
    <Card nom={nom} url={url} habilitats={habilitats} id={id}/>
  )
}