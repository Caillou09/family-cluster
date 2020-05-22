import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Button, Form, Input, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Modal from 'react-modal'
import TitleSection from '../themes/TitleSection'
import {pxToRem, colors, media} from '../themes/helpers'
import firebaseApp from '../base'

Modal.setAppElement('#root')

const CreateExo = ({className, modalIsOpen, closeModal}) => {

  const [nomExo, setNomExo] = useState('')
  const inputGif = useRef(null)
  const [imageAsFile, setImageAsFile] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const uploadImage = firebaseApp.storage().ref(`${imageAsFile.name}`).put(imageAsFile)

  }

  const onButtonClick = () => {
    inputGif.current.click()
  }

  const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(image)
  }


  return (
    <div>
      <Modal
        className={className}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay : {
            backgroundColor: 'rgba(117, 120, 124, 0.8)'
          }
        }}>
      <Icon
        name='close'
        link
        onClick={closeModal}
        style={{
          position : 'absolute',
          top : '10px',
          right : '10px',
      }} ></Icon>
      <TitleSection>Création d'un Exo</TitleSection>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group widths = 'equal'>
          <Form.Field>
            <label>Nom de l'exo</label>
            <input
              required
              value = {nomExo}
              type="text"
              placeholder = 'Ex : Air fucking'
              onChange = {event => setNomExo(event.target.value)}/>
          </Form.Field>
          <Form.Field>
            <label>Chargez un Gif pour l'exo</label>
            <Button
              icon
              labelPosition='left'
              onClick={() => onButtonClick()}>
              Upload
              <Icon name='file'/>
            </Button>
            {imageAsFile !== '' &&
              <span>{imageAsFile.name}</span>
            }
            <input
              type="file"
              hidden
              ref={inputGif}
              onChange={handleImageAsFile}/>
          </Form.Field>
        </Form.Group>
        <div style={{display:'flex', justifyContent:'center', paddingTop:'50px'}}>
          <Button
            type = 'submit'
            size = 'big'>
            <Icon name='soccer' />
            Créer l'exo
          </Button>
        </div>
      </Form>
      </Modal>
    </div>
  );
};

export default styled(CreateExo)`
  width : 50%;
  background : ${colors.white};
  position: absolute;
  left: 50%;
  top : 25%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  padding : ${pxToRem(50)};
  border-radius : 4px;

`
