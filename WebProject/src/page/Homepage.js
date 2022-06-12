import * as React from 'react';

import { Link } from 'react-router-dom';

import "../App.css"
import Login from './Login'

import SearchBar from '../component/SearchBar'
import SelectVariants from '../component/SelectVariants'
import Pagination from '../component/Pagination'
import ItemList from '../component/ItemList'
import HeadBar from '../component/HeadBar'
import market from './blackmarket.png';

import Button from '@mui/material/Button';
import {AppBar,Toolbar,IconButton,Typography} from '@mui/material';
import {AiOutlineMenu} from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import {ImageList,ImageListItem,ImageListItemBar} from '@mui/material';

const Homepage = () => {
  return (
    <div>
      <HeadBar />
      <img className="mainlogo" alt='logo' src={market}/>
      <SearchBar />
      <SelectVariants />
      <ItemList />
      <Pagination />
    </div>
  );
};
export default Homepage;
