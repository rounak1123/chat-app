
import { Box, InputBase, makeStyles} from '@material-ui/core';
import { Search as SearchIcon} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    component:{
        background:'#d8d8d8',
        height: '40px',
        display: 'flex',
        align: 'center',

    },

    search: {
      position: 'relative',
      borderRadius: '18px',
      background: '#ffffff',
      margin: '5px 13px',
      width: '100%',
    
     
    },
    searchIcon: {
        color:'#919191',
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
    },
    inputRoot: {
      width:'100%',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: 65,
      fontSize: 15,
      transition: theme.transitions.create('width'),
      width: '100%',
     
    },
  }));

const Search = ({setText}) =>{
    const classes = useStyles();
    return (<> 
            <Box className={classes.component}>
            <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchIcon fontSize = 'small' />
            </Box>
            <InputBase
              placeholder="Search or start a new chat"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=> {setText(e.target.value)}}
            />
          </Box>
          </Box>
    </>);

}

export default Search;