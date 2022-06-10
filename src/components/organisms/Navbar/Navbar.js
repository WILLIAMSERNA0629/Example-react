import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import './Navbar.css'


const Navbar = () =>{
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" className='navbar'>
        <Toolbar>
          <Link to='/' className='links'>Home</Link>
          <Link to='/store'className='links'>Store</Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Tienda
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;