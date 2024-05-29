import { Typography, Box, Container, Divider } from '@mui/material'
import { GitHub } from '@mui/icons-material'
import Img from '../_components/Img'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Link from 'next/link'

const Footer = () => {
  const media = [
    {
      link: '/',
      icon: <InstagramIcon />,
    },
    {
      link: '/',
      icon: <XIcon />,
    },
    {
      link: '/',
      icon: <LinkedInIcon />,
    },
    {
      link: '/',
      icon: <YouTubeIcon />,
    },
  ]
  return (
    <footer>
      <Box sx={{ bgcolor: 'common.black', color: 'common.white' }}>
        <Container>
          <Divider sx={{ bgcolor: 'common.white', mt: 4 }} />
          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              py: 5,
              '& svg': {
                fontSize: 45,
                '&:hover': {
                  color: 'primary.main',
                },
              },
            }}
          >
            {media.map((socialM, i) => (
              <Link key={i} href={socialM.link}>
                {socialM.icon}
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              pb: 5,
              '& h6': {
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'center',
              },
            }}
          >
            <a target='_blank' href='https://github.com/Francisco-07'>
              <Typography
                variant='h6'
                sx={{
                  '&:hover svg': {
                    color: 'primary.main',
                  },
                }}
              >
                Desarrollo Francisco Garciarena
                <GitHub sx={{ ml: 1, fontSize: 35 }} />
              </Typography>
            </a>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}
export default Footer
