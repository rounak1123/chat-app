import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import Login from "./account/Login";

import React, { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatBox from "./ChatBox";

const useStyles = makeStyles({
  loginHeader: {
    height: 180,
    background: "#128c7e",
    boxShadow: "none",
  },
  header: {
    height: 70,
    background: "#128c7e",
    boxShadow: "none",
  },
  component:{
    height:"100vh",
    backgroundColor: '#dcdcdc'
  }
});

const Messenger = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  return (
    <Box className={classes.component}>
      <AppBar className={account ? classes.header : classes.loginHeader}>
        <Toolbar></Toolbar>
      </AppBar>
      {account ? <ChatBox /> : <Login />}
    </Box>
  );
};

export default Messenger;
