import { action, extendObservable } from 'mobx'
import fetchClient from '../utils/FetchClient'
import history from '../utils/history'

class PedidoStore {
  constructor() {
    extendObservable(this, {
      isLoaded: false,
      vestido: {},
      pedido: {},
      modelo: '',
      estampa: '',
      tamanho: '',
      changeVestido: action((name, value) => {
        this.vestido[name] = value._id
        this.pedido.vestido = this.vestido
        if (name === 'modelo')
          this.modelo = value.descricao
        if (name === 'estampa')
          this.estampa = value.descricao
      }),
      changePedido: action((name, value) => {
        this.pedido[name] = value._id

        if (name === 'tamanho')
          this.tamanho = value.idade
      })
    })
  }
}

export default new PedidoStore()
