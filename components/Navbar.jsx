import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    
  const navigate = useNavigate();

  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{
    backgroundColor: "#171414",
    boxShadow: "none",
    borderBottom: "1px solid #f8f7f7"
  }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products
          </Typography>
          <Button color="inherit" style={{color:"white"}} onClick={() => navigate("/")}>Home</Button>
          <Badge badgeContent={4} color="error" onClick={() => navigate("/cart")}>
           <ShoppingCartIcon />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar