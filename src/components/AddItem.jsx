import { useState } from 'react';
import db from '../data/db';

const AddItem = ({ onItemAdded }) => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(1)

  async function adicionarItem() {




    if (nomeProduto.trim() === '' || category.trim() === '' || price <= 0) {
      alert("Preencha todos os campos.")
      return;
    }






    await db.itens.add({
      name: nomeProduto,
      category: category,
      price: parseFloat(price),
      quantity: quantity || 1,
      total: (parseFloat(price) * (quantity || 1)),
      purchased: false
    })

    setNomeProduto("");
    setCategory("");
    setPrice(0);
    onItemAdded();
  }


  function handleFixQuantity(e) {
    let val = e.target.value

    if (val < 1) {
      setQuantity('')
      return
    }

    val = Math.max(1, Math.floor(Number(val) || 1))
    setQuantity(val)
  }

  function handleFixPrice(e) {
    let fixPrice = e.target.value
    if (fixPrice === '') {
      setPrice('')
      return
    }

    fixPrice = fixPrice.replace(',', '.')

    const numeralVal = parseFloat(fixPrice)

    if (isNaN(numeralVal)) {
      setPrice(0);
      return;
    }


    setPrice(Math.max(0, fixPrice))
  }

  return (
    <div className='w-full'>
      <h2 className='text-2xl ml-3 mt-5'>Adicionar item</h2>
      <div className='flex flex-col justify-center bg-amber-800 px-4 py-2'>
        <input className=' p-1'
          type="text" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} placeholder='Digite o nome do produto' />


        <button onClick={adicionarItem} className='bg-blue-500 text-white p-1 rounded mt-2'>Adicionar</button>
      </div>


      <div className='py-4 flex flex-col gap-2 '>



        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecionar categoria</option>
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

        <div className='flex gap-2 '>
        <h4>Selecione o preço:</h4>
        <input className='w-6 ' type="number" value={price} onChange={handleFixPrice} />
      </div>

      <div className='flex gap-2 '>
        <h2>Selecionar quantidade</h2>
        <input className='w-6 ' type="number" value={quantity} onChange={handleFixQuantity} placeholder="Quantidade"
          min="1" />
      </div>

      </div>


      
      

    </div>
  )
}

export default AddItem