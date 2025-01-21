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

const pages = ["Inicio", "Nosotros", "Contactanos"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleButton = (page) => {
    console.log(`Button clicked: ${page}`);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none", marginTop: { xs: "0", md: "2rem" } }}>
      <Container
        id="navBar"
        maxWidth="xl"
        sx={{ width: { xs: "100%", md: "60%" }, backgroundColor: "transparent", borderRadius: { xs: 0, md: "8px" }, boxShadow: "var(--Paper-shadow)" }}
      >
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap sx={{ color: "#003563", fontWeight:"900", textDecoration: "none", fontSize:{
            xs: '16px',
            sm: '20px',
            md: '22px',
            lg: '28px',
          }}}>
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
              sx={{
                '& .MuiPaper-root':{
                  backgroundColor:'#aad7ffbf'
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    handleButton(page);
                  }}
                >
                  <Typography sx={{ textAlign: "center", color:"#003563", fontWeight: "400"}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "end" }}>
            {pages.map((page) => (
              <Button key={page} onClick={() => handleButton(page)} sx={{ my: 2, color: "#003563" }}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
