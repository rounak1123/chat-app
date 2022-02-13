import { useState } from "react";
import { MoreVert } from "@material-ui/icons";
import { Menu,MenuItem} from '@material-ui/core';
import { GoogleLogout } from "react-google-login";
import { clientId } from "../../constants/data";
import { useContext } from "react";


import { AccountContext } from "../../context/AccountProvider";
import { makeStyles } from "@material-ui/styles";
import Drawer from '../drawer/InfoDrawer';
const useStyles = makeStyles({
menuItem:{
fontSize: 14,
padding: '15px 60px 0px 24px',
color: '#4A4A4A'
},

logout: {
    border: 'none !important',
    boxShadow: 'none !important'
}
});

const HeaderMenu = () => {

    const [open,setOpen] = useState(false);
    const [openDrawer,setOpenDrawer] = useState(false);
    const classes = useStyles();
    const {setAccount} = useContext(AccountContext);
    const handleClose= ()=>{
        setOpen(false);
    }
    const handleClick = (event) =>{
        // setOpen(true);
        setOpen(event.currentTarget)
        
    }
    const toggleDrawer = () =>{
      setOpenDrawer(true);
    }

    const onLogoutSuccess =()=>{
        alert('You have been Logged out Successfully.');
        console.clear();
        setAccount('');
    }

    const onLogoutFailure = ()=>{
        console.log("Logout Failed");
    }
  return (
    <>
      <MoreVert  onClick = {handleClick}/>
      <Menu
        id="basic-menu"
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={
           { vertical :'bottom', horizontal: 'center'}
        }
        transformOrigin={
            {
                vertical:'top',
                horizontal: 'right'
            }
        }
       
      >
        <MenuItem onClick={() =>{ handleClose(); toggleDrawer();}} className={classes.menuItem}>Profile</MenuItem>
        <MenuItem onClick={handleClose} className={classes.menuItem}>
            <GoogleLogout
            className={classes.logout}
            buttonText="Logout"
            isSignedIn={true}
            clientId={clientId}
            onLogoutSuccess={onLogoutSuccess}
            onLogoutFailure={onLogoutFailure}
            >

            </GoogleLogout>
        </MenuItem>
      </Menu>
      <Drawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  );
};
export default HeaderMenu;
