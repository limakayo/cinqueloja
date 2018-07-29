import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardBody,
  CardTitle, Button, Container, Row, Col } from 'reactstrap'
import { observer } from 'mobx-react'

const Modelos = observer(function Modelos(props) {
  const { modelos, handleDelete } = props

  return (
    <Container>
      <Row>
        <Col>
          <h1>Modelos</h1>
        </Col>
        <Col className="text-right buttonTop">
          <Button tag={Link} to="/admin/modelos/cadastrar" color="primary">Novo Modelo</Button>
        </Col>
      </Row>
      <hr/>
      <Row>
        {modelos && modelos.map((modelo) => (
          <Col sm="6" md="4" key={modelo._id} className="column">
            <Card>
              <CardImg top src={modelo.foto} alt={modelo.descricao} />
              <CardBody>
                <CardTitle>{modelo.descricao}</CardTitle>
                <Button onClick={() => handleDelete(modelo)} color="danger">Remover</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
})

export default Modelos
