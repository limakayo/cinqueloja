import { extendObservable } from 'mobx'

class Modelo {
  constructor() {
    extendObservable(this, {
      descricao: '',
      foto: '',
      fileName: ''
    })
  }
}

export default Modelo
