import React, { useState } from "react";
import Option from "@material-ui/icons/MoreVertTwoTone";
import Chat from "@material-ui/icons/Chat";
import { makeStyles, Box } from "@material-ui/core";
import { useContext } from "react";

import { AccountContext } from "../../context/AccountProvider";

//Components
import HeaderMenu from "./HeaderMenu";
import Drawer from '../drawer/InfoDrawer';

const useStyles = makeStyles({

  header: {
 
    height: 35,
    background: "#d8d8d8",
    padding: '10px 16px',
    display:'flex',
  },
  avatar:{
    height:37,
    width:37,
    borderRadius:'50%',
  },
  icons:{
    marginLeft : 'auto',
    '& > *' :{
      marginLeft: 2,
      padding: 8,
      color: '#919191',
    },
    '& :first-child' :{
     fontSize: 22,
     marginRight: '8px',
     marginTop: '2px'
    }

  }
});

const Header = () => {
  const classname = useStyles();
  const {account} = useContext(AccountContext);
  const [open,setOpen] = useState(false);

  const toggleDrawer = () =>{
  setOpen(true);
  }
  return (
    <>
      <Box className={classname.header}>

        <img src = {account.imageUrl} onClick={()=>toggleDrawer()} alt = 'profile picture' className={classname.avatar} referrerPolicy="no-referrer"/>
        <Box className={classname.icons}>   

        <Chat/>
        <HeaderMenu/>
      </Box>
   
      </Box>
      <Drawer open={open} setOpen={setOpen}/>
    </>
  );
};

export default Header;
