import { useState, useEffect } from 'react'
import CardV2 from "./CardV2.jsx"

export default function Gengar() {
  const [nom, setNom] = useState();
  const [url, setUrl] = useState();
  const [habilitats, setHabilitats ]= useState()
  const [id, setId] = useState();


  useEffect(()=> {
    fetch("https://pokeapi.co/api/v2/pokemon/gengar")
    .then(response => response.json())
    .then(data =>{
      setNom(data.name),
      setUrl(data.sprites.front_default),
      setHabilitats( data.abilities[0].ability.name),
      setId(data.id)
    })

    .catch(error => console.error('Error: ', error));
  })
  return ( 
    <CardV2 nom={nom} url={url} habilitats={habilitats} id={id}/>
  )
}