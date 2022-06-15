import '../css/Mypage.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export default function Login() {

  return (
    <div>
      <h1 className="TitleMypage">Mypage</h1>
      <h2 className="ID">ID: a</h2>
      <IconButton className="Registration_Icon" style={{ color: 'black' }} component={Link} to="/Mypage/Registration">
        <AddCircleIcon sx={{ fontSize: 70 }}/>
      </IconButton>
      <h3 className="Registration">등록한 물품</h3>
      <IconButton className="Deal_Icon" style={{ color: 'black' }}>
        <HandshakeIcon sx={{ fontSize: 70 }}/>
      </IconButton>
      <h3 className="Deal">거래 제안 물품</h3>
      <IconButton className="Wish_Icon" style={{ color: 'black' }}>
        <AddShoppingCartIcon sx={{ fontSize: 70 }}/>
      </IconButton>
      <h3 className="Wish">찜한 물품</h3>
      <Button className="Request" color="inherit" size="large" variant="outlined">나의 문의사항</Button>
      <Button className="Change" color="inherit" size="large" variant="outlined">희망거래지역변경</Button>
      <Button className="Secession" color="error" size="large" variant="contained">회원탈퇴</Button>
      <Button className="BackMypage" size="large" variant="contained">
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        뒤로가기
      </Link>
      </Button>
    </div>
  )
}
