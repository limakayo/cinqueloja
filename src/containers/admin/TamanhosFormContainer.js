import React, { Component } from 'react'
import Content from '../../components/layout/ContentAdmin'
import TamanhosCadastro from '../../components/admin/TamanhosCadastro'

import tamanhoStore from '../../stores/TamanhoStore'
import { observer } from 'mobx-react'

const TamanhosFormContainer = observer(class TamanhosFormContainer extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(name, event) {
    const value = event ? event.target.value : event
    tamanhoStore.changeTamanho(name, value)
  }

  handleSubmit() {
    tamanhoStore.postTamanho()
  }

  render() {
    return (
      <Content>
        <TamanhosCadastro
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}/>
      </Content>
    )
  }
})

export default TamanhosFormContainer
