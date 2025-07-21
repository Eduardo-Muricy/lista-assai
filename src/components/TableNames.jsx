import React from 'react'

const TableNames = () => {
  return (
    <div className='flex py-2  gap-7 border-b-1' style={{borderColor: '#e63946'}}>


      <div className='flex ml-12 gap-17'>

        <h4 className='text-lg'>Produto</h4>


        <h4 className='text-lg' >Categoria</h4>
      </div>

      <div className='flex gap-13'>
        <h4 className='text-lg' >Preço</h4>
        <h4 className='text-lg'>Quant.</h4>
      </div>





    </div>
  )
}

export default TableNames