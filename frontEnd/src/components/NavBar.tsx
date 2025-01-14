import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';


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


        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

    
    return(
        <>
            <AppBar position="fixed" sx={{background: '#28282B', borderRadius: '8px', margin: '10px 8px', minHeight: '48px', 
                width: '60%',  
                left: '50%',
                transform: 'translateX(-50%)' 
            }}>
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
                        <Button color="inherit" onClick={handleClickOpen}>Contactanos</Button>
                    </>
                )}
                </Toolbar>
            </AppBar>
        
        <div>

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle sx={{
                display: 'grid',
                placeItems: 'center',
                fontSize: '2rem'
            }}>
                Forma de contactar
            </DialogTitle>
            <DialogContent>
                <Typography variant='h4'>Numero de Telefono</Typography>
                <Typography variant='h5'>312 193 1445</Typography>
            </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cerrar
            </Button>
        </DialogActions>
        </Dialog>
    </div>
    </>
    );
}

export default NavBar;