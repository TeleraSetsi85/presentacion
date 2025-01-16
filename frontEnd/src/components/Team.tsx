
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

function Team (){
    return(
        <Box sx={{
            padding: '10px 15px',
            margin: '30px',
            marginTop: '100px',
            width: '30%',
            height: 'auto',
            background: '#28282B',
            borderRadius: '8px',
            boxShadow: 3
        }}>
            <Typography variant="h5" gutterBottom color="white">
                Nuestro Equipo de Desarrollo
            </Typography>
            <Card
                sx={{
                    maxWidth: 345, 
                    borderRadius: 4, 
                    boxShadow: 3, 
                    overflow: 'hidden', 
                }}
            >
                
                <CardMedia
                    component="img"
                    image="https://via.placeholder.com/345x140"
                    alt="pfp"
                    sx={{
                        height: 140,
                    }}
                />
                <CardContent>
                    
                    <Typography variant="h6" gutterBottom>
                        Diego Arellano
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Texto de descripcion
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Team;