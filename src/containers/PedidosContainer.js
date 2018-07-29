import React, { Component } from 'react'
import Content from '../components/layout/Content'
import Pedidos from '../components/Pedidos'

import { observer } from 'mobx-react'

import modeloStore from '../stores/ModeloStore'
import estampaStore from '../stores/EstampaStore'
import tamanhoStore from '../stores/TamanhoStore'
import pecaStore from '../stores/PecaStore'
import pedidoStore from '../stores/PedidoStore'

const PedidosContainer = observer(class PedidosContainer extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    modeloStore.getModelos()
    estampaStore.getEstampas()
    tamanhoStore.getTamanhos()
    pecaStore.getPecas()
  }

  handleClick(name, value, event) {
    if (name === 'modelo' || name === 'estampa') {
      pedidoStore.changeVestido(name, value)
    }
    if (name === 'tamanho') {
      pedidoStore.changePedido(name, value)
    }
  }

  render() {
    return (
      <Content>
        <Pedidos
          pedido={pedidoStore.pedido}
          modelo={pedidoStore.modelo}
          estampa={pedidoStore.estampa}
          tamanho={pedidoStore.tamanho}
          modelos={modeloStore.modelos}
          estampas={estampaStore.estampas}
          tamanhos={tamanhoStore.tamanhos}
          vestido={pedidoStore.vestido}
          handleClick={this.handleClick}/>
      </Content>
    )
  }
})

export default PedidosContainer
