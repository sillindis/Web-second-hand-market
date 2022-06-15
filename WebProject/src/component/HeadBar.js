import * as React from "react";
import "../App.css"

import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import {AppBar,Toolbar,IconButton,Typography} from '@mui/material';
import {AiOutlineMenu} from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';

export default function Head() {

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
            <Button className="menu-mypage" color="inherit" size="large">MyPage</Button>
            <Button className="menu-login" color="inherit" size="large">
              <Link to="/Login" style={{ textDecoration: 'none', color: 'white' }}>
                Login
              </Link>
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
 );
}
