import React from 'react'
import { Route } from 'react-router-dom'

import Home from './containers/HomeContainer'
import Modelos from './containers/admin/ModelosContainer'
import ModelosForm from './containers/admin/ModelosFormContainer'
import Estampas from './containers/admin/EstampasContainer'
import EstampasForm from './containers/admin/EstampasFormContainer'
import Tamanhos from './containers/admin/TamanhosContainer'
import TamanhosForm from './containers/admin/TamanhosFormContainer'
import Pecas from './containers/admin/PecasContainer'
import PecasForm from './containers/admin/PecasFormContainer'
import Pedidos from './containers/PedidosContainer'

const Routes = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route exact path="/vestidos" component={Pedidos}/>
    <Route exact path="/admin/modelos" component={Modelos} />
    <Route exact path="/admin/modelos/cadastrar" component={ModelosForm}/>
    <Route exact path="/admin/estampas" component={Estampas}/>
    <Route exact path="/admin/estampas/cadastrar" component={EstampasForm}/>
    <Route exact path="/admin/tamanhos" component={Tamanhos}/>
    <Route exact path="/admin/tamanhos/cadastrar" component={TamanhosForm}/>
    <Route exact path="/admin/pecas" component={Pecas}/>
    <Route exact path="/admin/pecas/cadastrar" component={PecasForm}/>
  </div>
)

export default Routes
