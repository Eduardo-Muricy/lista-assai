import React from 'react'

const Resume = ({items}) => {

    const totalQuantity = items.reduce((acc, item)=> acc + item.quantity, 0)

     const totalPrice = items.reduce((acc, item)=> acc + item.price * item.quantity, 0)

  return (
    <div>
        <h2>Total de itens: {totalQuantity}</h2>
        <h2>Volor total da compra: {totalPrice}</h2>
    </div>
  )
}

export default Resume