import React from 'react'
import {
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import { observer } from 'mobx-react'

const TamanhosCadastro = observer(function TamanhosCadastro(props) {
  const { handleChange, handleSubmit } = props

  return (
    <Container>
      <Row>
        <h1>Cadastro de Tamanhos</h1>
      </Row>
      <Row>
        <Form>
          <FormGroup>
            <Label for="idade">Idade</Label>
            <Input
              name="idade"
              id="idade"
              onChange={handleChange.bind(this, "idade")}/>
          </FormGroup>
          <Button onClick={handleSubmit}>Cadastrar</Button>
        </Form>
      </Row>
    </Container>
  )
})

export default TamanhosCadastro
