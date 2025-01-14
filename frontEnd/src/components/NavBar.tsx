
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
                        <Button color="inherit">Inicio</Button>
                        <Button color="inherit">Acerca de</Button>
                        <Button color="inherit">Contactanos</Button>
                    </>
                )}
                </Toolbar>
            </AppBar>
        </Container>
    );
}

export default NavBar;