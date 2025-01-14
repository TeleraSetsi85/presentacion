import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';


function NavBar(){
    const theme = useTheme(); // Para que funcione el materiaUI
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); //Detecta si la pantalla es pequeña

    const btnHome = ()=>{
        //Comprueba si el elemento existe para no dar error en ejecucion, esto pasa solo en typescript
        const section = document.getElementById('section1');
        if(section){
            section.scrollIntoView({behavior: 'smooth'});
        }else{
            return null;
        }
    }


    //Los 2 siguientes botones falta crearlos en el main.tsx para que se scrollie
    const btnAbout = ()=>{
        const section2 = document.getElementById('');
        if(section2){
            section2.scrollIntoView({behavior: 'smooth'});
        }else{
            return null;
        }
    }

    const btnContact = ()=>{
        {/*Agregar modal de contacto*/}
    }

    return(
        <Container style={{overflow: 'hidden'}}>
            <AppBar position="static" sx={{background: '#28282B', borderRadius: '8px', margin: '10px 8px'}}>
                <Toolbar>
                {/* Icono del menu en el cel */}
                {isMobile && (
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                    </IconButton>
                )}

                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    EquipoDev
                </Typography>

                {/*Solo se muestra si es en Pantallas grandes */}
                {!isMobile && (
                    <>
                        <Button color="inherit" onClick={btnHome}>Inicio</Button>
                        <Button color="inherit" onClick={btnAbout}>Acerca de</Button>
                        <Button color="inherit" onClick={btnContact}>Contactanos</Button>
                    </>
                )}
                </Toolbar>
            </AppBar>
        </Container>
    );
}

export default NavBar;