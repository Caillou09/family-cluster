import React, {useState} from 'react';
import styled from 'styled-components';
import {pxToRem, colors} from '../themes/helpers'
import {Button, Form, Input, Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import TitleSection from '../themes/TitleSection'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateWod = ({className}) => {

  const [startDate, setStartDate] = useState(new Date())

  const handleChange = date => {
    setStartDate(date)
  }

  return (
    <div className={className}>
    <TitleSection>Création d'un WOD</TitleSection>
      <Form>
      <Form.Field width={8}>
        <label>Date du WOD</label>
        <DatePicker
          selected={startDate}
          onChange={(event) => handleChange(event)}>
        </DatePicker>
      </Form.Field>
        <Grid columns={3}>
          <Grid.Column>
            <h4 style={{textAlign:'center'}}>Warm-up</h4>
            <Form.Group width = 'equal'>
              <Form.Field>
                <label>Temps par exercice</label>
                <input type="number" placeholder='nombre'/>
              </Form.Field>
              <Form.Field>
                <label>Nombre de tours</label>
                <input type="number" placeholder='nombre'/>
              </Form.Field>
            </Form.Group>
          </Grid.Column>
          <Grid.Column>
            <h4 style={{textAlign:'center'}}>WOD</h4>
            <Form.Group width = 'equal'>
              <Form.Field>
                <label>Temps par exercice</label>
                <input type="number" placeholder='nombre'/>
              </Form.Field>
              <Form.Field>
                <label>Nombre de tours</label>
                <input type="number" placeholder='nombre'/>
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field>
                <label>Récupération entre les tous</label>
                <input type="number" placeholder='nombre'/>
              </Form.Field>
              <Form.Field>
                <label>Récup entre les exos</label>
                <input type="number" placeholder='nombre'/>
              </Form.Field>
              </Form.Group>
          </Grid.Column>
          <Grid.Column>
            <h4 style={{textAlign:'center'}}>Challenge</h4>
            <Form.Field>
              <label>Nom du Challenge</label>
              <input type="text" placeholder='Ex : Pompes Jedi'/>
            </Form.Field>
          </Grid.Column>
        </Grid>
      </Form>

    </div>
  )
}

export default styled(CreateWod)`
  padding : ${pxToRem(100)};
`
