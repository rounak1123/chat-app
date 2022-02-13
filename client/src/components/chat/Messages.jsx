import { Box, makeStyles } from "@material-ui/core";
import Message from "./Message";
import { useContext,useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AccountContext } from "../../context/AccountProvider"; 
import { UserContext } from "../../context/UserProvider"; 
import { newMessage , getMessages} from "../../service/api";
import Footer from './Footer';
const useStyles = makeStyles({
wrapper: {
    backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
    backgroundSize: '50%',

},
component: {
    height: '72vh'   ,
    overflowY: 'scroll',
},
container: {
    padding: '1px 80px',
}
});

const Messages = ({conversation}) => {
    
    const classes = useStyles();
    const [value, setValue] = useState();
    const [messages, setMessages] = useState([]);
    const [incomingMessage, setIncomingMessage] = useState(null);
    const {account, socket, newMessageFlag, setNewMessageFlag} = useContext(AccountContext);
    const {person} = useContext(UserContext);

    const recieverId = conversation?.members?.find(member => member!==account.googleId);

    const scrollRef = useRef();

    
    
    useEffect(() => {
        
        socket.current.on('getMessage', data => {
            console.log(data);
            setIncomingMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    }, []);


    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [messages]);

    useEffect(()=>{

    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
    setMessages(prev => [...prev, incomingMessage])
    setNewMessageFlag(prev => !prev);
    },[incomingMessage]);




     useEffect(()=>{
     const  getMessage = async () => {
    if(conversation){    
    const res =  await getMessages(conversation._id);
    setMessages(res.data);
    }
  
  };
    getMessage();
     },[conversation,person,newMessageFlag,incomingMessage]);


     const sendText = async (e) =>{
        const code = e.keyCode || e.which
       //   console.log(value);
       if(!value) return;
        if(code==13){
            let message = {
                sender : account.googleId,
                conversationId:conversation._id,
                text : value

            }

            socket.current.emit('sendMessage',{
                senderId: account.googleId,
                recieverId,
                text: value

            });
          const result =  await newMessage(message);
          setValue('');
           setNewMessageFlag(prev => !prev);
        }

    }



    return (
        <Box className={classes.wrapper}>
            <Box className={classes.component} >   {
               messages && messages.map((item) => {
                    return (<Box className={classes.container} ref={scrollRef}>
                       <Message message = {item}/>
                    </Box>);
                })
            }</Box>
         <Footer sendText = {sendText} setValue = {setValue} value = {value}/>
        </Box>
    )
}

export default Messages;