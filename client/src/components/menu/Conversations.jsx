import { Box, makeStyles } from "@material-ui/core";
import React,{ useContext, useEffect } from "react";
import { useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { getUser } from "../../service/api";

//components
import Conversation from "./Conversation";


const useStyles = makeStyles({
component: {
    height: '72vh',
    overflow: 'overlay',
}
});

const Conversations = ({text}) =>{

    const [users, setUsers] = useState([]);
    const {account, socket, setActiveUsers, activeUsers} = useContext(AccountContext);
    const id = account.googleId;
    const classes = useStyles();


    useEffect(async() => {
     const res = await getUser();
     const usersArr = res.data.data;
    const filteredData = usersArr.filter((item) =>item.name.toLowerCase().includes(text.toLowerCase()));
     setUsers(filteredData);
    }, [text]);

    useEffect(()=>{
       console.log('inside conversations.jsx line 34');
        socket.current.emit('addUser', account.googleId);
        socket.current.on( 'getUsers', data => {
            // console.log(data);
            setActiveUsers(data);
        })
        console.log(activeUsers);
        
    },[account]);




    return (<Box className={classes.component}>{
        users.map((item)=>{
            if(item.googleId!=id){
                return <Conversation data = {item}/>;
            }
        
        })
    }</Box>);

}

export default Conversations;