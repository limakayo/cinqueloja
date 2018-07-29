import React, { Component } from 'react'
import Content from '../../components/layout/ContentAdmin'
import PecasCadastro from '../../components/admin/PecasCadastro'

import modeloStore from '../../stores/ModeloStore'
import estampaStore from '../../stores/EstampaStore'
import pecaStore from '../../stores/PecaStore'

import { observer } from 'mobx-react'

const PecasFormContainer = observer(class PecasFormContainer extends Component {
  constructor() {
    super()
    pecaStore.resetPeca()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFoto = this.handleFoto.bind(this)
  }

  componentDidMount() {
    modeloStore.getModelos()
    estampaStore.getEstampas()
  }

  handleChange(name, event) {
    const value = event ? event.target.value : event
    pecaStore.changePeca(name, value)
  }

  handleFoto(acceptedFiles) {
    const file = acceptedFiles[0]
    pecaStore.changeFoto(file)
  }

  handleSubmit() {
    pecaStore.postPeca()
  }

  render() {
    return (
      <Content>
        <PecasCadastro
          modelos={modeloStore.modelos}
          estampas={estampaStore.estampas}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleFoto={this.handleFoto}
          fotoPreview={pecaStore.fotoPreview}/>
      </Content>
    )
  }
})

export default PecasFormContainer
