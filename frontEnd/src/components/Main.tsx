
import {Box, Typography} from '@mui/material';

function Main(){
    return(
        <Box sx={{
            
            border: 3,
            padding: '10px 15px',
            width: '30%',
            height: '40rem',
            background: 'linear-gradient(45deg, #28282B, #D35400)',
            borderRadius: '8px',
            boxShadow: 'inherit'
        }}>
            <Typography variant='h2' sx={{
                color: '#ffff',
                fontWeight: 'bold'
            }}>¿Que ofrecemos?</Typography>
        </Box>
    );
}

export default Main;