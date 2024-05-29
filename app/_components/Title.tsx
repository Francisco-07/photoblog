import { Typography, Box } from '@mui/material'
interface TitleProps {
  title: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Box
      sx={{
        py: 5,
        textAlign: 'center',
      }}
    >
      <Typography variant='h2'>{title}</Typography>
    </Box>
  )
}
export default Title
