import { Box, Typography } from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';


const useStyles = makeStyles({
 imageContainer:{
  display: 'flex',
  justifyContent: 'center',
  padding: '18px 0',
 },
 displayPicture: {
     width:160,
     height:160,
     borderRadius:'50%',
 },
 nameContainer:{
     background: '#fff',
     padding:'12px 30px',
     boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
     '& :first-child':{
         fontSize:14,
         color: ' #009688'
     },
     '& :last-child':{
         margin: '14px 0px',
        color: ' #4a4a4a'
    }
 },
 description:{
     padding:'10px 20px 28px 30px',
     '& > *':{
         fontSize: 12,
         color: 'rgba(0,0,0,0.45)'
     }
 }
});
const Profile = () => {
 const classes = useStyles();
 const {account} = useContext(AccountContext)

  return (
      <> 
     <Box className ={classes.imageContainer}>
   <img src = {account.imageUrl} alt = 'profile Image' className={classes.displayPicture}/>
     </Box>
      <Box className = {classes.nameContainer}>
         <Typography>Your Name</Typography>
         <Typography>{account.name}</Typography>
     </Box>
      <Box className={classes.description}>
          <Typography>
           This is not username or pin. This name will be visible to your WhatsApp Contacts.
          </Typography>
         
         </Box> 
         <Box className = {classes.nameContainer}>
         <Typography>About</Typography>
         <Typography>No Status! Very busy :/</Typography>
     </Box>
      </>
  );
};

export default Profile;
