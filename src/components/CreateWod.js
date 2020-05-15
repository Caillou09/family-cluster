import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {pxToRem, colors, media} from '../themes/helpers'
import {Button, Form, Input, Grid, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import TitleSection from '../themes/TitleSection'
import DropdownUi from './ui/DropdownUi'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import firebaseApp from '../base'


const CreateWod = ({className}) => {

  const [dataExos, setDataExos] = useState('')

  const [startDate, setStartDate] = useState(new Date())
  const [tempsExoWu, setTempsExoWu] = useState('')
  const [nbreToursWu, setNbreToursWu] = useState('')
  const [tempsExoWod, setTempsExoWod] = useState([])
  const [nbreToursWod, setNbreToursWod] = useState('')
  const [recupTours, setRecupTours] = useState('')
  const [recupExos, setRecupExos] = useState('')
  const [nomChallenge, setNomChallenge] = useState('')
  const [exosWu, setExosWu] = useState([])
  const [exosWod, setExosWod] = useState([])

//récupération données Exos
  const exosOptions = []

  useEffect( () => {
      firebaseApp.database()
        .ref('Exos')
        .on('value', function(snapshot) {
          const state = snapshot.val();
          setDataExos(state)
        })
    }, []);

    Object.keys(dataExos).map( e => {
      const objExo = {key : e, value : e, text : e}
      exosOptions.push(objExo)
    });


  const handleChangeExosWu = (e, {value}) => {
   setExosWu(value)
  };

  const handleChangeExosWod = (e, {value}) => {
   setExosWod(value)
  };

  const handleChangeDate = date => {
    setStartDate(date)
  }

  const handleSubmit = e => {

    var exos = ''
    for ( const exo of exosWod) {
      exos = {exo : dataExos.exo}
    }

    console.log(exos)

    // firebaseApp.database().ref('WODS/').push({
    //   Principal : {
    //     Exos : {
    //       exosWod.map( exo => {
    //         exo : dataExos.exo
    //       })
    //     }
    //   }
    // }
    // )

  }


  return (
    <div className={className}>
    <TitleSection>Création d'un WOD</TitleSection>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Field>
          <label>Date du WOD</label>
          <DatePicker
            required
            selected={startDate}
            onChange={(event) => handleChangeDate(event)}>
          </DatePicker>
        </Form.Field>
        <Grid columns={3} stackable divided>
          <Grid.Column>
            <h4 >Warm-up</h4>
            <Form.Group width = 'equal'>
              <Form.Field>
                <label>Temps par exercice (en sec)</label>
                <input
                  required
                  value={tempsExoWu}
                  type="number"
                  placeholder='Ex : 30 secondes'
                  onChange={event => setTempsExoWu(event.target.value)}/>
              </Form.Field>
              <Form.Field>
                <label>Nombre de tours</label>
                <input
                  required
                  value={nbreToursWu}
                  type="number"
                  placeholder='Ex : 2 tours'
                  onChange={event => setNbreToursWu(event.target.value)}/>
              </Form.Field>
            </Form.Group>
            <DropdownUi
              label='Choisis les exos du Warmup'
              multiple = {true}
              placeholder = 'Ex : Pompes Statam'
              value={exosWu}
              onChange={(e, value) => handleChangeExosWu(e, value)}>
            </DropdownUi>
          </Grid.Column>
          <Grid.Column>
            <h4 >WOD</h4>
            <Form.Group width = 'equal'>
              <Form.Field>
                <label>Temps par exercice (en sec)</label>
                <input
                  required
                  value={tempsExoWod}
                  type="number"
                  placeholder='Ex : 60 secondes'
                  onChange={event => setTempsExoWod(event.target.value)}/>
              </Form.Field>
              <Form.Field>
                <label>Nombre de tours</label>
                <input
                  required
                  value={nbreToursWod}
                  type="number"
                  placeholder='Ex : 5 tous'
                  onChange={event => setNbreToursWod(event.target.value)}/>
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field>
                <label>Récup entre les tours (en sec)</label>
                <input
                  required
                  value={recupTours}
                  type="number"
                  placeholder='Ex : 15 secondes'
                  onChange={event => setRecupTours(event.target.value)}/>
              </Form.Field>
              <Form.Field>
                <label>Récup entre les exos (en sec)</label>
                <input
                  required
                  value={recupExos}
                  type="number"
                  placeholder='Ex : 15 secondes'
                  onChange={event => setRecupExos(event.target.value)}/>
              </Form.Field>
              </Form.Group>
              <DropdownUi
                label='Choisis les exos du Warmup'
                multiple = {true}
                placeholder = 'Ex : Pompes Statam'
                value={exosWod}
                onChange={(e, value) => handleChangeExosWod(e, value)}>
              </DropdownUi>
          </Grid.Column>
          <Grid.Column>
            <h4>Challenge</h4>
            <Form.Field>
              <label>Nom du Challenge</label>
              <input
                required
                value={nomChallenge}
                type="text"
                placeholder='Ex : Pompes Jedi'
                onChange={event => setNomChallenge(event.target.value)}/>
            </Form.Field>
          </Grid.Column>
        </Grid>
        <div style={{display:'flex', justifyContent:'center', paddingTop:'50px'}}>
          <Button
            type = 'submit'
            size = 'big'>
            <Icon name='soccer' />
            Créer le WOD
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default styled(CreateWod)`
  padding : ${pxToRem(20)};

  ${media.small`
    padding : ${pxToRem(100)};
    `};

`
