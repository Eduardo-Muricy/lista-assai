import FiltroCategoria from "./FiltroCategoria"
import FilterStatus from './FilterStatus'
const Filtro = ({filterCategory, setFilterCategory, filterStatus, setFilterStatus}) => {
  return (
    <div className="py-4 lg:py-2">
       
        <div className="flex justify-center items-center gap-12">
    <FiltroCategoria selectedCategory={filterCategory} onChange={setFilterCategory} />
        <FilterStatus selectedStatus={filterStatus} onChange={setFilterStatus}/>
        </div>
        
    </div>
  )
}

export default Filtro