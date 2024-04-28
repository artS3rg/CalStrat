import { AppBar, Avatar, Container, IconButton, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <>
    <AppBar position="sticky" className="back_header">
      <Container maxWidth="xl">
          <Toolbar>
            <img src='src/Assets/vector.png' height={60}/>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Yuji Mai, serif',
                  fontWeight: 400,
                  letterSpacing: '.3rem',
                  color: 'white',
                  fontSize: 25,
                }}
              >
                Калорийный <br/>стратег
              </Typography>
          </Toolbar>
      </Container>
    </AppBar>
      
    </>
      

      
    
  );
}
