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
    <div className='w-full mt-4 flex flex-col'>

      <div className='   py-4 flex flex-col'>
        <input className=' p-2 text-xl border-b-2  ' style={{borderColor: '#e63946'}}
          type="text" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} placeholder='Digite o nome do produto' />



      </div>


      <div className='py-4 flex justify-center items-center  gap-6 '>



        <select className='text-xl p-1 ' value={category} onChange={(e) => setCategory(e.target.value)}>
          <option className='text-sm bg-[#14213d]' value="">Selecionar categoria</option>
          <option className='text-sm bg-[#14213d]' value="Carnes">Carnes</option>
          <option className='text-sm bg-[#14213d]' value="Frutas">Frutas</option>
          <option className='text-sm bg-[#14213d]' value="Legumes">Legumes</option>
          <option className='text-sm bg-[#14213d]' value="Pães">Pães</option>
          <option className='text-sm bg-[#14213d]' value="Bebidas">Bebidas</option>
          <option className='text-sm bg-[#14213d]' value="Limpeza">Limpeza</option>
          <option className='text-sm bg-[#14213d]' value="Higiene">Higiene</option>
          <option className='text-sm bg-[#14213d]' value="Frios">Frios</option>
          <option className='text-sm bg-[#14213d]' value="Outros">Outros</option>

        </select>

        <div className='flex gap-2 items-center  '>
          <h2 className='text-xl'>Selecione o preço:</h2>
          <input className='w-6 p-1  border-b-2 text-lg' style={{ borderColor: '#e63946' }} type="number" value={price} onChange={handleFixPrice} />
        </div>

        <div className='flex gap-2 items-center '>
          <h2 className='text-xl'>Selecionar quantidade:</h2>
          <input className='w-6 p-1   border-b-2 text-lg' style={{ borderColor: '#e63946' }} type="number" value={quantity} onChange={handleFixQuantity} placeholder="Quantidade"
            min="1" />
        </div>

      </div>

      <button onClick={adicionarItem} className='bg-[#e63946] text-white p-2  text-xl  mt-2'>Adicionar</button>





    </div>
  )
}

export default AddItem