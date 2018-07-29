import { action, extendObservable } from 'mobx'
import fetchClient from '../utils/FetchClient'
import history from '../utils/history'
import Estampa from '../models/Estampa'

import FirebaseService from '../services/FirebaseService'

class EstampaStore {
  constructor() {
    extendObservable(this, {
      estampa: new Estampa(),
      estampas: [],
      foto: {},
      fotoPreview: '',
      isLoaded: false,
      getEstampas: action(() => {
        fetchClient.get('/estampas')
          .then(result => this.estampas = result)
      }),
      resetEstampa: action(() => {
        this.estampa = new Estampa()
        this.foto = {}
        this.fotoPreview = ''
        this.isLoaded = true
      }),
      getEstampa: action((id) => {
        fetchClient.get('/estampas/' + id)
          .then(result => this.estampa = result)
      }),
      changeEstampa: action((name, value) => {
        this.estampa[name] = value
      }),
      changeFoto: action(function(file) {
        this.foto = file
        this.fotoPreview = file.preview
      }),
      postEstampa: action(() => {
        const name = this.estampa.descricao.concat(this.foto.name)
        const nomeFoto = `estampas/${name}`

        this.estampa.fileName = nomeFoto

        FirebaseService.putFoto(this.foto, this.estampa.fileName, (downloadURL) => {
          if (downloadURL) this.estampa.foto = downloadURL
          fetchClient.post('/estampas', this.estampa)
            .then(result => history.goBack())
        })
      }),
      deleteEstampa: action((estampa) => {
        FirebaseService.deleteFoto(estampa.fileName, (code) => {
          fetchClient.delete('/estampas/' + estampa._id)
            .then(result => this.estampas = result)
        })
      })
    })
  }
}

export default new EstampaStore()
