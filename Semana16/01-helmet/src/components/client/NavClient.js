import React, { Fragment } from "react";
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
const NavClient = () => {
  return (
     <Fragment>
         <AppBar  position="static"  color="primary" >
             <Toolbar>
               <HomeIcon /> 
               <Typography  variant="h6" >
                     ClientNav                    
               </Typography>  
               <Button  color="inherit"  >Acceder</Button>                 
             </Toolbar>       
         </AppBar>                 
     </Fragment>                 

  )
};

export default NavClient;
