

const FilterStatus = ({ selectedStatus, onChange }) => {
  return (
    <div>
        <h3>Filtrar por status</h3>
        <select value={selectedStatus} onChange={(e)=> onChange(e.target.value)} >
            <option value="todos">Todos</option>
            <option value="comprados">Comprado</option>
            <option value="naoComprados">Não comprado</option>
        </select>
    </div>
  )
}

export default FilterStatus