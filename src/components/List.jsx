import { useState } from 'react'
import db from '../data/db'
import EditModal from './EditModal'
import { LuTrash2, LuPenLine} from 'react-icons/lu';


const List = ({ items, setItems }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);







  async function togglePurchased(id, currentValue) {
    await db.itens.update(id, { purchased: !currentValue })


    setItems(prevItems => prevItems.map(item => item.id === id ? { ...item, purchased: !currentValue } : item))

  }



  async function updateQuantity(id, delta) {

    const item = await db.itens.get(id)
    const newQuantity = item.quantity + delta


    if (newQuantity < 1) {
      return
    }

    await db.itens.update(id, { quantity: newQuantity, total: item.price * newQuantity })

    setItems(prevItems => prevItems.map(item => item.id === id ? { ...item, quantity: newQuantity, total: item.price * newQuantity } : item))

  }

  async function deleteItem(item) {
    await db.itens.delete(item.id)
    setItems(prevItems => prevItems.filter(i => i.id !== item.id))
  }

  //Funçoes do modal

  function openEditModal(item) {
    setEditingItem(item);
    setIsModalOpen(true)
  }

  function saveEdit(updatedItem) {
    db.itens.update(updatedItem.id, { name: updatedItem.name, category: updatedItem.category, price: updatedItem.price })

    setItems(prevItems => prevItems.map(item => item.id === updatedItem.id ? updatedItem : item))

    setIsModalOpen(false)
  }









  return (

      

    <div className='mt-95  '>
      <div className=' py-2'> 

{items.length === 0 &&(

  <h1 className='text-2xl text-center mt-20'>Nenhum item na lista,
  adicione Itens</h1>
)}

        {items.map((item) => (

          <div key={item.id} style={{borderColor: '#e63946'}} className={`grid grid-cols-[2fr_1fr_1fr_1fr_1fr_2fr] items-center border-b-1  justify-between gap-6  p-4 mb-2  ${item.purchased ? 'bg-green-500 border-none' : ''}`}>

             

            <div className='flex items-center  min-w-0'>

              <h2 className={` break-all  ${item.purchased ? 'line-through' : ''}`}>   {item.name}</h2>
            </div>

            <div className='flex items-center justify-center  break-words'>
              <span>{item.category}</span>
            </div>

            <div className='flex items-center justify-center '>
              <span>R$ {item.price.toFixed(2)}</span>
            </div>


            <div className='flex items-center justify-center gap-3 '>
              <button className={` text-2xl ${item.quantity === 1 ? 'invisible ' : ''}`} onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span className=' text-xl border-b-2' style={{borderColor: '#e63946'}}>{item.quantity}</span>
              <button className=' text-2xl' onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>

            <div className=' flex items-center justify-center '>
              <button className='border-b-2' style={{borderColor: '#e63946'}} onClick={() => togglePurchased(item.id, item.purchased)}>{item.purchased ? ' Nao comprado' : ' Comprado' }</button>
            </div>

            <div className='flex items-center gap-5 justify-center '>
              <LuPenLine size={25} onClick={() => openEditModal(item)} />

              <LuTrash2 color='#e63946' size={25} onClick={() => deleteItem(item)} />
            </div>

          </div>
          

        ))



        }
      </div>
      <div className='p-10 '>

      </div>
      <EditModal isOpen={isModalOpen} onSave={saveEdit} onClose={() => setIsModalOpen(false)} item={editingItem} />
    </div>
  )
}

export default List