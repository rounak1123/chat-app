import { Box } from "@material-ui/core"
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserProvider";
import AccountProvider, { AccountContext } from "../../context/AccountProvider";
import { getConversation } from "../../service/api";

//components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useState } from "react";


const Chat = () =>{
  
    const {person} = useContext(UserContext);
    const {account} = useContext(AccountContext);

    const [conversation, setConversation] = useState();

    useEffect(()=> {
       if(person) {
      const  getConversationDetails = async () => {
      const res =  await getConversation({senderId: account.googleId,recieverId: person.googleId });
      setConversation(res.conversation);
      console.log(conversation);
    }
    getConversationDetails();}

    },[person]);
    
    return(
    <Box>
     <ChatHeader/>
        <Messages conversation={conversation}/>
    </Box>
       
    )
}

export default Chat;