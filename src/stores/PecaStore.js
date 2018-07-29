import { action, extendObservable } from 'mobx'
import fetchClient from '../utils/FetchClient'
import history from '../utils/history'
import Peca from '../models/Peca'
import FirebaseService from '../services/FirebaseService'

class PecaStore {
  constructor() {
    extendObservable(this, {
      peca: new Peca(),
      pecas: [],
      foto: {},
      fotoPreview: '',
      isLoaded: false,
      getPecas: action(() => {
        fetchClient.get('/pecas')
          .then(result => this.pecas = result)
      }),
      resetPeca: action(() => {
        this.peca = new Peca()
        this.foto = {}
        this.fotoPreview = ''
        this.isLoaded = true
      }),
      getPeca: action((id) => {
        fetchClient.get('/pecas/' + id)
          .then(result => this.peca = result)
      }),
      changePeca: action((name, value) => {
        this.peca[name] = value
      }),
      changeFoto: action(function(file) {
        this.foto = file
        this.fotoPreview = file.preview
      }),
      postPeca: action(() => {
        const modelo = this.peca.modelo.substring(this.peca.modelo.length - 5)
        const estampa = this.peca.estampa.substring(this.peca.estampa.length - 5)
        const name = modelo.concat(estampa).concat(this.foto.name)

        const nomeFoto = `pecas/${name}`
        this.peca.fileName = nomeFoto

        FirebaseService.putFoto(this.foto, this.peca.fileName, (downloadURL) => {
          if (downloadURL) this.peca.foto = downloadURL
          fetchClient.post('/pecas', this.peca)
            .then(result => history.goBack())
        })
      }),
      deletePeca: action((peca) => {
        FirebaseService.deleteFoto(peca.fileName, (code) => {
          fetchClient.delete('/pecas/' + peca._id)
            .then(result => this.pecas = result)
        })
      })
    })
  }
}

export default new PecaStore()
