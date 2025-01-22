import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CodeIcon from "@mui/icons-material/Code";
import DnsIcon from "@mui/icons-material/Dns";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

function Caracteristicas() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        padding: 2,
      }}
      id="sCaracterísticas"
    >
      <Card
        sx={{
          background: "linear-gradient(45deg,rgb(134, 8, 252), #000b,rgb(22, 88, 255))",
          width: { xs: "100%", sm: "65%", md: "38%" },
          height: { xs: "25rem", sm: "20rem", md: "25rem" },
          margin: "20px",
        }}
      >
        <CardContent>
          <CodeIcon sx={{ color: "#1E90FF", fontSize: "50px" }} />
          <Typography gutterBottom variant="h4" component="div" sx={{ color: "#FFFFFF" }}>
            Desarrollo Front-End
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: "#FFFFFF", textAlign: "justify" }}>
            El desarrollo Front-End se basa en los colores, funciones, modelo etc. Aborda la parte orientada al usuario de un sitio web. Estas
            tecnologías incluyen lenguajes informáticos como JavaScript, CSS, HTML, React.js y MaterialUI
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          background: "linear-gradient(45deg,rgb(134, 8, 252), #000b,rgb(22, 88, 255))",
          width: { xs: "100%", sm: "65%", md: "38%" },
          height: { xs: "25rem", sm: "20rem", md: "25rem" },
          margin: "20px",
        }}
      >
        <CardContent>
          <DnsIcon sx={{ color: "#1E90FF", fontSize: "50px" }} />
          <Typography gutterBottom variant="h4" component="div" sx={{ color: "#FFFFFF" }}>
            Desarrollo Back-End
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: "#FFFFFF", textAlign: "justify" }}>
            El desarrollo Back-End se basa en lo que los usuarios no pueden ver, o sea, el servidor, mantienen las operaciones del lado del servidor
            de una aplicación o pagina web. Nuestros principales objetivos de desarrollo son crear una arquitectura fiable que realice las funciones
            de la aplicación de forma precisa y eficiente.
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          background: "linear-gradient(45deg,rgb(134, 8, 252), #000b,rgb(22, 88, 255))",
          width: { xs: "100%", sm: "65%", md: "38%" },
          height: { xs: "25rem", sm: "20rem", md: "25rem" },
          margin: "20px",
        }}
      >
        <CardContent>
          <DesignServicesIcon sx={{ color: "#1E90FF", fontSize: "50px" }} />
          <Typography gutterBottom variant="h4" component="div" sx={{ color: "#FFFFFF" }}>
            Diseño Grafico
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: "#FFFFFF", textAlign: "justify" }}>
            Contamos con conocimientos sobre Diseño Grafico, principalmente sobre UX y UI. Creamos para ustedes una interfaz de usuario intuitiva,
            diseñada para facilitar la interacción y maximizar la eficiencia, al igual que una experiencia atractiva y memorable que conecta a los
            usuarios con su propósito de manera sencilla y efectiva. Nos enfocamos en combinar funcionalidad, diseño moderno y accesibilidad para
            garantizar que cada detalle cumpla con las expectativas de nuestros clientes
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Caracteristicas;
