import { makeStyles } from "@mui/material";
import { ThemeProvider } from "@mui/system";
const usestyles = makeStyles((theme) => ({
    container: {
        BackgroundColor:theme.pallete.background.paper,
        padding:theme.spacing(8,0,6)
    },
    buttons:{
        marginTop:'40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card:{
        height:'100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia:{
        paddingTop:'56.25%'
    },
    cardContent:{
        flexGrow: 1,
    },
}

));
export default usestyles;