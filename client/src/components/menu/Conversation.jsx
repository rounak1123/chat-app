import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";
import { getConversation, setConversation} from "../../service/api";

const useStyles = makeStyles({
  displayImage: {
   width: ' 50px',
   height: '50px',
   borderRadius: '50%',
   padding: '0 14px'
  },
  component: {
    display: "flex",
    height: '40',
    padding: '13px 0',
    cursor: 'pointer',
  },
  timestamp: {
    fontSize: 12,
    marginLeft: 'auto',
    marginRight: 20,
    color: '#00000099',
  },
  text: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 14,
  }
});

const Conversation = (props) => {
  const classes = useStyles();
  const url = props.data.imageUrl;
  const name = props.data.name;
  const {account, newMessageFlag} = useContext(AccountContext);
  const {setPerson} = useContext(UserContext);
  const [message, setMessage] = useState({});
  useEffect(()=>{
    const getConversationMessage = async () =>{
      const data = await getConversation({senderId: account.googleId,recieverId: props?.data?.googleId});
      console.log(data.conversation);
      if(data)
      setMessage({text:data.conversation.message, timestamp : data.conversation.updatedAt});
    };
    getConversationMessage();
   
  },[newMessageFlag]);

  const setUser = async () =>{
    const senderId = account.googleId ;
    const recieverId = props.data.googleId;
    await setConversation({senderId, recieverId});
    setPerson(props.data);
    console.log('conversation added successfully.');
  }

  const formatDate = (data) =>{
    let hrs = new Date(data).getHours();
    let mins = new Date(data).getMinutes();
    hrs = hrs<10? '0'+hrs: hrs;
    mins = mins<10? '0'+mins: mins;
    return `${hrs}:${mins}`;
    };

  return (
    <Box className={classes.component} onClick = {() => setUser()}>
      <Box>
        <img src={url} alt="Display Picture" className={classes.displayImage} referrerPolicy="no-referrer"/>
      </Box>

      <Box style = {{width: '100%'}}>
        <Box style ={{ display: 'flex'}}>
          <Typography>{name}</Typography>
          {
            message?.text &&
            <Typography className={classes.timestamp}>
              {formatDate(message.timestamp)}
            </Typography>
          }
        </Box>
        <Box>
          <Typography className={classes.text}>{message.text}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Conversation;
