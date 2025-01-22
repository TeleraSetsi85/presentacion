import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const members = {
  diego: {
    name: "Diego Arellano",
    socialIcon: <GitHubIcon sx={{ fontSize: 40, mt: 2, color: "#7B1FA2" }} />, // Icono con color morado
    image: "gojo-pfp.jpg",
    action: () => (window.location.href = "https://github.com/TeleraSetsi85"),
  },
  ricardo: {
    name: "Ricardo",
    socialIcon: <GitHubIcon sx={{ fontSize: 40, mt: 2, color: "#7B1FA2" }} />,
    image: "rickPhoto.png",
    action: () => (window.location.href = "https://github.com/RAH-013"),
  },
  fernando: {
    name: "Fernando Aviña",
    socialIcon: <GitHubIcon sx={{ fontSize: 40, mt: 2, color: "#7B1FA2" }} />,
    image: "aviñaPhoto.jpg",
    action: () => (window.location.href = "https://github.com/Fer10K"),
  },
  alberto: {
    name: "Alberto",
    socialIcon: <GitHubIcon sx={{ fontSize: 40, mt: 2, color: "#7B1FA2" }} />,
    image: "gojo-pfp.jpg",
    action: () => (window.location.href = "#"),
  },
  alanis: {
    name: "Alanis",
    socialIcon: <InstagramIcon sx={{ fontSize: 40, mt: 2, color: "#7B1FA2" }} />,
    image: "alanisPhoto.png",
    action: () => (window.location.href = "#"),
  },
};

const teamData = [
  {
    role: "Desarrolladores Front-End",
    memberIds: ["diego", "ricardo", "fernando"],
  },
  {
    role: "Desarrolladores Back-End",
    memberIds: ["ricardo", "fernando", "alberto"],
  },
  {
    role: "Diseñadora Gráfica",
    memberIds: ["alanis"],
  },
];

const Equipo = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #4A148C, #7B1FA2)",
        width: "90%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: 4,
        borderRadius: 2,
      }}
      id="sEquipo"
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          color: "#fff",
          mb: 4,
          fontSize: { xs: "1.8rem", sm: "2.5rem" },
        }}
      >
        Nuestro equipo
      </Typography>
      {teamData.map((team, index) => (
        <Box
          key={index}
          sx={{
            background: "white",
            borderRadius: 2,
            padding: 3,
            mb: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              gridColumn: "span 3",
              textAlign: "center",
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              color: "#7B1FA2",
            }}
          >
            {team.role}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              overflowX: "auto",
              gap: 3,
              paddingBottom: 2,
            }}
          >
            {team.memberIds.map((id) => {
              const member = members[id];
              return (
                <Card
                  key={id}
                  sx={{
                    background: "white",
                    borderRadius: 2,
                    boxShadow: 3,
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    ":hover": { transform: "scale(0.8)", boxShadow: 6 },
                    ":active": { transform: "scale(1)" },
                    border: "2px solid #7B1FA2",
                    width: { xs: "100%", sm: "calc(50% - 15px)", md: "calc(33% - 15px)" },
                    flexShrink: 0,
                  }}
                  onClick={member.action}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={member.image}
                      alt={`${member.name}'s picture`}
                      sx={{
                        width: { xs: 120, sm: 150 },
                        height: { xs: 120, sm: 150 },
                        borderRadius: "50%",
                        mb: 2,
                        border: "3px solid #7B1FA2",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        color: "#4A148C",
                      }}
                    >
                      {member.name}
                    </Typography>
                    {member.socialIcon}
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Equipo;
