import { action, extendObservable } from 'mobx'
import fetchClient from '../utils/FetchClient'
import history from '../utils/history'
import Tamanho from '../models/Tamanho'

class TamanhoStore {
  constructor() {
    extendObservable(this, {
      tamanho: new Tamanho(),
      tamanhos: [],
      isLoaded: false,
      getTamanhos: action(() => {
        fetchClient.get('/tamanhos')
          .then(result => this.tamanhos = result)
      }),
      resetTamanho: action(() => {
        this.tamanho = new Tamanho()
        this.isLoaded = true
      }),
      getTamanho: action((id) => {
        fetchClient.get('/tamanhos/' + id)
          .then(result => this.tamanho = result)
      }),
      changeTamanho: action((name, value) => {
        this.tamanho[name] = value
      }),
      postTamanho: action(() => {
        fetchClient.post('/tamanhos', this.tamanho)
          .then(result => history.goBack())
      }),
      deleteTamanho: action((id) => {
        fetchClient.delete('/tamanhos/' + id)
          .then(result => this.tamanhos = result)
      })
    })
  }
}

export default new TamanhoStore()
