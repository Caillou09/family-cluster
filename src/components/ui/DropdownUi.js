import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import {Form, Dropdown} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {pxToRem, colors, media} from '../../themes/helpers'

import firebaseApp from '../../base'




const DropdownUi = ({
  label,
  multiple,
  placeholder,
  value,
  onChange}) => {

  const [dataExos, setDataExos] = useState('')


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



  return (
    <>
      <Form.Field>
        <label>{label}</label>
        <Dropdown
        selection
        fluid
        options={exosOptions}
        value = {value}
        label = {label}
        multiple = {multiple}
        placeholder = {placeholder}
        onChange={onChange}
        required
        >
        </Dropdown>
      </Form.Field>
    </>
  )
}

DropdownUi.propTypes = {
  label: PropTypes.string.isRequired,
  multiple: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default DropdownUi
