

const FiltroCategoria = ({selectedCategory, onChange}) => {
  return (
    <div>

    <label htmlFor="">Filtrar por categoria:</label>
    <select value={selectedCategory} onChange={(e)=> onChange(e.target.value)}  >
        <option value="">Todas as categorias</option>
        <option value="Carnes">Carnes</option>
        <option value="Frutas">Frutas</option>
        <option value="Legumes">Legumes</option>
        <option value="Pães">Pães</option>
        <option value="Bebidas">Bebidas</option>
        <option value="Limpeza">Limpeza</option>
        <option value="Higiene">Higiene</option>
        <option value="Frios">Frios</option>
        <option value="Outros">Outros</option>

      </select>
    </div>
  )
}

export default FiltroCategoria