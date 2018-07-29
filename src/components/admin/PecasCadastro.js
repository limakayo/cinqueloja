import React from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import Dropzone from 'react-dropzone'

import { observer } from 'mobx-react'

const PecasCadastro = observer(function PecasCadastro(props) {
  const {
    modelos,
    estampas,
    handleChange,
    handleSubmit,
    handleFoto,
    fotoPreview
  } = props

  return (
    <Container>
      <Row>
        <Col>
          <h1>Cadastro de Peças</h1>
          <hr/>
        </Col>
      </Row>
      <Form>
        <Row>
          <Col xs="12" md="4">
            <FormGroup>
              <Label for="modelo">Modelo</Label>
              <Input
                type="select"
                name="modelo"
                id="modelo"
                onChange={handleChange.bind(this, "modelo")}>
                <option value="">Selecione</option>
                {modelos && modelos.map((modelo) => (
                  <option value={modelo._id} key={modelo._id}>{modelo.descricao}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col xs="12" md="4">
            <FormGroup>
              <Label for="estampa">Estampa</Label>
              <Input
                type="select"
                name="estampa"
                id="estampa"
                onChange={handleChange.bind(this, "estampa")}>
                <option value="">Selecione</option>
                {estampas && estampas.map((estampa) => (
                  <option value={estampa._id} key={estampa._id}>{estampa.descricao}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col xs="12" md="4">
            <FormGroup>
              <Label for="foto">Foto</Label>
              <Dropzone accept="image/jpeg, image/png" onDrop={handleFoto}>
                {fotoPreview ? (
                  <img src={fotoPreview} alt="" style={{ width: '100%'}}/>
                ) : (
                  <div className="dropText">Clique para escolher ou arraste uma imagem</div>
                )}
              </Dropzone>
            </FormGroup>
          </Col>
          <Col xs="12" md="4">
            <FormGroup>
              <Label for="valor">Valor</Label>
              <Input
                name="valor"
                id="valor"
                onChange={handleChange.bind(this, "valor")}/>
            </FormGroup>
          </Col>
          <Col xs="12">
            <hr/>
            <Button onClick={handleSubmit} color="primary">Cadastrar</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
})

export default PecasCadastro
