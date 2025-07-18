import Dexie from "dexie";

const db = new Dexie("ListaDeComprasBD")


db.version(1).stores({
    itens: '++id, name, category, price, quantity, total, purchased'
})


export default db

