import React, {useState, useEffect, useContext} from 'react'
import GlobalStyle from '../themes/GlobalStyle'
import {useHistory} from 'react-router-dom'

import styled from 'styled-components'
import {colors, pxToRem, media} from '../themes/helpers'

import firebaseApp from '../base'

const Connexion = ({className}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  const history = useHistory();




  const signInWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
      try {
        await firebaseApp.auth().signInWithEmailAndPassword(email, password)
        history.push('/')

    } catch (error){
      setError("Error signing in with password and email!");
      alert(error);
    }

  };

  const onChangeHandler = (event) => {
            const {name, value} = event.currentTarget;

            if(name === 'userEmail') {
                setEmail(value);
            }
            else if(name === 'userPassword'){
              setPassword(value);
            }
        };

  return (
    <>
      <form
        className={className}
        onSubmit={(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
        <input
          placeholder='email'
          type="text"
          name = 'userEmail'
          onChange = {(event) => onChangeHandler(event)}
          required/>
        <input
          placeholder='mot de passe'
          type="password"
          name = 'userPassword'
          onChange = {(event) => onChangeHandler(event)}
          required/>

          <button
            type='submit'>
              Connexion
          </button>
      </form>
    </>
  )
}

export default styled(Connexion)`
  display : flex;
  flex-direction : column;
  max-width : ${pxToRem(400)};
  margin : ${pxToRem(20)};
  margin-top : ${pxToRem(50)};
  padding : ${pxToRem(20)};
  border : 2px solid ${colors.primary};
  height : ${pxToRem(250)};
  justify-content : space-around;
  border-radius:  4px;
  box-shadow:  0px 2px 6px -1px rgba(0,0,0,.12);
  text-align : center;

  ${media.small`
    margin : ${pxToRem(50)} auto;
    `};

  input{
    font-size:  16px;
    padding:  20px 0px;
    height:  56px;
    border:  none;
    border-bottom:  solid 1px rgba(0,0,0,.1);
    background:  #fff;
    width:  auto;
    box-sizing:  border-box;
    color : ${colors.primary};

    &:focus{
      border-bottom:  solid 1px ${colors.primary};
      outline: 0;
    }
  }



  button {
    color : ${colors.white};
    background : ${colors.primary};
    padding : ${pxToRem(10)};
    border : 2px solid ${colors.white};
    font-weight : 700;
    border-radius : 4px;
    cursor : pointer;
    margin : ${pxToRem(5)} auto;

    &:hover{
      background : ${colors.white};
      color : ${colors.primary};
      border : 2px solid ${colors.primary};
    }
  }
`
