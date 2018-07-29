import React, { Component } from 'react'
import Content from '../../components/layout/ContentAdmin'
import Modelos from '../../components/admin/Modelos'

import modeloStore from '../../stores/ModeloStore'
import { observer } from 'mobx-react'

const ModelosContainer = observer(class ModelosContainer extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    modeloStore.getModelos()
  }

  handleDelete(modelo) {
    modeloStore.deleteModelo(modelo)
  }

  render() {
    return (
      <Content>
        <Modelos
          modelos={modeloStore.modelos}
          handleDelete={this.handleDelete}/>
      </Content>
    )
  }
})

export default ModelosContainer
