

const FilterStatus = ({ selectedStatus, onChange }) => {
  return (
    <div className="flex flex-col items-center justify-center" >
        <h3 className="text-xl">Filtrar por status</h3>
        <select className="p-1 text-lg" value={selectedStatus} onChange={(e)=> onChange(e.target.value)} >
            <option  className='text-sm' value="todos">Todos</option>
            <option  className='text-sm' value="comprados">Comprado</option>
            <option  className='text-sm' value="naoComprados">Não comprado</option>
        </select>
    </div>
  )
}

export default FilterStatus