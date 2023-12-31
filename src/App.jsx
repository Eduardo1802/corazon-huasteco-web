// import { useState } from 'react'
import { Box, Divider , Button, Grid, Typography, Paper, Container } from '@mui/material';
import './App.css'
// import imagenLateral from '../src/assets/img/inicio/imagenLateral.jpg'
function App() {

  return (
    <Box>
        <Paper component="article" elevation={0}>
          <Container maxWidth="lg">
            <Grid container columnSpacing={2} py={5} my={{xs: 0, md:5}}>
              <Grid item container xs={12} lg={4} direction="column" justifyContent="center" alignItems="center">
                <Typography gutterBottom variant="h4" component="p" color="primary.light" fontWeight={700}>
                  Huejutla: Descubriendo Nuestra Historia
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <Typography variant="subtitle1" component="p" color="text.secondary">
                  Hace milenios, los tenec o huaxtecos fundaron "Tantocoy", un lugar de sauces. Más tarde, los toltecas lo rebautizaron como "Huexotlan," que significa lo mismo. En 1522, la expedición de Francisco de Garay trajo cambios a la región, sometida por Hernán Cortés, quien en diciembre conquistó Huexotlan, llamándolo desde entonces Huejutla. Este es solo un vistazo a la historia. Haz clic para descubrir más sobre la fascinante herencia cultural de esta tierra ancestral.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Paper>

        <Paper component="article" elevation={0}>
          <Container maxWidth="lg">
            <Grid container columnSpacing={2} py={5} my={5}>
              <Grid item xs={12} lg={12} >
                <Typography gutterBottom variant="h4" component="p" color="primary.light" fontWeight="400" textAlign="center">
                  Nuestros Colaboradores: Voces Auténticas de la Huasteca Hidalguense
                </Typography>
              </Grid>
              <Grid item xs={12} lg={12} >
                <Typography gutterBottom variant='subtitle1' component="p" color="primary.light" textAlign="center">
                  Conoce a los Apasionados Guardianes de la Cultura y la Región
                </Typography>
              </Grid>
              <Grid item container alignItems="center" xs={12} sm={6} md={4}>
                {/* <Img alt="img-intro-colaboradores" src={imagenLateral} /> */}
              </Grid>
            </Grid>
            <Grid item container xs={12} sm={6} md={8} direction="column" justifyContent="center">
                <Typography gutterBottom variant="subtitle1" component="p" color="text.secondary">
                  Nuestra plataforma es un faro de conocimiento y autenticidad gracias a nuestros dedicados colaboradores. Ellos son los narradores de historias, los guardianes de tradiciones y los informantes de la Huasteca Hidalguense. Con una profunda pasión por su cultura y región, nuestros colaboradores aportan información verídica y perspectivas únicas a través de sus artículos. Desde relatos históricos hasta exploraciones de festivales locales, sus contribuciones enriquecen nuestra comunidad y te sumergen en la riqueza de la Huasteca.
                </Typography>
                <Button aria-label='ir a la sección de creadores de contenido' variant='outlined' >
                  Explora sus Voces
                </Button>
              </Grid>
          </Container>
        </Paper>

        <Paper component="article" elevation={0}>
        <Container maxWidth="xl">
          <Divider/>
          {/* SECTION SIX -- COLINDANCIAS */}
            <Grid container columnSpacing={2} rowSpacing={2} py={5} mt={5}>
              <Grid item container xs={12} sm={12} md={4} direction="column" justifyContent="center" order={{xs: 1, sm:1}}>
                <Typography variant="h4" component="p" color="primary.light" fontWeight={700} textAlign="center">
                  Colindancias
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="p" color="text.secondary" textAlign="center">
                  Huejutla colinda al norte con el municipio de Orizatlán, el estado de Veracruz; al este con Veracruz, Huautla y Atlapexco; al sur con Atlapexco, Huazalingo y Tlanchinol; y al oeste con Tlanchinol, Jaltocan y Orizatlán.
                </Typography>
                <Button aria-label='ir a la sección del mapa' variant='outlined'>
                  Ver mapa
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={8} order={{xs: 2, sm:2}}>
                {/* <OnlyMapa altura={isSmallScreen ? "215px" : "50vh"}/> */}
              </Grid>
            </Grid>
        </Container>
      </Paper>

    </Box>
  )
}

export default App
