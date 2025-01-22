import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function Nosotros() {
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

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: { xs: "95%", sm: "80%" }, backgroundColor: "#28282B", color: "white", margin: "auto", borderRadius: "10px" }}>
      <CardContent>
        <Typography
          variant="h2"
          sx={{
            color: "rgb(160, 0, 209)",
            textAlign: "center",
            fontSize: "clamp(2rem, 6vw, 6rem)",
            fontWeight: "bold",
            webkitTextStroke: "1px black",
            textShadow: "1px 1px 1px rgb(255, 255, 255)",
            marginBottom: "1rem",
          }}
        >
          ¿Que hacemos?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            margin: "0 5%",
            fontSize: "1rem",
            marginBottom: "2rem",
            textAlign: "justify",
          }}
        >
          Somos un equipo de desarrollo web que buscamos mejorar las necesidades de nuestros clientes para facilitar su negocio, conferencias, eventos
          y más.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            margin: "0 5%",
            marginBottom: "2rem",
            textAlign: "justify",
          }}
        >
          Nuestro equipo de desarrollo web maneja múltiples herramientas tales como:
        </Typography>

        <Stack
          direction="row"
          spacing={0}
          sx={{ flexWrap: "wrap", gap: "1rem", justifyContent: "space-evenly", alignItems: "center", textAlign: "center" }}
        >
          <Item>React.js ⚛️</Item>
          <Item>Material-UI 🎨</Item>
          <Item>Bootstrap 👢</Item>
          <Item>JavaScript 💻</Item>
          <Item>Node.js 🌐</Item>
          <Item>MySQL 🗄️</Item>
          <Item>Axios 🔗</Item>
        </Stack>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", cursor: "pointer" }} onClick={handleExpandClick}>
          <Typography>Ver Trabajos</Typography>
          <ExpandMore expand={expanded} aria-expanded={expanded} aria-label="show more">
            <ExpandMoreIcon sx={{ fill: "white" }} />
          </ExpandMore>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ backgroundColor: "white", margin: "1rem", padding: "1rem", color: "black", borderRadius: "4px" }}>
          <Typography variant="h4" sx={{ marginBottom: 2, color: "#0000b" }}>
            Nuestros Trabajos
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              overflowX: "auto",
            }}
          >
            <Card
              sx={{
                flex: "1 1 100%",
                maxWidth: { md: "calc(50% - 1rem)", xs: "100%" },
                backgroundColor: "gainsboro",
                borderRadius: "10px",
              }}
            >
              <CardActionArea>
                <CardMedia component="img" height="200" image="contemplative-reptile.jpg" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lexo Salmon
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    En equipoDev, nos enorgullece haber desarrollado una solución web integral para facilitar la compra de cursos y conferencias de
                    manera sencilla y segura.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              sx={{
                flex: "1 1 100%",
                maxWidth: { md: "calc(50% - 1rem)", xs: "100%" },
                backgroundColor: "gainsboro",
                borderRadius: "10px",
              }}
            >
              <CardActionArea>
                <CardMedia component="img" height="200" image="contemplative-reptile.jpg" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Boda
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hemos creado una invitación digital única y elegante diseñada especialmente para tu gran día.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              sx={{
                flex: "1 1 100%",
                maxWidth: { md: "calc(50% - 1rem)", xs: "100%" },
                backgroundColor: "gainsboro",
                borderRadius: "10px",
              }}
            >
              <CardActionArea>
                <CardMedia component="img" height="200" image="contemplative-reptile.jpg" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lexo Salmon
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    En equipoDev, nos enorgullece haber desarrollado una solución web integral para facilitar la compra de cursos y conferencias de
                    manera sencilla y segura.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Nosotros;
