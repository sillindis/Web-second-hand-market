import React , { useState } from 'react';
import "../css/HeadBar.css"

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {AppBar,Toolbar,IconButton,Typography} from '@mui/material';
import {AiOutlineMenu} from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal'

import Login from '../page/Login';

export default function Head() {
  const location = useLocation();
  const login=location.state;

  return (
    <div className="side-bar">
      <AppBar position="static" sx={{ height: '50px', bgcolor: "black" }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            blackmarket
          </Typography>

          <Grid container justifyContent="flex-end">
            <Button className="menu-sell" color="inherit" size="large">판매하기</Button>

            <Button className="menu-mypage" color="inherit" size="large">
              <Link to="/Mypage" style={{ textDecoration: 'none', color: 'white' }}>
                MyPage
              </Link>
            </Button>

            <Link to="/Login"  style={{ textDecoration: 'none', color: 'white' }}>
              <Button className="menu-login" color="inherit" size="large">
                { login==null ? <p>LOGIN</p> : <p>LOGOUT</p>}
              </Button>
            </Link>

          </Grid>
        </Toolbar>
      </AppBar>
    </div>
 );
}
