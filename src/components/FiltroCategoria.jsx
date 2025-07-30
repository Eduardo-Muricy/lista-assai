

const FiltroCategoria = ({selectedCategory, onChange}) => {
  return (
    <div className="flex flex-col items-center justify-center">

    <h3 className="text-xl lg:text-sm">Filtrar por categoria</h3>
    <select className="p-1 text-lg lg:text-sm " value={selectedCategory} onChange={(e)=> onChange(e.target.value)}  >
        <option  className='text-sm bg-[#14213d]' value="">Todas as categorias</option>
          <option className='text-sm bg-[#14213d]' value="Legumes">Legumes</option>
          <option className='text-sm bg-[#14213d]' value="Verduras">Verduras </option>
          <option className='text-sm bg-[#14213d]' value="Frutas">Frutas </option>
          <option className='text-sm bg-[#14213d]' value="Embutidos">Embutidos </option>
          <option className='text-sm bg-[#14213d]' value="Carnes">Carnes </option>
          <option className='text-sm bg-[#14213d]' value="Frios">Frios</option>
          <option className='text-sm bg-[#14213d]' value="LeiteEderivados">Leite e derivados</option>
          <option className='text-sm bg-[#14213d]' value="Enlatados">Enlatados </option>
          <option className='text-sm bg-[#14213d]' value="Massas">Massas</option>
          <option className='text-sm bg-[#14213d]' value="Grãos">Grãos </option>
          <option className='text-sm bg-[#14213d]' value="Café">Café </option>
          <option className='text-sm bg-[#14213d]' value="Cereal">Cereal </option>
          <option className='text-sm bg-[#14213d]' value="Bebidas">Bebidas </option>
          <option className='text-sm bg-[#14213d]' value="Ovos">Ovos</option>
          <option className='text-sm bg-[#14213d]' value="HigienePessoal">Higiene pessoal
</option>
          <option className='text-sm bg-[#14213d]' value="HigieneLimpeza">Higiene limpeza
</option>
          <option className='text-sm bg-[#14213d]' value="Farinhas">Farinhas</option>

      </select>
    </div>
  )
}

export default FiltroCategoria