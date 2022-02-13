import { Box, makeStyles, Typography } from "@material-ui/core";
import { MoreVert, Search, SportsRugbySharp } from "@material-ui/icons";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";

const useStyles = makeStyles({
    header:{
       display:"flex",
       height: 35, 
       background : "#ededed",
       padding: '10px 16px',
       alignItems: 'center',
    },
    dp: {
        height: 37,
        width: 37,
        borderRadius: '50%',
    },
    name: {
        marginLeft : 10,
        
    },
    status: {
        fontSize: '12px',
        marginLeft: 10,
        color: 'rgba(0,0,0, 0.6)',
    },
    rightComponent: {
        marginLeft: 'auto',
        '& > *' : {
            padding: 8,
            fontSize : 22,
            color: '#919191'
        }
    }

});

const ChatHeader = () => {
    const {person} = useContext(UserContext);
    const {activeUsers} = useContext(AccountContext);
    const classes = useStyles();

    return (
        <Box className={classes.header}>
         <img src = {person?.imageUrl} alt = 'profile picture' className={classes.dp}/>
         <Box>
             <Typography className={classes.name}> {person?.name} </Typography>
             <Typography className={classes.status}> {
                 activeUsers?.find(user => user.userId===person.googleId) ? 'Online' : 'Offline'
             } </Typography>
         </Box>
         <Box className={classes.rightComponent}> 
             <Search/>
             <MoreVert/>
         </Box>
        </Box>
    )
}

export default ChatHeader;