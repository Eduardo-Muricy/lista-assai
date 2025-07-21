

const FiltroCategoria = ({selectedCategory, onChange}) => {
  return (
    <div className="flex flex-col items-center justify-center">

    <h3 className="text-xl">Filtrar por categoria</h3>
    <select className="p-1 text-lg " value={selectedCategory} onChange={(e)=> onChange(e.target.value)}  >
        <option  className='text-sm bg-[#14213d]' value="">Todas as categorias</option>
        <option  className='text-sm bg-[#14213d]' value="Carnes">Carnes</option>
        <option  className='text-sm bg-[#14213d]' value="Frutas">Frutas</option>
        <option  className='text-sm bg-[#14213d]' value="Legumes">Legumes</option>
        <option  className='text-sm bg-[#14213d]' value="Pães">Pães</option>
        <option  className='text-sm bg-[#14213d]' value="Bebidas">Bebidas</option>
        <option  className='text-sm bg-[#14213d]' value="Limpeza">Limpeza</option>
        <option  className='text-sm bg-[#14213d]' value="Higiene">Higiene</option>
        <option  className='text-sm bg-[#14213d]' value="Frios">Frios</option>
        <option  className='text-sm bg-[#14213d]' value="Outros">Outros</option>

      </select>
    </div>
  )
}

export default FiltroCategoria