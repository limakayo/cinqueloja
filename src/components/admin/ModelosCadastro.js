import React from 'react'
import {
  Container,
  Row,
  Form,
  Col,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import Dropzone from 'react-dropzone'
import { observer } from 'mobx-react'

const ModelosCadastro = observer(function ModelosCadastro(props) {
  const { handleChange, handleSubmit, handleFoto, fotoPreview } = props

  return (
    <Container>
      <Row>
        <Col>
          <h1>Cadastro de Modelos</h1>
          <hr/>
        </Col>
      </Row>
      <Form>
        <Row>
          <Col xs="12" md="4">
            <FormGroup>
              <Label for="descricao">Descrição</Label>
              <Input
                name="descricao"
                id="descricao"
                onChange={handleChange.bind(this, "descricao")}/>
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
          <Col xs="12">
            <hr/>
            <Button onClick={handleSubmit} color="primary">Cadastrar</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
})

export default ModelosCadastro
