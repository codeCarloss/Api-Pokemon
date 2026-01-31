export default function CardV2 ({nom, url, habilitats, id}){
    return(
    <>
    <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
      <div className="sm:order-last sm:shrink-0">
        <img alt={nom} src={url} className="size-16 rounded-full object-cover sm:size-18"/>
      </div>
      <div className="mt-4 sm:mt-0">
        <h3 className="text-lg font-medium text-pretty text-gray-900">
          Nombre: {nom} 
        </h3>
        <h3 className="text-lg font-medium text-pretty text-gray-900">
          Numero en la pokedex: {id} 
        </h3>
        <h3 className="text-lg font-medium text-pretty text-gray-900">
          Habilidad: {habilitats}
        </h3>
      </div>
    </div>
    <hr />
  </>
)
}