import React, { Component } from 'react'
import Content from '../../components/layout/ContentAdmin'
import Estampas from '../../components/admin/Estampas'

import estampaStore from '../../stores/EstampaStore'
import { observer } from 'mobx-react'

const EstampasContainer = observer(class EstampasContainer extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    estampaStore.getEstampas()
  }

  handleDelete(modelo) {
    estampaStore.deleteEstampa(modelo)
  }

  render() {
    return (
      <Content>
        <Estampas
          estampas={estampaStore.estampas}
          handleDelete={this.handleDelete}/>
      </Content>
    )
  }
})

export default EstampasContainer
