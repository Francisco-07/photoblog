import { Button } from '@mui/material'

interface BtnProps {
  children: React.ReactNode
  contained: boolean
  fontSize?: number
  href?: string
}

const Btn: React.FC<BtnProps> = ({
  children,
  contained,
  href = '#',
  fontSize = 19,
}) => {
  return (
    <Button
      type='submit'
      sx={(theme) => ({
        border: `1px solid ${theme.palette.primary.main}`,
        color: `${contained ? 'primary.contrastText' : 'primary.main'}`,
        bgcolor: `${contained ? 'primary.main' : 'transparent'}`,
        py: 1.5,
        px: 2.3,
        fontWeight: 'bold',
        fontSize: { fontSize },
        textTransform: 'none',
        transition: 'all 0.3s',
        '&:hover': {
          border: `1px solid ${theme.palette.primary.main}`,
          color: `${contained ? 'primary.main' : 'primary.contrastText'}`,
          bgcolor: `${contained ? 'transparent' : 'primary.main'}`,
        },
      })}
      href={href}
    >
      {children}
    </Button>
  )
}
export default Btn
