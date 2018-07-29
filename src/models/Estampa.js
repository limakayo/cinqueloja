import { extendObservable } from 'mobx'

class Estampa {
  constructor() {
    extendObservable(this, {
      descricao: '',
      foto: '',
      fileName: ''
    })
  }
}

export default Estampa
