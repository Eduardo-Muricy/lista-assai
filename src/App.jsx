import { useState, useEffect } from 'react'
import db from './data/db'
import List from './components/List'
import AddItem from './components/AddItem'
import Filtro from './components/FiltroTemp'
import Resume from './components/Resume'
import TableNames from './components/TableNames'
function App() {
  const [items, setItems] = useState([])

  const [filterCategory, setFilterCategory] = useState('')
  const [filterStatus, setFilterStatus] = useState('todos')

  async function fetchItems() {
    let allItems = await db.itens.toArray()

    if (filterCategory) {
      allItems = allItems.filter(item => item.category === filterCategory)
    }

    if (filterStatus === 'comprados') {
      allItems = allItems.filter(item => item.purchased)
    } else if (filterStatus === 'naoComprados') {
      allItems = allItems.filter(item => !item.purchased)
    } else /* eslint-disable no-empty */ { }

    setItems(allItems)
  }

  useEffect(() => {
    fetchItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ filterCategory, filterStatus])

  function handleItemAdded() {
    fetchItems() // inverte para atualizar lista
  }

  function limparLista() {
    db.itens.clear()
    setItems([])
  }

  return (
    <div>
      <div className="fixed top-0 left-0 right-0">
        <h1 className="text-4xl text-center">Lista de compras</h1>
        <div className="flex justify-between items-center mt-4">
          <div className="bg-green-500 w-1/2 p-4 rounded shadow-md">
            <AddItem onItemAdded={handleItemAdded} />
          </div>
          <button
            onClick={limparLista}
            className="pr-6 text-red-500 text-2xl"
          >
            Limpar lista
          </button>
        </div>
      </div>

      <div className="mt-80"></div>
      
      <Filtro
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <TableNames/>

      <List items={items} setItems={setItems} />
      <Resume items={items} />
    </div>
  )
}

export default App
