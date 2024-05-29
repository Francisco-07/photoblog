import * as React from 'react'
import { Container, Box } from '@mui/material'
import Img from './Img'
import Title from './Title'

export default function ImgList() {
  return (
    <Container>
      <Title title='Galeria' />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'space-between',
        }}
      >
        {itemData.map((item, i) => (
          <Box
            key={i}
            sx={{
              width: `${
                item.width === '100%' ? '100%' : `calc(${item.width} - 12px)`
              } `,
            }}
          >
            <Img
              src={item.img}
              width={'100%'}
              height={'350px'}
              alt={item.title}
              radius={'10px'}
            />
          </Box>
        ))}
      </Box>
    </Container>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    width: '100%',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    width: '70%',
  },
  {
    img: 'https://images.unsplash.com/photo-1715647238340-c592a59102e5?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Man',
    width: '30%',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    width: '30%',
  },
  {
    img: 'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Man',
    width: '70%',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    width: '50%',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    width: '50%',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    width: '65%',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    width: '35%',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    width: '30%',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    width: '70%',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    width: '100%',
  },
]
