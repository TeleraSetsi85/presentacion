import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const pages = ["Características", "Equipo"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleButton = (page) => {
    document.getElementById(`s${page}`).scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none", marginTop: { xs: "0", md: "2rem" } }}>
        <Container
          id="navBar"
          maxWidth="xl"
          sx={{ width: { xs: "100%", md: "60%" }, backgroundColor: "#28282B", borderRadius: { xs: 0, md: "8px" }, boxShadow: "var(--Paper-shadow)" }}
        >
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap sx={{ color: "inherit", textDecoration: "none" }}>
              EquipoDev
            </Typography>

            {/* Mobile Menu Button */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "end" }}>
              <IconButton size="large" aria-label="menu" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      handleButton(page);
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem
                  key="Contactanos"
                  onClick={() => {
                    handleCloseNavMenu();
                    handleOpenModal();
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>Contactanos</Typography>
                </MenuItem>
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "end" }}>
              {pages.map((page) => (
                <Button key={page} onClick={() => handleButton(page)} sx={{ my: 2, color: "white" }}>
                  {page}
                </Button>
              ))}
              <Button key="Contactanos" onClick={handleOpenModal} sx={{ my: 2, color: "white" }}>
                Contactanos
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Modal for Contact */}
      <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="contact-modal-title" aria-describedby="contact-modal-description">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem",
              backgroundColor: "#fff",
              borderRadius: "8px",
              width: { xs: "90%", sm: "50%", md: "40%" },
            }}
          >
            <Typography id="contact-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
              Contactame:
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Nombre:</strong> Diego Arellano
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Correo:</strong> dialfonso@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Número:</strong> 3121931445
            </Typography>
            <Button variant="contained" color="primary" onClick={handleCloseModal} fullWidth>
              Aceptar
            </Button>
          </Paper>
        </Grid>
      </Modal>
    </>
  );
}

export default NavBar;
