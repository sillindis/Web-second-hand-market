import "../App.css"
import '../Login.css';

import React, { useState } from 'react';

import Signup from './SignUp';

import axios from 'axios'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import market from './blackmarket.png';
import { Navigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [idError, setIdError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const onChangeId = (e) => {
        setId(e.target.value);
        setIdError(false);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError(false);
    };

    const onLogIn = (e) => {
      e.preventDefault();

      if (!id) {
          return setIdError(true);
      }
      if (!password) {
          return setPasswordError(true);
      }

      axios.post("http://localhost:3001/Login", {
          Id: id,
          Passwrd: password
      })
      .then(response => console.log(response), navigate("./"))
      .catch(error => console.log(error.response))
    };

    const toMain_WO_LogIn = (e) => {
        navigate("/");
    }

  return (
    <div>
        <img src={market} className="logo" alt="market_logo" onClick={toMain_WO_LogIn}/>
        <h1 className="Title">로그인</h1>
        <TextField className="id" value={id} label="ID" required onChange={onChangeId}/>
        {idError && <div className ="warn_id" style={{color : 'black'}}> 아이디를 입력하세요 </div>}
        <TextField className="password" label="Password" value={password} type="password" required name="password"
        autoComplete="curreunt-password" onChange={onChangePassword}/>
        {passwordError && <div className="warn_pw" style={{color : 'black '}}> 비밀번호를 입력하세요 </div>} <br/><br/>
        <Signup/>
        <Button className="login" type="submit" variant="outlined" onClick={onLogIn}> 확인 </Button>
    </div>
  )
}
