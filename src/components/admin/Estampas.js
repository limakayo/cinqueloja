import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardBody,
  CardTitle, Button, Container, Row, Col } from 'reactstrap'
import { observer } from 'mobx-react'

const Estampas = observer(function Estampas(props) {
  const { estampas, handleDelete } = props

  return (
    <Container>
      <Row>
        <Col>
          <h1>Estampas</h1>
        </Col>
        <Col className="text-right buttonTop">
          <Button tag={Link} to="/admin/estampas/cadastrar" color="primary">Nova Estampa</Button>
        </Col>
      </Row>
      <hr/>
      <Row>
        {estampas && estampas.map((estampa) => (
          <Col sm="6" md="4" key={estampa._id} className="column">
            <Card>
              <CardImg top src={estampa.foto} alt={estampa.descricao} />
              <CardBody>
                <CardTitle>{estampa.descricao}</CardTitle>
                <Button onClick={() => handleDelete(estampa)} color="danger">Remover</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
})

export default Estampas
