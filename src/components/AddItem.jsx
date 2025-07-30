import { useState } from 'react';
import db from '../data/db';

const AddItem = ({ onItemAdded }) => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [category, setCategory] = useState('')

  const [quantity, setQuantity] = useState(1)

  async function adicionarItem() {




    if (nomeProduto.trim() === '' || category.trim() === '') {
      alert("Preencha todos os campos.")
      return;
    }






    await db.itens.add({
      name: nomeProduto,
      category: category,
      price: 0,
      quantity: quantity || 1,
      total: (0 * (quantity || 1)),
      purchased: false
    })

    setNomeProduto("");
    setCategory("");

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



  return (
    <div className='w-full mt-4 flex flex-col'>

      <div className='   py-4 flex flex-col'>
        <input className=' p-2 text-xl border-b-2  ' style={{ borderColor: '#e63946' }}
          type="text" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} placeholder='Digite o nome do produto' />



      </div>


      <div className='py-4 lg:py-1 flex justify-center items-center  gap-6 '>



        <select className='text-xl p-1 lg:text-sm ' value={category} onChange={(e) => setCategory(e.target.value)}>
          <option className='text-sm bg-[#14213d]' value="">Selecionar categoria</option>
          <option className='text-sm bg-[#14213d]' value="Legumes">Legumes</option>
          <option className='text-sm bg-[#14213d]' value="Verduras">Verduras </option>
          <option className='text-sm bg-[#14213d]' value="Frutas">Frutas </option>
          <option className='text-sm bg-[#14213d]' value="Embutidos">Embutidos </option>
          <option className='text-sm bg-[#14213d]' value="Carnes">Carnes </option>
          <option className='text-sm bg-[#14213d]' value="Frios">Frios</option>
          <option className='text-sm bg-[#14213d]' value="LeiteEderivados">Leite e derivados</option>
          <option className='text-sm bg-[#14213d]' value="Enlatados">Enlatados </option>
          <option className='text-sm bg-[#14213d]' value="Massas">Massas</option>
          <option className='text-sm bg-[#14213d]' value="Grãos">Grãos </option>
          <option className='text-sm bg-[#14213d]' value="Café">Café </option>
          <option className='text-sm bg-[#14213d]' value="Cereal">Cereal </option>
          <option className='text-sm bg-[#14213d]' value="Bebidas">Bebidas </option>
          <option className='text-sm bg-[#14213d]' value="Ovos">Ovos</option>
          <option className='text-sm bg-[#14213d]' value="HigienePessoal">Higiene pessoal
</option>
          <option className='text-sm bg-[#14213d]' value="HigieneLimpeza">Higiene limpeza
</option>
          <option className='text-sm bg-[#14213d]' value="Farinhas">Farinhas</option>

        </select>



        <div className='flex gap-2 items-center '>
          <h2 className='text-xl lg:text-sm'>Selecionar quantidade:</h2>
          <input className='w-6 p-1 text-center  border-b-2 text-lg lg:text-sm' style={{ borderColor: '#e63946' }} type="number" value={quantity} onChange={handleFixQuantity} placeholder="Quantidade"
            min="1" />
        </div>

      </div>

      <button onClick={adicionarItem} className='bg-[#e63946] text-white p-2  text-xl lg:text-sm  mt-2'>Adicionar</button>





    </div>
  )
}

export default AddItem