import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, Button, Container, Row, Col } from 'reactstrap'
import { observer } from 'mobx-react'

const Tamanhos = observer(function Tamanhos(props) {
  const { tamanhos, handleDelete } = props

  return (
    <Container>
      <Row>
        <Col>
          <h1>Tamanhos</h1>
        </Col>
        <Col className="text-right buttonTop">
          <Button tag={Link} to="/admin/tamanhos/cadastrar" color="primary">Novo Tamanho</Button>
        </Col>
      </Row>
      <hr/>
      <Row>
        {tamanhos && tamanhos.map((tamanho) => (
          <Col sm="6" md="4" key={tamanho._id} className="column">
            <Card>
              <CardBody>
                <CardTitle>{tamanho.idade}</CardTitle>
                <Button onClick={() => handleDelete(tamanho._id)} color="danger">Remover</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
})

export default Tamanhos
