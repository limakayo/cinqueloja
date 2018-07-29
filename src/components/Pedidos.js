import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap'

import { observer } from 'mobx-react'

const Pedidos = observer(function Pedidos(props) {
  const {
    pedido,
    modelo,
    estampa,
    tamanho,
    modelos,
    estampas,
    tamanhos,
    peca,
    vestido,
    handleClick,
  } = props

  return (
    <Container>
      <Row className="vestidos-title">
        <Col>
          <h2>Personalize seu vestido</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          <Row className="vestidos-title">
            <Col>
              <h5>Modelo</h5>
            </Col>
          </Row>
          <Row>
            {modelos && modelos.map((modelo) => {
              const active = vestido.modelo === modelo._id ? 'card-active' : ''
              const classes = `${active} card-vestidos`

              return (
                <Col xs="3" key={modelo.descricao}>
                  <Card
                    onClick={handleClick.bind(this, "modelo", modelo)}
                    className={classes}>
                    <CardImg top width="100%" src={modelo.foto} alt={modelo.descricao} />
                    <CardBody>
                      <CardSubtitle>{modelo.descricao}</CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              )
            })}
          </Row>
          <hr/>
          <Row className="vestidos-title">
            <Col>
              <h5>Estampa</h5>
            </Col>
          </Row>
          <Row>
            {estampas && estampas.map((estampa) => {
              const active = vestido.estampa === estampa._id ? 'card-active' : ''
              const classes = `${active} card-vestidos`

              return (
                <Col xs="3" key={estampa.descricao}>
                  <Card onClick={handleClick.bind(this, "estampa", estampa)} className={classes}>
                    <CardImg top width="100%" src={estampa.foto} alt={estampa.descricao} />
                    <CardBody>
                      <CardSubtitle>{estampa.descricao}</CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              )
            })}
          </Row>
          <hr/>
          <Row className="vestidos-title">
            <Col>
              <h5>Tamanho</h5>
            </Col>
          </Row>
          <Row>
            {tamanhos && tamanhos.map((tamanho) => {
              const active = pedido.tamanho === tamanho._id ? 'card-active' : ''
              const classes = `${active} card-vestidos`

              return (
                <Col xs="3" key={tamanho.idade}>
                  <Card onClick={handleClick.bind(this, "tamanho", tamanho)} className={classes}>
                    <CardBody className="text-center">
                      <CardSubtitle>{tamanho.idade}</CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Col>
        <Col xs={3}>
          <Row className="sticky-top" style={{ top: 16 }}>
            <Card body>
              <CardTitle>Resumo</CardTitle>
              <hr/>
              {tamanho !== '' ? <CardText><strong>Tamanho:</strong> {tamanho}</CardText> : null}
              {peca && peca.valor ? (
                <CardText>
                  <strike>R$ 119,90</strike> por <strong>R$ {peca.valor}</strong>
                </CardText>
              ) : null}
              <CardText><strong>Prazo de confeccção:</strong> 30 dias</CardText>
              <Button>Continuar</Button>
            </Card>
            <input
              className="form-control"
              type="text"
              placeholder="Consulte o prazo de entrega"
              style={{ marginTop: '1em' }}/>
          </Row>


        </Col>
      </Row>
    </Container>
  )
})

export default Pedidos
