
import {Box, Typography, Button, Card, CardContent} from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import './styles/Main.css';

function Main(){
    
    const btnViewWork = ()=>{
        const sectionWork = document.getElementById('sectionWork');
        if(sectionWork){
            sectionWork.scrollIntoView({behavior: 'smooth'});
        }else{
            return null;
        }
    }


    return(
        <>
            {/*Primer box que se ofrece? */}
            <Box sx={{
                display: 'grid',
                border: 1,
                padding: '10px 15px',
                margin: '30px 30px 30px',
                marginTop: '100px',
                width: '30%',
                height: '100%',
                background: '#28282B',
                borderRadius: '8px',
                boxShadow: 3
            }}>
                <Typography variant='h2' sx={{
                    color: '#7DF9FF',
                    fontWeight: 'bold',
                    webkitTextStroke: '1px black',
                    textShadow: '1px 1px 1px #00ffff, 0 0 5px #00ffff'
                }}>
                    ¿Que ofrecemos?
                </Typography>

                <Typography sx={{fontSize: '30px', color: '#ffff'}}>
                    Nuestro equipo de desarrollo web maneja multiples herramientas tales como:
                </Typography>

                <Typography sx={{
                    color: '#FFFF',
                    fontSize: '25px',
                    
                }}>
                    
                    <li className='list'>React.js ⚛️</li>
                    <li className='list'>Material-UI 🎨</li>
                    <li className='list'>Bootstrap 👢</li>
                    <li className='list'>JavaScript 💻</li>
                    <li className='list'>Node.js 🌐</li>
                    <li className='list'>MySQL 🗄️</li>
                    <li className='list'>Axios 🔗</li>
                </Typography>
                <Button variant='contained' onClick={btnViewWork} endIcon={<AssignmentIndIcon />} sx={{
                    borderRadius: '200px',
                    
                }}>
                    Ver trabajos
                </Button>
            </Box>

            {/*Esto es la seccion donde se mostraran los trabajos que hemos hecho */}
            
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '5px',
                backgroundColor: '#FFFF',
                padding: '20px',
                margin: '30px',
                borderRadius: '8px',
                boxShadow: 3,
            }}
            id="sectionWork"
            >
                <Typography variant="h4" sx={{
                    margin: '10px 10px 30px',
                    color: '#0000b',
                }}>
                    Nuestros Trabajos
                </Typography>


                {/*Trabajo 1 */}
                <Card sx={{
                        width: {
                            xs: '90%',  
                            sm: 400,     
                            md: 500,     
                        },
                        height: {
                            xs: 'auto',  
                            sm: 500,     
                            md: 600,     
                        },
                        padding: '15px',
                        boxShadow: 3,
                        border: 2
                    }}>
                    <CardContent>
                        <Typography variant='h5'>
                            Lexo Salmon
                        </Typography>
                        <img src="https://via.placeholder.com/600" alt="imgLexo" />
                        <Typography sx={{
                            fontSize: '18px'
                        }}>
                        En equipoDev, nos enorgullece haber desarrollado una solución web integral para facilitar la compra de cursos y conferencias de manera sencilla y segura.
                        Nuestro objetivo fue crear una plataforma que no solo haga más fácil acceder al conocimiento, sino también proporcionar una experiencia de usuario sin complicaciones. Los clientes pueden explorar una amplia gama de cursos y conferencias, realizar su pago de manera segura a través de herramientas confiables como la API de PayPal, y recibir su boleto digital inmediatamente después de la transacción.
                        Con un enfoque en la seguridad y la eficiencia, nos aseguramos de que cada paso en el proceso sea claro y transparente, brindando confianza tanto en el pago como en el acceso a los eventos. Con nosotros, los clientes pueden disfrutar de una experiencia digital fluida y sin preocupaciones, sabiendo que cada detalle ha sido pensado para su comodidad y satisfacción
                        </Typography>
                    </CardContent>
                </Card>

                {/*2do Trabajo */}
                <Card sx={{
                        width: {
                            xs: '90%',  
                            sm: 400,     
                            md: 500,     
                        },
                        height: {
                            xs: 'auto',  
                            sm: 500,     
                            md: 600,     
                        },
                        padding: '15px',
                        boxShadow: 3,
                        border: 2
                    }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Boda
                            </Typography>
                            <img src="https://via.placeholder.com/600" alt="bodaPhoto"/>
                            <Typography sx={{ fontSize: '18px', lineHeight: 1.6 }}>
                            <Box component="span">
                                Hemos creado una <strong>invitación digital única y elegante</strong> diseñada especialmente para tu gran día. 
                                Con un diseño moderno y sofisticado, hemos combinado lo mejor de la tecnología y la creatividad para reflejar 
                                la esencia de tu boda:
                            </Box>
                            <br />
                            <br />
                            <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                                <li>✨ <strong>Animaciones cautivadoras:</strong> Diseñadas cuidadosamente con CSS para agregar movimiento y magia a tu invitación.</li>
                                <li>🎵 <strong>Música personalizada:</strong> Una melodía que resuena con la emoción del momento, disponible directamente en la invitación.</li>
                                <li>📱 <strong>Diseño adaptable:</strong> Desarrollado con el poderoso framework Bootstrap, garantizando que se vea increíble en cualquier dispositivo, ya sea un móvil, tableta o computadora.</li>
                            </Box>
                            <Box component="span">
                                Transmite confianza y elegancia con una invitación que refleja tu amor y atención al detalle. 
                                Déjanos ayudarte a dar el primer paso para hacer de tu boda una experiencia inolvidable, 
                                ¡desde la primera impresión! 🌟
                            </Box>
                            <br />
                            <br />
                            <Box component="span" sx={{ fontWeight: 'bold' }}>
                                ¿Listo para compartir tu gran día de manera inolvidable? ❤️
                            </Box>
                            </Typography>
                        </CardContent>
                </Card>


                {/*3er trabajo */}
                <Card sx={{
                        width: {
                            xs: '90%',  
                            sm: 400,     
                            md: 500,     
                        },
                        height: {
                            xs: 'auto',  
                            sm: 500,     
                            md: 600,     
                        },
                        padding: '15px',
                        boxShadow: 3,
                        border: 2
                    }}>

                </Card>
            </Box>
        </>
    );
}

export default Main;