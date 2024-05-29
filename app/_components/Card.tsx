import { Box, Typography, Divider } from '@mui/material'
import Img from './Img'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'

interface Info {
  title: string
  slug: {
    current: string
  }
  description: string
  mainImage: any
  _id: string
}

interface CardProps {
  data: Info
}
const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
      }}
    >
      <Box sx={{ flex: 0.6 }}>
        <Typography variant='h2'>{data.title}</Typography>
        <Divider sx={{ bgcolor: 'common.white' }} />
        <Typography>
          <Link
            href={{
              pathname: `/post/${data?.slug?.current}`,
              query: { slug: data?.slug?.current },
            }}
            key={data?._id}
          >
            {data.description}
          </Link>
        </Typography>
      </Box>
      <Box sx={{ flex: 0.4 }}>
        <Img
          src={urlForImage(data?.mainImage)}
          alt={data.title}
          width={'100%'}
          height={'400px'}
          radius={'8px'}
        />
      </Box>
    </Box>
  )
}
export default Card
