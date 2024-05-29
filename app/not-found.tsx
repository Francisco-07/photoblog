'use client'
import Link from 'next/link'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'

export default function NotFound() {
  return (
    <Box
      sx={{
        borderTop: '100px solid',
        borderColor: 'common.black',
        textAlign: 'center',
        py: 12,
        height: '100vh',
        '& a': {
          color: 'secondary.main',
          ':hover': {
            color: 'secondary.light',
          },
        },
      }}
    >
      <ReportGmailerrorredIcon sx={{ fontSize: 255 }} />
      <div>
        <Typography variant='h4'>Ruta no existente!</Typography>
        <Typography variant='h4'>
          <Link href='/'>{'Volver al inicio ->'}</Link>
        </Typography>
      </div>
    </Box>
  )
}
