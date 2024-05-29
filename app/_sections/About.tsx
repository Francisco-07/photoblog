'use client'
import Title from '../_components/Title'
import { Container, Box, Typography } from '@mui/material'
import Img from '../_components/Img'
import Btn from '../_components/Btn'

const About = () => {
  return (
    <Container sx={{ py: 15 }}>
      <Title title='Sobre mi' />
      <Box
        id={'acerca'}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: 'center',
          gap: 5,
        }}
      >
        <Box
          sx={{
            flex: 0.5,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography>
            Soy Sofía Ramírez, una fotógrafa argentina apasionada por capturar
            la belleza en lo cotidiano. Mi trabajo se destaca por una
            composición cuidadosa y la captura de emociones genuinas, inspirando
            a otros a ver el mundo con nuevos ojos.
          </Typography>
          <Btn contained={false} href='#work'>
            Trabajos
          </Btn>
        </Box>
        <Box
          sx={{
            flex: 0.5,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Img
            src='/images/me.jpg'
            alt='yo'
            width={300}
            height={300}
            radius={'50%'}
          />
        </Box>
      </Box>
    </Container>
  )
}
export default About
