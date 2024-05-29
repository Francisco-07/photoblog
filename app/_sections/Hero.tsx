'use client'
import { Box, Container, Typography, Divider } from '@mui/material'
import DiamondIcon from '@mui/icons-material/Diamond'

const Hero = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        minHeight: '800px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background:
          'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 7,
          border: '1px solid white',
          borderRadius: '50%',
          height: '50px',
          width: '50px',
          mb: '89px',
          '&::after': {
            width: '2px',
            bgcolor: 'common.white',
            content: '""',
            display: 'block',
            position: 'absolute',
            bottom: '-90px',
            left: 'calc(50% - 1px)',
            height: '90px',
          },
          '& svg': {
            fontSize: 45,
          },
        }}
      >
        <DiamondIcon />
      </Box>
      <Container
        sx={{
          py: 5,
          textAlign: 'center',
          borderTop: '1px solid',
          borderBottom: '1px solid',
        }}
      >
        <Box>
          <Typography variant='h1'>Sofia Ramirez</Typography>
        </Box>
        <Box>
          <Typography variant='h5'>
            Fotógrafa argentina con un estilo distintivo que encuentra belleza
            en lo cotidiano, capturando momentos memorables con precisión y
            sensibilidad.
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          mt: '90px',
          flexWrap: 'wrap',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          '& p': {
            border: '1px solid white',
            width: { xs: '120px', sm: '200px' },
            height: '55px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
            },
          },
          '&::before': {
            width: '2px',
            bgcolor: 'common.white',
            content: '""',
            display: 'block',
            position: 'absolute',
            top: '-90px',
            left: 'calc(50% - 1px)',
            height: { xs: '200px', md: '145px' },
          },
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Typography className='nonborderRight'>Sobre mi</Typography>
          <Typography className='nonborderRight nonborderTop nonborderMD'>
            Servicios
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography className='nonborderLeft nonborderMD'>Galeria</Typography>
          <Typography className='nonborderTop nonborderLeft'>
            Contacto
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default Hero
