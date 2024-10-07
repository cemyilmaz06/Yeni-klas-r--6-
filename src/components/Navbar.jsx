import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
   
      <Toolbar disableGutters sx={{justifyContent:"space-between",margin:"10px"}}>
     
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            marginLeft:"20px"
          }}
        >
         <Link style={{textDecoration:"none",color:"white"}} to="/">HOME</Link> 
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <Link style={{textDecoration:"none",color:"white"}} to="/">LOGIN</Link> 
        </Typography>
        

       
       
      </Toolbar>
 
  </AppBar>
);
}
  


export default Navbar