import { useEffect, useState } from 'react'


const EditModal = ({ isOpen, onSave, onClose, item }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');


  useEffect(() => {
    if (item) {
      setName(item.name);
      setCategory(item.category);
      setPrice(item.price);
    }

  }, [item])




  if (!isOpen) {
    return null; // Retorna null se o modal não está aberto
  }

  function handleSave() {
    onSave({ ...item, name, category, price: parseFloat(price) });
    onClose();
  }

  return (

    <div className=" flex justify-center items-center   ">
      <div className='fixed w-full h-full  bg-black opacity-90'>
        
      </div>
      <div className="bg-[#14213d] p-6 z-1 w-96">
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
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
            className="bg-[#e63946] text-white px-4 py-2 rounded"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
