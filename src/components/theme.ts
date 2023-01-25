import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#00ea8d',
            light: '#004a98',

        },
        secondary: {
            main: '#ffffff',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: { 
                    textTransform: "none",
                 }
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontSize: "0.875rem"
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: "0.875rem"
                }
            }
        }
    },
};

const theme = createTheme(themeOptions);

export default theme;