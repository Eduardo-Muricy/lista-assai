

const Resume = ({items}) => {

    const totalQuantity = items.reduce((acc, item)=> acc + item.quantity, 0)

     const totalPrice = items.reduce((acc, item)=> acc + item.price * item.quantity, 0)

  return (
    <div >
        <h2 className="text-2xl lg:text-xl">Total de itens: <span className="text-[#e63946]">{totalQuantity}</span></h2>
        <h2  className="text-2xl lg:text-xl">Volor total da compra: <span className="text-[#e63946]">{totalPrice}</span> </h2>
    </div>
  )
}

export default Resume