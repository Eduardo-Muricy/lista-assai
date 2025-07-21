

const FiltroCategoria = ({selectedCategory, onChange}) => {
  return (
    <div className="flex flex-col items-center justify-center">

    <h3 className="text-xl">Filtrar por categoria</h3>
    <select className="p-1 text-lg" value={selectedCategory} onChange={(e)=> onChange(e.target.value)}  >
        <option  className='text-sm' value="">Todas as categorias</option>
        <option  className='text-sm' value="Carnes">Carnes</option>
        <option  className='text-sm' value="Frutas">Frutas</option>
        <option  className='text-sm' value="Legumes">Legumes</option>
        <option  className='text-sm' value="Pães">Pães</option>
        <option  className='text-sm' value="Bebidas">Bebidas</option>
        <option  className='text-sm' value="Limpeza">Limpeza</option>
        <option  className='text-sm' value="Higiene">Higiene</option>
        <option  className='text-sm' value="Frios">Frios</option>
        <option  className='text-sm' value="Outros">Outros</option>

      </select>
    </div>
  )
}

export default FiltroCategoria