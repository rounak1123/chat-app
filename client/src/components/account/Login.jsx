import {
  Dialog,
  Paper,
  withStyles,
  Box,
  Typography,
  makeStyles,
  ListItem,
  List,
} from "@material-ui/core";
import { clientId } from "../../constants/data";
import { width } from "@material-ui/system";

import { useContext } from "react";

import { GoogleLogin } from "react-google-login";

//component
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    padding: "56px 0px 56px 56px",
  },
  qrCode: {
    padding: "50px 50px 50px 50px",
    height: 200,
    width: 200,
  },
  title: {
    fontSize: "24px",
    marginBottom: 20,
    color: "#525252",
    fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
    fontWeight: 300,
  },
  list: {
    "& > *": {
      fontSize: 16,
      marginTop: 15,
      padding: 0,
      lineHeight: '28px',
      color: '#4a4a4a'
    },
    googleLogin: {
      position: "absolute",
      top: "200px",
    },
  },
});

const Style = {
  dialogPaper: {
    height: "95%",
    width: "60%",
    marginTop: "12%",
    boxShadow: "none",
    borderRadius: "0",
    maxWidth: "100%",
    maxHeight: "100%",
  },
};

const Login = ({ classes }) => {
 

  const classname = useStyles();
  const { account, setAccount } = useContext(AccountContext);

  const onLoginFailure = () => {
    console.log("Login Failure");
  };

  const onLoginSuccess = async (res) => {
    console.log(res);
    console.log("Login Success");
   await addUser(res.profileObj);
    setAccount(res.profileObj);
  };

  return (
    <div>
      <Dialog
        open={true}
        classes={{ paper: classes.dialogPaper }}
        BackdropProps={{ style: { backgroundColor: "unset" } }}
      >
        <Box className={classname.component}>
          <Box className={classname.leftComponent}>
            <Typography className={classname.title}>
              To use Whatsapp on Your Computer:
            </Typography>
            <List className={classname.list}>
              <ListItem>1. Open Whatsapp on Your Phone.</ListItem>
              <ListItem>
                2. Tap menu or Settings and select Linked devices.
              </ListItem>
              <ListItem>
                3. Point Your Phone on the screen to capture The QR code.
              </ListItem>
              <ListItem></ListItem>
            </List>
          </Box>
          <Box style={{ position: "relative" }}>
            <Box style={{ position: "absolute", right: "40%", top: "40%" }}>
              <GoogleLogin
                buttonText=""
                isSignedIn={true}
                clientId={clientId}
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
              />
            </Box>
            <img
              src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg"
              alt="qr-code"
              className={classname.qrCode}
            />
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default withStyles(Style)(Login);
