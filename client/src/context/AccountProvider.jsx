import { Children } from "react";
import { useEffect } from "react";
import { createContext, useState, useRef } from "react";
import { io } from 'socket.io-client';

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {

  
  const [account, setAccount] = useState();
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(null);

   useEffect(()=> {console.log(activeUsers)},[]);
   
  const socket = useRef();

  useEffect(()=>{
     
    socket.current = io('ws://localhost:9000');

  },[]);

  



  return (
    <AccountContext.Provider value={{ account, setAccount, socket, activeUsers, setActiveUsers, newMessageFlag, setNewMessageFlag}}>
      {children}
    </AccountContext.Provider>
  );
};
export default AccountProvider;
