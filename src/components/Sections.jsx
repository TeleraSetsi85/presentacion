import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CodeIcon from '@mui/icons-material/Code';
import DnsIcon from '@mui/icons-material/Dns';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GitHubIcon from '@mui/icons-material/GitHub';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Card sx={{ width: "80%", backgroundColor: "#28282B", color: "white" }}>
      <CardContent>
        <Typography
          variant="h2"
          sx={{
            color: "#5c1b6c",
            fontWeight: "bold",
            webkitTextStroke: "1px black",
            textShadow: "1px 1px 1px #5c1b6c",
          }}
        >
          ¿Que hacemos?
        </Typography>
        <Typography>
          Somos un equipo de desarrollo web que buscamos mejorar las necesidades de nuestros clientes para facilitar su negocio, conferencia, eventos y mas
        </Typography>
        <Typography>Nuestro equipo de desarrollo web maneja multiples herramientas tales como:</Typography>
        <Typography
          sx={{
            color: "#FFFF",
          }}
        >
          <li className="list">React.js ⚛️</li>
          <li className="list">Material-UI 🎨</li>
          <li className="list">Bootstrap 👢</li>
          <li className="list">JavaScript 💻</li>
          <li className="list">Node.js 🌐</li>
          <li className="list">MySQL 🗄️</li>
          <li className="list">Axios 🔗</li>
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "0.5rem", cursor: "pointer" }} onClick={handleExpandClick}>
          <Typography>Ver Trabajos</Typography>
          <ExpandMore expand={expanded} aria-expanded={expanded} aria-label="show more">
            <ExpandMoreIcon sx={{ fill: "white" }} />
          </ExpandMore>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ backgroundColor: "white", margin: "1rem", padding: "1rem", color: "black", borderRadius: "4px" }}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: 2,
              color: "#0000b",
            }}
          >
            Nuestros Trabajos
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              gap: "2rem",
              overflowX: "auto",
              paddingBottom: "1rem",
            }}
          >
            <Card sx={{ minWidth: { xs: "100%", md: "calc(50% - 1rem)" }, backgroundColor: "gainsboro" }}>
              <CardActionArea>
                <CardMedia component="img" height="200" image="contemplative-reptile.jpg" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lexo Salmon
                  </Typography>
                  <Typography variant="p" sx={{ color: "text.secondary" }}>
                    En equipoDev, nos enorgullece haber desarrollado una solución web integral para facilitar la compra de cursos y conferencias de
                    manera sencilla y segura. Nuestro objetivo fue crear una plataforma que no solo haga más fácil acceder al conocimiento, sino
                    también proporcionar una experiencia de usuario sin complicaciones. Los clientes pueden explorar una amplia gama de cursos y
                    conferencias, realizar su pago de manera segura a través de herramientas confiables como la API de PayPal, y recibir su boleto
                    digital inmediatamente después de la transacción. Con un enfoque en la seguridad y la eficiencia, nos aseguramos de que cada paso
                    en el proceso sea claro y transparente, brindando confianza tanto en el pago como en el acceso a los eventos. Con nosotros, los
                    clientes pueden disfrutar de una experiencia digital fluida y sin preocupaciones, sabiendo que cada detalle ha sido pensado para
                    su comodidad y satisfacción.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              sx={{
                minWidth: { xs: "100%", md: "calc(50% - 1rem)" },
                backgroundColor: "gainsboro",
              }}
            >
              <CardActionArea>
                <CardMedia component="img" height="200" image="contemplative-reptile.jpg" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Boda
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hemos creado una <strong>invitación digital única y elegante</strong> diseñada especialmente para tu gran día. Con un diseño
                    moderno y sofisticado, hemos combinado lo mejor de la tecnología y la creatividad para reflejar la esencia de tu boda:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                    <Typography component="li" variant="body2" color="text.secondary">
                      ✨ <strong>Animaciones cautivadoras:</strong> Diseñadas cuidadosamente con CSS para agregar movimiento y magia a tu invitación.
                    </Typography>
                    <Typography component="li" variant="body2" color="text.secondary">
                      🎵 <strong>Música personalizada:</strong> Una melodía que resuena con la emoción del momento, disponible directamente en la
                      invitación.
                    </Typography>
                    <Typography component="li" variant="body2" color="text.secondary">
                      📱 <strong>Diseño adaptable:</strong> Desarrollado con el poderoso framework Bootstrap, garantizando que se vea increíble en
                      cualquier dispositivo, ya sea un móvil, tableta o computadora.
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    Transmite confianza y elegancia con una invitación que refleja tu amor y atención al detalle. Déjanos ayudarte a dar el primer
                    paso para hacer de tu boda una experiencia inolvidable, ¡desde la primera impresión! 🌟
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2, fontWeight: "bold" }}>
                    ¿Listo para compartir tu gran día de manera inolvidable? ❤️
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ minWidth: { xs: "100%", md: "calc(50% - 1rem)" }, backgroundColor: "gainsboro" }}>
              <CardActionArea>
                <CardMedia component="img" height="200" image="contemplative-reptile.jpg" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lexo Salmon
                  </Typography>
                  <Typography variant="p" sx={{ color: "text.secondary" }}>
                    En equipoDev, nos enorgullece haber desarrollado una solución web integral para facilitar la compra de cursos y conferencias de
                    manera sencilla y segura. Nuestro objetivo fue crear una plataforma que no solo haga más fácil acceder al conocimiento, sino
                    también proporcionar una experiencia de usuario sin complicaciones. Los clientes pueden explorar una amplia gama de cursos y
                    conferencias, realizar su pago de manera segura a través de herramientas confiables como la API de PayPal, y recibir su boleto
                    digital inmediatamente después de la transacción. Con un enfoque en la seguridad y la eficiencia, nos aseguramos de que cada paso
                    en el proceso sea claro y transparente, brindando confianza tanto en el pago como en el acceso a los eventos. Con nosotros, los
                    clientes pueden disfrutar de una experiencia digital fluida y sin preocupaciones, sabiendo que cada detalle ha sido pensado para
                    su comodidad y satisfacción.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </CardContent>
      </Collapse>
    </Card>

    {/*La seccion de caracteristicas */}
    <Box sx={{
      display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Card sx={{background: "linear-gradient(45deg,rgb(134, 8, 252), #000b,rgb(22, 88, 255))", width: '30%',height: '20rem',  margin: '20px'}}>
        <CardContent>
        <CodeIcon sx={{color: "#1E90FF", fontSize: '50px'}}></CodeIcon>
          <Typography gutterBottom variant="h4" component="div" sx={{color: '#FFFFFF'}}>
            Desarrollo Front-End
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{color: '#FFFFFF'}}>
          El desarrollo Front-End se basa en los colores, funciones, modelo etc.
            Aborda la parte orientada al usuario de un sitio web.
            Estas tecnologías incluyen lenguajes informáticos como JavaScript, CSS, HTML, React.js y MaterialUI
          </Typography>
        </CardContent>
      </Card>


      <Card sx={{background: "linear-gradient(45deg,rgb(134, 8, 252), #000b,rgb(22, 88, 255))", width: '30%',height: '20rem',  margin: '20px'}}>
      <CardContent>
        <DnsIcon sx={{color: "#1E90FF", fontSize: '50px'}}></DnsIcon>
          <Typography gutterBottom variant="h4" component="div" sx={{color: '#FFFFFF'}}>
            Desarrollo Back-End
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{color: '#FFFFFF'}}>
          El desarrollo Back-End se basa en lo que los usuarios no pueden ver, o sea, el servidor, mantienen las operaciones del lado del servidor de una aplicación o pagina web.
          Nuestros principales objetivos de desarrollo son crear una arquitectura fiable que realice las funciones de la aplicación de forma precisa y eficiente.
          </Typography>
        </CardContent>
      </Card>


      <Card sx={{background: "linear-gradient(45deg,rgb(134, 8, 252), #000b,rgb(22, 88, 255))", width: '30%',height: '20rem', margin: '20px'}}>
      <CardContent>
        <DesignServicesIcon sx={{color: "#1E90FF", fontSize: '50px'}}></DesignServicesIcon>
          <Typography gutterBottom variant="h4" component="div" sx={{color: '#FFFFFF'}}>
            Diseño Grafico
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{color: '#FFFFFF'}}>
          Contamos con conocimientos sobre Diseño Grafico, principalmente sobre UX y UI.
          Creamos para ustedes una interfaz de usuario intuitiva, diseñada para facilitar la interacción y maximizar la eficiencia, al igual que una experiencia atractiva
          y memorable que conecta a los usuarios con su propósito de manera sencilla y efectiva. Nos enfocamos en combinar funcionalidad, diseño moderno y accesibilidad para garantizar que cada detalle cumpla con las expectativas de nuestros clientes
          </Typography>
        </CardContent>
      </Card>
    </Box>

    <Box sx={{background: 'brown'}}>
      <Typography variant="h2">
          Nuestro equipo
      </Typography>

      <Card sx={{width: '100%',height: '20rem', margin: '20px'}}>
        <CardContent>
          <Typography>Desarrolladores Front-End</Typography>
          <CardMedia component="img" height="200" image="gojo pfp.jpg" alt="Pfp" />
          <Typography>Diego Arellano</Typography>
          <GitHubIcon></GitHubIcon>

          <CardMedia component="img" height="200" image="contemplative-reptile.jpg" alt="green iguana" />
          <Typography>Ricardo Anguiano</Typography>
          <GitHubIcon></GitHubIcon>

          <CardMedia component="img" height="200" image="contemplative-reptile.jpg" alt="green iguana" />
          <Typography>Alberto</Typography>
          <GitHubIcon></GitHubIcon>

          <CardMedia component="img" height="200" image="contemplative-reptile.jpg" alt="green iguana" />
          <Typography>Fernando Aviña</Typography>
          <GitHubIcon></GitHubIcon>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography>Desarrolladores Back-End</Typography>

          <CardMedia component="img" height="200" image="contemplative-reptile.jpg" alt="green iguana" />
          <Typography>Ricardo Anguiano</Typography>
          <GitHubIcon></GitHubIcon>

          <CardMedia component="img" height="200" image="contemplative-reptile.jpg" alt="green iguana" />
          <Typography>Alberto</Typography>
          <GitHubIcon></GitHubIcon>

          <CardMedia component="img" height="200" image="contemplative-reptile.jpg" alt="green iguana" />
          <Typography>Fernando Aviña</Typography>
          <GitHubIcon></GitHubIcon>
        </CardContent>
      </Card>
    </Box>
    </>
  );
}
