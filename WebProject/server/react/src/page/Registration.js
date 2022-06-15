import '../css/Registration.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Registration() {

  return (
    <div>
      <h1 className="TitleRe">등록한 물품</h1>
      <div className="item1">
        <Paper sx={{ p: 2,margin: 'auto',maxWidth: 700, flexGrow: 1,backgroundColor: (theme) =>  theme.palette.mode === 'dark'?'#1A2027':'#fff'}}>
        <Grid container spacing={2}>
          <Grid item>

          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  등록한 물건이 없어요....
                </Typography>

              </Grid>

            </Grid>

          </Grid>
        </Grid>
      </Paper>

      </div>

      <Button className="BackRe" size="large" variant="contained">
        <Link to="/Mypage" style={{ textDecoration: 'none', color: 'white' }}>
          뒤로가기
        </Link>
      </Button>
    </div>
  )
}
/*
<Paper sx={{ p: 2,margin: 'auto',maxWidth: 700, flexGrow: 1,backgroundColor: (theme) =>  theme.palette.mode === 'dark'?'#1A2027':'#fff'}}>
<Grid container spacing={2}>
  <Grid item>
    <ButtonBase sx={{ width: 128, height: 128 }}>
      <Img alt="complex" src="https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/044f/aa27bdf33109333a64eb8866bbcd23a547e56d4d68edc214c016908cf47d.jpg" />
    </ButtonBase>
  </Grid>
  <Grid item xs={12} sm container>
    <Grid item xs container direction="column" spacing={2}>
      <Grid item xs>
        <Typography gutterBottom variant="subtitle1" component="div">
          물건 팔아요~~
        </Typography>
        <Typography variant="body2" gutterBottom>
          ID: aa
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ cursor: 'pointer' }} variant="body2">
          Remove
        </Typography>
      </Grid>
    </Grid>
    <Grid item>
      <Typography variant="subtitle1" component="div">
        5,000원
      </Typography>
    </Grid>
  </Grid>
</Grid>
</Paper>
*/
