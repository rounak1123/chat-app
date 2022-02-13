import { Drawer, Box, Typography } from '@material-ui/core'
import { ArrowBack, CallMissedSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import Profile from './Profile';

const useStyles = makeStyles({

    header:{
        backgroundColor:"#00b5a5",
        display: 'flex',
        height: '85',
        color: '#fff',
        '& > *':{
            marginTop: 'auto',
            fontWeight: '600',
            padding : 15 
           
        }
    },
    component:{
       background: "#ededed",
       height: "85%",
       margin: '0px 0px 15px 0px'
    }
   

});
const InfoDrawer = ({open,setOpen}) => {
   const classes = useStyles();
    const handleClose = ()=>{
        setOpen(false);
    }

    return (
        <Drawer open = {open} onClose={handleClose}>
            <Box className = {classes.header}> 
                <ArrowBack onClick ={handleClose}/>
                <Typography>Profile</Typography>
            </Box>
            <Box className={classes.component}>
                <Profile/>
                </Box>
        </Drawer>
    )
}

export default InfoDrawer;