'use client'
import React from 'react'
import { Box, Container } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import Img from './Img'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <>
      <Box
        sx={{
          width: '100vw',
          position: 'absolute',
          top: 0,
          height: '100px',
          zIndex: 90,
          color: 'common.white',
          bgcolor: 'transparent',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              zIndex: '110',
              opacity: 0.7,
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            <Link href='/'>
              <Img src='images/logo.svg' width='200px' alt='logo' />
            </Link>
          </Box>
          <Box
            onClick={toggleDrawer(!open)}
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              zIndex: '900',
              '& .hamburger-one': {
                bgcolor: 'common.white',
                '&::after': {
                  bgcolor: 'common.white',
                },
                '&::before': {
                  bgcolor: 'common.white',
                },
              },
            }}
          >
            <div className={open ? 'icon-one active-one' : 'icon-one'}>
              <div className='hamburger hamburger-one'></div>
            </div>
          </Box>
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              alignItems: 'center',
              gap: 2,
              '& div': {
                p: 1,
                borderLeft: '2px solid',
                borderColor: 'transparent',
              },
              '& div:hover': {
                borderLeft: '2px solid',
                borderColor: 'common.white',
                cursor: 'pointer',
              },
            }}
          >
            <Link onClick={toggleDrawer(false)} href={'#acerca'}>
              <Box>Acerca de</Box>
            </Link>
            <Link onClick={toggleDrawer(false)} href={'#servicios'}>
              <Box>servicios</Box>
            </Link>
            <Link onClick={toggleDrawer(false)} href={'#portfolio'}>
              <Box>Portfolio</Box>
            </Link>
            <Link onClick={toggleDrawer(false)} href={'#contacto'}>
              <Box>Contacto</Box>
            </Link>
            <Link onClick={toggleDrawer(false)} href={'#faq'}>
              <Box>FAQ</Box>
            </Link>
            <Link onClick={toggleDrawer(false)} href={'#testimoniales'}>
              <Box>Testimoniales</Box>
            </Link>
          </Box>
          <Box
            sx={{
              zIndex: '100',
              position: 'fixed',
              top: 0,
              left: `${open ? '0%' : '-100vw'} `,
              display: {
                xs: 'flex',
                md: 'none',
              },
              width: '100vw',
              height: '100vh',
              transition: 'all 0.2s',
            }}
          >
            <Box
              sx={{
                bgcolor: 'common.black',
                flex: 0.5,
                boxShadow: 4,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: 2,
                  mt: 15,
                  '& div': {
                    p: 1,
                    borderLeft: '2px solid',
                    borderColor: 'transparent',
                  },
                  '& div:hover': {
                    borderLeft: '2px solid',
                    borderColor: 'common.white',
                    cursor: 'pointer',
                  },
                }}
              >
                <Link onClick={toggleDrawer(false)} href={'#acerca'}>
                  <Box>Acerca de</Box>
                </Link>
                <Link onClick={toggleDrawer(false)} href={'#servicios'}>
                  <Box>servicios</Box>
                </Link>
                <Link onClick={toggleDrawer(false)} href={'#portfolio'}>
                  <Box>Portfolio</Box>
                </Link>
                <Link onClick={toggleDrawer(false)} href={'#contacto'}>
                  <Box>Contacto</Box>
                </Link>
                <Link onClick={toggleDrawer(false)} href={'#faq'}>
                  <Box>FAQ</Box>
                </Link>
                <Link onClick={toggleDrawer(false)} href={'#testimoniales'}>
                  <Box>Testimoniales</Box>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 0.5,
                backdropFilter: 'blur(4px)',
                ml: '-2px',
              }}
              onClick={toggleDrawer(false)}
            ></Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ height: '100px', bgcolor: 'transparent' }} />
    </>
  )
}
export default Navbar
