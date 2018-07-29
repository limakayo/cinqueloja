import React, { Component } from 'react'
import Content from '../../components/layout/ContentAdmin'
import Tamanhos from '../../components/admin/Tamanhos'

import tamanhoStore from '../../stores/TamanhoStore'
import { observer } from 'mobx-react'

const TamanhosContainer = observer(class TamanhosContainer extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    tamanhoStore.getTamanhos()
  }

  handleDelete(id) {
    tamanhoStore.deleteTamanho(id)
  }

  render() {
    return (
      <Content>
        <Tamanhos
          tamanhos={tamanhoStore.tamanhos}
          handleDelete={this.handleDelete}/>
      </Content>
    )
  }
})

export default TamanhosContainer
