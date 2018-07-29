import { action, extendObservable } from 'mobx'
import fetchClient from '../utils/FetchClient'
import history from '../utils/history'
import Modelo from '../models/Modelo'

import FirebaseService from '../services/FirebaseService'

class ModeloStore {
  constructor() {
    extendObservable(this, {
      modelo: new Modelo(),
      modelos: [],
      foto: {},
      fotoPreview: '',
      isLoaded: false,
      getModelos: action(() => {
        fetchClient.get('/modelos')
          .then(result => this.modelos = result)
      }),
      resetModelo: action(() => {
        this.modelo = new Modelo()
        this.fotoPreview = ''
        this.foto = {}
        this.isLoaded = true
      }),
      getModelo: action((id) => {
        fetchClient.get('/modelos/' + id)
          .then(result => this.modelo = result)
      }),
      changeModelo: action((name, value) => {
        this.modelo[name] = value
      }),
      changeFoto: action(function(file) {
        this.foto = file
        this.fotoPreview = file.preview
      }),
      postModelo: action(() => {
        const name = this.modelo.descricao.concat(this.foto.name)
        const nomeFoto = `modelos/${name}`

        this.modelo.fileName = nomeFoto

        FirebaseService.putFoto(this.foto, this.modelo.fileName, (downloadURL) => {
          if (downloadURL) this.modelo.foto = downloadURL
          fetchClient.post('/modelos', this.modelo)
            .then(result => history.goBack())
        })
      }),
      deleteModelo: action((modelo) => {
        FirebaseService.deleteFoto(modelo.fileName, (code) => {
          fetchClient.delete('/modelos/' + modelo._id)
            .then(result => this.modelos = result)
        })
      })
    })
  }
}

export default new ModeloStore()
