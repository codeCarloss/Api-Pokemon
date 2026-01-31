export default function CardOld ({nom, url, habilitats=[], id, shiny, stats= []}){
    return(
    <>
    <div className="sm:flex sm:justify-center sm:items-center sm:gap-4 lg:gap-6">
      <div className="sm:order-last sm:shrink-0">
        <h1>Normal: </h1>
        <img alt={nom} src={url} className="size-16 rounded-full object-cover sm:size-18"/>
      </div>
      <div>
        <img alt={nom} src={shiny} className="size-16 rounded-full object-cover sm:size-18"/>
      </div>
      <div className="mt-4 sm:mt-0">
        <h1 className="text-lg text-pretty text-gray-900">
          Nombre: {nom} 
        </h1>
        <h1 className="text-lg font-medium text-pretty text-gray-900">
          Numero en la pokedex: {id} 
        </h1>
        <h3>
          Stats: {stats.map((e => 
            <li key={e.id}>
              {e.stat}: {e.value}
            </li>
          ))
          }
        </h3>
        <h3 className="text-lg font-medium text-pretty text-gray-900">
          Habilidades: {habilitats[0]} y {habilitats[1]}
        </h3>
      </div>
    </div>
    <hr />
  </>
)
}