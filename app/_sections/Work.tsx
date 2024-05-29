import { Box, Container } from '@mui/material'
import Card from '../_components/Card'
import { client } from '../../sanity/lib/client'
import { groq } from 'next-sanity'
import Title from '../_components/Title'

export const revalidate = 30
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`

const Work: React.FC = async () => {
  const posts: Post[] = await client.fetch(query)

  interface Author {
    _id: string
    name: string
    image: string
  }

  interface Category {
    _id: string
    title: string
  }

  interface Post {
    _id: string
    title: string
    body: string
    mainImage: {
      asset: {
        url: string
      }
    }
    author: Author
    categories: Category[]
    _createdAt: string
    slug: {
      current: string
    }
    description: string
  }

  return (
    <Box
      id={'testimoniales'}
      sx={{
        color: 'common.white',
      }}
    >
      <Title title='Trabajos' />
      {posts.map((data, i) => (
        <Box
          key={i}
          sx={{
            bgcolor: 'common.black',
          }}
        >
          <Container
            sx={{
              py: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              '& div': {
                flexDirection: {
                  xs: 'column-reverse',
                  sm: `${i % 2 === 0 ? 'row-reverse' : 'row'}`,
                },
              },
              '& h2': {
                textAlign: {
                  xs: 'center',
                  sm: `${i % 2 === 0 ? 'start' : 'end'}`,
                },
              },
              '& p': {
                textAlign: {
                  xs: 'center',
                  sm: 'start',
                },
              },
            }}
          >
            <Card data={data} key={i} />
          </Container>
        </Box>
      ))}
    </Box>
  )
}
export default Work
