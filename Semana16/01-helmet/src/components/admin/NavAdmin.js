import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
const NavAdmin = () => {
  return (
       <AppBar  color="secondary" position="" >
           <Toolbar>
                               
               <BusinessCenterIcon />
               <Typography>
                   AdminNav                
               </Typography>

           </Toolbar>                
       </AppBar>               
  )
};

export default NavAdmin;
