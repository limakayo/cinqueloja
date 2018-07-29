import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap'
import { observer } from 'mobx-react'

const Pecas = observer(function Pecas(props) {
  const { pecas, handleDelete } = props

  return (
    <Container>
      <Row>
        <Col>
          <h1>Peças</h1>
        </Col>
        <Col className="text-right buttonTop">
          <Button tag={Link} to="/admin/pecas/cadastrar" color="primary">Nova Peça</Button>
        </Col>
      </Row>
      <hr/>
      <Row>
        {pecas && pecas.map((peca) => (
          <Col sm="6" md="4" key={peca._id} className="column">
            <Card>
              <CardImg top src={peca.foto} alt={peca.modelo && peca.modelo.descricao} />
              <CardBody>
                <CardTitle>Modelo {peca.modelo && peca.modelo.descricao}</CardTitle>
                <CardSubtitle>Estampa {peca.estampa && peca.estampa.descricao}</CardSubtitle>
                <CardText>R$ {peca.valor}</CardText>
                <Button onClick={() => handleDelete(peca)} color="danger">Remover</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
})

export default Pecas
