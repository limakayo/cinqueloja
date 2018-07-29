import React, { Component } from 'react'
import Content from '../../components/layout/ContentAdmin'
import EstampasCadastro from '../../components/admin/EstampasCadastro'

import estampaStore from '../../stores/EstampaStore'
import { observer } from 'mobx-react'

const EstampasFormContainer = observer(class EstampasFormContainer extends Component {
  constructor() {
    super()
    estampaStore.resetEstampa()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFoto = this.handleFoto.bind(this)
  }

  handleChange(name, event) {
    const value = event ? event.target.value : event
    estampaStore.changeEstampa(name, value)
  }

  handleFoto(acceptedFiles) {
    const file = acceptedFiles[0]
    estampaStore.changeFoto(file)
  }

  handleSubmit() {
    estampaStore.postEstampa()
  }

  render() {
    return (
      <Content>
        <EstampasCadastro
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleFoto={this.handleFoto}
          fotoPreview={estampaStore.fotoPreview}/>
      </Content>
    )
  }
})

export default EstampasFormContainer
