import { useState, useEffect } from 'react'
import Card from "./Card.jsx"

export default function Pokemon({pokemon}) {
  const [nom, setNom] = useState();
  const [url, setUrl] = useState();
  const [habilitats, setHabilitats ]= useState([]);
  const [sprite, setSprite] = useState();
  const [id, setId] = useState();
  const [stats, setStats] = useState([]);

  {(pokemon != "butanero")? (
    useEffect(()=> { 
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => response.json())
      .then(data =>{
        setNom(data.name),
        setUrl(data.sprites.front_default),
        setSprite(data.sprites.front_shiny),
        setHabilitats([
          data.abilities[0].ability.name,
          data.abilities[1].ability.name
        ]),
        setStats([
          {id : 1, stat:data.stats[0].stat.name, value: data.stats[0].base_stat},
          {id : 2, stat:data.stats[1].stat.name, value: data.stats[1].base_stat},
          {id : 3, stat:data.stats[2].stat.name, value: data.stats[2].base_stat},
          {id : 4, stat:data.stats[3].stat.name, value: data.stats[3].base_stat},
          {id : 5, stat:data.stats[4].stat.name, value: data.stats[4].base_stat},
          {id : 6, stat:data.stats[5].stat.name, value: data.stats[5].base_stat}

        ])
        setId(data.id)
      })
      .catch(error => console.error('Error: ', error));
  },[pokemon])
  ):
  useEffect(()=> { 
      fetch(`https://pokeapi.co/api/v2/pokemon/tepig`)
      .then(response => response.json())
      .then(data =>{
        setNom(`butanero`),
        setUrl(data.sprites.front_default),
        setSprite(data.sprites.front_shiny),
        setHabilitats([
          data.abilities[0].ability.name,
          data.abilities[1].ability.name
        ]),
        setStats([
          {id : 1, stat:data.stats[0].stat.name, value: data.stats[0].base_stat},
          {id : 2, stat:data.stats[1].stat.name, value: data.stats[1].base_stat},
          {id : 3, stat:data.stats[2].stat.name, value: data.stats[2].base_stat},
          {id : 4, stat:data.stats[3].stat.name, value: data.stats[3].base_stat},
          {id : 5, stat:data.stats[4].stat.name, value: data.stats[4].base_stat},
          {id : 6, stat:data.stats[5].stat.name, value: data.stats[5].base_stat}

        ])
        setId(data.id)
      })
      .catch(error => console.error('Error: ', error));
  },[pokemon])
}
  return ( 
    <Card nom={nom} url={url} habilitats={habilitats} id={id} shiny={sprite} stats={stats}/>
  )
}
