'use client'
import {
  experimental_extendTheme as extendTheme,
  responsiveFontSizes,
} from '@mui/material/styles'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'

const extendedTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#0c6eed',
          light: '#e6eefa',
        },
        secondary: {
          main: '#fca969',
          dark: '#1c1f1c',
        },
        background: {
          default: '#000',
        },
        text: {
          primary: '#fff',
          secondary: '#a7a4a4',
        },
      },
      // button y acordion divider
      // @ts-ignore
      components: {
        MuiAccordion: {
          styleOverrides: {
            root: {
              '&:first-of-type': {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
              '&:last-of-type': {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            },
          },
        },
        // inputs & TextAreas start
        MuiInputLabel: {
          styleOverrides: {
            root: {
              color: '#000',
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              '--TextField-brandBorderColor': '#fff',
              '--TextField-brandBorderHoverColor': '#f6f6f6',
              '--TextField-brandBorderFocusedColor': '#0c6eed',
              '& label.Mui-focused': {
                color: 'var(--TextField-brandBorderFocusedColor)',
              },
              '& label': {
                color: 'var(--TextField-brandBorderColor)',
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
              borderColor: 'var(--TextField-brandBorderColor)',
            },
            root: {
              [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderHoverColor)',
              },
              [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
              '&::before, &::after': {
                borderBottom: '2px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiInput: {
          styleOverrides: {
            root: {
              '&::before': {
                borderBottom: '2px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
      },
      // inputs & TextAreas end
    },
    dark: {
      palette: {
        primary: {
          main: '#0c6eed',
          light: '#e6eefa',
        },
        secondary: {
          main: '#fca969',
          dark: '#1c1f1c',
        },
        background: {
          default: '#000',
        },
        text: {
          primary: '#fff',
          secondary: '#a7a4a4',
        },
      },
      // button y acordion divider
      // @ts-ignore
      components: {
        MuiAccordion: {
          styleOverrides: {
            root: {
              '&:first-of-type': {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
              '&:last-of-type': {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            },
          },
        },
        // inputs & TextAreas start
        MuiInputLabel: {
          styleOverrides: {
            root: {
              color: '#000',
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              '--TextField-brandBorderColor': '#fff',
              '--TextField-brandBorderHoverColor': '#f6f6f6',
              '--TextField-brandBorderFocusedColor': '#0c6eed',
              '& label.Mui-focused': {
                color: 'var(--TextField-brandBorderFocusedColor)',
              },
              '& label': {
                color: 'var(--TextField-brandBorderColor)',
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
              borderColor: 'var(--TextField-brandBorderColor)',
            },
            root: {
              [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderHoverColor)',
              },
              [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
              '&::before, &::after': {
                borderBottom: '2px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiInput: {
          styleOverrides: {
            root: {
              '&::before': {
                borderBottom: '2px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom:
                  '2px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
      },
      // inputs & TextAreas end
    },
  },
})

const theme = responsiveFontSizes(extendedTheme)

export default theme
