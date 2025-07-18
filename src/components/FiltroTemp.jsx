import FiltroCategoria from "./FiltroCategoria"
import FilterStatus from './FilterStatus'
const Filtro = ({filterCategory, setFilterCategory, filterStatus, setFilterStatus}) => {
  return (
    <div>
        <h3>Filtros:</h3>
        <FiltroCategoria selectedCategory={filterCategory} onChange={setFilterCategory} />
        <FilterStatus selectedStatus={filterStatus} onChange={setFilterStatus}/>
    </div>
  )
}

export default Filtro