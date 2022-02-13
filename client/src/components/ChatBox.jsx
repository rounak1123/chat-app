import { Dialog, Paper, withStyles, Box, makeStyles } from "@material-ui/core";
import { useContext } from "react";
// import { AccountContext } from "../context/AccountProvider";
import  {UserContext} from '../context/UserProvider';
import Chat from "./chat/Chat";
import EmptyChat from "./chat/EmptyChat";
import Menu from "./menu/Menu";

const Style = {
  dialogPaper: {
    height: "520px",
    width: "85%",
    marginTop: "40px",
    boxShadow: "none",
    borderRadius: "0",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    marginBottom: "20px",
  },
};
const useStyles = makeStyles({
  component: {
    display: "flex",
    width: '100%'
  },
  leftComponent: {
    minWidth: 380,
    height: "12%",

    background: "#ededed",
  },
  rightComponent: {
    borderLeft:"1px solid rgba(0,0,0,0.14)",
    height: "100%",
    width: '70%',
    minWidth: '300px',
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    height: 40,
    background: "#3264ff",
  },
});

const ChatBox = ({ classes }) => {

  const {person} = useContext(UserContext);


  const classname = useStyles();
  return (
    <Dialog open={true} classes={{ paper: classes.dialogPaper }} BackdropProps={{style : {backgroundColor: 'unset'}}}>
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Menu />
        </Box>
        <Box className={classname.rightComponent}>{
          person?
          <Chat/>: <EmptyChat/>

          }</Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(Style)(ChatBox);
