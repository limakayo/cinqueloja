import { extendObservable } from 'mobx'

class Peca {
  constructor() {
    extendObservable(this, {
      modelo: '',
      estampa: '',
      foto: '',
      fileName: '',
      valor: '',
    })
  }
}

export default Peca
