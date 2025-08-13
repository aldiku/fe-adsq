import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { typography, colorSchemes, shadows, shape } from './theme';

const theme = createTheme({
  colorSchemes,
  typography,
  shadows,
  shape,
});

// export default function AppTheme() {
//     return (
//         <ThemeProvider theme={theme}>
//             {children}
//         </ThemeProvider>
//     );
// }