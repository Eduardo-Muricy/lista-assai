import { useEffect} from 'react'
import { useState } from 'react';

const EditModal = ({ isOpen, onSave, onClose, item }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');


  useEffect(() => {
if(item){
    setName(item.name);
    setCategory(item.category);
    setPrice(item.price);
  }

  },[item])
  
  


  if (!isOpen) {
    return null; // Retorna null se o modal não está aberto
  }

  function handleSave() {
    onSave({ ...item, name, category, price: parseFloat(price) });
    onClose();
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl mb-4">Editar produto</h2>
        <div className="mb-3">
          <label className="block mb-1">Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1">Categoria:</label>
         <select value={category}  onChange={(e) => setCategory(e.target.value)}>
             <option className='bg-[#14213d]'  value="">Selecionar categoria</option>
        <option className='bg-[#14213d]' value="Carnes">Carnes</option>
        <option className='bg-[#14213d]' value="Frutas">Frutas</option>
        <option className='bg-[#14213d]' value="Legumes">Legumes</option>
        <option className='bg-[#14213d]' value="Pães">Pães</option>
        <option className='bg-[#14213d]' value="Bebidas">Bebidas</option>
        <option className='bg-[#14213d]' value="Limpeza">Limpeza</option>
        <option className='bg-[#14213d]' value="Higiene">Higiene</option>
        <option className='bg-[#14213d]' value="Frios">Frios</option>
        <option className='bg-[#14213d]' value="Outros">Outros</option>
         </select>
        </div>
        <div className="mb-3">
          <label className="block mb-1">Preço:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
