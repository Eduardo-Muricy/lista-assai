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
  }, [filterCategory, filterStatus])

  function handleItemAdded() {
    fetchItems() // inverte para atualizar lista
  }



  return (
    <div className="bg-[#14213d] text-white">
      <div className="fixed top-0 left-0 right-0 bg-[#14213d] " >
        <h1 className="text-4xl text-center">Lista de compras</h1>

        <div className="  flex flex-col ">

          <AddItem onItemAdded={handleItemAdded} />

          <Filtro
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
          <TableNames />
        </div>





      </div>
      <div>
        <div className='flex flex-col items-center justify-center  '>
          <List items={items} setItems={setItems} />
        </div>


        <div className='fixed bottom-0 left-0 right-0  p-4 bg-[#14213d]'>
          <Resume items={items} />
        </div>
      </div>




    </div>
  )
}

export default App
