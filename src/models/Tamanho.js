import { extendObservable } from 'mobx'

class Tamanho {
  constructor() {
    extendObservable(this, {
      idade: ''
    })
  }
}

export default Tamanho
