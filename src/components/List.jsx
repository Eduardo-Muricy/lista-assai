import {useState} from 'react'
import db from '../data/db'
import EditModal from './EditModal'
const List = ({items, setItems}) => {
  
const [isModalOpen, setIsModalOpen] = useState(false);
const [editingItem, setEditingItem] = useState(null);







async function togglePurchased(id, currentValue){
await db.itens.update(id, {purchased: !currentValue})


setItems(prevItems=> prevItems.map(item=> item.id === id ? {...item, purchased: !currentValue} : item))

}



async function updateQuantity(id, delta) {

  const item =  await db.itens.get(id)
  const newQuantity = item.quantity + delta


  if (newQuantity < 1) {
    return
}

await db.itens.update(id, {quantity: newQuantity, total: item.price * newQuantity})

setItems(prevItems=> prevItems.map(item=> item.id=== id ? {...item, quantity: newQuantity, total: item.price * newQuantity}: item))

}

async function deleteItem(item){
  await db.itens.delete(item.id)
  setItems(prevItems=> prevItems.filter(i=> i.id !== item.id))
}

//Funçoes do modal

function openEditModal(item){
  setEditingItem(item);
  setIsModalOpen(true)
}

function saveEdit(updatedItem){
db.itens.update(updatedItem.id,{name:updatedItem.name, category:updatedItem.category, price:updatedItem.price })

setItems(prevItems=> prevItems.map(item=> item.id=== updatedItem.id ? updatedItem : item))

setIsModalOpen(false)
}









  return (
    <div>
        <div className='ml-6'>
           {items.map((item)=>(

            <div key={item.id} className={`flex justify-between items-center bg-gray-100 p-4 mb-2 rounded ${item.purchased ? 'bg-green-200' : ''}`}>
              <div className='flex'>
                 <span>{item.purchased ? '✅': ''}</span>
            <h2 className={`${item.purchased ? 'line-through' : ''}`}>   {item.name}</h2>
              </div>
               
            <span>{item.category}</span>
            <span>R$ {item.price.toFixed(2)}</span>
            <div className='flex items-center gap-2'>
              <button className={`${item.quantity === 1 ? 'hidden' : ''}`} onClick={()=> updateQuantity(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button  onClick={()=> updateQuantity(item.id, 1)}>+</button>
            </div>
            
            <button onClick={()=> togglePurchased(item.id, item.purchased) }>{item.purchased ? 'Desmarcar' : 'Marcar'}</button>
              
              <button onClick={()=> openEditModal(item)}>Editar</button>
              <button onClick={()=> deleteItem(item)}>Apagar</button>
            </div>

           ))



           }
        </div>
        <EditModal isOpen={isModalOpen} onSave={saveEdit} onClose={()=> setIsModalOpen(false)} item={editingItem}/>
    </div>
  )
}

export default List