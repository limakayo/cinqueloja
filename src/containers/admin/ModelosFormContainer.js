import React, { Component } from 'react'
import Content from '../../components/layout/ContentAdmin'
import ModelosCadastro from '../../components/admin/ModelosCadastro'

import modeloStore from '../../stores/ModeloStore'
import { observer } from 'mobx-react'

const ModelosFormContainer = observer(class ModelosFormContainer extends Component {
  constructor() {
    super()
    modeloStore.resetModelo()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFoto   = this.handleFoto.bind(this)
  }

  handleChange(name, event) {
    const value = event ? event.target.value : event
    modeloStore.changeModelo(name, value)
  }

  handleFoto(acceptedFiles) {
    const file = acceptedFiles[0]
    modeloStore.changeFoto(file)
  }

  handleSubmit() {
    modeloStore.postModelo()
  }

  render() {
    return (
      <Content>
        <ModelosCadastro
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleFoto={this.handleFoto}
          fotoPreview={modeloStore.fotoPreview}/>
      </Content>
    )
  }
})

export default ModelosFormContainer
