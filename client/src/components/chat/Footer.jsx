import { Box , InputBase} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { EmojiEmotions, AttachFile, Mic } from "@material-ui/icons";

const useStyles = makeStyles(theme =>({
   footer: {
      height: '50px',
      width: '100%' ,
      background: '#ededed',
      display: 'flex',
      alignItems: 'center',
      padding: '0 15px',
      '& > *' : {
          margin: 4,
          color: '#919191',
      }
   },
   clipicon: {
       transform: 'rotate(40deg)'
   },
   inputRoot: {
    width: '100%',
  },
  inputInput: {
      
    paddingLeft: 24,
    fontSize: 14,
    width: '100%',
    },
    searchBox: {
        background: '#ffffff',
        borderRadius: 18,
        width: 'calc(95% - 100px)'
    }
}));

const Footer = ({sendText, setValue, value}) => {

    const classes = useStyles();
    return (
        <Box className = {classes.footer}>
            <EmojiEmotions/>
            <AttachFile className={classes.clipicon}/>
            <Box className={classes.searchBox}>
            <InputBase 
            placeholder="Type a message..."
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}

              inputProps={{ 'aria-label': 'search' }}
              onKeyPress={(e) => sendText(e)}
              onChange = {(e) => setValue(e.target.value)}
              value = {value}
              />
            </Box>
            <Mic/>

        </Box>
    )
}

export default Footer;