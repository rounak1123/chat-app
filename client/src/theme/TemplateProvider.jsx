import React, {useContext} from "react";
import { ThemeProvider,createTheme } from "@material-ui/core";
import { createContext } from "react";

export const TemplateContext = createContext(null);

const TemplateProvider =({children}) =>{
 
     const theme = createTheme({
        overrides:{
            MuiDrawer:{
                paperAnchorLeft :{
                    left: 77,
                    top: 37,
                    right: 'auto',
                    height: '522px',
                    width: '38%',
                    boxShadow:'none',
                    overflow: 'hidden',
                } 
            },
            MuiBackdrop:{
                root:{
                    backgroundColor:'unset',
                }
            }
        }
     });

     return(
         <TemplateContext.Provider>
             <ThemeProvider theme ={theme}>
          {children}
             </ThemeProvider>
         </TemplateContext.Provider>
     )
}

export default TemplateProvider;