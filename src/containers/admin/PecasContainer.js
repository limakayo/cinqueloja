import React, { Component } from 'react'
import Content from '../../components/layout/ContentAdmin'
import Pecas from '../../components/admin/Pecas'

import pecaStore from '../../stores/PecaStore'
import { observer } from 'mobx-react'

const PecasContainer = observer(class PecasContainer extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    pecaStore.getPecas()
  }

  handleDelete(peca) {
    pecaStore.deletePeca(peca)
  }

  render() {
    return (
      <Content>
        <Pecas
          pecas={pecaStore.pecas}
          handleDelete={this.handleDelete}/>
      </Content>
    )
  }
})

export default PecasContainer
