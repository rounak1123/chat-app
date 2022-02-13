import { Box, makeStyles } from "@material-ui/core"
import emptyImage from '../../images/emptyChatImage.jpg';
const useStyles = makeStyles({
  component:{
    background: '#222e35',
    height: '100%',
    padding: '30px 0',
    textAlign: 'center'
   },
   image: {
      width: '250px'
   }
})


const EmptyChat = () =>{

    // const url ='https://web.whatsapp.com/img/intro-connection-dark_0ee01153183b5ebd9b296399cc2104b0.jpg';
    const classes = useStyles();


    return(
    <Box className={classes.component}>
        <img src = {emptyImage} alt = 'emptyChat' className={classes.image}/>
    </Box>);
}

export default EmptyChat;