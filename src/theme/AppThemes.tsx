import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { typography, colorSchemes, shadows, shape } from './theme';
import { inputsCustomizations } from './Customizations/inputs';
import { surfacesCustomizations } from './Customizations/surfaces';

export const theme = createTheme({
  colorSchemes,
  typography,
  shadows,
  shape,
  components: {
    ...inputsCustomizations,
    ...surfacesCustomizations,
  }
});