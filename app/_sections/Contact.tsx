'use client'
import Form from '../_components/Form'
import { Container, Box, Typography } from '@mui/material'
import Title from '../_components/Title'

const Contact = () => {
  return (
    <Box
      id={'contacto'}
      sx={{
        color: 'common.white',
        pt: 15,
        pb: 5,
      }}
    >
      <Container id='contact'>
        <Title title='Contacto' />
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'center',
            alignItems: {
              xs: 'center',
              md: 'flex-start',
            },
            pt: 6,
            gap: 8,
          }}
        >
          <Box
            sx={{
              width: { sx: '100%', md: '330px' },
              display: 'flex',
              flexDirection: 'column',
              textAlign: { xs: 'center', md: 'start' },
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Box
              sx={{
                pt: {
                  xs: 0,
                  md: 6,
                },
              }}
            >
              <Typography sx={{ fontSize: '20px' }}>
                ¿Listo para dar vida a tu proyecto? Completa nuestro formulario
                de contacto o conéctate con nosotros a través de nuestras redes
                sociales. Estamos ansiosos por escuchar tus ideas.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { sx: '100%', md: '400px' } }}>
            <Form />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
export default Contact
