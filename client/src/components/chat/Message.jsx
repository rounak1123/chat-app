import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";



const useStyles = makeStyles({
    wrapper:{
        background: '#fff',
        padding: 5,
        maxWidth: '60%',
        display: 'flex',
        borderRadius: '10px',
        width: 'fit-content',
        wordBreak: 'break word'

    },
    own: {
        background: '#dcf8c6',
        padding: 5,
        maxWidth: '60%',
        display: 'flex',
        borderRadius: '10px',
        width: 'fit-content',
        wordBreak: 'break word',
        marginLeft: 'auto',

    },
    text: {
        fontSize: 14,
        padding:'0 25px'
    },
    time: {
        fontSize: 10,
        marginTop: 'auto',
        wordBreak: 'keep-all',
    }
    
})

const Message  = ({message}) =>{

    const classes = useStyles();
    const {account} = useContext(AccountContext);

    const formatDate = (data) =>{
    let hrs = new Date(data).getHours();
    let mins = new Date(data).getMinutes();
    hrs = hrs<10? '0'+hrs: hrs;
    mins = mins<10? '0'+mins: mins;
    return `${hrs}:${mins}`;
    };

    return (
    <Box className={account.googleId===message.sender? classes.own : classes.wrapper}>
       <Typography className={classes.text}>{message.text}</Typography> 
       <Typography className={classes.time}>{formatDate(message.createdAt)}</Typography>
    </Box>
    );
}
export default Message;