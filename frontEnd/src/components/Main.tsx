
import {Box, Typography, Button, Card, CardContent} from '@mui/material';

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
            <Box sx={{
                border: 3,
                padding: '10px 15px',
                width: '30%',
                height: '40rem',
                background: '#28282B',
                borderRadius: '8px',
                boxShadow: 'inherit'
            }}>
                <Typography variant='h2' sx={{
                    color: '#7DF9FF',
                    fontWeight: 'bold',
                    webkitTextStroke: '1px black',
                    textShadow: '1px 1px 1px #00ffff, 0 0 5px #00ffff'
                }}>
                    ¿Que ofrecemos?
                </Typography>
                <Typography sx={{
                    color: '#FFFF',
                    fontSize: '25px'
                }}>
                    Nuestro equipo de desarrollo web maneja multiples herramientas tales como:
                    {/*Colocar una tabla que presente todo eso */}
                </Typography>
                <Button variant='contained' onClick={btnViewWork} sx={{
                    borderRadius: '200px'
                }}>
                    Ver trabajos
                </Button>
            </Box>

            {/*Esto es la seccion donde se mostraran los trabajos que hemos hecho */}
            <Box
            sx={{
                backgroundColor: '#FFFF',
                padding: '20px',
                margin: '30px',
                borderRadius: '8px',
                boxShadow: 3
            }}
            id="sectionWork"
            >
                <Typography variant="h4" sx={{
                    margin: '10px 10px 30px',
                    color: '#FFD700',
                }}>
                    Trabajos realizados
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
            </Box>
        </>
    );
}

export default Main;